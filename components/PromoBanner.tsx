import Link from "next/link";
import Image from "next/image";

export default function PromoBanner() {
  return (
    <section className="relative">
      <div className="relative h-[60vh] min-h-[420px] max-h-[640px] w-full overflow-hidden bg-ink">
        <Image
          src="https://picsum.photos/seed/master-jeans-promo/1800/1000"
          alt="Master Jeans denim koleksiyonu"
          fill
          sizes="100vw"
          className="object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/30 to-transparent" />
        <div className="container-page relative h-full flex flex-col justify-center text-paper">
          <p className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tightest max-w-lg">
            DENİMİN YENİ HALİ
          </p>
          <p className="mt-4 text-paper/85 max-w-sm">
            Master Jeans yeni sezon denim koleksiyonu.
          </p>
          <Link
            href="/kategori/jean"
            className="mt-7 w-fit px-6 py-3.5 bg-paper text-ink text-sm tracking-wide hover:bg-paperdim transition-colors"
          >
            Jean Koleksiyonunu Keşfet
          </Link>
        </div>
      </div>
    </section>
  );
}
