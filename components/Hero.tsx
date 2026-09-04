import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-ink text-paper">
      <div className="container-page flex min-h-[72vh] flex-col justify-end py-16 sm:py-20 lg:min-h-[78vh] lg:py-24">
        <p className="mb-5 text-xs uppercase tracking-[0.35em] text-paper/55">
          MASTER JEANS — NEW SEASON
        </p>

        <h1 className="max-w-5xl font-display text-[16vw] font-black leading-[0.82] tracking-tightest sm:text-7xl lg:text-[7rem]">
          STİLİNİ
          <br />
          YENİLE.
        </h1>

        <div className="mt-8 max-w-xl border-t border-paper/20 pt-6">
          <p className="text-base leading-relaxed text-paper/70 lg:text-lg">
            Modern erkek stilinin güçlü, sade ve zamansız yorumu.
            Master Jeans yeni sezon koleksiyonunu keşfet.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/kategori/yeni-gelenler"
              className="bg-paper px-6 py-3.5 text-sm tracking-wide text-ink transition-colors hover:bg-paperdim"
            >
              Yeni Sezonu Keşfet
            </Link>

            <Link
              href="/kategori/jean"
              className="border border-paper/40 px-6 py-3.5 text-sm tracking-wide text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              Jean Koleksiyonu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
