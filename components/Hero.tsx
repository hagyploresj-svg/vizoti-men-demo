import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-ink text-paper">
      <div className="relative h-[78vh] min-h-[520px] max-h-[860px] w-full overflow-hidden">
        <Image
          src="https://picsum.photos/seed/master-jeans-hero/1800/1200"
          alt="Master Jeans yeni sezon erkek koleksiyonu"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-ink/10" />
        <div className="container-page relative h-full flex flex-col justify-end pb-14 lg:pb-20">
          <h1 className="font-display font-black text-[13vw] sm:text-6xl lg:text-8xl leading-[0.92] tracking-tightest max-w-4xl">
            STİLİNİ YENİLE.
          </h1>
          <p className="mt-5 text-base lg:text-lg text-paper/85 max-w-md">
            Master Jeans yeni sezon erkek koleksiyonunu keşfet.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/kategori/yeni-gelenler"
              className="px-6 py-3.5 bg-paper text-ink text-sm tracking-wide hover:bg-paperdim transition-colors"
            >
              Yeni Sezonu Keşfet
            </Link>
            <Link
              href="/kategori/jean"
              className="px-6 py-3.5 border border-paper text-paper text-sm tracking-wide hover:bg-paper hover:text-ink transition-colors"
            >
              Jean Koleksiyonunu İncele
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
