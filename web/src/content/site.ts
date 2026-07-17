import { en } from "./en";
import { id } from "./id";
import type { Locale, SiteContent, SiteCopy } from "./types";

export type { Locale, SiteContent, SiteCopy };

const identity = {
  name: "Rendi Setiawan",
  email: "rndisetiawn01@gmail.com",
  phone: "+6289509227365",
  phoneDisplay: "0895-0922-7365",
  photo: "/assets/rendi-profile-28.jpg",
  cv: "/assets/CV-Rendi-Setiawan.pdf",
  moods: {
    leaves: "/assets/mood-leaves.jpg",
    desk: "/assets/mood-desk.jpg",
    wash: "/assets/mood-wash.jpg",
    linen: "/assets/mood-linen.jpg",
    bokeh: "/assets/mood-bokeh.jpg",
  },
} as const;

const copies: Record<Locale, SiteCopy> = { id, en };

export const defaultLocale: Locale = "id";

export function getSite(locale: Locale = defaultLocale): SiteContent {
  const copy = copies[locale] ?? copies.id;
  return {
    ...identity,
    ...copy,
    whatsappUrl:
      "https://wa.me/6289509227365?text=" +
      encodeURIComponent(copy.whatsappPrefill),
  };
}

/** Default (ID) for static imports / metadata fallback */
export const site = getSite("id");
