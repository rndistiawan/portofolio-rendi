"use client";

import type { Icon } from "@phosphor-icons/react";
import {
  ChatText,
  Megaphone,
  PaintBrush,
  ShareNetwork,
  VideoCamera,
} from "@phosphor-icons/react";
import { useSite } from "@/components/LanguageProvider";
import { SectionHeader } from "@/components/SectionHeader";
import { Stagger, StaggerItem } from "@/components/animation/Reveal";

function spanClass(index: number, total: number): string {
  if (index === 0) return "sm:col-span-2 lg:col-span-7";
  if (index === 1) return "lg:col-span-5";
  if (total === 5 && index >= 2) return "lg:col-span-4";
  return "lg:col-span-6";
}

function cardSurface(i: number, wide: boolean): string {
  if (wide) {
    return "border-[var(--color-forest)] bg-[var(--color-forest)]";
  }
  const variants = [
    "hc-card border-[var(--color-border-strong)] bg-[var(--color-paper-2)]",
    "border-2 border-[var(--color-ink)] bg-[var(--color-paper)]",
    "border border-[var(--color-border-strong)] bg-[var(--color-paper)]",
    "border-l-4 border border-[var(--color-border-strong)] border-l-[var(--color-accent)] bg-[var(--color-paper-2)]",
  ];
  return variants[(i - 1) % variants.length];
}

const serviceIcons: Icon[] = [
  Megaphone,
  ShareNetwork,
  ChatText,
  PaintBrush,
  VideoCamera,
];

export function Services() {
  const site = useSite();
  const total = site.services.items.length;

  return (
    <section
      id="layanan"
      className="section-band border-t border-[var(--color-border)] bg-[var(--color-paper-2)] py-20 sm:py-28"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeader
          id="services-heading"
          eyebrow="Services"
          title={site.services.title}
          intro={site.services.intro}
          variant="split"
        />

        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {site.services.items.map((item, i) => {
            const wide = i === 0;
            const surface = cardSurface(i, wide);
            const Icon = serviceIcons[i] ?? Megaphone;
            return (
              <StaggerItem key={item.title} className={spanClass(i, total)}>
                <article
                  className={`group relative flex h-full min-h-[200px] flex-col justify-between overflow-hidden rounded-[var(--radius-card)] p-6 sm:p-8 ${surface} transition-transform duration-300 hover:-translate-y-1`}
                >
                  {wide ? (
                    <div
                      className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[var(--color-accent)]/20 blur-2xl"
                      aria-hidden
                    />
                  ) : null}
                  {/* Abstract content-grid mark for marketing feel */}
                  <div
                    className={`pointer-events-none absolute -bottom-6 -right-4 opacity-[0.12] ${
                      wide ? "text-[var(--color-on-forest)]" : "text-[var(--color-ink)]"
                    }`}
                    aria-hidden
                  >
                    <svg width="140" height="100" viewBox="0 0 140 100" fill="currentColor">
                      <rect x="8" y="12" width="36" height="48" rx="6" />
                      <rect x="52" y="12" width="36" height="28" rx="6" />
                      <rect x="96" y="12" width="36" height="36" rx="6" />
                      <rect x="52" y="48" width="80" height="32" rx="6" />
                    </svg>
                  </div>
                  <div className="relative">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                            wide
                              ? "bg-[var(--color-on-forest)]/15 text-[var(--color-on-forest)]"
                              : "bg-[var(--color-accent-soft)] text-[var(--color-accent-deep)]"
                          }`}
                        >
                          <Icon size={20} weight="bold" />
                        </span>
                        <p
                          className={`text-xs font-bold uppercase tracking-[0.16em] ${
                            wide
                              ? "text-[var(--color-on-forest)]"
                              : "text-[var(--color-accent-deep)]"
                          }`}
                        >
                          {item.hint}
                        </p>
                      </div>
                      <span
                        className={`font-[family-name:var(--font-display)] text-2xl font-bold tabular-nums ${
                          wide
                            ? "text-[var(--color-on-forest)] opacity-30"
                            : "text-[var(--color-ink)] opacity-15"
                        }`}
                        aria-hidden
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3
                      className={`mt-4 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight sm:text-2xl ${
                        wide
                          ? "text-[var(--color-on-forest)]"
                          : "text-[var(--color-ink)]"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`mt-3 max-w-md text-sm leading-relaxed sm:text-base ${
                        wide
                          ? "text-[var(--color-on-forest)] opacity-90"
                          : "text-[var(--color-ink-soft)]"
                      }`}
                    >
                      {item.body}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
