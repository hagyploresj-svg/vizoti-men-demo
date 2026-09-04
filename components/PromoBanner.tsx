import Link from "next/link";

export default function PromoBanner() {
  return (
    <section className="bg-[#172033] text-paper">
      <div className="container-page grid min-h-[460px] items-center gap-10 py-20 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-paper/50">
            MASTER JEANS / DENIM
          </p>

          <h2 className="mt-5 font-display text-5xl font-black leading-[0.9] tracking-tightest sm:text-6xl lg:text-7xl">
            DENİMİN
            <br />
            YENİ HALİ
          </h2>
        </div>

        <div className="lg:border-l lg:border-paper/15 lg:pl-12">
          <p className="max-w-md text-lg leading-relaxed text-paper/70">
            Günlük stil için yeniden yorumlanan modern kesimler,
            zamansız renkler ve güçlü denim parçalar.
          </p>

          <Link
            href="/kategori/jean"
            className="mt-8 inline-block border-b border-paper pb-2 text-sm tracking-widest"
          >
            KOLEKSİYONU KEŞFET →
          </Link>
        </div>
      </div>
    </section>
  );
}
