import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rendi Setiawan | Digital Marketing & Social Media Freelance",
  description:
    "Freelance solo digital marketing & social media. Manfaat: pesan brand lebih jelas, feed lebih rapi, konten konsisten. Desain & edit video. Jakarta Timur.",
  openGraph: {
    title: "Rendi Setiawan | Digital Marketing & Social Media Freelance",
    description:
      "Solo freelance digital marketing & social media. Clearer brand message, tidier feed, steady content. Design & video edits. East Jakarta.",
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
    <html lang="id" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full bg-[var(--color-paper)] text-[var(--color-ink)] antialiased">
        {children}
      </body>
    </html>
  );
}
