"use client";

import type { BlogCategory } from "@/data/blog-posts";
import { blogCategories } from "@/data/blog-posts";

type Props = {
  active: BlogCategory | "All";
  onChange: (c: BlogCategory | "All") => void;
};

const items: (BlogCategory | "All")[] = ["All", ...blogCategories];

export function BlogFilter({ active, onChange }: Props) {
  return (
    <div
      className="flex flex-wrap gap-2"
      role="tablist"
      aria-label="Filter posts by category"
    >
      {items.map((c) => {
        const selected = active === c;
        return (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(c)}
            className={`rounded-full px-4 py-2 font-space text-[11px] font-semibold uppercase tracking-[0.08em] transition-colors ${
              selected
                ? "bg-maroon text-gold"
                : "bg-[#eae5e0] text-[#3d3835] hover:bg-[#dfd9d2]"
            }`}
          >
            {c}
          </button>
        );
      })}
    </div>
  );
}
