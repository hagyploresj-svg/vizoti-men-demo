"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { categories } from "@/lib/products";
import { useEffect } from "react";

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden ${open ? "" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <div
        className={`absolute inset-0 bg-ink/50 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />
      <div
        className={`absolute top-0 left-0 h-full w-[82%] max-w-sm bg-paper shadow-xl transition-transform duration-300 ease-out flex flex-col ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-5 border-b border-line">
          <span className="font-display font-black text-xl">MASTER JEANS</span>
          <button aria-label="Menüyü kapat" onClick={onClose} className="p-2">
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>
        <nav className="flex flex-col py-2 overflow-y-auto">
          <Link
            href="/kategori/yeni-gelenler"
            onClick={onClose}
            className="px-5 py-4 border-b border-line text-base"
          >
            Yeni Gelenler
          </Link>
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/kategori/${c.slug}`}
              onClick={onClose}
              className="px-5 py-4 border-b border-line text-base"
            >
              {c.name}
            </Link>
          ))}
          <div className="mt-2">
            <Link href="/hakkimizda" onClick={onClose} className="px-5 py-3 block text-sm text-stone">
              Hakkımızda
            </Link>
            <Link href="/iletisim" onClick={onClose} className="px-5 py-3 block text-sm text-stone">
              İletişim
            </Link>
            <Link href="/sss" onClick={onClose} className="px-5 py-3 block text-sm text-stone">
              Sıkça Sorulan Sorular
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
