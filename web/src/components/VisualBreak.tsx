"use client";

import Image from "next/image";
import { useSite } from "@/components/LanguageProvider";

/** Mood gallery strip — fills space with existing assets, no fake work samples */
export function VisualBreak() {
  const site = useSite();
  const tiles = [
    { src: site.moods.desk, className: "sm:col-span-2 sm:row-span-2" },
    { src: site.moods.leaves, className: "" },
    { src: site.moods.linen, className: "" },
    { src: site.moods.bokeh, className: "sm:col-span-2" },
  ];

  return (
    <section
      className="border-t border-[var(--color-border)] py-16 sm:py-20"
      aria-hidden
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid auto-rows-[120px] grid-cols-2 gap-3 sm:auto-rows-[160px] sm:grid-cols-4 sm:gap-4">
          {tiles.map((t) => (
            <div
              key={t.src + t.className}
              className={`relative overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] ${t.className}`}
            >
              <Image
                src={t.src}
                alt=""
                fill
                className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                sizes="(max-width:640px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
