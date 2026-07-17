"use client";

import Image from "next/image";
import { ArrowUpRight, EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react";
import { useSite } from "@/components/LanguageProvider";
import { Reveal } from "@/components/animation/Reveal";

export function Contact() {
  const site = useSite();

  return (
    <section
      id="kontak"
      className="border-t border-[var(--color-border)] py-20 sm:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-[var(--color-border)]">
            <div className="absolute inset-0">
              <Image
                src={site.moods.wash}
                alt=""
                fill
                className="object-cover opacity-40"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(120deg,var(--color-paper)_25%,color-mix(in_oklab,var(--color-paper)_75%,var(--color-accent-soft))_100%)]" />
            </div>

            <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <h2
                  id="contact-heading"
                  className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl"
                >
                  {site.contact.title}
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--color-ink-soft)]">
                  {site.contact.body}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={site.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[var(--color-on-accent)] transition-[transform,background] hover:bg-[var(--color-accent-hover)] active:translate-y-px"
                  >
                    {site.cta.whatsapp}
                    <ArrowUpRight size={16} weight="bold" />
                  </a>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex min-h-11 items-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-paper)] px-6 py-3 text-sm font-semibold text-[var(--color-ink)] hover:bg-[var(--color-paper-2)]"
                  >
                    {site.cta.email}
                  </a>
                  <a
                    href={site.cv}
                    download
                    className="inline-flex min-h-11 items-center rounded-full px-4 py-3 text-sm font-medium text-[var(--color-ink-soft)] underline-offset-4 hover:underline"
                  >
                    {site.cta.cv}
                  </a>
                </div>
              </div>

              <dl className="space-y-5 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-paper)]/90 p-6 backdrop-blur-sm">
                <div className="flex gap-3">
                  <EnvelopeSimple
                    size={20}
                    className="mt-0.5 shrink-0 text-[var(--color-accent)]"
                    weight="duotone"
                  />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-muted)]">
                      {site.ui.emailLabel}
                    </dt>
                    <dd className="mt-0.5 break-all">
                      <a
                        href={`mailto:${site.email}`}
                        className="text-[var(--color-ink)] hover:text-[var(--color-accent-deep)]"
                      >
                        {site.email}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone
                    size={20}
                    className="mt-0.5 shrink-0 text-[var(--color-accent)]"
                    weight="duotone"
                  />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-muted)]">
                      {site.ui.whatsappLabel}
                    </dt>
                    <dd className="mt-0.5">
                      <a
                        href={site.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-ink)] hover:text-[var(--color-accent-deep)]"
                      >
                        {site.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin
                    size={20}
                    className="mt-0.5 shrink-0 text-[var(--color-accent)]"
                    weight="duotone"
                  />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-muted)]">
                      {site.ui.locationLabel}
                    </dt>
                    <dd className="mt-0.5 text-[var(--color-ink)]">
                      {site.location}
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
