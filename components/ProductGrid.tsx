import ProductCard from "@/components/ProductCard";
import { products as allProducts, type Product } from "@/lib/products";

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
            {title && (
              <h2 className="text-4xl font-black tracking-[-0.05em] sm:text-5xl">
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
