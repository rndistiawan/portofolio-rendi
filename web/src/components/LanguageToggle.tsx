"use client";

import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/content/site";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { locale, setLocale, site } = useLanguage();

  const btn = (code: Locale, label: string) => {
    const active = locale === code;
    return (
      <button
        type="button"
        onClick={() => setLocale(code)}
        aria-pressed={active}
        className={`min-w-[2.25rem] rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide transition-colors ${
          active
            ? "bg-[var(--color-accent)] text-[var(--color-on-accent)]"
            : "text-[var(--color-ink-soft)] hover:bg-[var(--color-paper-2)] hover:text-[var(--color-ink)]"
        }`}
      >
        {label}
      </button>
    );
  };

  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-full border border-[var(--color-border)] bg-[var(--color-paper)] p-0.5 ${className}`}
      role="group"
      aria-label={site.ui.langSwitch}
    >
      {btn("id", site.ui.langId)}
      {btn("en", site.ui.langEn)}
    </div>
  );
}
