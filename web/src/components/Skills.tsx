"use client";

import Image from "next/image";
import { useSite } from "@/components/LanguageProvider";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/animation/Reveal";

function ChipRow({
  title,
  items,
  style = "outline",
}: {
  title: string;
  items: readonly string[];
  style?: "solid" | "outline" | "soft" | "ink";
}) {
  const chip = (skill: string) => {
    if (style === "solid") {
      return "rounded-full bg-[var(--color-accent)] px-3.5 py-1.5 text-sm font-semibold text-[var(--color-on-accent)]";
    }
    if (style === "ink") {
      return "rounded-full bg-[var(--color-ink)] px-3.5 py-1.5 text-sm font-medium text-[var(--color-on-accent)]";
    }
    if (style === "soft") {
      return "rounded-lg border border-[var(--color-accent)]/30 bg-[var(--color-accent-soft)] px-3.5 py-1.5 text-sm font-medium text-[var(--color-accent-deep)]";
    }
    return "rounded-full border border-[var(--color-border-strong)] bg-[var(--color-paper)] px-3.5 py-1.5 text-sm text-[var(--color-ink-soft)]";
  };

  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
        {title}
      </h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {items.map((skill) => (
          <li key={skill} className={chip(skill)}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Skills() {
  const site = useSite();

  return (
    <section
      id="keahlian"
      className="border-t border-[var(--color-border)] py-20 sm:py-28"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch">
          <Reveal className="flex flex-col lg:col-span-5">
            <SectionHeader
              id="skills-heading"
              eyebrow="Skills"
              title={site.skills.title}
              intro={site.skills.intro}
              variant="plain"
            />
            <div className="relative mt-8 min-h-[220px] flex-1 overflow-hidden rounded-[var(--radius-card)] border-2 border-[var(--color-ink)]">
              <Image
                src={site.moods.linen}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-forest)]/50 to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-[var(--color-on-accent)]">
                Content · Design · Delivery
              </p>
            </div>
          </Reveal>

          <Reveal
            className="space-y-10 rounded-[var(--radius-card)] border border-[var(--color-border-strong)] bg-[var(--color-paper-2)] p-6 sm:p-8 lg:col-span-7"
            delay={0.08}
          >
            <ChipRow
              title={site.skills.labels.primary}
              items={site.skills.primary}
              style="solid"
            />
            <ChipRow
              title={site.skills.labels.soft}
              items={site.skills.soft}
              style="soft"
            />
            <ChipRow
              title={site.skills.labels.supporting}
              items={site.skills.supporting}
              style="ink"
            />
          </Reveal>
        </div>

        <Reveal className="mt-20" delay={0.1}>
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Credentials
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-3xl">
                {site.certificates.title}
              </h2>
            </div>
            <p className="max-w-md text-sm text-[var(--color-ink-soft)]">
              {site.certificates.intro}
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {site.certificates.items.map((cert, i) => (
              <li
                key={cert.name}
                className={`rounded-[var(--radius-card)] border p-4 transition-transform hover:-translate-y-0.5 ${
                  i % 4 === 0
                    ? "border-[var(--color-forest)] bg-[var(--color-forest)] text-[var(--color-on-accent)]"
                    : i % 4 === 1
                      ? "border-[var(--color-ink)] bg-[var(--color-paper)]"
                      : "border-[var(--color-border-strong)] bg-[var(--color-paper-2)]"
                }`}
              >
                <p
                  className={`text-xs font-bold uppercase tracking-wide ${
                    i % 4 === 0
                      ? "text-[var(--color-accent)]"
                      : "text-[var(--color-accent)]"
                  }`}
                >
                  {cert.group}
                </p>
                <p
                  className={`mt-2 font-semibold leading-snug ${
                    i % 4 === 0
                      ? "text-[var(--color-on-accent)]"
                      : "text-[var(--color-ink)]"
                  }`}
                >
                  {cert.name}
                </p>
                <p
                  className={`mt-1 text-sm ${
                    i % 4 === 0
                      ? "text-[var(--color-on-accent)]/70"
                      : "text-[var(--color-ink-muted)]"
                  }`}
                >
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
