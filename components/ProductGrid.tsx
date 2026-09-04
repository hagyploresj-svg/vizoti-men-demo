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
  const sourceProducts = products ?? allProducts;

  const visibleProducts =
    typeof limit === "number"
      ? sourceProducts.slice(0, limit)
      : sourceProducts;

  return (
    <section className="bg-[#f5f2eb] py-20 sm:py-24 lg:py-28">
      <div className="container-page">
        {(title || subtitle) && (
          <div className="mb-10 border-b border-black/10 pb-7">
            <p className="text-[10px] uppercase tracking-[0.3em] text-black/40">
              VIZOTI MEN
            </p>

            {title && (
              <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                {title}
              </h2>
            )}

            {subtitle && (
              <p className="mt-3 text-sm text-black/50">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {visibleProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 lg:grid-cols-4">
            {visibleProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                name={product.name}
                category={product.category}
                price={
                  typeof product.price === "number"
                    ? `₺${product.price.toLocaleString("tr-TR")}`
                    : product.price
                }
                oldPrice={
                  product.oldPrice
                    ? typeof product.oldPrice === "number"
                      ? `₺${product.oldPrice.toLocaleString("tr-TR")}`
                      : product.oldPrice
                    : undefined
                }
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-sm text-black/50">
              Ürün bulunamadı.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
