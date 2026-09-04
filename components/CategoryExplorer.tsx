"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { Product } from "@/lib/types";
import { categories } from "@/lib/products";
import ProductGrid from "./ProductGrid";

type SortKey = "onerilen" | "yeni" | "fiyat-artan" | "fiyat-azalan";

const sortOptions: { key: SortKey; label: string }[] = [
  { key: "onerilen", label: "Önerilen" },
  { key: "yeni", label: "Yeni Gelenler" },
  { key: "fiyat-artan", label: "Fiyat: Düşükten Yükseğe" },
  { key: "fiyat-azalan", label: "Fiyat: Yüksekten Düşüğe" },
];

const priceBuckets = [
  { key: "0-500", label: "0 - 500 TL", test: (p: number) => p < 500 },
  { key: "500-1000", label: "500 - 1.000 TL", test: (p: number) => p >= 500 && p < 1000 },
  { key: "1000-2000", label: "1.000 - 2.000 TL", test: (p: number) => p >= 1000 && p < 2000 },
  { key: "2000+", label: "2.000 TL ve üzeri", test: (p: number) => p >= 2000 },
];

export default function CategoryExplorer({
  products,
  showCategoryFilter = false,
}: {
  products: Product[];
  showCategoryFilter?: boolean;
}) {
  const [sort, setSort] = useState<SortKey>("onerilen");
  const [sizeFilter, setSizeFilter] = useState<string[]>([]);
  const [colorFilter, setColorFilter] = useState<string[]>([]);
  const [priceFilter, setPriceFilter] = useState<string[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<string[]>([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const allSizes = useMemo(
    () => Array.from(new Set(products.flatMap((p) => p.sizes))).sort(),
    [products]
  );
  const allColors = useMemo(
    () => Array.from(new Set(products.map((p) => p.colorName))).sort(),
    [products]
  );

  function toggle(list: string[], value: string, setter: (v: string[]) => void) {
    setter(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  }

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      if (categoryFilter.length && !categoryFilter.includes(p.category)) return false;
      if (sizeFilter.length && !p.sizes.some((s) => sizeFilter.includes(s))) return false;
      if (colorFilter.length && !colorFilter.includes(p.colorName)) return false;
      if (priceFilter.length) {
        const matches = priceBuckets.some(
          (b) => priceFilter.includes(b.key) && b.test(p.price)
        );
        if (!matches) return false;
      }
      return true;
    });

    switch (sort) {
      case "yeni":
        result = [...result].sort((a, b) => Number(b.isNew) - Number(a.isNew));
        break;
      case "fiyat-artan":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "fiyat-azalan":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    return result;
  }, [products, sort, sizeFilter, colorFilter, priceFilter, categoryFilter]);

  const activeCount =
    sizeFilter.length + colorFilter.length + priceFilter.length + categoryFilter.length;

  function clearAll() {
    setSizeFilter([]);
    setColorFilter([]);
    setPriceFilter([]);
    setCategoryFilter([]);
  }

  const filterContent = (
    <div className="space-y-8">
      {showCategoryFilter && (
        <div>
          <p className="text-sm font-medium mb-3">Kategori</p>
          <div className="space-y-2">
            {categories.map((c) => (
              <label key={c.slug} className="flex items-center gap-2.5 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  className="accent-ink"
                  checked={categoryFilter.includes(c.slug)}
                  onChange={() => toggle(categoryFilter, c.slug, setCategoryFilter)}
                />
                {c.name}
              </label>
            ))}
          </div>
        </div>
      )}

      <div>
        <p className="text-sm font-medium mb-3">Beden</p>
        <div className="flex flex-wrap gap-2">
          {allSizes.map((s) => (
            <button
              key={s}
              onClick={() => toggle(sizeFilter, s, setSizeFilter)}
              className={`min-w-[40px] h-9 px-2 text-xs border transition-colors ${
                sizeFilter.includes(s) ? "border-ink bg-ink text-paper" : "border-line hover:border-ink"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-medium mb-3">Renk</p>
        <div className="space-y-2">
          {allColors.map((c) => (
            <label key={c} className="flex items-center gap-2.5 text-sm cursor-pointer">
              <input
                type="checkbox"
                className="accent-ink"
                checked={colorFilter.includes(c)}
                onChange={() => toggle(colorFilter, c, setColorFilter)}
              />
              {c}
            </label>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-medium mb-3">Fiyat</p>
        <div className="space-y-2">
          {priceBuckets.map((b) => (
            <label key={b.key} className="flex items-center gap-2.5 text-sm cursor-pointer">
              <input
                type="checkbox"
                className="accent-ink"
                checked={priceFilter.includes(b.key)}
                onChange={() => toggle(priceFilter, b.key, setPriceFilter)}
              />
              {b.label}
            </label>
          ))}
        </div>
      </div>

      {activeCount > 0 && (
        <button onClick={clearAll} className="text-sm underline underline-offset-4 text-stone hover:text-ink">
          Filtreleri Temizle
        </button>
      )}
    </div>
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-8 gap-4">
        <button
          onClick={() => setMobileFiltersOpen(true)}
          className="lg:hidden inline-flex items-center gap-2 border border-ink px-4 py-2.5 text-sm"
        >
          <SlidersHorizontal size={15} strokeWidth={1.5} />
          Filtrele {activeCount > 0 && `(${activeCount})`}
        </button>
        <p className="text-sm text-stone hidden lg:block">{filtered.length} ürün</p>
        <label className="flex items-center gap-2 text-sm ml-auto">
          <span className="hidden sm:inline text-stone">Sırala:</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="border border-line bg-paper px-3 py-2.5 text-sm outline-none focus:border-ink"
          >
            {sortOptions.map((o) => (
              <option key={o.key} value={o.key}>
                {o.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10">
        <aside className="hidden lg:block">{filterContent}</aside>
        <div>
          <ProductGrid products={filtered} />
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 lg:hidden ${mobileFiltersOpen ? "" : "pointer-events-none"}`}
        aria-hidden={!mobileFiltersOpen}
      >
        <div
          className={`absolute inset-0 bg-ink/50 transition-opacity duration-300 ${
            mobileFiltersOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={`absolute bottom-0 left-0 right-0 bg-paper rounded-t-lg max-h-[85vh] flex flex-col transition-transform duration-300 ease-out ${
            mobileFiltersOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="flex items-center justify-between px-5 h-16 border-b border-line shrink-0">
            <p className="font-medium">Filtrele</p>
            <button onClick={() => setMobileFiltersOpen(false)} aria-label="Kapat" className="p-2 -mr-2">
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>
          <div className="p-5 overflow-y-auto">{filterContent}</div>
          <div className="p-5 border-t border-line shrink-0">
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full py-3.5 bg-ink text-paper text-sm tracking-wide"
            >
              {filtered.length} Ürünü Göster
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
