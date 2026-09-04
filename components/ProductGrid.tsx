"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products as allProducts } from "@/lib/products";
import type { Product } from "@/lib/types";

type ProductGridProps = {
  title?: string;
  subtitle?: string;
  limit?: number;
  products?: Product[];
};

export default function ProductGrid({
  title,
  subtitle,
  limit,
  products,
}: ProductGridProps) {
  const [showAll, setShowAll] = useState(false);

  const sourceProducts = products ?? allProducts;

  const visibleProducts = useMemo(() => {
    if (!limit || showAll) {
      return sourceProducts;
    }

    return sourceProducts.slice(0, limit);
  }, [sourceProducts, limit, showAll]);

  return (
    <section className="w-full">
      {(title || subtitle) && (
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            {title && (
              <h2 className="text-2xl font-semibold uppercase tracking-tight sm:text-3xl">
                {title}
              </h2>
            )}

            {subtitle && (
              <p className="mt-2 max-w-xl text-sm leading-6 text-black/50">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      )}

      {visibleProducts.length > 0 ? (
        <>
          <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 lg:grid-cols-4">
            {visibleProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                slug={product.slug}
                name={product.name}
                category={product.category}
                price={`₺${product.price.toLocaleString("tr-TR")}`}
                oldPrice={
                  product.oldPrice
                    ? `₺${product.oldPrice.toLocaleString("tr-TR")}`
                    : undefined
                }
                index={index}
              />
            ))}
          </div>

          {limit && sourceProducts.length > limit && !showAll && (
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAll(true)}
                className="border border-black px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] transition-colors hover:bg-black hover:text-white"
              >
                Tümünü Gör
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="py-20 text-center">
          <p className="text-sm uppercase tracking-[0.15em] text-black/40">
            Ürün bulunamadı.
          </p>
        </div>
      )}
    </section>
  );
}
