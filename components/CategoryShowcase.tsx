import Link from "next/link";
import Image from "next/image";
import { categories } from "@/lib/products";

export default function CategoryShowcase() {
  return (
    <section className="container-page py-16 lg:py-24">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/kategori/${c.slug}`}
            className="group relative aspect-[4/5] overflow-hidden bg-paperdim block"
          >
            <Image
              src={`https://picsum.photos/seed/master-jeans-cat-${c.slug}/700/900`}
              alt={c.name}
              fill
              sizes="(min-width: 1024px) 33vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 text-paper">
              <p className="font-display font-black text-xl lg:text-2xl">{c.name}</p>
              <span className="text-sm mt-1 inline-flex items-center gap-1.5 opacity-90 group-hover:gap-2.5 transition-all">
                Keşfet <span aria-hidden>→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
