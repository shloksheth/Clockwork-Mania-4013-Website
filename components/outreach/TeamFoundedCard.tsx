type Props = {
  title: string;
  subtitle: string;
  description: string;
};

export function TeamFoundedCard({ title, subtitle, description }: Props) {
  return (
    <div className="rounded-xl border border-[rgba(13,13,13,0.08)] bg-white p-6 shadow-sm">
      <p className="font-space text-xs font-semibold uppercase tracking-[0.1em] text-maroon">
        {subtitle}
      </p>
      <h4 className="mt-2 font-space text-xl font-bold text-[#0d0d0d]">{title}</h4>
      <p className="mt-3 font-inter text-sm leading-relaxed text-[#3d3835]">
        {description}
      </p>
    </div>
  );
}
