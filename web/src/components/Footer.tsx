import { site } from "@/content/site";

// Static year — Cache Components disallows Date.now()/new Date() during prerender
const YEAR = 2026;

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-sm text-[var(--color-ink-muted)]">
          © {YEAR} {site.name}. {site.footer.blurb}
        </p>
        <a
          href="#atas"
          className="text-sm font-medium text-[var(--color-accent-deep)] hover:underline"
        >
          {site.cta.backTop}
        </a>
      </div>
    </footer>
  );
}
