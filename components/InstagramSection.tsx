import Image from "next/image";

const tiles = Array.from({ length: 6 }, (_, i) => i + 1);

export default function InstagramSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page text-center mb-8 lg:mb-10">
        <h2 className="font-display font-black text-3xl lg:text-4xl">@masterjeans</h2>
        <p className="mt-2 text-stone">Stilini bizimle paylaş.</p>
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-6">
        {tiles.map((n) => (
          <a
            key={n}
            href="https://instagram.com/masterjeans"
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-square overflow-hidden group block"
          >
            <Image
              src={`https://picsum.photos/seed/master-jeans-ig-${n}/500/500`}
              alt="Master Jeans Instagram gönderisi"
              fill
              sizes="(min-width: 1024px) 16vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
