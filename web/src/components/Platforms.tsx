"use client";

import type { Icon } from "@phosphor-icons/react";
import {
  ChatCircleDots,
  FilmStrip,
  InstagramLogo,
  Palette,
  Scissors,
  TextT,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { useSite } from "@/components/LanguageProvider";
import { Reveal, Stagger, StaggerItem } from "@/components/animation/Reveal";

const icons: Record<string, Icon> = {
  TikTok: FilmStrip,
  Instagram: InstagramLogo,
  Canva: Palette,
  CapCut: Scissors,
  Copywriting: TextT,
  WhatsApp: WhatsappLogo,
};

export function Platforms() {
  const site = useSite();

  return (
    <section
      className="border-t border-[var(--color-forest)] bg-[var(--color-forest)] py-16 sm:py-20"
      aria-labelledby="platforms-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Stack
              </p>
              <h2
                id="platforms-heading"
                className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[var(--color-on-forest)] sm:text-3xl"
              >
                {site.platforms.title}
              </h2>
            </div>
            <p className="max-w-sm text-sm text-[var(--color-on-forest)] opacity-90">
              {site.platforms.intro}
            </p>
          </div>
        </Reveal>

        <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {site.platforms.items.map((p, i) => {
            const Icon = icons[p.name] ?? ChatCircleDots;
            const solid = i % 3 === 0;
            const soft = i % 3 === 1;
            return (
              <StaggerItem key={p.name}>
                <div
                  className={`group flex items-center gap-4 rounded-2xl border px-5 py-4 transition-transform hover:-translate-y-0.5 ${
                    solid
                      ? "border-[var(--color-accent)] bg-[var(--color-accent)]"
                      : soft
                        ? "border-[var(--color-on-forest)]/25 bg-[var(--color-on-forest)]/10"
                        : "border-[var(--color-on-forest)]/30 bg-transparent"
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                      solid
                        ? "bg-[var(--color-on-accent)]/15 text-[var(--color-on-accent)]"
                        : "bg-[var(--color-on-forest)]/12 text-[var(--color-on-forest)]"
                    }`}
                  >
                    <Icon size={22} weight="bold" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p
                      className={`font-[family-name:var(--font-display)] text-lg font-semibold ${
                        solid
                          ? "text-[var(--color-on-accent)]"
                          : "text-[var(--color-on-forest)]"
                      }`}
                    >
                      {p.name}
                    </p>
                    <p
                      className={`text-xs font-medium tracking-wide ${
                        solid
                          ? "text-[var(--color-on-accent)] opacity-90"
                          : "text-[var(--color-on-forest)] opacity-80"
                      }`}
                    >
                      {p.note}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
