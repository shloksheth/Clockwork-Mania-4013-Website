import type { Metadata } from "next";
import { BlogGrid } from "./BlogGrid";

export const metadata: Metadata = {
  title: "News & Updates",
  description: "Competition recaps, outreach stories, and team announcements.",
};

export default function BlogPage() {
  return (
    <>
      <section className="grain-dark min-h-[40vh] bg-[#0D0D0D] px-5 pb-16 pt-36 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-bebas text-[clamp(3rem,8vw,5rem)] text-offwhite">
            News &amp; Updates
          </h1>
          <p className="mt-4 max-w-2xl font-inter text-text-muted">
            What&apos;s happening in and around Clockwork Mania.
          </p>
        </div>
      </section>
      <section id="posts" className="scroll-mt-28 bg-offwhite py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <BlogGrid />
        </div>
      </section>
    </>
  );
}
