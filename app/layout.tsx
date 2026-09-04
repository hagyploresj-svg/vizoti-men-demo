import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter, Archivo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CartDrawer from "@/components/CartDrawer";
import CartToast from "@/components/CartToast";
import { CartProvider } from "@/context/CartContext";
import { FavoritesProvider } from "@/context/FavoritesContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "900"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.masterjeans.com.tr"),
  title: {
    default: "Master Jeans | Modern Erkek Giyim",
    template: "%s | Master Jeans",
  },
  description:
    "Master Jeans - modern erkek giyiminde jean, t-shirt, gömlek, ceket, takım ve alt giyim koleksiyonlarını keşfedin.",
  openGraph: {
    title: "Master Jeans | Modern Erkek Giyim",
    description:
      "Master Jeans - modern erkek giyiminde jean, t-shirt, gömlek, ceket, takım ve alt giyim koleksiyonlarını keşfedin.",
    siteName: "Master Jeans",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${archivo.variable}`}>
      <body className="font-sans antialiased">
        <FavoritesProvider>
          <CartProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <CartDrawer />
            <CartToast />
            <WhatsAppButton />
          </CartProvider>
        </FavoritesProvider>
      </body>
    </html>
  );
}
