import Hero from "@/components/Hero";
import CategoryShowcase from "@/components/CategoryShowcase";
import ProductSection from "@/components/ProductSection";
import PromoBanner from "@/components/PromoBanner";
import WhyMasterJeans from "@/components/WhyMasterJeans";
import InstagramSection from "@/components/InstagramSection";
import { getBestSellers, getNewArrivals } from "@/lib/products";

export default function HomePage() {
  const bestSellers = getBestSellers(8);
  const newArrivals = getNewArrivals(8);

  return (
    <>
      <Hero />
      <CategoryShowcase />
      <ProductSection
        title="Çok Satanlar"
        subtitle="Sezonun en çok tercih edilen parçaları."
        products={bestSellers}
        href="/kategori/yeni-gelenler"
      />
      <PromoBanner />
      <ProductSection
        title="Yeni Gelenler"
        products={newArrivals}
        href="/kategori/yeni-gelenler"
      />
      <WhyMasterJeans />
      <InstagramSection />
    </>
  );
}
