import { site } from "@/content/site";

export function Certificates() {
  return (
    <section
      id="sertifikat"
      className="border-t border-[var(--color-border)] bg-[var(--color-paper-2)] py-20 sm:py-24"
      aria-labelledby="certs-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2
          id="certs-heading"
          className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl"
        >
          {site.certificates.title}
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--color-ink-soft)]">
          {site.certificates.intro}
        </p>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.certificates.items.map((cert) => (
            <li
              key={cert.name}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-paper)] p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-deep)]">
                {cert.group}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-ink)]">
                {cert.name}
              </h3>
              <p className="mt-1 text-sm text-[var(--color-ink-muted)]">
                {cert.issuer}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
