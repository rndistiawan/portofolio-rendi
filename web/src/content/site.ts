/**
 * ECC copy guidelines for this portfolio:
 * - Audience: klien freelance / UMKM / jasa yang butuh Social Media
 * - One CTA intent: chat WhatsApp
 * - Concrete verbs, no fluff ("elevate", "seamless")
 * - Honest: no invented metrics or fake results
 * - Bahasa Indonesia, scannable, benefit-led
 */
export const site = {
  name: "Rendi Setiawan",
  role: "Digital Marketing · Social Media",
  location: "Jakarta Timur",
  email: "rndisetiawn01@gmail.com",
  phone: "+6289509227365",
  phoneDisplay: "0895-0922-7365",
  whatsappUrl:
    "https://wa.me/6289509227365?text=" +
    encodeURIComponent(
      "Halo Rendi, saya lihat portofolio Anda. Saya butuh bantuan social media / digital marketing. Boleh diskusi?",
    ),
  photo: "/assets/rendi-profile-28.jpg",
  cv: "/assets/CV-Rendi-Setiawan.pdf",
  /** Hero subtext: short, outcome-focused */
  tagline:
    "Saya bantu brand tampil rapi di medsos: ide konten, copy yang jelas, dan posting yang konsisten.",
  hero: {
    availability: "Jakarta Timur · Siap kolaborasi",
    ctaPrimary: "Chat WhatsApp",
    ctaSecondary: "Unduh CV",
  },
  moods: {
    leaves: "/assets/mood-leaves.jpg",
    desk: "/assets/mood-desk.jpg",
    wash: "/assets/mood-wash.jpg",
    linen: "/assets/mood-linen.jpg",
    bokeh: "/assets/mood-bokeh.jpg",
  },
  marquee: [
    "Ide konten",
    "Copy yang jelas",
    "Jadwal posting",
    "TikTok Ads",
    "Suara brand",
    "Konten harian",
    "Canva",
    "Eksekusi rapi",
  ],
  nav: [
    { label: "Tentang", href: "#tentang" },
    { label: "Layanan", href: "#layanan" },
    { label: "Pengalaman", href: "#pengalaman" },
    { label: "Proyek", href: "#proyek" },
    { label: "Kontak", href: "#kontak" },
  ],
  cta: {
    short: "Hubungi",
    whatsapp: "Chat WhatsApp",
    whatsappLong: "Chat via WhatsApp",
    email: "Kirim email",
    cv: "Unduh CV",
    backTop: "Kembali ke atas",
  },
  about: {
    title: "Kenalan dulu",
    paragraphs: [
      "Saya Rendi. Saya bantu bisnis, terutama UMKM dan jasa, merawat kehadiran di social media: merencanakan konten, menulis copy, dan mengeksekusi posting agar brand tetap aktif dan mudah dipahami.",
      "Saya tidak hanya duduk di layar. Saya pernah kerja lapangan (VSAT), bantu perakitan kendaraan listrik, dan masih aktif di operasional klinik wellness/HBOT. Dari situ saya terbiasa teliti, komunikatif, dan menyelesaikan kerja sampai beres.",
      "Itulah yang saya bawa ke medsos: cepat belajar tools baru, rapi di admin dan jadwal, plus paham bagaimana konten bekerja di operasional sehari-hari, bukan cuma teori.",
    ],
    values: [
      {
        title: "Cepat beradaptasi",
        body: "Siap mempelajari platform, format konten, dan tools yang brand Anda pakai.",
      },
      {
        title: "Jadwal & admin rapi",
        body: "Terbiasa mengelola tugas, dokumen, dan alur kerja agar eksekusi tidak kacau.",
      },
      {
        title: "Konten yang dijalankan",
        body: "Fokus pada posting yang konsisten, bahasa yang jelas, dan mudah ditindaklanjuti audiens.",
      },
    ],
  },
  services: {
    title: "Yang bisa kita kerjakan bareng",
    intro:
      "Paket fokus untuk UMKM dan bisnis jasa. Jelas, praktis, tanpa janji angka yang tidak realistis.",
    items: [
      {
        title: "Kelola social media",
        body: "Rencana konten mingguan, caption, dan posting konsisten di platform yang Anda pakai.",
        hint: "IG · TikTok · lainnya",
      },
      {
        title: "Copywriting konten",
        body: "Teks yang mudah dibaca: caption, hook singkat, dan pesan brand yang rapi.",
        hint: "Copy yang jernih",
      },
      {
        title: "Ide & format konten",
        body: "Ide visual dan format (feed, reels, story) yang cocok dengan brand dan audiens Anda.",
        hint: "Perencanaan konten",
      },
      {
        title: "Dasar TikTok Ads",
        body: "Bantu setup dan pemahaman iklan TikTok sesuai skill yang sudah dipelajari formal.",
        hint: "Sertifikasi MySkill",
      },
    ],
  },
  process: {
    title: "Cara saya bekerja",
    intro: "Alur sederhana supaya kolaborasi jelas dari awal.",
    steps: [
      {
        step: "01",
        title: "Brief singkat",
        body: "Anda ceritakan brand, target, dan channel yang dipakai.",
      },
      {
        step: "02",
        title: "Ide & arah",
        body: "Saya usulkan tema konten, tone, dan jadwal yang realistis.",
      },
      {
        step: "03",
        title: "Eksekusi",
        body: "Copy, visual sederhana, dan posting / serah terima file sesuai kesepakatan.",
      },
      {
        step: "04",
        title: "Review",
        body: "Kita evaluasi apa yang jalan, lalu sesuaikan untuk periode berikutnya.",
      },
    ],
  },
  platforms: {
    title: "Tools & channel",
    intro: "Yang biasa dipakai di pekerjaan digital (bukan daftar klien fiktif).",
    items: [
      { name: "TikTok", note: "Konten & Ads" },
      { name: "Instagram", note: "Feed & story" },
      { name: "Canva", note: "Visual cepat" },
      { name: "Copywriting", note: "Caption & hook" },
      { name: "WhatsApp", note: "Komunikasi klien" },
      { name: "Office", note: "Admin & jadwal" },
    ],
  },
  quoteBand: {
    text: "Konten bagus itu yang konsisten dan mudah dipahami, bukan yang kelihatan ramai tanpa arah.",
    by: "Rendi Setiawan",
  },
  experience: {
    title: "Pengalaman kerja",
    intro:
      "Riwayat yang membentuk cara saya bekerja: teliti di lapangan, rapi di operasional, dan siap di sisi digital.",
    items: [
      {
        company: "Salama Wellness Center · Klinik HBOT",
        role: "Operasional & Pelayanan",
        period: "Sep 2023 - Sekarang",
        bullets: [
          "Menjaga operasional harian layanan wellness/HBOT agar alur pasien berjalan lancar.",
          "Melayani pasien dengan komunikasi yang jelas, ramah, dan profesional.",
          "Membantu administrasi dan pengelolaan media sosial sebagai bagian peran multi-fungsi.",
        ],
      },
      {
        company: "PT Rekacipta Inovasi ITB",
        role: "Support Teknisi Kendaraan Listrik (Magang)",
        period: "Jan 2023 - Agu 2023",
        bullets: [
          "Membantu perakitan kelistrikan pada proyek bajaj listrik.",
          "Bekerja bersama tim untuk instalasi dan pemeliharaan teknologi kendaraan listrik.",
        ],
      },
      {
        company: "PT Plaza Telematika",
        role: "Teknisi VSAT (Magang)",
        period: "Agu 2022 - Des 2022",
        bullets: [
          "Membantu instalasi dan pemeliharaan jaringan satelit VSAT di lapangan.",
          "Berkolaborasi dengan tim untuk troubleshooting agar sistem tetap stabil.",
        ],
      },
    ],
  },
  projects: {
    title: "Yang saya kerjakan",
    intro:
      "Tiga sudut kerja yang relevan untuk klien. Tanpa klaim angka yang tidak bisa saya buktikan.",
    items: [
      {
        title: "Medsos untuk klinik & wellness",
        tag: "Social Media",
        summary:
          "Membantu kehadiran digital di lingkungan layanan: konten yang ramah, bahasa profesional, dan brand yang tetap terasa manusiawi.",
        points: [
          "Konten informatif untuk calon klien dan pasien",
          "Selaras dengan tim operasional harian",
          "Prioritas konsistensi, bukan angka yang dikarang",
        ],
        image: "/assets/mood-desk.jpg",
        span: "wide" as const,
      },
      {
        title: "Dasar digital marketing yang terukur",
        tag: "Sertifikasi",
        summary:
          "Membangun fondasi lewat jalur formal: copywriting dan TikTok Ads (MySkill), agar eksekusi punya kerangka yang jelas.",
        points: [
          "Copywriting Introduction (MySkill)",
          "TikTok Ads: BTA, CKTA, MTA, STA",
          "Cocok untuk UMKM dan bisnis jasa",
        ],
        image: "/assets/mood-linen.jpg",
        span: "half" as const,
      },
      {
        title: "Disiplin dari kerja lapangan",
        tag: "Latar belakang",
        summary:
          "Pengalaman VSAT dan kendaraan listrik melatih problem solving, kerja tim, dan tanggung jawab menyelesaikan tugas di kondisi nyata.",
        points: [
          "Troubleshooting di lapangan",
          "Kolaborasi dengan tim teknis",
          "Ketelitian sampai pekerjaan selesai",
        ],
        image: "/assets/mood-leaves.jpg",
        span: "half" as const,
      },
    ],
  },
  skills: {
    title: "Keahlian",
    intro:
      "Utama di digital marketing dan social media. Soft skill serta latar teknis sebagai pendukung eksekusi.",
    labels: {
      primary: "Fokus digital",
      soft: "Cara kerja",
      supporting: "Pendukung",
    },
    primary: [
      "Digital Marketing",
      "Social Media",
      "Copywriting",
      "Perencanaan konten",
      "TikTok Ads",
    ],
    soft: [
      "Komunikasi",
      "Problem solving",
      "Kerja tim",
      "Manajemen waktu",
      "Administrasi",
    ],
    supporting: [
      "Canva",
      "Microsoft Office",
      "Pelayanan klien",
      "Troubleshooting",
      "Operasional HBOT",
    ],
  },
  certificates: {
    title: "Sertifikat",
    intro: "Bukti pembelajaran formal di copywriting dan iklan TikTok.",
    items: [
      { name: "Copywriting Introduction", issuer: "MySkill", group: "Copy" },
      { name: "TikTok Ads - BTA", issuer: "MySkill", group: "Ads" },
      { name: "TikTok Ads - CKTA", issuer: "MySkill", group: "Ads" },
      { name: "TikTok Ads - MTA", issuer: "MySkill", group: "Ads" },
      { name: "TikTok Ads - STA", issuer: "MySkill", group: "Ads" },
      { name: "Sertifikat Elektronika", issuer: "Pelatihan", group: "Teknis" },
      {
        name: "Sertifikat PKL",
        issuer: "Praktik Lapangan",
        group: "Teknis",
      },
    ],
  },
  contact: {
    title: "Siap mulai proyek?",
    body: "Butuh bantuan social media atau digital marketing? Ceritakan brand dan target Anda. Saya balas secepatnya lewat WhatsApp atau email.",
  },
  education: {
    school: "SMKN 69 Jakarta",
    major: "Teknik Mekatronika",
    period: "2019 - 2023",
    line: "Lulusan SMKN 69 Jakarta, Teknik Mekatronika (2019 - 2023).",
  },
  footer: {
    blurb: "Digital Marketing & Social Media · Jakarta Timur",
  },
  meta: {
    title: "Rendi Setiawan | Digital Marketing & Social Media",
    description:
      "Portofolio Rendi Setiawan. Bantu brand tampil rapi di social media: ide konten, copywriting, dan eksekusi posting. Berbasis di Jakarta Timur.",
  },
} as const;

export type SiteContent = typeof site;
