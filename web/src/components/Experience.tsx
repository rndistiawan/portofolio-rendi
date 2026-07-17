import Image from "next/image";
import { site } from "@/content/site";
import { Reveal } from "@/components/animation/Reveal";

export function Experience() {
  return (
    <section
      id="pengalaman"
      className="relative overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-paper-2)] py-20 sm:py-28"
      aria-labelledby="experience-heading"
    >
      <div className="pointer-events-none absolute -right-8 top-16 hidden w-48 opacity-40 lg:block xl:w-64">
        <div className="relative aspect-[3/4] overflow-hidden rounded-[var(--radius-card)]">
          <Image
            src={site.moods.bokeh}
            alt=""
            fill
            className="object-cover"
            sizes="256px"
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <h2
            id="experience-heading"
            className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl"
          >
            {site.experience.title}
          </h2>
          <p className="mt-3 max-w-xl text-[var(--color-ink-soft)]">
            {site.experience.intro}
          </p>
        </Reveal>

        <ol className="mt-14 max-w-3xl space-y-0">
          {site.experience.items.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.06}>
              <li className="relative border-l-2 border-[var(--color-accent-soft)] py-8 pl-8">
                <span
                  className="absolute -left-[9px] top-10 h-4 w-4 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-paper-2)]"
                  aria-hidden
                />
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <p className="text-sm font-medium text-[var(--color-accent-deep)]">
                    {job.period}
                  </p>
                  {i === 0 && (
                    <span className="rounded-full bg-[var(--color-accent-soft)] px-2.5 py-0.5 text-xs font-medium text-[var(--color-accent-deep)]">
                      Aktif
                    </span>
                  )}
                </div>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-ink)]">
                  {job.role}
                </h3>
                <p className="mt-1 text-[var(--color-ink-soft)]">{job.company}</p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[var(--color-ink-soft)] sm:text-base">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
                        aria-hidden
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
