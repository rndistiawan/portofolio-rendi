"use client";

import { List, X } from "@phosphor-icons/react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { useSite } from "@/components/LanguageProvider";
import { LanguageToggle } from "@/components/LanguageToggle";

export function Nav() {
  const site = useSite();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 10);
  });

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[var(--z-nav)] transition-[background,box-shadow,border-color] duration-300 ${
        scrolled
          ? "border-b-2 border-[var(--color-ink)] bg-[var(--color-paper)]/95 shadow-[0_8px_30px_-18px_rgb(18_22_20/0.35)] backdrop-blur-md"
          : "border-b border-transparent bg-[var(--color-paper)]/85 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-8">
        <a
          href="#atas"
          className="font-[family-name:var(--font-display)] text-[0.95rem] font-bold tracking-tight text-[var(--color-ink)]"
        >
          {site.name}
        </a>

        <nav
          className="hidden items-center gap-0.5 md:flex"
          aria-label={site.ui.navAria}
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-sm text-[var(--color-ink-soft)] transition-colors hover:bg-[var(--color-paper-2)] hover:text-[var(--color-ink)]"
            >
              {item.label}
            </a>
          ))}
          <LanguageToggle className="ml-2" />
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-medium text-[var(--color-on-accent)] transition-[transform,background] hover:bg-[var(--color-accent-hover)] active:translate-y-px"
          >
            {site.cta.short}
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-paper)] text-[var(--color-ink)] transition-transform active:scale-[0.96]"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? site.ui.closeMenu : site.ui.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            key="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-paper)] md:hidden"
          >
            <nav
              className="flex flex-col gap-1 px-4 py-4"
              aria-label={site.ui.mobileNavAria}
            >
              {site.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-[var(--color-ink)] hover:bg-[var(--color-paper-2)]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-full bg-[var(--color-accent)] px-4 py-3 text-center font-medium text-[var(--color-on-accent)]"
              >
                {site.cta.whatsappLong}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="rounded-full border border-[var(--color-border-strong)] px-4 py-3 text-center font-medium text-[var(--color-ink)]"
              >
                {site.cta.email}
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
