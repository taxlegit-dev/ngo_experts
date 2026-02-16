import "dotenv/config";
import mysql from "mysql2/promise";
import type { RowDataPacket } from "mysql2";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type OldServiceRow = RowDataPacket & {
  id: number;
  service_heading: string;
  service_slug: string;
  service_description: string | null;
  service_long_description: string | null;
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
  ngoexperts_main_heading: string | null;
  ngoexperts_description: string | null;
  our_services: string | null;
  state: string | null;
  ngoexperts_items: string | null;
  faqs: string | null;
  created_at: Date | null;
  updated_at: Date | null;
};

type OldFaq = {
  faq_question?: string;
  faq_description?: string;
  question?: string;
  answer?: string;
};

type OldOurServiceItem = {
  name?: string;
  heading?: string;
  title?: string;
  description?: string;
  content?: string;
};

type OldHowItWorksItem = {
  ngoexperts_text?: string;
  ngoexperts_description?: string;
  title?: string;
  description?: string;
};

function toSlug(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function safeJsonParse<T>(value: string | null): T | null {
  if (!value) return null;
  try {
    return JSON.parse(value) as T;
  } catch {
    return null;
  }
}

function hasMetaHtml(text: string): boolean {
  return /<(title|meta|script|link)\b/i.test(text);
}

function buildMetaBlock(service: OldServiceRow): string | null {
  const rawMeta = (service.meta_description || "").trim();
  if (rawMeta && hasMetaHtml(rawMeta)) {
    return rawMeta;
  }

  const title = (service.meta_title || service.service_heading || "").trim();
  const description = (service.service_description || "").trim();
  const keywords = (service.meta_keywords || "").trim();

  const tags: string[] = [];
  if (title) tags.push(`<title>${title}</title>`);
  if (description)
    tags.push(`<meta name="description" content="${description.replace(/"/g, "&quot;")}">`);
  if (keywords)
    tags.push(`<meta name="keywords" content="${keywords.replace(/"/g, "&quot;")}">`);

  return tags.length > 0 ? tags.join("\n") : null;
}

function buildSections(service: OldServiceRow): Array<{ title: string; content: string; order: number }> {
  const sections: Array<{ title: string; content: string; order: number }> = [];
  let order = 1;

  if (service.service_long_description?.trim()) {
    sections.push({
      title: "Overview",
      content: service.service_long_description,
      order: order++,
    });
  }

  const parsedOurServices = safeJsonParse<OldOurServiceItem[]>(service.our_services);
  if (parsedOurServices && Array.isArray(parsedOurServices)) {
    for (const item of parsedOurServices) {
      const title = (item.name || item.heading || item.title || "").trim();
      const content = (item.description || item.content || "").trim();
      if (!content) continue;
      sections.push({
        title: title || `Section ${order}`,
        content,
        order: order++,
      });
    }
  }

  if (service.ngoexperts_main_heading?.trim() || service.ngoexperts_description?.trim()) {
    const heading = service.ngoexperts_main_heading?.trim() || "Why NGOExperts";
    const desc = service.ngoexperts_description?.trim() || "";
    sections.push({
      title: heading,
      content: desc,
      order: order++,
    });
  }

  const parsedHowItWorks = safeJsonParse<OldHowItWorksItem[]>(service.ngoexperts_items);
  if (parsedHowItWorks && Array.isArray(parsedHowItWorks) && parsedHowItWorks.length > 0) {
    const points = parsedHowItWorks
      .map((item) => {
        const heading = (item.ngoexperts_text || item.title || "").trim();
        const description = (item.ngoexperts_description || item.description || "").trim();
        if (!heading && !description) return "";
        return `<li><strong>${heading}</strong>${description ? `: ${description}` : ""}</li>`;
      })
      .filter(Boolean)
      .join("");

    if (points) {
      sections.push({
        title: "How NGOExperts Works",
        content: `<ul>${points}</ul>`,
        order: order++,
      });
    }
  }

  return sections;
}

function parseFaqItems(rawFaqs: string | null): Array<{ question: string; answer: string }> {
  const parsed = safeJsonParse<OldFaq[]>(rawFaqs);
  if (!parsed || !Array.isArray(parsed)) return [];

  return parsed
    .map((faq) => ({
      question: (faq.faq_question || faq.question || "").trim(),
      answer: (faq.faq_description || faq.answer || "").trim(),
    }))
    .filter((faq) => faq.question && faq.answer);
}

async function main() {
  const sourceHost = process.env.OLD_DB_HOST || "localhost";
  const sourcePort = Number(process.env.OLD_DB_PORT || "3306");
  const sourceUser = process.env.OLD_DB_USER || "root";
  const sourcePassword = process.env.OLD_DB_PASSWORD || "2166balupal";
  const sourceDatabase = process.env.OLD_DB_NAME || "old_temp_db";
  const sourceTable = process.env.OLD_DB_TABLE || "services";
  const region = (process.env.MIGRATION_REGION || "INDIA").toUpperCase() === "US" ? "US" : "INDIA";

  const oldDb = await mysql.createConnection({
    host: sourceHost,
    port: sourcePort,
    user: sourceUser,
    password: sourcePassword,
    database: sourceDatabase,
  });

  console.log(`Starting migration from ${sourceDatabase}.${sourceTable} -> Prisma (${region})`);

  const [rows] = await oldDb.query<OldServiceRow[]>(`SELECT * FROM \`${sourceTable}\` ORDER BY id ASC`);
  console.log(`Found ${rows.length} services`);

  let migrated = 0;
  let failed = 0;

  for (const service of rows) {
    const label = (service.service_heading || "").trim();
    if (!label) {
      console.warn(`Skipping row ${service.id}: empty service_heading`);
      continue;
    }

    const slug = (service.service_slug || "").trim() || toSlug(label);
    const href = `/${slug}`;

    try {
      const navbarItemByHref = await prisma.navbarItem.findFirst({
        where: { href, region },
      });

      const navbarItem =
        navbarItemByHref ||
        (await prisma.navbarItem.upsert({
          where: {
            region_label: {
              region,
              label,
            },
          },
          update: {
            href,
            type: "LINK",
            pageType: "SERVICE",
            isActive: true,
          },
          create: {
            label,
            href,
            region,
            type: "LINK",
            pageType: "SERVICE",
            isActive: true,
            order: service.id,
          },
        }));

      const servicePage = await prisma.servicePage.upsert({
        where: {
          navbarItemId_region: {
            navbarItemId: navbarItem.id,
            region,
          },
        },
        update: {
          status: "PUBLISHED",
        },
        create: {
          navbarItemId: navbarItem.id,
          region,
          status: "PUBLISHED",
        },
      });

      await prisma.servicePageSection.deleteMany({
        where: { servicePageId: servicePage.id },
      });

      const sections = buildSections(service);
      for (const section of sections) {
        await prisma.servicePageSection.create({
          data: {
            servicePageId: servicePage.id,
            title: section.title,
            content: section.content,
            order: section.order,
          },
        });
      }

      const faqItems = parseFaqItems(service.faqs);
      if (faqItems.length > 0) {
        const faqContainer = await prisma.servicePageFAQ.upsert({
          where: {
            navbarItemId_region: {
              navbarItemId: navbarItem.id,
              region,
            },
          },
          update: {
            status: "PUBLISHED",
          },
          create: {
            navbarItemId: navbarItem.id,
            region,
            status: "PUBLISHED",
          },
        });

        await prisma.servicePageFAQItem.deleteMany({
          where: { faqId: faqContainer.id },
        });

        for (let i = 0; i < faqItems.length; i++) {
          await prisma.servicePageFAQItem.create({
            data: {
              faqId: faqContainer.id,
              question: faqItems[i].question,
              answer: faqItems[i].answer,
              order: i + 1,
            },
          });
        }
      }

      const metaBlock = buildMetaBlock(service);
      if (metaBlock) {
        await prisma.metaData.upsert({
          where: {
            pageType_pageId: {
              pageType: "SERVICE",
              pageId: servicePage.id,
            },
          },
          update: {
            metaBlock,
          },
          create: {
            pageType: "SERVICE",
            pageId: servicePage.id,
            metaBlock,
          },
        });
      }

      migrated++;
      console.log(`Migrated (${migrated}/${rows.length}): ${label}`);
    } catch (error) {
      failed++;
      const message = error instanceof Error ? error.message : String(error);
      console.error(`Failed row ${service.id} (${label}): ${message}`);
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
