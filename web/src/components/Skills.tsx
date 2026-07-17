import Image from "next/image";
import { site } from "@/content/site";
import { Reveal } from "@/components/animation/Reveal";

function ChipRow({
  title,
  items,
  solid = false,
}: {
  title: string;
  items: readonly string[];
  solid?: boolean;
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-[var(--color-accent-deep)]">
        {title}
      </h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {items.map((skill) => (
          <li
            key={skill}
            className={
              solid
                ? "rounded-full bg-[var(--color-accent)] px-3.5 py-1.5 text-sm font-medium text-[var(--color-on-accent)]"
                : "rounded-full border border-[var(--color-border-strong)] bg-[var(--color-paper)] px-3.5 py-1.5 text-sm text-[var(--color-ink-soft)]"
            }
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Skills() {
  return (
    <section
      id="keahlian"
      className="border-t border-[var(--color-border)] bg-[var(--color-paper-2)] py-20 sm:py-28"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:col-span-4">
            <h2
              id="skills-heading"
              className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl"
            >
              {site.skills.title}
            </h2>
            <p className="mt-3 text-[var(--color-ink-soft)]">
              {site.skills.intro}
            </p>
            <div className="relative mt-8 hidden aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] lg:block">
              <Image
                src={site.moods.linen}
                alt=""
                fill
                className="object-cover"
                sizes="320px"
              />
            </div>
          </Reveal>

          <Reveal className="space-y-8 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-paper)] p-6 sm:p-8 lg:col-span-8" delay={0.08}>
            <ChipRow
              title={site.skills.labels.primary}
              items={site.skills.primary}
              solid
            />
            <ChipRow title={site.skills.labels.soft} items={site.skills.soft} />
            <ChipRow
              title={site.skills.labels.supporting}
              items={site.skills.supporting}
            />
          </Reveal>
        </div>

        <Reveal className="mt-16" delay={0.1}>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-3xl">
            {site.certificates.title}
          </h2>
          <p className="mt-2 max-w-xl text-[var(--color-ink-soft)]">
            {site.certificates.intro}
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {site.certificates.items.map((cert) => (
              <li
                key={cert.name}
                className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-paper)] p-4"
              >
                <p className="text-xs font-semibold text-[var(--color-accent-deep)]">
                  {cert.group}
                </p>
                <p className="mt-1.5 font-medium text-[var(--color-ink)]">
                  {cert.name}
                </p>
                <p className="mt-1 text-sm text-[var(--color-ink-muted)]">
                  {cert.issuer}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
