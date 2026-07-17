"use client";

import { Reveal } from "@/components/animation/Reveal";

type Variant = "plain" | "split" | "band" | "index";

export function SectionHeader({
  id,
  eyebrow,
  title,
  intro,
  index,
  variant = "plain",
  light = false,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  index?: string;
  variant?: Variant;
  light?: boolean;
}) {
  const titleCls = light
    ? "text-[var(--color-on-forest)]"
    : "text-[var(--color-ink)]";
  const introCls = light
    ? "text-[var(--color-on-forest)] opacity-90"
    : "text-[var(--color-ink-soft)]";
  const eyeCls = "text-[var(--color-accent)]";

  if (variant === "split") {
    return (
      <Reveal>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            {eyebrow ? (
              <p
                className={`mb-2 text-xs font-bold uppercase tracking-[0.2em] ${eyeCls}`}
              >
                {eyebrow}
              </p>
            ) : null}
            <h2
              id={id}
              className={`font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.75rem] ${titleCls}`}
            >
              {title}
            </h2>
          </div>
          {intro ? (
            <p className={`max-w-md text-base leading-relaxed ${introCls}`}>
              {intro}
            </p>
          ) : null}
        </div>
      </Reveal>
    );
  }

  if (variant === "index") {
    return (
      <Reveal>
        <div className="grid gap-4 lg:grid-cols-[auto_1fr] lg:items-end lg:gap-10">
          {index ? (
            <span
              className="font-[family-name:var(--font-display)] text-[clamp(3.5rem,8vw,5.5rem)] font-bold leading-none tracking-tighter text-[var(--color-accent)] opacity-30"
              aria-hidden
            >
              {index}
            </span>
          ) : null}
          <div>
            {eyebrow ? (
              <p
                className={`mb-2 text-xs font-bold uppercase tracking-[0.2em] ${eyeCls}`}
              >
                {eyebrow}
              </p>
            ) : null}
            <h2
              id={id}
              className={`font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl ${titleCls}`}
            >
              {title}
            </h2>
            {intro ? (
              <p className={`mt-3 max-w-xl text-base leading-relaxed ${introCls}`}>
                {intro}
              </p>
            ) : null}
          </div>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal>
      <div className="max-w-xl">
        {eyebrow ? (
          <p
            className={`mb-2 text-xs font-bold uppercase tracking-[0.2em] ${eyeCls}`}
          >
            {eyebrow}
          </p>
        ) : null}
        <h2
          id={id}
          className={`font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl ${titleCls}`}
        >
          {title}
        </h2>
        {intro ? (
          <p className={`mt-3 text-base leading-relaxed ${introCls}`}>{intro}</p>
        ) : null}
      </div>
    </Reveal>
  );
}
