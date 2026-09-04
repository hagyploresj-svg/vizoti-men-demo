import { Product } from "@/lib/types";
import ProductGrid from "./ProductGrid";

export default function RelatedProducts({ products }: { products: Product[] }) {
  if (products.length === 0) return null;
  return (
    <section className="container-page py-14 lg:py-20 border-t border-line">
      <h2 className="font-display font-black text-2xl lg:text-3xl mb-8">Benzer Ürünler</h2>
      <ProductGrid products={products} />
    </section>
  );
}
