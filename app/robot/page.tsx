import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { RobotAnnotationView } from "@/components/robot/RobotAnnotationView";
import { RobotGallery } from "@/components/robot/RobotGallery";
import { robotOverviewCopy } from "@/data/impact";
import { ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Robot Showcase",
  description: "2025 competition robot — CAD, engineering highlights, and specs.",
};

const specs = [
  ["Weight", "[TBD]"],
  ["Dimensions", "[TBD]"],
  ["Drive System", "Swerve Drive"],
  ["Programming Language", "Java (WPILib)"],
  ["Control System", "REV Robotics"],
  ["Vision", "Limelight 3"],
  ["Season", "2025 FRC — REEFSCAPE"],
];

export default function RobotPage() {
  return (
    <>
      <section className="grain-dark relative min-h-[85vh] overflow-hidden bg-[#0D0D0D] px-5 pb-24 pt-36 lg:px-8">
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-center">
          <SectionLabel>2025 Robot</SectionLabel>
          <h1 className="mt-4 font-bebas text-[clamp(3.5rem,10vw,6.5rem)] text-offwhite">
            The Machine
          </h1>
          <p className="mt-6 max-w-2xl font-inter text-lg leading-relaxed text-text-muted">
            {robotOverviewCopy}
          </p>
          <p className="mt-8 font-space text-xs uppercase tracking-[0.2em] text-gold">
            <a href="#overview" className="inline-flex items-center gap-2 hover:text-gold-light">
              Scroll to explore <ChevronDown className="h-4 w-4 animate-chevron-bounce" />
            </a>
          </p>
        </div>
      </section>

      <section id="overview" className="scroll-mt-28 bg-offwhite py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <RevealOnScroll>
            <h2 className="font-space text-3xl font-bold text-[#0d0d0d]">Overview</h2>
            <p className="mt-6 font-inter text-[17px] leading-[1.75] text-[#3d3835]">
              {robotOverviewCopy}
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.08}>
            <div className="rounded-card border border-[rgba(13,13,13,0.08)] bg-white p-8 shadow-sm">
              <h3 className="font-space text-xs font-semibold uppercase tracking-[0.14em] text-maroon">
                Key facts
              </h3>
              <ul className="mt-6 space-y-4 font-inter text-sm text-[#3d3835]">
                <li>
                  <span className="font-semibold text-[#0d0d0d]">Game:</span> REEFSCAPE (2025)
                </li>
                <li>
                  <span className="font-semibold text-[#0d0d0d]">Competition focus:</span>{" "}
                  Repeatable cycles, autonomous precision, robust serviceability.
                </li>
                <li>
                  <span className="font-semibold text-[#0d0d0d]">Awards snapshot:</span> See{" "}
                  <a href="/awards" className="text-maroon underline hover:text-maroon-light">
                    Awards
                  </a>{" "}
                  for season honors.
                </li>
              </ul>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section
        id="cad-view"
        className="grain-dark scroll-mt-28 bg-[#0D0D0D] py-20 lg:py-28"
      >
        <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="font-heading text-4xl font-semibold text-offwhite">Anatomy of the Machine</h2>
          <p className="mt-4 max-w-2xl font-inter text-text-muted">
            Tap a pulsing node to read engineering notes — positions are placeholders until final
            CAD overlays are locked.
          </p>
          <div className="relative z-10 mt-14">
            <RobotAnnotationView />
          </div>
        </div>
      </section>

      <section id="gallery" className="scroll-mt-28 bg-offwhite py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="font-heading text-4xl font-semibold text-[#1a1816]">
            In the Shop &amp; On the Field
          </h2>
          <div className="mt-12">
            <RobotGallery />
          </div>
        </div>
      </section>

      <section id="specs" className="grain-dark scroll-mt-28 bg-[#0D0D0D] py-20 lg:py-28">
        <div className="relative z-10 mx-auto max-w-4xl px-5 lg:px-8">
          <h2 className="font-heading text-4xl font-semibold text-offwhite">Specifications</h2>
          <div className="mt-10 overflow-hidden rounded-card border border-border">
            <table className="w-full border-collapse font-space text-sm">
              <thead>
                <tr className="bg-[rgba(255,255,255,0.04)] text-left text-gold">
                  <th className="px-5 py-4 font-semibold uppercase tracking-[0.08em]">
                    Category
                  </th>
                  <th className="px-5 py-4 font-semibold uppercase tracking-[0.08em]">
                    Detail
                  </th>
                </tr>
              </thead>
              <tbody>
                {specs.map(([cat, det], i) => (
                  <tr
                    key={cat}
                    className={i % 2 === 1 ? "bg-[rgba(255,255,255,0.03)]" : ""}
                  >
                    <td className="px-5 py-4 text-offwhite">{cat}</td>
                    <td className="px-5 py-4 text-text-muted">{det}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
