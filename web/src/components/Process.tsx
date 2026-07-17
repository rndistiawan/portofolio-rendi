import { site } from "@/content/site";
import { Reveal, Stagger, StaggerItem } from "@/components/animation/Reveal";

export function Process() {
  return (
    <section
      id="proses"
      className="border-t border-[var(--color-border)] bg-[var(--color-paper-2)] py-20 sm:py-28"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <h2
            id="process-heading"
            className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl"
          >
            {site.process.title}
          </h2>
          <p className="mt-3 max-w-xl text-[var(--color-ink-soft)]">
            {site.process.intro}
          </p>
        </Reveal>

        <Stagger className="mt-12 grid divide-y divide-[var(--color-border)] overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-paper)] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {site.process.steps.map((s) => (
            <StaggerItem key={s.step}>
              <div className="h-full p-6 sm:p-7">
                <span className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--color-accent-soft)]">
                  {s.step}
                </span>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-ink)]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                  {s.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
