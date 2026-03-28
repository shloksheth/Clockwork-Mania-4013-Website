import type { OutreachEvent } from "@/data/outreach-events";

export function EventCard({ event }: { event: OutreachEvent }) {
  return (
    <div className="rounded-xl border border-[rgba(13,13,13,0.08)] bg-white p-5 shadow-sm transition-all duration-300 hover:border-gold">
      <h4 className="font-space text-lg font-semibold text-[#0d0d0d]">
        {event.title}
      </h4>
      <p className="mt-2 font-inter text-sm leading-relaxed text-[#3d3835]">
        {event.description}
      </p>
      <p className="mt-3 font-space text-xs text-[#5c534c]">
        {event.location} · {event.year}
      </p>
    </div>
  );
}
