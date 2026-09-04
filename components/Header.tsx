"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Search, ShoppingBag, X } from "lucide-react";

const navItems = [
  { label: "YENİ", href: "/" },
  { label: "SHOP", href: "/" },
  { label: "JEAN", href: "/" },
  { label: "CEKET", href: "/" },
  { label: "GÖMLEK", href: "/" },
  { label: "TRİKO", href: "/" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-[#111111] px-4 py-2 text-center text-[10px] uppercase tracking-[0.22em] text-white/75">
        2.500 TL ve üzeri siparişlerde ücretsiz kargo
      </div>

      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f5f2eb]/95 backdrop-blur">
        <div className="container-page flex h-[76px] items-center justify-between">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex items-center lg:hidden"
            aria-label="Menüyü aç"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.slice(0, 3).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[11px] font-medium tracking-[0.16em] transition-opacity hover:opacity-50"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 text-center"
          >
            <span className="block text-xl font-black tracking-[0.17em] sm:text-2xl">
              VIZOTI
            </span>
            <span className="mt-[-2px] block text-[8px] tracking-[0.48em] text-black/55">
              MEN
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.slice(3).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[11px] font-medium tracking-[0.16em] transition-opacity hover:opacity-50"
              >
                {item.label}
              </Link>
            ))}

            <button type="button" aria-label="Ara">
              <Search size={18} strokeWidth={1.4} />
            </button>

            <button type="button" aria-label="Sepet">
              <ShoppingBag size={18} strokeWidth={1.4} />
            </button>
          </nav>

          <div className="flex items-center gap-4 lg:hidden">
            <Search size={19} strokeWidth={1.4} />
            <ShoppingBag size={19} strokeWidth={1.4} />
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#111111] text-[#f5f2eb] lg:hidden">
          <div className="flex items-center justify-between border-b border-white/15 px-6 py-6">
            <div>
              <span className="block text-xl font-black tracking-[0.17em]">
                VIZOTI
              </span>
              <span className="text-[8px] tracking-[0.45em] text-white/50">
                MEN
              </span>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Menüyü kapat"
            >
              <X size={25} strokeWidth={1.3} />
            </button>
          </div>

          <nav className="flex flex-col px-6 py-10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/10 py-5 text-3xl font-semibold tracking-tight"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="mt-10 text-xs uppercase tracking-[0.25em] text-white/50"
            >
              İletişim
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
