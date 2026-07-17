import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rendi Setiawan | Digital Marketing & Social Media",
  description:
    "Portofolio Rendi Setiawan. Bantu brand tampil rapi di social media: ide konten, copywriting, dan eksekusi posting. Berbasis di Jakarta Timur.",
  openGraph: {
    title: "Rendi Setiawan | Digital Marketing & Social Media",
    description:
      "Bantu brand tampil rapi di social media: ide konten, copywriting, dan eksekusi posting.",
    locale: "id_ID",
    type: "website",
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
