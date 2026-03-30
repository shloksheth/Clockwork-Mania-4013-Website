import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";
import { Share2 } from "lucide-react";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Post" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <article className="pb-24 pt-28">
      <div className="grain-dark bg-[#0d0d0d] py-16">
        <div className="mx-auto max-w-[760px] px-5">
          <Link
            href="/blog"
            className="font-space text-xs uppercase tracking-[0.12em] text-gold hover:text-gold-light"
          >
            ← Back to News
          </Link>
        </div>
      </div>

      {/* TODO: Replace with actual hero image */}
      <div className="relative mx-auto max-w-[900px] px-5">
        <div className="relative -mt-10 aspect-[21/9] overflow-hidden rounded-card border border-[var(--color-border)] bg-gradient-to-br from-maroon-dark to-black shadow-xl">
          <span className="absolute inset-0 flex items-center justify-center p-6 text-center font-space text-xs uppercase tracking-[0.12em] text-text-muted">
            {/* TODO: Article hero */}
            {"// IMAGE: Article hero"}
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-[760px] px-5 pt-14">
        <span className="font-space text-xs font-semibold uppercase tracking-[0.14em] text-maroon">
          {post.category}
        </span>
        <h1 className="mt-4 font-space text-[clamp(2rem,5vw,3rem)] font-bold leading-tight text-[#0d0d0d]">
          {post.title}
        </h1>
        <time className="mt-4 block font-space text-sm text-[#5c534c]" dateTime={post.date}>
          {post.date}
        </time>

        <div className="mt-10 flex gap-3 border-y border-[rgba(13,13,13,0.08)] py-4">
          <span className="flex items-center gap-2 font-space text-xs uppercase tracking-[0.1em] text-[#5c534c]">
            <Share2 className="h-4 w-4" aria-hidden />
            Share
          </span>
          <button
            type="button"
            className="font-space text-xs text-maroon hover:underline"
            aria-label="Share on Twitter"
          >
            Twitter / X
          </button>
          <button
            type="button"
            className="font-space text-xs text-maroon hover:underline"
            aria-label="Copy link"
          >
            Copy link
          </button>
        </div>

        <div className="prose prose-lg mt-10 max-w-none">
          <p className="font-inter text-lg leading-[1.8] text-[#2a2624] whitespace-pre-wrap">
            {post.body}
          </p>
        </div>
      </div>
    </article>
  );
}
