import "dotenv/config";
import mysql from "mysql2/promise";
import type { RowDataPacket } from "mysql2";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type OldCategory = RowDataPacket & {
  id: number;
  name: string;
  slug: string;
};

type OldUser = RowDataPacket & {
  id: number;
  name: string;
  image: string | null;
  description: string | null;
};

type OldMedia = RowDataPacket & {
  id: number;
  path: string;
};

type OldPost = RowDataPacket & {
  id: number;
  title: string;
  slug: string;
  content: string | null;
  image_id: number | null;
  user_id: number;
  is_published: number;
  published_at: Date | null;
  created_at: Date | null;
  updated_at: Date | null;
  category_id: number | null;
  meta_description: string | null;
  description: string | null;
  image: string | null;
};

function generateId(): string {
  return Math.random().toString(36).slice(2, 12);
}

function stripTags(value: string): string {
  return value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function buildS3Url(pathOrUrl: string, baseUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  const cleanedBase = baseUrl.replace(/\/+$/, "");
  const cleanedPath = pathOrUrl.replace(/^\/+/, "");
  return `${cleanedBase}/${cleanedPath}`;
}

function convertHtmlToEditorJs(html: string) {
  if (!html || !html.trim()) {
    return {
      time: Date.now(),
      blocks: [{ id: generateId(), type: "paragraph", data: { text: "" } }],
      version: "2.29.0",
    };
  }

  const cleanText = html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "");

  const blocks: Array<{ id: string; type: string; data: Record<string, unknown> }> = [];
  const headerRegex = /<h([1-6])[^>]*>(.*?)<\/h\1>/gi;
  const elements: Array<{ type: "header" | "paragraph"; content: string; level?: number }> = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = headerRegex.exec(cleanText)) !== null) {
    const full = match[0];
    const level = Number(match[1]);
    const content = stripTags(match[2] || "");
    const index = match.index;

    if (index > lastIndex) {
      const prev = cleanText.substring(lastIndex, index);
      const chunks = prev
        .split(/<\/p>|<br\s*\/?>|<\/div>/gi)
        .map((x) => stripTags(x))
        .filter(Boolean);
      for (const chunk of chunks) {
        elements.push({ type: "paragraph", content: chunk });
      }
    }

    if (content) {
      elements.push({ type: "header", content, level });
    }
    lastIndex = index + full.length;
  }

  if (lastIndex < cleanText.length) {
    const tail = cleanText.substring(lastIndex);
    const chunks = tail
      .split(/<\/p>|<br\s*\/?>|<\/div>/gi)
      .map((x) => stripTags(x))
      .filter(Boolean);
    for (const chunk of chunks) {
      elements.push({ type: "paragraph", content: chunk });
    }
  }

  if (elements.length === 0) {
    elements.push({ type: "paragraph", content: stripTags(cleanText) });
  }

  for (const el of elements) {
    if (!el.content) continue;
    if (el.type === "header") {
      blocks.push({
        id: generateId(),
        type: "header",
        data: { text: el.content, level: el.level || 2 },
      });
    } else {
      blocks.push({
        id: generateId(),
        type: "paragraph",
        data: { text: el.content },
      });
    }
  }

  if (blocks.length === 0) {
    blocks.push({
      id: generateId(),
      type: "paragraph",
      data: { text: "" },
    });
  }

  return {
    time: Date.now(),
    blocks,
    version: "2.29.0",
  };
}

function getPostContent(raw: string | null): string {
  if (!raw) return "";
  const trimmed = raw.trim();
  if (!trimmed) return "";

  try {
    const parsed = JSON.parse(trimmed) as unknown;

    if (
      parsed &&
      typeof parsed === "object" &&
      !Array.isArray(parsed) &&
      "blocks" in parsed
    ) {
      return JSON.stringify(parsed);
    }

    if (Array.isArray(parsed)) {
      const htmlChunks = parsed
        .map((item: unknown) => {
          if (!item || typeof item !== "object") return "";
          const obj = item as { content?: string; data?: { content?: string } };
          if (typeof obj.data?.content === "string") return obj.data.content;
          if (typeof obj.content === "string") return obj.content;
          return "";
        })
        .filter(Boolean);

      const html = htmlChunks.join("\n\n").trim();
      if (!html) return "";
      return JSON.stringify(convertHtmlToEditorJs(html));
    }
  } catch {
    // Not JSON, continue with HTML/plain-text fallback.
  }

  return JSON.stringify(convertHtmlToEditorJs(trimmed));
}

function buildMetaBlock(post: OldPost): string | null {
  const raw = (post.meta_description || "").trim();
  if (raw && /<(title|meta|script|link)\b/i.test(raw)) return raw;

  const tags: string[] = [];
  if (post.title) tags.push(`<title>${post.title}</title>`);

  const desc = (post.description || "").trim();
  if (desc) {
    tags.push(
      `<meta name="description" content="${stripTags(desc).replace(/"/g, "&quot;")}">`
    );
  }

  return tags.length > 0 ? tags.join("\n") : null;
}

async function main() {
  const sourceHost = process.env.OLD_DB_HOST || "localhost";
  const sourcePort = Number(process.env.OLD_DB_PORT || "3306");
  const sourceUser = process.env.OLD_DB_USER || "root";
  const sourcePassword = process.env.OLD_DB_PASSWORD || "2166balupal";
  const sourceDatabase = process.env.OLD_DB_NAME || "old_temp_db";
  const region = (process.env.MIGRATION_REGION || "INDIA").toUpperCase() === "US" ? "US" : "INDIA";
  const s3BaseUrl =
    process.env.OLD_MEDIA_S3_BASE_URL ||
    "https://ngoexperts.s3.ap-south-1.amazonaws.com";

  const oldDb = await mysql.createConnection({
    host: sourceHost,
    port: sourcePort,
    user: sourceUser,
    password: sourcePassword,
    database: sourceDatabase,
  });

  console.log(`Starting blog migration from ${sourceDatabase} -> Prisma (${region})`);

  const [categories] = await oldDb.query<OldCategory[]>(
    "SELECT id, name, slug FROM categories ORDER BY id ASC"
  );
  const [users] = await oldDb.query<OldUser[]>(
    "SELECT id, name, image, description FROM users ORDER BY id ASC"
  );
  const [media] = await oldDb.query<OldMedia[]>(
    "SELECT id, path FROM media"
  );
  const [posts] = await oldDb.query<OldPost[]>(
    "SELECT id, title, slug, content, image_id, user_id, is_published, published_at, created_at, updated_at, category_id, meta_description, description, image FROM posts ORDER BY id ASC"
  );

  console.log(
    `Found ${categories.length} categories, ${users.length} users, ${media.length} media rows, ${posts.length} posts`
  );

  const mediaMap = new Map<number, string>();
  for (const item of media) {
    if (item.id && item.path) mediaMap.set(item.id, item.path);
  }

  const groupMap = new Map<number, string>();
  for (const cat of categories) {
    const group = await prisma.blogGroup.upsert({
      where: {
        name_region: {
          name: cat.name,
          region,
        },
      },
      update: {},
      create: {
        name: cat.name,
        region,
        order: cat.id,
      },
    });
    groupMap.set(cat.id, group.id);
  }

  const fallbackGroup = await prisma.blogGroup.upsert({
    where: {
      name_region: {
        name: "Uncategorized",
        region,
      },
    },
    update: {},
    create: {
      name: "Uncategorized",
      region,
      order: 9999,
    },
  });

  const authorMap = new Map<number, string>();
  for (const user of users) {
    let authorImage: string | null = null;
    if (user.image && /^\d+$/.test(user.image)) {
      const mediaId = Number(user.image);
      const mediaPath = mediaMap.get(mediaId);
      if (mediaPath) authorImage = buildS3Url(mediaPath, s3BaseUrl);
    } else if (user.image) {
      authorImage = user.image;
    }

    const existing = await prisma.blogAuthor.findFirst({
      where: {
        name: user.name,
        region,
      },
    });

    const author =
      existing ||
      (await prisma.blogAuthor.create({
        data: {
          name: user.name,
          image: authorImage,
          description: user.description ? stripTags(user.description) : null,
          region,
        },
      }));

    authorMap.set(user.id, author.id);
  }

  let migrated = 0;
  let failed = 0;

  for (const post of posts) {
    try {
      const groupId = groupMap.get(post.category_id || 0) || fallbackGroup.id;
      const authorId = authorMap.get(post.user_id) || null;

      let image: string | null = null;
      if (post.image?.trim()) {
        image = post.image.trim();
      } else if (post.image_id) {
        const mediaPath = mediaMap.get(post.image_id);
        if (mediaPath) image = buildS3Url(mediaPath, s3BaseUrl);
      }

      const blog = await prisma.blog.upsert({
        where: {
          slug_region: {
            slug: post.slug,
            region,
          },
        },
        update: {
          title: post.title,
          content: getPostContent(post.content),
          image,
          blogGroupId: groupId,
          authorId,
          status: post.is_published ? "PUBLISHED" : "DRAFT",
          createdAt: post.published_at || post.created_at || undefined,
          updatedAt: post.updated_at || undefined,
        },
        create: {
          slug: post.slug,
          title: post.title,
          content: getPostContent(post.content),
          image,
          blogGroupId: groupId,
          authorId,
          region,
          status: post.is_published ? "PUBLISHED" : "DRAFT",
          createdAt: post.published_at || post.created_at || undefined,
          updatedAt: post.updated_at || undefined,
        },
      });

      const metaBlock = buildMetaBlock(post);
      if (metaBlock) {
        await prisma.metaData.upsert({
          where: {
            pageType_pageId: {
              pageType: "BLOG",
              pageId: blog.id,
            },
          },
          update: {
            metaBlock,
          },
          create: {
            pageType: "BLOG",
            pageId: blog.id,
            metaBlock,
          },
        });
      }

      migrated++;
      console.log(`Migrated (${migrated}/${posts.length}): ${post.slug}`);
    } catch (error) {
      failed++;
      const message = error instanceof Error ? error.message : String(error);
      console.error(`Failed post ${post.id} (${post.slug}): ${message}`);
    }
  }

  await oldDb.end();
  await prisma.$disconnect();
  console.log(`Done. Migrated: ${migrated}, Failed: ${failed}`);
}

main().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
