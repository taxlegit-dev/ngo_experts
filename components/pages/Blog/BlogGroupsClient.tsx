"use client";

import { useMemo, useState } from "react";
import BlogCard, { type BlogCardData } from "./BlogCard";

type GroupedBlogs = Record<string, BlogCardData[]>;

type BlogGroupsClientProps = {
  groupedBlogs: GroupedBlogs;
};

export default function BlogGroupsClient({
  groupedBlogs,
}: BlogGroupsClientProps) {
  const groupNames = useMemo(() => Object.keys(groupedBlogs), [groupedBlogs]);
  const [visibleCounts, setVisibleCounts] = useState<Record<string, number>>(
    () =>
      groupNames.reduce((acc, name) => {
        acc[name] = 4;
        return acc;
      }, {} as Record<string, number>),
  );

  const handleLoadMore = (groupName: string) => {
    setVisibleCounts((prev) => ({
      ...prev,
      [groupName]: (prev[groupName] || 4) + 4,
    }));
  };

  return (
    <div className="lg:col-span-2 space-y-16">
      {Object.entries(groupedBlogs).map(([groupName, groupBlogs]) => {
        const visibleCount = visibleCounts[groupName] || 4;
        const visibleBlogs = groupBlogs.slice(0, visibleCount);
        const hasMore = visibleBlogs.length < groupBlogs.length;

        return (
          <div key={groupName} className="space-y-6">
            {/* Group Header */}
            <div className="border-b border-slate-200 pb-4">
              <div className="flex items-center gap-3">
                <div className="h-8 w-2 rounded-full bg-[#59A245]" />
                <h4 className="text-xl font-bold text-slate-900">
                  {groupName}
                </h4>
                <span className="ml-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                  {groupBlogs.length}{" "}
                  {groupBlogs.length === 1 ? "article" : "articles"}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Latest insights and updates from {groupName.toLowerCase()}
              </p>
            </div>

            {/* Blog Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              {visibleBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} showCategory={false} />
              ))}
            </div>

            {hasMore && (
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={() => handleLoadMore(groupName)}
                  className="rounded-full border border-green-600 px-6 py-2 text-sm font-semibold text-green-700 transition hover:bg-green-50"
                >
                  Read more blogs related to this
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
