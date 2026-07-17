import { site } from "@/content/site";

export function MoodMarquee() {
  const items = [...site.marquee, ...site.marquee];

  return (
    <div
      className="relative overflow-hidden border-y border-[var(--color-border)] bg-[var(--color-forest)] py-3.5 text-[var(--color-on-accent)]"
      aria-hidden
    >
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center gap-10 text-sm font-medium tracking-wide"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-[var(--color-on-accent)]/50" />
          </span>
        ))}
      </div>
    </div>
  );
}
