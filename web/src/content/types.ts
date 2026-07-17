export type Locale = "id" | "en";

export type SiteCopy = {
  role: string;
  location: string;
  tagline: string;
  whatsappPrefill: string;
  hero: {
    availability: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  marquee: readonly string[];
  nav: readonly { label: string; href: string }[];
  cta: {
    short: string;
    whatsapp: string;
    whatsappLong: string;
    email: string;
    cv: string;
    backTop: string;
  };
  ui: {
    langSwitch: string;
    langId: string;
    langEn: string;
    openMenu: string;
    closeMenu: string;
    photoAlt: string;
    emailLabel: string;
    whatsappLabel: string;
    locationLabel: string;
    navAria: string;
    mobileNavAria: string;
  };
  about: {
    title: string;
    paragraphs: readonly string[];
    values: readonly { title: string; body: string }[];
  };
  services: {
    title: string;
    intro: string;
    items: readonly { title: string; body: string; hint: string }[];
  };
  process: {
    title: string;
    intro: string;
    steps: readonly { step: string; title: string; body: string }[];
  };
  platforms: {
    title: string;
    intro: string;
    items: readonly { name: string; note: string }[];
  };
  quoteBand: { text: string; by: string };
  experience: {
    title: string;
    intro: string;
    items: readonly {
      company: string;
      role: string;
      period: string;
      bullets: readonly string[];
    }[];
  };
  projects: {
    title: string;
    intro: string;
    items: readonly {
      title: string;
      tag: string;
      summary: string;
      points: readonly string[];
      image: string;
      span: "wide" | "half";
    }[];
  };
  skills: {
    title: string;
    intro: string;
    labels: { primary: string; soft: string; supporting: string };
    primary: readonly string[];
    soft: readonly string[];
    supporting: readonly string[];
  };
  certificates: {
    title: string;
    intro: string;
    items: readonly { name: string; issuer: string; group: string }[];
  };
  contact: { title: string; body: string };
  education: {
    school: string;
    major: string;
    period: string;
    line: string;
  };
  footer: { blurb: string };
  meta: { title: string; description: string };
};

export type SiteContent = SiteCopy & {
  name: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  whatsappUrl: string;
  photo: string;
  cv: string;
  moods: {
    leaves: string;
    desk: string;
    wash: string;
    linen: string;
    bokeh: string;
  };
};
