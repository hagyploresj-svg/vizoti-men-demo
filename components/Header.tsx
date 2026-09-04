"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Search, User, Heart, ShoppingBag, Menu } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useFavorites } from "@/context/FavoritesContext";
import { categories } from "@/lib/products";
import MobileMenu from "./MobileMenu";
import SearchOverlay from "./SearchOverlay";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { count, openDrawer } = useCart();
  const { count: favCount } = useFavorites();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="bg-ink text-paper text-center text-xs sm:text-sm py-2 px-4 tracking-wide">
        Yeni sezon ürünlerinde özel fırsatlar
      </div>
      <header
        className={`sticky top-0 z-40 bg-paper/95 backdrop-blur transition-shadow ${
          scrolled ? "shadow-[0_1px_0_0_rgba(28,27,26,0.12)]" : ""
        }`}
      >
        <div className="container-page flex items-center justify-between h-16 lg:h-20">
          <button
            className="lg:hidden -ml-2 p-2 text-ink"
            aria-label="Menüyü aç"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>

          <Link
            href="/"
            className="font-display font-black text-2xl lg:text-3xl tracking-tightest text-ink"
          >
            MASTER JEANS
          </Link>

          <nav className="hidden lg:flex items-center gap-8 font-sans text-sm">
            <Link href="/kategori/yeni-gelenler" className="hover:text-denim transition-colors">
              Yeni Gelenler
            </Link>
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/kategori/${c.slug}`}
                className="hover:text-denim transition-colors"
              >
                {c.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <button
              className="p-2 text-ink hover:text-denim transition-colors"
              aria-label="Ara"
              onClick={() => setSearchOpen(true)}
            >
              <Search size={22} strokeWidth={1.5} />
            </button>
            <Link
              href="/hesabim"
              className="p-2 text-ink hover:text-denim transition-colors hidden sm:inline-flex"
              aria-label="Hesabım"
            >
              <User size={22} strokeWidth={1.5} />
            </Link>
            <Link
              href="/favoriler"
              className="p-2 text-ink hover:text-denim transition-colors relative"
              aria-label="Favorilerim"
            >
              <Heart size={22} strokeWidth={1.5} />
              {favCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-denim text-paper text-[10px] leading-none rounded-full h-4 w-4 flex items-center justify-center">
                  {favCount}
                </span>
              )}
            </Link>
            <button
              className="p-2 text-ink hover:text-denim transition-colors relative"
              aria-label="Sepetim"
              onClick={openDrawer}
            >
              <ShoppingBag size={22} strokeWidth={1.5} />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-denim text-paper text-[10px] leading-none rounded-full h-4 w-4 flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
