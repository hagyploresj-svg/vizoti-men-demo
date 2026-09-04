"use client";

import Link from "next/link";
import { useFavorites } from "@/context/FavoritesContext";
import { products } from "@/lib/products";
import ProductGrid from "@/components/ProductGrid";

export default function FavoritesPageClient() {
  const { favoriteIds } = useFavorites();
 const favoriteProducts = products.filter((p) =>
  favoriteIds.includes(String(p.id))
);

  return (
    <div className="container-page py-10 lg:py-14">
      <h1 className="font-display font-black text-3xl lg:text-5xl mb-2">FAVORİLERİM</h1>
      <p className="text-stone mb-8 lg:mb-10">
        {favoriteProducts.length > 0
          ? `${favoriteProducts.length} ürün favorilerinizde.`
          : "Beğendiğiniz ürünleri favorilerinize ekleyin."}
      </p>

      {favoriteProducts.length === 0 ? (
        <div className="py-16 text-center">
          <Link
            href="/kategori/yeni-gelenler"
            className="inline-block px-8 py-3.5 bg-ink text-paper text-sm tracking-wide hover:bg-charcoal transition-colors"
          >
            Ürünleri Keşfet
          </Link>
        </div>
      ) : (
        <ProductGrid products={favoriteProducts} />
      )}
    </div>
  );
}
