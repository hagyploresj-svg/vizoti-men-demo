import type { Product } from "@/lib/types";

export const products: Product[] = [
  {
    id: "1",
    slug: "milano-ceket",
    name: "Milano Ceket",
    category: "ceket",
    price: 4990,
    description: "Modern kesimli, şehir stiline uygun premium ceket.",
    images: [],
    color: "#111111",
    colorName: "Siyah",
    sizes: ["S", "M", "L", "XL"],
    soldOutSizes: [],
    isNew: true,
    isBestSeller: true,
    fabric: "Premium dokulu kumaş",
    care: "30°C hassas yıkama önerilir.",
  },
  {
    id: "2",
    slug: "roma-pantolon",
    name: "Roma Pantolon",
    category: "pantolon",
    price: 2490,
    description:
      "Rahat kalıp ve modern görünümü bir araya getiren şehir pantolonu.",
    images: [],
    color: "#C8B89A",
    colorName: "Bej",
    sizes: ["30", "32", "34", "36"],
    soldOutSizes: [],
    isNew: true,
    isBestSeller: true,
    fabric: "Pamuk karışımlı premium kumaş",
    care: "30°C hassas yıkama önerilir.",
  },
  {
    id: "3",
    slug: "como-gomlek",
    name: "Como Gömlek",
    category: "gomlek",
    price: 1990,
    description: "Minimal çizgilere sahip zamansız erkek gömleği.",
    images: [],
    color: "#F4F4F0",
    colorName: "Beyaz",
    sizes: ["S", "M", "L", "XL"],
    soldOutSizes: [],
    isNew: true,
    isBestSeller: false,
    fabric: "%100 pamuk",
    care: "30°C makinede yıkama.",
  },
  {
    id: "4",
    slug: "siena-triko",
    name: "Siena Triko",
    category: "triko",
    price: 2290,
    description: "Yeni sezon için sade ve güçlü triko tasarımı.",
    images: [],
    color: "#E8DFD0",
    colorName: "Krem",
    sizes: ["S", "M", "L", "XL"],
    soldOutSizes: ["S"],
    isNew: true,
    isBestSeller: true,
    fabric: "Yumuşak dokulu triko karışımı",
    care: "Düşük ısıda hassas yıkama.",
  },
  {
    id: "5",
    slug: "torino-blazer",
    name: "Torino Blazer",
    category: "ceket",
    price: 5490,
    oldPrice: 6490,
    description:
      "Keskin silüetiyle modern erkek stilini tamamlayan blazer.",
    images: [],
    color: "#343434",
    colorName: "Antrasit",
    sizes: ["S", "M", "L", "XL"],
    soldOutSizes: ["XL"],
    isNew: false,
    isBestSeller: true,
    fabric: "Premium yün karışımlı kumaş",
    care: "Kuru temizleme önerilir.",
  },
  {
    id: "6",
    slug: "firenze-polo",
    name: "Firenze Polo",
    category: "triko",
    price: 1790,
    description: "Günlük kombinlere uyum sağlayan modern polo.",
    images: [],
    color: "#172033",
    colorName: "Lacivert",
    sizes: ["S", "M", "L", "XL"],
    soldOutSizes: [],
    isNew: false,
    isBestSeller: false,
    fabric: "Pamuk ve viskon karışımı",
    care: "30°C hassas yıkama.",
  },
  {
    id: "7",
    slug: "napoli-overshirt",
    name: "Napoli Overshirt",
    category: "ceket",
    price: 3490,
    description:
      "Katmanlı şehir kombinleri için tasarlanmış modern overshirt.",
    images: [],
    color: "#665244",
    colorName: "Kahve",
    sizes: ["S", "M", "L", "XL"],
    soldOutSizes: ["M"],
    isNew: true,
    isBestSeller: false,
    fabric: "Pamuk karışımlı dokulu kumaş",
    care: "30°C hassas programda yıkama.",
  },
  {
    id: "8",
    slug: "venezia-pantolon",
    name: "Venezia Pantolon",
    category: "pantolon",
    price: 2690,
    description:
      "Rahat kalıp ve şık görünümü bir araya getiren modern pantolon.",
    images: [],
    color: "#111111",
    colorName: "Siyah",
    sizes: ["30", "32", "34", "36"],
    soldOutSizes: [],
    isNew: false,
    isBestSeller: true,
    fabric: "Premium pamuk karışımlı kumaş",
    care: "30°C hassas yıkama önerilir.",
  },
];

export const categories = [
  { slug: "ceket", name: "Ceket" },
  { slug: "gomlek", name: "Gömlek" },
  { slug: "pantolon", name: "Pantolon" },
  { slug: "triko", name: "Triko" },
];

export const categoryNames: Record<string, string> = {
  ceket: "Ceket",
  gomlek: "Gömlek",
  pantolon: "Pantolon",
  triko: "Triko",
  "yeni-gelenler": "Yeni Gelenler",
};

export function getProductsByCategory(slug: string): Product[] {
  if (slug === "yeni-gelenler") {
    return products;
  }

  return products.filter((product) => product.category === slug);
}

export function searchProducts(query: string): Product[] {
  const q = query.trim().toLocaleLowerCase("tr-TR");

  if (!q) {
    return products;
  }

  return products.filter((product) => {
    return (
      product.name.toLocaleLowerCase("tr-TR").includes(q) ||
      product.category.toLocaleLowerCase("tr-TR").includes(q) ||
      product.colorName.toLocaleLowerCase("tr-TR").includes(q)
    );
  });
}

export function getProductBySlug(
  slug: string
): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(
  product: Product,
  limit = 4
): Product[] {
  return products
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, limit);
}
