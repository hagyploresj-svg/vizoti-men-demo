import Link from "next/link";

const categories = [
  {
    title: "CEKET",
    subtitle: "Keskin çizgiler. Güçlü duruş.",
    href: "/",
  },
  {
    title: "GÖMLEK",
    subtitle: "Günlük stilin zamansız parçası.",
    href: "/",
  },
  {
    title: "PANTOLON",
    subtitle: "Modern kesimler. Rahat form.",
    href: "/",
  },
  {
    title: "TRİKO",
    subtitle: "Minimal dokular. Yeni sezon.",
    href: "/",
  },
];

export default function CategoryGrid() {
  return (
    <section className="bg-[#f5f2eb] px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto grid max-w-[1600px] gap-3 sm:grid-cols-2">
        {categories.map((category, index) => (
          <Link
            key={category.title}
            href={category.href}
            className={`group relative flex min-h-[360px] overflow-hidden p-7 transition duration-300 sm:min-h-[430px] lg:min-h-[540px] lg:p-10 ${
              index === 0
                ? "bg-[#d7d0c3]"
                : index === 1
                  ? "bg-[#1b1b1b] text-white"
                  : index === 2
                    ? "bg-[#c7c0b5]"
                    : "bg-[#2d3335] text-white"
            }`}
          >
            <div className="flex w-full flex-col justify-between">
              <div className="flex items-start justify-between">
                <span className="text-[10px] uppercase tracking-[0.28em] opacity-50">
                  0{index + 1}
                </span>

                <span className="translate-x-0 text-xl transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </div>

              <div>
                <p className="mb-3 max-w-[260px] text-sm leading-6 opacity-55">
                  {category.subtitle}
                </p>

                <h2 className="text-[13vw] font-black leading-[0.8] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
                  {category.title}
                </h2>
              </div>
            </div>

            <div className="pointer-events-none absolute right-[-5%] top-[-10%] text-[18rem] font-black leading-none opacity-[0.025] transition-transform duration-500 group-hover:scale-110">
              {category.title.charAt(0)}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
