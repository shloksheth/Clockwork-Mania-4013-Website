import type { Metadata } from "next";
import { ContactForm } from "@/components/layout/ContactForm";
import { Instagram, Facebook, Youtube } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach Clockwork Mania — mentors, team email, and school information.",
};

export default function ContactPage() {
  return (
    <>
      <section className="grain-dark min-h-[35vh] bg-[#0D0D0D] px-5 pb-16 pt-36 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-bebas text-[clamp(3rem,8vw,5rem)] text-offwhite">Get in Touch</h1>
        </div>
      </section>

      <section className="bg-offwhite py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <div className="space-y-6">
            {[
              {
                title: "Lead Mentor",
                value: "Stephen.Whitfield@orlandoscience.org",
                href: "mailto:Stephen.Whitfield@orlandoscience.org",
              },
              {
                title: "Team Email",
                value: "frc4013.clockworkmania@gmail.com",
                href: "mailto:frc4013.clockworkmania@gmail.com",
              },
              {
                title: "School",
                value: "Orlando Science High School, Orlando, FL",
                href: null,
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-card border border-[rgba(13,13,13,0.08)] bg-white p-6 shadow-sm"
              >
                <p className="font-space text-xs font-semibold uppercase tracking-[0.1em] text-maroon">
                  {c.title}
                </p>
                {c.href ? (
                  <a
                    href={c.href}
                    className="mt-2 block font-inter text-[#0d0d0d] hover:text-maroon"
                  >
                    {c.value}
                  </a>
                ) : (
                  <p className="mt-2 font-inter text-[#0d0d0d]">{c.value}</p>
                )}
              </div>
            ))}
            <div className="flex gap-3 pt-4">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="rounded-card border border-[rgba(13,13,13,0.12)] p-3 text-[#0d0d0d] hover:border-maroon"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="rounded-card border border-[rgba(13,13,13,0.12)] p-3 text-[#0d0d0d] hover:border-maroon"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                aria-label="YouTube"
                className="rounded-card border border-[rgba(13,13,13,0.12)] p-3 text-[#0d0d0d] hover:border-maroon"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
