import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rendi Setiawan | Portofolio Digital Marketing & Social Media",
  description:
    "Portofolio Rendi Setiawan. Nilai jual untuk klien: pesan brand lebih jelas, feed rapi, konten siap tayang (copy, desain, video). Freelance solo, Jakarta Timur.",
  openGraph: {
    title: "Rendi Setiawan | Digital Marketing & Social Media Portfolio",
    description:
      "Portfolio of Rendi Setiawan. Client value: clearer brand message, tidier feed, ready-to-post content. Solo freelance, East Jakarta.",
    locale: "id_ID",
    type: "website",
  },
  alternates: {
    languages: {
      id: "/",
      en: "/",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full bg-[var(--color-paper)] text-[var(--color-ink)] antialiased">
        {children}
      </body>
    </html>
  );
}
