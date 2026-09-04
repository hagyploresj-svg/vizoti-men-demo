"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { X, Search } from "lucide-react";
import { searchProducts, categoryNames } from "@/lib/products";
import { formatPrice } from "@/lib/format";

export default function SearchOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setQuery("");
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const results = searchProducts(query).slice(0, 6);

  function submit() {
    if (!query.trim()) return;
    router.push(`/arama?q=${encodeURIComponent(query.trim())}`);
    onClose();
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-ink/50" onClick={onClose} />
      <div className="absolute top-0 left-0 right-0 bg-paper max-h-[85vh] overflow-y-auto">
        <div className="container-page py-5">
          <div className="flex items-center gap-3 border-b border-ink pb-3">
            <Search size={20} className="text-stone shrink-0" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && submit()}
              type="text"
              placeholder="Ürün, kategori veya renk ara"
              className="flex-1 bg-transparent outline-none text-lg font-sans placeholder:text-stone"
            />
            <button aria-label="Kapat" onClick={onClose} className="p-1 shrink-0">
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>

          {query.trim().length > 0 && (
            <div className="mt-6">
              {results.length === 0 ? (
                <p className="text-stone text-sm py-6">
                  "{query}" için sonuç bulunamadı.
                </p>
              ) : (
                <>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    {results.map((p) => (
                      <li key={p.id}>
                        <Link href={`/urun/${p.slug}`} onClick={onClose} className="group block">
                          <div className="relative aspect-[3/4] bg-paperdim overflow-hidden">
                            <Image
                              src={p.images[0]}
                              alt={p.name}
                              fill
                              sizes="200px"
                              className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                            />
                          </div>
                          <p className="mt-2 text-xs uppercase tracking-wide text-stone">
                            {categoryNames[p.category]}
                          </p>
                          <p className="text-sm">{p.name}</p>
                          <p className="text-sm font-medium">{formatPrice(p.price)}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={submit}
                    className="mt-6 text-sm underline underline-offset-4 hover:text-denim"
                  >
                    Tüm sonuçları gör ({searchProducts(query).length})
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
