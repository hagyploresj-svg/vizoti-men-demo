import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

type ProductGridProps = {
  title: string;
  subtitle?: string;
  limit?: number;
};

export default function ProductGrid({
  title,
  subtitle,
  limit = 8,
}: ProductGridProps) {
  const visibleProducts = products.slice(0, limit);

  return (
    <section className="bg-[#f5f2eb] py-20 sm:py-24 lg:py-28">
      <div className="container-page">
        <div className="mb-10 flex flex-col gap-5 border-b border-black/10 pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-black/40">
              VIZOTI MEN
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              {title}
            </h2>

            {subtitle && (
              <p className="mt-3 text-sm text-black/50">
                {subtitle}
              </p>
            )}
          </div>

          <button
            type="button"
            className="w-fit border-b border-black pb-1 text-[11px] uppercase tracking-[0.18em]"
          >
            TÜMÜNÜ GÖR →
          </button>
        </div>

        <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 lg:grid-cols-4">
          {visibleProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              oldPrice={product.oldPrice}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
