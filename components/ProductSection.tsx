import Link from "next/link";
import { Product } from "@/lib/types";
import ProductGrid from "./ProductGrid";

export default function ProductSection({
  title,
  subtitle,
  products,
  href,
  dark = false,
}: {
  title: string;
  subtitle?: string;
  products: Product[];
  href?: string;
  dark?: boolean;
}) {
  return (
    <section className={`py-16 lg:py-24 ${dark ? "bg-ink text-paper" : ""}`}>
      <div className="container-page">
        <div className="flex items-end justify-between mb-8 lg:mb-10">
          <div>
            <h2 className="font-display font-black text-3xl lg:text-4xl">{title}</h2>
            {subtitle && (
              <p className={`mt-2 text-sm lg:text-base ${dark ? "text-paper/70" : "text-stone"}`}>
                {subtitle}
              </p>
            )}
          </div>
          {href && (
            <Link
              href={href}
              className="hidden sm:inline-flex items-center gap-1.5 text-sm shrink-0 hover:gap-2.5 transition-all"
            >
              Tümünü Gör <span aria-hidden>→</span>
            </Link>
          )}
        </div>
        <ProductGrid products={products} />
        {href && (
          <div className="mt-10 text-center sm:hidden">
            <Link
              href={href}
              className="inline-flex items-center gap-1.5 text-sm hover:gap-2.5 transition-all"
            >
              Tümünü Gör <span aria-hidden>→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
