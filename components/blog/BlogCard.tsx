"use client";

import Link from "next/link";
import type { BlogPost } from "@/data/blog-posts";
import { ImageReveal } from "@/components/ui/ImageReveal";

export function BlogCard({ post, index = 0 }: { post: BlogPost; index?: number }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      data-cursor-hover
      className="group flex flex-col overflow-hidden rounded-card border border-[rgba(13,13,13,0.08)] bg-white shadow-sm transition-colors duration-300 hover:border-gold md:flex-row"
    >
      <ImageReveal
        direction={index % 2 === 0 ? "up" : "left"}
        delay={index * 0.06}
        className="relative aspect-[16/10] w-full shrink-0 overflow-hidden md:w-2/5 md:max-w-sm"
      >
        <div className="relative h-full min-h-[200px] w-full bg-gradient-to-br from-maroon-dark to-black transition-transform duration-500 ease-out group-hover:scale-[1.06] md:min-h-full">
          <span className="absolute inset-0 flex items-center justify-center p-4 text-center font-space text-[10px] uppercase tracking-[0.12em] text-text-muted">
            {/* TODO: Blog cover */}
            {"// IMAGE: Blog cover"}
          </span>
        </div>
      </ImageReveal>
      <div className="flex flex-1 flex-col p-6">
        <span className="font-space text-[11px] font-semibold uppercase tracking-[0.1em] text-maroon">
          {post.category}
        </span>
        <h3 className="mt-2 font-heading text-xl font-medium text-[#1a1816] transition-colors group-hover:text-maroon">
          {post.title}
        </h3>
        <time dateTime={post.date} className="mt-2 font-space text-xs text-[#5c534c]">
          {post.date}
        </time>
        <p className="mt-3 font-body text-sm text-[#3d3835]">{post.excerpt}</p>
        <span className="mt-4 font-space text-xs font-semibold uppercase tracking-[0.1em] text-gold">
          Read More →
        </span>
      </div>
    </Link>
  );
}
