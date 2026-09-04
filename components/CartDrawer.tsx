"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Minus, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { products } from "@/lib/products";
import { formatPrice } from "@/lib/format";

export default function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer, updateQuantity, removeItem, subtotal } =
    useCart();

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  const lines = items
    .map((item) => ({ item, product: products.find((p) => p.id === item.productId) }))
    .filter((l) => l.product);

  return (
    <div
      className={`fixed inset-0 z-50 ${isDrawerOpen ? "" : "pointer-events-none"}`}
      aria-hidden={!isDrawerOpen}
    >
      <div
        className={`absolute inset-0 bg-ink/50 transition-opacity duration-300 ${
          isDrawerOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={closeDrawer}
      />
      <div
        className={`absolute top-0 right-0 h-full w-full sm:w-[420px] bg-paper shadow-xl transition-transform duration-300 ease-out flex flex-col ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-5 border-b border-line shrink-0">
          <h2 className="font-display font-black text-lg">SEPETİM ({items.length})</h2>
          <button aria-label="Kapat" onClick={closeDrawer} className="p-2 -mr-2">
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-4">
            <p className="text-stone">Sepetiniz şu anda boş.</p>
            <button
              onClick={closeDrawer}
              className="px-6 py-3 bg-ink text-paper text-sm tracking-wide hover:bg-charcoal transition-colors"
            >
              Alışverişe Devam Et
            </button>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto px-5 divide-y divide-line">
              {lines.map(({ item, product }) => (
                <li key={`${item.productId}-${item.size}`} className="py-4 flex gap-4">
                  <div className="relative w-20 h-24 bg-paperdim shrink-0 overflow-hidden">
                    <Image
                      src={product!.images[0]}
                      alt={product!.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/urun/${product!.slug}`}
                      onClick={closeDrawer}
                      className="text-sm font-medium hover:text-denim line-clamp-2"
                    >
                      {product!.name}
                    </Link>
                    <p className="text-xs text-stone mt-1">Beden: {item.size}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-line">
                        <button
                          aria-label="Azalt"
                          className="p-1.5 hover:text-denim"
                          onClick={() =>
                            updateQuantity(item.productId, item.size, item.quantity - 1)
                          }
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button
                          aria-label="Artır"
                          className="p-1.5 hover:text-denim"
                          onClick={() =>
                            updateQuantity(item.productId, item.size, item.quantity + 1)
                          }
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="text-sm font-medium">
                        {formatPrice(product!.price * item.quantity)}
                      </span>
                    </div>
                    <button
                      onClick={() => removeItem(item.productId, item.size)}
                      className="mt-2 text-xs text-stone underline underline-offset-2 hover:text-denim"
                    >
                      Kaldır
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-line px-5 py-5 shrink-0">
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-stone">Ara Toplam</span>
                <span className="font-medium">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-stone mb-4">Kargo ödeme adımında hesaplanır.</p>
              <Link
                href="/sepet"
                onClick={closeDrawer}
                className="block w-full text-center py-3.5 bg-ink text-paper text-sm tracking-wide hover:bg-charcoal transition-colors"
              >
                Ödemeye Geç
              </Link>
              <Link
                href="/sepet"
                onClick={closeDrawer}
                className="block w-full text-center py-3 mt-2 border border-ink text-sm tracking-wide hover:bg-ink hover:text-paper transition-colors"
              >
                Sepeti Görüntüle
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
