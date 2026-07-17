"use client";

import Image from "next/image";
import {
  FilmStrip,
  InstagramLogo,
  Palette,
  Scissors,
} from "@phosphor-icons/react";
import { useSite } from "@/components/LanguageProvider";
import { Reveal, Stagger, StaggerItem } from "@/components/animation/Reveal";

const toolIcon = {
  Canva: Palette,
  CapCut: Scissors,
  TikTok: FilmStrip,
  Instagram: InstagramLogo,
} as const;

const palette: { name: string; swatch: string; border?: boolean }[] = [
  { name: "Paper", swatch: "var(--color-paper)", border: true },
  { name: "Ink", swatch: "var(--color-ink)" },
  { name: "Ember", swatch: "var(--color-accent)" },
  { name: "Forest", swatch: "var(--color-forest)" },
  { name: "Soft", swatch: "var(--color-accent-soft)", border: true },
];

/**
 * Content-studio board: phone feed mock, formats, tools, sample calendar.
 * Abstract / illustrative only — no fake engagement metrics.
 */
export function ContentStudio() {
  const site = useSite();
  const { studio } = site;

  return (
    <section
      id="studio"
      className="studio-section relative border-t border-[var(--color-border)] py-20 sm:py-28"
      aria-labelledby="studio-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(135deg, color-mix(in srgb, var(--color-accent-soft) 55%, transparent) 0%, transparent 42%, color-mix(in srgb, var(--color-forest) 8%, transparent) 100%)",
        }}
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <div className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                {studio.eyebrow}
              </p>
              <h2
                id="studio-heading"
                className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--color-ink)] sm:text-4xl"
              >
                {studio.title}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[var(--color-ink-soft)] sm:text-base">
              {studio.intro}
            </p>
          </div>
        </Reveal>

        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Phone mock */}
          <Reveal className="lg:col-span-5">
            <div className="studio-phone mx-auto w-full max-w-[280px] sm:max-w-[300px] lg:mx-0">
              <div className="studio-phone__bezel relative overflow-hidden rounded-[2rem] border-2 border-[var(--color-ink)] bg-[var(--color-ink)] p-2.5 shadow-[var(--shadow-photo)]">
                <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-[var(--color-ink)]" />
                <div className="overflow-hidden rounded-[1.5rem] bg-[var(--color-paper)]">
                  {/* Status / stories */}
                  <div className="border-b border-[var(--color-border)] px-3 pb-3 pt-7">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-ink-muted)]">
                        {studio.phoneLabel}
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                    </div>
                    <div className="flex gap-2">
                      {["R", "S", "C", "V"].map((letter, i) => (
                        <div
                          key={letter}
                          className="flex flex-col items-center gap-1"
                        >
                          <div
                            className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold ${
                              i === 0
                                ? "bg-[var(--color-accent)] text-[var(--color-on-accent)] ring-2 ring-[var(--color-accent)] ring-offset-2 ring-offset-[var(--color-paper)]"
                                : "border-2 border-[var(--color-border-strong)] bg-[var(--color-paper-2)] text-[var(--color-ink-soft)]"
                            }`}
                          >
                            {letter}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Post card */}
                  <div className="p-3">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="h-7 w-7 overflow-hidden rounded-full border border-[var(--color-border-strong)]">
                        <Image
                          src={site.photo}
                          alt=""
                          width={28}
                          height={28}
                          className="h-full w-full object-cover object-top"
                        />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-[var(--color-ink)]">
                          brand.example
                        </p>
                        <p className="text-[9px] text-[var(--color-ink-muted)]">
                          Content plan · Reels
                        </p>
                      </div>
                    </div>
                    <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-[var(--color-border)]">
                      <Image
                        src={site.moods.desk}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="280px"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgb(18_22_20/0.75)] to-transparent p-3">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-on-forest)]">
                          Hook · Visual · CTA
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 space-y-1.5">
                      <div className="h-1.5 w-full rounded-full bg-[var(--color-border)]" />
                      <div className="h-1.5 w-4/5 rounded-full bg-[var(--color-border)]" />
                      <div className="h-1.5 w-2/3 rounded-full bg-[var(--color-accent-soft)]" />
                    </div>
                    <p className="mt-3 text-[10px] leading-relaxed text-[var(--color-ink-muted)]">
                      {studio.phoneCaption}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right panels */}
          <div className="space-y-5 lg:col-span-7">
            <Stagger className="grid gap-4 sm:grid-cols-2">
              <StaggerItem>
                <div className="h-full rounded-[var(--radius-card)] border border-[var(--color-border-strong)] bg-[var(--color-paper-2)] p-5 shadow-[var(--shadow-card)]">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                    {studio.formatLabel}
                  </p>
                  <ul className="mt-4 grid grid-cols-2 gap-2">
                    {studio.formats.map((f, i) => (
                      <li
                        key={f}
                        className={`rounded-xl px-3 py-3 text-center text-sm font-semibold ${
                          i === 1
                            ? "bg-[var(--color-forest)] text-[var(--color-on-forest)]"
                            : i === 0
                              ? "bg-[var(--color-accent)] text-[var(--color-on-accent)]"
                              : "border border-[var(--color-border-strong)] bg-[var(--color-paper)] text-[var(--color-ink)]"
                        }`}
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="h-full rounded-[var(--radius-card)] border-2 border-[var(--color-ink)] bg-[var(--color-paper)] p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-accent-deep)]">
                    {studio.toolLabel}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {studio.tools.map((tool) => {
                      const Icon =
                        toolIcon[tool as keyof typeof toolIcon] ?? Palette;
                      return (
                        <li
                          key={tool}
                          className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-paper-2)] px-3 py-2.5"
                        >
                          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-forest)] text-[var(--color-on-forest)]">
                            <Icon size={18} weight="bold" />
                          </span>
                          <span className="text-sm font-semibold text-[var(--color-ink)]">
                            {tool}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </StaggerItem>
            </Stagger>

            <Reveal delay={0.08}>
              <div className="rounded-[var(--radius-card)] border border-[var(--color-border-strong)] bg-[var(--color-paper-2)] p-5 sm:p-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                    {studio.calendarLabel}
                  </p>
                  <span className="hidden rounded-full bg-[var(--color-accent-soft)] px-2.5 py-1 text-[10px] font-semibold text-[var(--color-accent-deep)] sm:inline">
                    Canva · CapCut
                  </span>
                </div>
                <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
                  {studio.days.map((day, i) => {
                    const hint = studio.dayHints[i] ?? "—";
                    const active = hint !== "—";
                    return (
                      <div
                        key={day}
                        className={`flex min-h-[72px] flex-col items-center rounded-xl border px-1 py-2 text-center sm:min-h-[88px] sm:px-1.5 ${
                          active
                            ? i % 2 === 0
                              ? "border-[var(--color-accent)] bg-[var(--color-accent-soft)]"
                              : "border-[var(--color-forest)] bg-[color-mix(in_srgb,var(--color-forest)_12%,var(--color-paper))]"
                            : "border-[var(--color-border)] bg-[var(--color-paper)] opacity-70"
                        }`}
                      >
                        <span className="text-[10px] font-bold uppercase tracking-wide text-[var(--color-ink-muted)]">
                          {day}
                        </span>
                        <span
                          className={`mt-2 text-[10px] font-semibold leading-tight sm:text-[11px] ${
                            active
                              ? "text-[var(--color-ink)]"
                              : "text-[var(--color-ink-muted)]"
                          }`}
                        >
                          {hint}
                        </span>
                        {active ? (
                          <span
                            className={`mt-auto h-1.5 w-1.5 rounded-full ${
                              i % 2 === 0
                                ? "bg-[var(--color-accent)]"
                                : "bg-[var(--color-forest)]"
                            }`}
                          />
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="flex flex-col gap-3 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-paper)] p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-ink-muted)]">
                  {studio.paletteLabel}
                </p>
                <ul className="flex flex-wrap items-center gap-3">
                  {palette.map((c) => (
                    <li key={c.name} className="flex items-center gap-2">
                      <span
                        className={`h-8 w-8 rounded-full shadow-sm ${
                          c.border
                            ? "border border-[var(--color-border-strong)]"
                            : ""
                        }`}
                        style={{ background: c.swatch }}
                        title={c.name}
                      />
                      <span className="text-xs font-medium text-[var(--color-ink-soft)]">
                        {c.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
