import { notFound } from "next/navigation";
import { Metadata } from "next";
import { categories, categoryNames, getProductsByCategory } from "@/lib/products";
import CategoryExplorer from "@/components/CategoryExplorer";

const validSlugs = [...categories.map((c) => c.slug), "yeni-gelenler"];

export function generateStaticParams() {
  return validSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const name = categoryNames[params.slug];
  if (!name) return {};
  return {
    title: name,
    description: `Master Jeans ${name} koleksiyonunu keşfedin.`,
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  if (!validSlugs.includes(params.slug)) notFound();

  const name = categoryNames[params.slug];
  const products = getProductsByCategory(params.slug);

  return (
    <div className="container-page py-10 lg:py-14">
      <div className="mb-8 lg:mb-10">
        <h1 className="font-display font-black text-3xl lg:text-5xl">{name}</h1>
        <p className="text-stone mt-2">
          {params.slug === "yeni-gelenler"
            ? "Sezonun en yeni parçalarını keşfedin."
            : `Master Jeans ${name} koleksiyonu.`}
        </p>
      </div>
      <CategoryExplorer products={products} showCategoryFilter={params.slug === "yeni-gelenler"} />
    </div>
  );
}
