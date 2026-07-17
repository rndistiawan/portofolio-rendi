import { site } from "@/content/site";
import { Reveal } from "@/components/animation/Reveal";

export function QuoteBand() {
  return (
    <section
      className="border-t border-[var(--color-border)] bg-[var(--color-forest)] py-16 sm:py-20"
      aria-label="Positioning"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-8">
        <Reveal>
          <blockquote>
            <p className="font-[family-name:var(--font-display)] text-xl font-medium leading-snug text-[var(--color-on-accent)] sm:text-2xl md:text-3xl">
              {site.quoteBand.text}
            </p>
            <footer className="mt-6 text-sm text-[var(--color-on-accent)]/70">
              {site.quoteBand.by}
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
