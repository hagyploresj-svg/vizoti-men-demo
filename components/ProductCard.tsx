"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, Eye } from "lucide-react";
import { Product } from "@/lib/types";
import { formatPrice } from "@/lib/format";
import { useFavorites } from "@/context/FavoritesContext";
import QuickView from "./QuickView";

export default function ProductCard({ product }: { product: Product }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const favorite = isFavorite(product.id);

  return (
    <>
      <div className="group">
        <div className="relative aspect-[3/4] bg-paperdim overflow-hidden">
          <Link href={`/urun/${product.slug}`} className="block w-full h-full">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              className="object-cover transition-opacity duration-300 group-hover:opacity-0"
            />
            {product.images[1] && (
              <Image
                src={product.images[1]}
                alt={`${product.name} - alternatif görsel`}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            )}
          </Link>

          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.isNew && (
              <span className="bg-ink text-paper text-[11px] tracking-wide px-2 py-1">
                YENİ
              </span>
            )}
            {product.discount && (
              <span className="bg-denim text-paper text-[11px] tracking-wide px-2 py-1">
                %{product.discount}
              </span>
            )}
          </div>

          <button
            onClick={() => toggleFavorite(product.id)}
            aria-label={favorite ? "Favorilerden kaldır" : "Favorilere ekle"}
            aria-pressed={favorite}
            className="absolute top-3 right-3 bg-paper/90 p-1.5 hover:bg-paper transition-colors"
          >
            <Heart
              size={17}
              strokeWidth={1.5}
              className={favorite ? "fill-denim text-denim" : "text-ink"}
            />
          </button>

          <button
            onClick={() => setQuickViewOpen(true)}
            className="absolute bottom-0 left-0 right-0 bg-ink/95 text-paper text-xs tracking-wide py-2.5 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200"
          >
            <Eye size={14} strokeWidth={1.5} />
            Hızlı Görünüm
          </button>
        </div>

        <div className="mt-3">
          <Link href={`/urun/${product.slug}`} className="block">
            <p className="text-sm text-stone">{product.colorName}</p>
            <p className="text-sm font-medium leading-snug mt-0.5">{product.name}</p>
          </Link>
          <div className="flex items-center gap-2 mt-1.5">
            <span className="text-sm font-medium">{formatPrice(product.price)}</span>
            {product.oldPrice && (
              <span className="text-sm text-stone line-through">
                {formatPrice(product.oldPrice)}
              </span>
            )}
          </div>
          <div className="flex gap-1 mt-2">
            {product.sizes.map((s) => (
              <span
                key={s}
                className={`text-[10px] border px-1.5 py-0.5 ${
                  product.soldOutSizes.includes(s)
                    ? "border-line text-stone/50 line-through"
                    : "border-line text-stone"
                }`}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      <QuickView
        product={product}
        open={quickViewOpen}
        onClose={() => setQuickViewOpen(false)}
      />
    </>
  );
}
