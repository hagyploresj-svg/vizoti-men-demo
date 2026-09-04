"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { Product } from "@/lib/types";
import { formatPrice } from "@/lib/format";
import { useCart } from "@/context/CartContext";

export default function QuickView({
  product,
  open,
  onClose,
}: {
  product: Product;
  open: boolean;
  onClose: () => void;
}) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const { addItem } = useCart();

  useEffect(() => {
    if (open) {
      setSelectedSize(null);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  function handleAdd() {
    if (!selectedSize) return;
    addItem(product, selectedSize, 1);
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-ink/50" onClick={onClose} />
      <div className="relative bg-paper w-full sm:max-w-2xl max-h-[92vh] overflow-y-auto sm:mx-4">
        <button
          aria-label="Kapat"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-paper/90 p-1.5"
        >
          <X size={20} strokeWidth={1.5} />
        </button>
        <div className="grid sm:grid-cols-2">
          <div className="relative aspect-[3/4] bg-paperdim">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              sizes="(min-width: 640px) 340px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="p-6 flex flex-col">
            <p className="text-sm text-stone">{product.colorName}</p>
            <h3 className="font-display font-black text-xl mt-1">{product.name}</h3>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-lg font-medium">{formatPrice(product.price)}</span>
              {product.oldPrice && (
                <span className="text-sm text-stone line-through">
                  {formatPrice(product.oldPrice)}
                </span>
              )}
            </div>
            <p className="text-sm text-stone mt-3 leading-relaxed line-clamp-3">
              {product.description}
            </p>

            <div className="mt-5">
              <p className="text-sm font-medium mb-2">Beden Seç</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => {
                  const soldOut = product.soldOutSizes.includes(size);
                  const selected = selectedSize === size;
                  return (
                    <button
                      key={size}
                      disabled={soldOut}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[44px] h-11 px-2 text-sm border transition-colors ${
                        soldOut
                          ? "border-line text-stone/40 line-through cursor-not-allowed"
                          : selected
                          ? "border-ink bg-ink text-paper"
                          : "border-line hover:border-ink"
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-auto pt-6 flex flex-col gap-2">
              <button
                onClick={handleAdd}
                disabled={!selectedSize}
                className="w-full py-3.5 bg-ink text-paper text-sm tracking-wide hover:bg-charcoal transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {selectedSize ? "Sepete Ekle" : "Beden Seçin"}
              </button>
              <Link
                href={`/urun/${product.slug}`}
                onClick={onClose}
                className="w-full text-center py-3 border border-ink text-sm tracking-wide hover:bg-ink hover:text-paper transition-colors"
              >
                Ürün Detayına Git
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
