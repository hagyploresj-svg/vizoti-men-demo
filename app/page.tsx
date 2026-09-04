import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import ProductGrid from "@/components/ProductGrid";
import PromoBanner from "@/components/PromoBanner";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <CategoryGrid />

      <ProductGrid
        title="YENİ GELENLER"
        subtitle="Yeni sezonun öne çıkan parçaları."
        limit={8}
      />

      <PromoBanner />

      <ProductGrid
        title="ÇOK SATANLAR"
        subtitle="Vizoti Men seçkisinin favorileri."
        limit={8}
      />

      <section className="bg-[#f2efe8] px-6 py-28 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-black/45">
          VIZOTI MEN
        </p>

        <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-tight text-black md:text-6xl">
          Zamansız stil.
          <br />
          Modern erkek.
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-black/60">
          Günlük giyimden özel anlara kadar modern erkek stilini sade,
          güçlü ve zamansız parçalarla yeniden yorumluyoruz.
        </p>
      </section>
    </main>
  );
}
