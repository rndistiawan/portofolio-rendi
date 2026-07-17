import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rendi Setiawan | Digital Marketing & Social Media",
  description:
    "Portofolio Rendi Setiawan — freelance digital marketing dan social media: content planning, copywriting, desain, dan edit video. Jakarta Timur.",
  openGraph: {
    title: "Rendi Setiawan | Digital Marketing & Social Media",
    description:
      "Freelance digital marketing and social media: content planning, copywriting, design, and short video. East Jakarta.",
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
