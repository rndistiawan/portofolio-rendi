import type { SiteCopy } from "./types";

/**
 * Professional portfolio voice — calm, clear, scannable.
 * Short claim, honest scope, soft CTA. No meta “this is my portfolio” pitch.
 */
export const en: SiteCopy = {
  role: "Digital Marketing · Social Media · Freelance",
  location: "East Jakarta",
  tagline:
    "Helping brands show up cleanly on social — from content direction and copy to design, short video, and a steady posting rhythm.",
  whatsappPrefill:
    "Hi Rendi, I came across your portfolio. May I share what I need for digital marketing / social media?",
  hero: {
    availability: "East Jakarta · Open for freelance",
    ctaPrimary: "WhatsApp",
    ctaSecondary: "Email",
  },
  marquee: [
    "Digital marketing",
    "Social media",
    "Copywriting",
    "Content design",
    "Video editing",
    "TikTok Ads",
    "Content planning",
    "Brand voice",
  ],
  nav: [
    { label: "About", href: "#tentang" },
    { label: "Services", href: "#layanan" },
    { label: "Experience", href: "#pengalaman" },
    { label: "Work", href: "#proyek" },
    { label: "Contact", href: "#kontak" },
  ],
  cta: {
    short: "Contact",
    whatsapp: "WhatsApp",
    whatsappLong: "Message on WhatsApp",
    email: "Email",
    cv: "Download CV",
    backTop: "Back to top",
  },
  ui: {
    langSwitch: "Language",
    langId: "ID",
    langEn: "EN",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    photoAlt: "Photo of",
    emailLabel: "Email",
    whatsappLabel: "WhatsApp",
    locationLabel: "Location",
    navAria: "Primary",
    mobileNavAria: "Mobile menu",
  },
  about: {
    title: "About",
    paragraphs: [
      "I'm Rendi Setiawan, a freelance digital marketer and social media partner based in East Jakarta. I work with brands—especially service and small businesses—to keep their online presence clear, consistent, and well executed.",
      "My scope covers content planning, copywriting, simple visual design, short video editing, and day-to-day posting. I focus on realistic outcomes: clarity and consistency, not metrics I cannot prove.",
      "As Clinic Leader in a wellness/HBOT service, I lead daily operations, communicate clearly, and finish the job. Earlier field work (VSAT and electric vehicles) built the same discipline I bring to digital projects.",
    ],
    values: [
      {
        title: "Benefit-led",
        body: "Content choices aim at a clearer message and a presence audiences can understand.",
      },
      {
        title: "Direct communication",
        body: "Solo freelance means you talk to the person doing the work—no long chain of handoffs.",
      },
      {
        title: "From idea to delivery",
        body: "Not advice only: copy, visuals, short video, and file handoff can all be part of the engagement.",
      },
    ],
  },
  services: {
    title: "Services",
    intro:
      "Core work in digital marketing and social media. Design and short video editing help content ship ready to publish. Scope is agreed after a short brief.",
    items: [
      {
        title: "Digital marketing",
        body: "Shape message, channels, and content so digital effort is directed and aligned with brand goals.",
        hint: "Strategy & delivery",
      },
      {
        title: "Social media management",
        body: "Content plans, captions, and posting schedules on the platforms you use—so the brand stays active and organized.",
        hint: "Instagram · TikTok",
      },
      {
        title: "Copywriting",
        body: "Captions, hooks, and content text that are concise, readable, and on-message.",
        hint: "Content text",
      },
      {
        title: "Content design",
        body: "Simple feed visuals and assets (Canva) so posts look tidy and on-brand.",
        hint: "Visual",
      },
      {
        title: "Short video editing",
        body: "Reels/TikTok edits: cut, clarify the flow, and prepare files ready to upload.",
        hint: "Short-form video",
      },
    ],
  },
  process: {
    title: "How I work",
    intro: "A short, transparent path from brief to review.",
    steps: [
      {
        step: "01",
        title: "Brief",
        body: "You share the brand, goals, and channels in use.",
      },
      {
        step: "02",
        title: "Direction",
        body: "I propose themes, tone, formats, and a realistic scope.",
      },
      {
        step: "03",
        title: "Delivery",
        body: "Copy, visuals, video, posting, or file handoff as agreed.",
      },
      {
        step: "04",
        title: "Review",
        body: "We review what worked and adjust for the next cycle.",
      },
    ],
  },
  platforms: {
    title: "Tools & channels",
    intro: "Platforms and tools I regularly use.",
    items: [
      { name: "TikTok", note: "Content & Ads" },
      { name: "Instagram", note: "Feed & reels" },
      { name: "Canva", note: "Visual design" },
      { name: "Video edit", note: "Short-form" },
      { name: "Copywriting", note: "Captions & hooks" },
      { name: "WhatsApp", note: "Client chat" },
    ],
  },
  quoteBand: {
    text: "Effective content feels clear and consistent—not loud for a moment without direction.",
    by: "Rendi Setiawan",
  },
  experience: {
    title: "Experience",
    intro:
      "Background that shapes how I work: service leadership, operational care, and digital delivery.",
    items: [
      {
        company: "Salama Wellness Center · HBOT Clinic",
        role: "Clinic Leader",
        period: "Sep 2023 - Present",
        bullets: [
          "Lead daily wellness/HBOT operations: workflow coordination, scheduling, and service standards.",
          "Serve hyperbaric oxygen therapy (HBOT) patients with clear, professional communication.",
          "Operate the chamber system and check oxygen cylinder stock.",
          "Cover admin & front desk backup, daily documentation, and clinic social media.",
        ],
      },
      {
        company: "PT Rekacipta Inovasi ITB",
        role: "EV Technician Support (Internship)",
        period: "Jan 2023 - Aug 2023",
        bullets: [
          "Supported install, electrical assembly, and maintenance of electric vehicle technology.",
          "Helped develop and maintain electric bajaj systems with the team.",
        ],
      },
      {
        company: "PT Plaza Telematika",
        role: "VSAT Technician (Internship)",
        period: "Aug 2022 - Dec 2022",
        bullets: [
          "Installed and maintained VSAT satellite networks, including remote areas.",
          "Collaborated on troubleshooting to keep satellite communication systems stable.",
        ],
      },
    ],
  },
  projects: {
    title: "Selected focus",
    intro:
      "Three angles of experience relevant to clients. No metrics I cannot substantiate.",
    items: [
      {
        title: "Social for service brands",
        tag: "Social Media",
        summary:
          "A warm, professional digital presence in a service context—informative content aligned with daily operations.",
        points: [
          "Content that helps audiences understand the offer",
          "Aligned with service standards",
          "Clarity and consistency first",
        ],
        image: "/assets/mood-desk.jpg",
        span: "wide",
      },
      {
        title: "Digital marketing foundation",
        tag: "Certification",
        summary:
          "Formal structure through copywriting and TikTok Ads (MySkill) to support directed execution.",
        points: [
          "Copywriting Introduction (MySkill)",
          "TikTok Ads: BTA, CKTA, MTA, STA",
          "Fits small brands and service businesses",
        ],
        image: "/assets/mood-linen.jpg",
        span: "half",
      },
      {
        title: "Field discipline",
        tag: "Background",
        summary:
          "VSAT and EV work built problem-solving, teamwork, and ownership until the task is done.",
        points: [
          "Field troubleshooting",
          "Technical team collaboration",
          "Care through completion",
        ],
        image: "/assets/mood-leaves.jpg",
        span: "half",
      },
    ],
  },
  skills: {
    title: "Skills",
    intro:
      "Core digital and content skills, supported by soft skills and operational experience.",
    labels: {
      primary: "Digital",
      soft: "How I work",
      supporting: "Supporting",
    },
    primary: [
      "Digital Marketing",
      "Social Media",
      "Copywriting",
      "Visual design",
      "Video editing",
      "TikTok Ads",
    ],
    soft: [
      "Communication",
      "Service leadership",
      "Problem solving",
      "Time management",
      "Admin",
    ],
    supporting: [
      "Canva",
      "Microsoft Office",
      "Client care",
      "Troubleshooting",
      "Clinic operations",
    ],
  },
  certificates: {
    title: "Certificates",
    intro: "Formal training in copywriting and TikTok advertising.",
    items: [
      { name: "Copywriting Introduction", issuer: "MySkill", group: "Copy" },
      { name: "TikTok Ads - BTA", issuer: "MySkill", group: "Ads" },
      { name: "TikTok Ads - CKTA", issuer: "MySkill", group: "Ads" },
      { name: "TikTok Ads - MTA", issuer: "MySkill", group: "Ads" },
      { name: "TikTok Ads - STA", issuer: "MySkill", group: "Ads" },
      { name: "Electronics Certificate", issuer: "Training", group: "Technical" },
      { name: "Field Practice Certificate", issuer: "Internship", group: "Technical" },
    ],
  },
  contact: {
    title: "Contact",
    body: "Have a digital marketing or social media project? Share your brand and needs via WhatsApp or email. I’ll reply as soon as I can.",
  },
  education: {
    school: "SMKN 69 Jakarta",
    major: "Mechatronics Engineering",
    period: "2019 - 2023",
    line: "Graduate of SMKN 69 Jakarta, Mechatronics Engineering (2019 - 2023).",
  },
  footer: {
    blurb: "Digital Marketing & Social Media · East Jakarta",
  },
  meta: {
    title: "Rendi Setiawan | Digital Marketing & Social Media",
    description:
      "Portfolio of Rendi Setiawan — freelance digital marketing and social media: content planning, copywriting, design, and short video. East Jakarta.",
  },
};
