"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

interface Blog {
  id: string;
  slug?: string | null;
  title: string;
  image?: string;
  content: string;
  createdAt: string;
  blogGroup: {
    name: string;
  };
}

const FALLBACK_IMAGE_SRC = "/hero1.jpg";

const isValidImageSrc = (src?: string | null): src is string => {
  if (!src) return false;
  if (src.startsWith("/")) return true;
  try {
    new URL(src);
    return true;
  } catch {
    return false;
  }
};

export default function RecentBlogsSection() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });

    // Fetch recent 4 blogs for India region
    const fetchBlogs = async () => {
      const res = await fetch(`/api/blogs?region=INDIA`, {
        cache: "no-store",
      });
      const data = await res.json();
      setBlogs(data.blogs.slice(0, 4));
    };

    fetchBlogs();
  }, []);

  return (
    <section className=" bg-white w-full py-8 md:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto lg:px-0 px-5">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-4">
            Recent{" "}
            <span className="bg-gradient-to-r from-[#59A245] via-[#65a30d] to-[#166534] bg-clip-text text-transparent">
              Blogs
            </span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Stay updated with our latest insights and tips on business
            registration, compliance, and more.
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blogs/${blog.slug || blog.id}`}
              className="group block h-full"
            >
              <article
                data-aos="flip-left"
                className="bg-white rounded-2xl shadow-sm border border-green-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-emerald-200 hover:-translate-y-2 h-full flex flex-col"
              >
                {/* Blog Image */}
                <div className="relative h-52 overflow-hidden bg-gray-100">
                  {(() => {
                    const imageSrc = isValidImageSrc(blog.image)
                      ? blog.image
                      : FALLBACK_IMAGE_SRC;

                    return (
                      <Image
                        src={imageSrc}
                        alt={blog.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        unoptimized
                      />
                    );
                  })()}
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Blog Content */}
                <div className="p-5 flex flex-col flex-grow">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 text-xs font-medium rounded-full border border-green-100">
                      {blog.blogGroup.name}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-slate-700 mb-auto line-clamp-2 leading-snug transition-colors duration-300">
                    {blog.title}
                  </h3>

                  {/* Read More Link */}
                  <div className="mt-4 flex items-center text-sm font-semibold text-green-700 group-hover:text-green-600 transition-colors duration-300">
                    <span>Read Article →</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* View All Blogs Button */}
        <div className="flex justify-center mt-12 md:mt-16">
          <Link
            href="/blogs"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#59A245] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span className="text-base md:text-lg">View All Blogs</span>
            <div className="relative w-6 h-6 flex items-center justify-center">
              <div className="absolute inset-0 bg-white/20 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
              <svg
                className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
