"use client";

type Props = {
  label: string;
  selected: boolean;
  xPct: number;
  yPct: number;
  onSelect: () => void;
};

export function HotspotMarker({ label, selected, xPct, yPct, onSelect }: Props) {
  return (
    <button
      type="button"
      aria-label={`Open annotation: ${label}`}
      aria-pressed={selected}
      onClick={onSelect}
      className="absolute z-10 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center md:h-6 md:w-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      style={{ left: `${xPct}%`, top: `${yPct}%` }}
    >
      <span
        className={`hotspot-pulse h-4 w-4 rounded-full border border-gold bg-maroon md:h-3 md:w-3 ${
          selected ? "ring-2 ring-gold" : ""
        }`}
      />
    </button>
  );
}
