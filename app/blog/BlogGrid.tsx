"use client";

import { useMemo, useState } from "react";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogFilter } from "@/components/blog/BlogFilter";
import type { BlogCategory } from "@/data/blog-posts";
import { blogPosts } from "@/data/blog-posts";

export function BlogGrid() {
  const [filter, setFilter] = useState<BlogCategory | "All">("All");

  const filtered = useMemo(() => {
    if (filter === "All") return blogPosts;
    return blogPosts.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <>
      <BlogFilter active={filter} onChange={setFilter} />
      <div className="mt-12 grid gap-10 lg:grid-cols-1">
        {filtered.map((p, i) => (
          <BlogCard key={p.slug} post={p} index={i} />
        ))}
      </div>
    </>
  );
}
