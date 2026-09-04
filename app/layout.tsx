import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "VIZOTI MEN | Modern Erkek Giyim",
  description:
    "Modern erkek giyim, yeni sezon koleksiyonları ve zamansız stil. VIZOTI MEN.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="bg-[#f5f2eb] text-[#111111] antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
