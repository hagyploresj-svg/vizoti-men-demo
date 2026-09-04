"use client";

import { useSearchParams } from "next/navigation";
import { searchProducts } from "@/lib/products";
import ProductGrid from "@/components/ProductGrid";

export default function SearchResultsClient() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const results = searchProducts(query);

  return (
    <div className="container-page py-10 lg:py-14">
      <h1 className="font-display font-black text-3xl lg:text-4xl mb-2">Arama Sonuçları</h1>
      <p className="text-stone mb-8 lg:mb-10">
        {query
          ? `"${query}" için ${results.length} sonuç bulundu.`
          : "Aramak için bir kelime girin."}
      </p>
      <ProductGrid products={results} />
    </div>
  );
}
