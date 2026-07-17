"use client";

import Image from "next/image";
import { useSite } from "@/components/LanguageProvider";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/animation/Reveal";

export function About() {
  const site = useSite();

  return (
    <section
      id="tentang"
      className="border-t border-[var(--color-border)] py-20 sm:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeader
          id="about-heading"
          eyebrow="About"
          title={site.about.title}
          variant="plain"
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5" delay={0.05}>
            <div className="grid grid-cols-6 grid-rows-2 gap-3">
              <div className="relative col-span-6 aspect-[16/9] overflow-hidden rounded-[1.5rem] border border-[var(--color-border-strong)] shadow-[var(--shadow-card)] sm:col-span-4 sm:row-span-2 sm:aspect-auto sm:min-h-[320px]">
                <Image
                  src={site.moods.desk}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 40vw"
                />
              </div>
              <div className="relative col-span-3 min-h-[140px] overflow-hidden rounded-[1.25rem] border-2 border-[var(--color-ink)] sm:col-span-2">
                <Image
                  src={site.moods.linen}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
              <div className="relative col-span-3 min-h-[140px] overflow-hidden rounded-[1.25rem] border border-[var(--color-forest)] sm:col-span-2">
                <Image
                  src={site.moods.leaves}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7 lg:pl-4" delay={0.1}>
            <div className="space-y-4 text-base leading-relaxed text-[var(--color-ink-soft)] sm:text-[1.05rem]">
              {site.about.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
              <p className="border-l-2 border-[var(--color-accent)] pl-3 pt-1 text-sm text-[var(--color-ink-muted)]">
                {site.education.line}
              </p>
            </div>

            <ul className="mt-10 grid gap-3 sm:grid-cols-3">
              {site.about.values.map((v, i) => (
                <li
                  key={v.title}
                  className={`rounded-[var(--radius-card)] p-4 ${
                    i === 0
                      ? "bg-[var(--color-forest)] text-[var(--color-on-accent)]"
                      : i === 1
                        ? "border-2 border-[var(--color-ink)] bg-[var(--color-paper)]"
                        : "hc-card border border-[var(--color-border-strong)] bg-[var(--color-paper-2)]"
                  }`}
                >
                  <h3
                    className={`font-[family-name:var(--font-display)] text-base font-bold tracking-tight ${
                      i === 0
                        ? "text-[var(--color-on-accent)]"
                        : "text-[var(--color-ink)]"
                    }`}
                  >
                    {v.title}
                  </h3>
                  <p
                    className={`mt-1.5 text-sm leading-relaxed ${
                      i === 0
                        ? "text-[var(--color-on-accent)]/80"
                        : "text-[var(--color-ink-soft)]"
                    }`}
                  >
                    {v.body}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
