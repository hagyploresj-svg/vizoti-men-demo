"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, Trash2, ShieldCheck, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { products } from "@/lib/products";
import { formatPrice } from "@/lib/format";

const SHIPPING_COST = 79;
const FREE_SHIPPING_THRESHOLD = 1500;

type Step = "cart" | "checkout" | "confirmed";

export default function CartPageClient() {
  const { items, updateQuantity, updateSize, removeItem, subtotal, clearCart } = useCart();
  const [step, setStep] = useState<Step>("cart");

  const lines = items
    .map((item) => ({ item, product: products.find((p) => p.id === item.productId) }))
    .filter((l) => l.product);

  const shipping = subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const total = subtotal + shipping;

  if (step === "confirmed") {
    return (
      <div className="container-page py-24 text-center max-w-lg mx-auto">
        <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-ink text-paper mb-6">
          <Check size={26} strokeWidth={2.5} />
        </span>
        <h1 className="font-display font-black text-3xl">SİPARİŞİNİZ ALINDI</h1>
        <p className="text-stone mt-3">
          Siparişiniz başarıyla oluşturuldu. Sipariş detayları e-posta adresinize gönderilecektir.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 px-8 py-3.5 bg-ink text-paper text-sm tracking-wide hover:bg-charcoal transition-colors"
        >
          Alışverişe Devam Et
        </Link>
      </div>
    );
  }

  if (lines.length === 0) {
    return (
      <div className="container-page py-24 text-center">
        <h1 className="font-display font-black text-3xl">SEPETİNİZ BOŞ</h1>
        <p className="text-stone mt-3">Sepetinizde henüz ürün bulunmuyor.</p>
        <Link
          href="/kategori/yeni-gelenler"
          className="inline-block mt-8 px-8 py-3.5 bg-ink text-paper text-sm tracking-wide hover:bg-charcoal transition-colors"
        >
          Alışverişe Başla
        </Link>
      </div>
    );
  }

  return (
    <div className="container-page py-10 lg:py-14">
      <h1 className="font-display font-black text-3xl lg:text-4xl mb-8 lg:mb-10">
        {step === "cart" ? "SEPETİM" : "ÖDEME"}
      </h1>

      <div className="grid lg:grid-cols-[1fr_360px] gap-10 lg:gap-16 items-start">
        {step === "cart" ? (
          <ul className="divide-y divide-line">
            {lines.map(({ item, product }) => (
              <li key={`${item.productId}-${item.size}`} className="py-6 flex gap-5">
                <Link href={`/urun/${product!.slug}`} className="relative w-24 sm:w-32 aspect-[3/4] bg-paperdim shrink-0 overflow-hidden">
                  <Image src={product!.images[0]} alt={product!.name} fill sizes="128px" className="object-cover" />
                </Link>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Link href={`/urun/${product!.slug}`} className="font-medium hover:text-denim">
                        {product!.name}
                      </Link>
                      <p className="text-sm text-stone mt-1">{product!.colorName}</p>
                    </div>
                    <p className="font-medium shrink-0">{formatPrice(product!.price * item.quantity)}</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mt-4">
                    <label className="flex items-center gap-2 text-sm">
                      Beden:
                      <select
                        value={item.size}
                        onChange={(e) => updateSize(item.productId, item.size, e.target.value)}
                        className="border border-line px-2 py-1.5 bg-paper outline-none focus:border-ink"
                      >
                        {product!.sizes.map((s) => (
                          <option key={s} value={s} disabled={product!.soldOutSizes.includes(s)}>
                            {s}
                            {product!.soldOutSizes.includes(s) ? " (Tükendi)" : ""}
                          </option>
                        ))}
                      </select>
                    </label>

                    <div className="flex items-center border border-line">
                      <button
                        aria-label="Azalt"
                        className="p-2 hover:text-denim"
                        onClick={() => updateQuantity(item.productId, item.size, item.quantity - 1)}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-3 text-sm">{item.quantity}</span>
                      <button
                        aria-label="Artır"
                        className="p-2 hover:text-denim"
                        onClick={() => updateQuantity(item.productId, item.size, item.quantity + 1)}
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.productId, item.size)}
                      aria-label="Ürünü kaldır"
                      className="p-2 text-stone hover:text-red-700"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <CheckoutForm onConfirm={() => { clearCart(); setStep("confirmed"); }} />
        )}

        <aside className="border border-line p-6 lg:sticky lg:top-24">
          <p className="font-medium mb-4">Sipariş Özeti</p>
          <div className="space-y-2.5 text-sm">
            <div className="flex justify-between">
              <span className="text-stone">Ara Toplam</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone">Kargo</span>
              <span>{shipping === 0 ? "Ücretsiz" : formatPrice(shipping)}</span>
            </div>
            {shipping > 0 && (
              <p className="text-xs text-stone">
                {formatPrice(FREE_SHIPPING_THRESHOLD - subtotal)} tutarında daha alışveriş
                yapın, kargo ücretsiz olsun.
              </p>
            )}
          </div>
          <div className="flex justify-between mt-4 pt-4 border-t border-line font-medium text-base">
            <span>Toplam</span>
            <span>{formatPrice(total)}</span>
          </div>

          {step === "cart" && (
            <button
              onClick={() => setStep("checkout")}
              className="w-full mt-6 py-3.5 bg-ink text-paper text-sm tracking-wide hover:bg-charcoal transition-colors"
            >
              Ödemeye Geç
            </button>
          )}

          <p className="flex items-center gap-2 text-xs text-stone mt-4">
            <ShieldCheck size={15} />
            3D Secure ile güvenli ödeme
          </p>
        </aside>
      </div>
    </div>
  );
}

function CheckoutForm({ onConfirm }: { onConfirm: () => void }) {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    // NOTE: no real payment call is made here. See lib/payment.ts — wire the
    // provider there once iyzico/PayTR credentials are available, then call
    // createPayment() from this handler before confirming the order.
    setTimeout(() => {
      onConfirm();
    }, 700);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <p className="font-medium mb-4">Teslimat Bilgileri</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <input required placeholder="Ad" className="border border-line px-3.5 py-3 outline-none focus:border-ink sm:col-span-1" />
          <input required placeholder="Soyad" className="border border-line px-3.5 py-3 outline-none focus:border-ink sm:col-span-1" />
          <input required type="email" placeholder="E-posta" className="border border-line px-3.5 py-3 outline-none focus:border-ink sm:col-span-2" />
          <input required type="tel" placeholder="Telefon" className="border border-line px-3.5 py-3 outline-none focus:border-ink sm:col-span-2" />
          <input required placeholder="Adres" className="border border-line px-3.5 py-3 outline-none focus:border-ink sm:col-span-2" />
          <input required placeholder="Şehir" className="border border-line px-3.5 py-3 outline-none focus:border-ink" />
          <input required placeholder="Posta Kodu" className="border border-line px-3.5 py-3 outline-none focus:border-ink" />
        </div>
      </div>

      <div>
        <p className="font-medium mb-4">Ödeme Yöntemi</p>
        <div className="border border-ink p-4">
          <label className="flex items-center gap-2.5 text-sm font-medium">
            <input type="radio" name="payment" defaultChecked className="accent-ink" />
            Kredi / Banka Kartı — 3D Secure
          </label>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <input required placeholder="Kart Üzerindeki İsim" className="border border-line px-3.5 py-3 outline-none focus:border-ink sm:col-span-2" />
            <input
              required
              placeholder="Kart Numarası"
              inputMode="numeric"
              maxLength={19}
              className="border border-line px-3.5 py-3 outline-none focus:border-ink sm:col-span-2"
            />
            <input required placeholder="AA/YY" className="border border-line px-3.5 py-3 outline-none focus:border-ink" />
            <input required placeholder="CVC" inputMode="numeric" maxLength={4} className="border border-line px-3.5 py-3 outline-none focus:border-ink" />
          </div>
          <p className="flex items-center gap-2 text-xs text-stone mt-4">
            <ShieldCheck size={14} />
            Ödemeniz 3D Secure ile bankanız tarafından doğrulanır.
          </p>
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-4 bg-ink text-paper text-sm tracking-wide hover:bg-charcoal transition-colors disabled:opacity-60"
      >
        {submitting ? "İşleniyor..." : "Siparişi Onayla"}
      </button>
    </form>
  );
}
