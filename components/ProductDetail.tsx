"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Heart, Minus, Plus, Star, MessageCircle } from "lucide-react";
import { Product } from "@/lib/types";
import { formatPrice } from "@/lib/format";
import { useCart } from "@/context/CartContext";
import { useFavorites } from "@/context/FavoritesContext";
import { buildWhatsAppLink, productWhatsAppMessage } from "@/lib/whatsapp";
import Accordion from "./Accordion";
import SizeGuideModal from "./SizeGuideModal";

export default function ProductDetail({ product }: { product: Product }) {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [sizeError, setSizeError] = useState(false);

  const { addItem } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();
  const router = useRouter();
  const favorite = isFavorite(product.id);

  function requireSize(): boolean {
    if (!selectedSize) {
      setSizeError(true);
      return false;
    }
    return true;
  }

  function handleAddToCart() {
    if (!requireSize()) return;
    addItem(product, selectedSize!, quantity);
  }

  function handleBuyNow() {
    if (!requireSize()) return;
    addItem(product, selectedSize!, quantity);
    router.push("/sepet");
  }

  return (
    <div className="container-page py-8 lg:py-14">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Gallery */}
        <div>
          <div className="relative aspect-[3/4] bg-paperdim overflow-hidden">
            <Image
              src={product.images[activeImage]}
              alt={product.name}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            {product.isNew && (
              <span className="absolute top-4 left-4 bg-ink text-paper text-xs tracking-wide px-2.5 py-1.5">
                YENİ
              </span>
            )}
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-3 mt-3">
              {product.images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(i)}
                  className={`relative w-20 aspect-[3/4] overflow-hidden border ${
                    activeImage === i ? "border-ink" : "border-transparent"
                  }`}
                  aria-label={`Görsel ${i + 1}`}
                >
                  <Image src={img} alt="" fill sizes="80px" className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div>
          <p className="text-sm text-stone">{product.colorName}</p>
          <h1 className="font-display font-black text-2xl lg:text-4xl mt-1 leading-tight">
            {product.name}
          </h1>

          <div className="flex items-center gap-1 mt-3" aria-label="Ürün puanı 4.6 / 5">
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                size={15}
                className={i < 4 ? "fill-ink text-ink" : "fill-line text-line"}
              />
            ))}
            <span className="text-xs text-stone ml-1">(128 değerlendirme)</span>
          </div>

          <div className="flex items-center gap-3 mt-4">
            <span className="text-xl font-medium">{formatPrice(product.price)}</span>
            {product.oldPrice && (
              <>
                <span className="text-stone line-through">{formatPrice(product.oldPrice)}</span>
                <span className="text-denim text-sm font-medium">%{product.discount} indirim</span>
              </>
            )}
          </div>

          <p className="text-sm text-stone leading-relaxed mt-5 max-w-md">
            {product.description}
          </p>

          {/* Size selector */}
          <div className="mt-7">
            <div className="flex items-center justify-between mb-2.5">
              <p className="text-sm font-medium">
                Beden {selectedSize && <span className="text-stone font-normal">— {selectedSize}</span>}
              </p>
              <button
                onClick={() => setSizeGuideOpen(true)}
                className="text-xs underline underline-offset-4 text-stone hover:text-ink"
              >
                Beden Rehberi
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => {
                const soldOut = product.soldOutSizes.includes(size);
                const selected = selectedSize === size;
                return (
                  <button
                    key={size}
                    disabled={soldOut}
                    onClick={() => {
                      setSelectedSize(size);
                      setSizeError(false);
                    }}
                    className={`min-w-[46px] h-12 px-3 text-sm border transition-colors ${
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
            {sizeError && (
              <p className="text-sm text-red-700 mt-2">Lütfen bir beden seçin.</p>
            )}
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <p className="text-sm font-medium mb-2.5">Adet</p>
            <div className="flex items-center border border-line w-fit">
              <button
                aria-label="Azalt"
                className="p-3 hover:text-denim"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                <Minus size={15} />
              </button>
              <span className="px-4 text-sm w-8 text-center">{quantity}</span>
              <button
                aria-label="Artır"
                className="p-3 hover:text-denim"
                onClick={() => setQuantity((q) => q + 1)}
              >
                <Plus size={15} />
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-7 flex flex-col gap-2.5">
            <div className="flex gap-2.5">
              <button
                onClick={handleAddToCart}
                className="flex-1 py-4 bg-ink text-paper text-sm tracking-wide hover:bg-charcoal transition-colors"
              >
                Sepete Ekle
              </button>
              <button
                onClick={() => toggleFavorite(product.id)}
                aria-label={favorite ? "Favorilerden kaldır" : "Favorilere ekle"}
                aria-pressed={favorite}
                className="w-14 flex items-center justify-center border border-ink hover:bg-ink hover:text-paper transition-colors group"
              >
                <Heart
                  size={19}
                  strokeWidth={1.5}
                  className={favorite ? "fill-denim text-denim" : "group-hover:fill-paper"}
                />
              </button>
            </div>
            <button
              onClick={handleBuyNow}
              className="w-full py-4 border border-ink text-sm tracking-wide hover:bg-ink hover:text-paper transition-colors"
            >
              Hemen Al
            </button>
            <a
              href={buildWhatsAppLink(productWhatsAppMessage(product.name))}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-4 border border-[#25D366] text-[#128C4A] text-sm tracking-wide hover:bg-[#25D366]/10 transition-colors"
            >
              <MessageCircle size={17} />
              Bu ürün hakkında bilgi al
            </a>
          </div>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion
              items={[
                { title: "Ürün Açıklaması", content: <p>{product.description}</p> },
                {
                  title: "Kumaş & Materyal",
                  content: (
                    <div className="space-y-1">
                      <p>Kumaş: {product.fabric}</p>
                      <p>Bakım: {product.care}</p>
                    </div>
                  ),
                },
                {
                  title: "Beden Bilgisi",
                  content: (
                    <p>
                      Model 1.85 m boyunda olup M beden ürünü giymektedir. Detaylı ölçüler için
                      beden rehberine göz atabilirsiniz.
                    </p>
                  ),
                },
                {
                  title: "Kargo & Değişim",
                  content: (
                    <p>
                      Siparişleriniz 1-3 iş günü içinde kargoya teslim edilir. Ürünlerinizi 14
                      gün içinde ücretsiz iade veya değişim yapabilirsiniz. Detaylar için{" "}
                      <Link href="/iade-ve-degisim" className="underline underline-offset-4">
                        iade ve değişim
                      </Link>{" "}
                      sayfasını inceleyin.
                    </p>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </div>

      <SizeGuideModal open={sizeGuideOpen} onClose={() => setSizeGuideOpen(false)} />
    </div>
  );
}
