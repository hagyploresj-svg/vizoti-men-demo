import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#111111] text-[#f5f2eb]">
      <div className="container-page flex min-h-[78vh] flex-col justify-between py-10 sm:py-14 lg:min-h-[86vh] lg:py-16">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-white/45">
          <span>VIZOTI MEN</span>
          <span>2026 / NEW SEASON</span>
        </div>

        <div className="grid items-end gap-12 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <p className="mb-6 text-[11px] uppercase tracking-[0.35em] text-white/45">
              Modern Menswear
            </p>

            <h1 className="max-w-5xl text-[18vw] font-black leading-[0.78] tracking-[-0.07em] sm:text-[7rem] lg:text-[9rem]">
              NEW
              <br />
              FORM.
            </h1>
          </div>

          <div className="max-w-md border-t border-white/20 pt-6 lg:mb-3">
            <p className="text-base leading-7 text-white/65">
              Şehir hayatına uyum sağlayan modern kesimler, güçlü silüetler ve
              zamansız parçalar.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex min-h-[48px] items-center justify-center bg-[#f5f2eb] px-6 text-xs font-medium tracking-[0.14em] text-[#111111] transition hover:bg-white"
              >
                YENİ KOLEKSİYON
              </Link>

              <Link
                href="/"
                className="inline-flex min-h-[48px] items-center justify-center border border-white/30 px-6 text-xs font-medium tracking-[0.14em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                LOOKBOOK
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-end justify-between border-t border-white/15 pt-5 text-[9px] uppercase tracking-[0.24em] text-white/35">
          <span>Contemporary Menswear</span>
          <span>Scroll ↓</span>
        </div>
      </div>

      <div className="pointer-events-none absolute right-[-7%] top-[18%] hidden text-[20rem] font-black leading-none text-white/[0.018] xl:block">
        V
      </div>
    </section>
  );
}
