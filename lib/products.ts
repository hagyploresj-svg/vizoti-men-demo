import type { Product } from "@/lib/types";

export const products: Product[] = [
  {
    id: "1",
    slug: "milano-ceket",
    name: "Milano Ceket",
    description: "Modern kesimli, şehir stiline uygun premium ceket.",
    price: 4990,
    images: [],
    category: "ceket",
    color: "#111111",
    colorName: "Siyah",
    sizes: ["S", "M", "L", "XL"],
    soldOutSizes: [],
    isNew: true,
    isBestSeller: true,
    fabric: "Premium dokulu kumaş",
    care: "Kuru temizleme önerilir.",
  },

  {
    id: "2",
    slug: "roma-pantolon",
    name: "Roma Pantolon",
    description:
      "Rahat kalıp ve modern görünümü bir araya getiren şehir pantolonu.",
    price: 2490,
    images: [],
    category: "alt-giyim",
    color: "#C8B89A",
    colorName: "Bej",
    sizes: ["30", "32", "34", "36"],
    soldOutSizes: [],
    isNew: true,
    isBestSeller: true,
    fabric: "Pamuk karışımlı premium kumaş",
    care: "30°C hassas programda yıkama önerilir.",
  },

  {
    id: "3",
    slug: "como-gomlek",
    name: "Como Gömlek",
    description: "Minimal çizgilere sahip zamansız erkek gömleği.",
    price: 1990,
    images: [],
    category: "gomlek",
    color: "#F1F0EB",
    colorName: "Beyaz",
    sizes: ["S", "M", "L", "XL"],
    soldOutSizes: [],
    isNew: true,
    isBestSeller: false,
    fabric: "%100 pamuk",
    care: "30°C makinede yıkama önerilir.",
  },

  {
    id: "4",
    slug: "siena-triko",
    name: "Siena Triko",
    description:
      "Yumuşak dokusu ve minimal çizgileriyle yeni sezon triko.",
    price: 2290,
    images: [],
    category: "tshirt",
    color: "#E3DBCE",
    colorName: "Krem",
    sizes: ["S", "M", "L", "XL"],
    soldOutSizes: ["S"],
    isNew: true,
    isBestSeller: true,
    fabric: "Yumuşak dokulu premium triko",
    care: "Düşük ısıda hassas yıkama önerilir.",
  },

  {
    id: "5",
    slug: "torino-blazer",
    name: "Torino Blazer",
    description:
      "Keskin silüetiyle modern erkek stilini tamamlayan blazer.",
    price: 5490,
    oldPrice: 6490,
    images: [],
    category: "ceket",
    color: "#343434",
    colorName: "Antrasit",
    sizes: ["S", "M", "L", "XL"],
    soldOutSizes: ["XL"],
    isNew: false,
    isBestSeller: true,
    discount: 15,
    fabric: "Premium yün karışımlı kumaş",
    care: "Kuru temizleme önerilir.",
  },

  {
    id: "6",
    slug: "firenze-polo",
    name: "Firenze Polo",
    description:
      "Günlük kombinlere uyum sağlayan modern kesimli polo.",
    price: 1790,
    images: [],
    category: "tshirt",
    color: "#172033",
    colorName: "Lacivert",
    sizes: ["S", "M", "L", "XL"],
    soldOutSizes: [],
    isNew: false,
    isBestSeller: false,
    fabric: "Pamuk ve viskon karışımı",
    care: "30°C hassas yıkama önerilir.",
  },

  {
    id: "7",
    slug: "napoli-overshirt",
    name: "Napoli Overshirt",
    description:
      "Katmanlı şehir kombinleri için tasarlanmış modern overshirt.",
    price: 3490,
    images: [],
    category: "ceket",
    color: "#665244",
    colorName: "Kahve",
    sizes: ["S", "M", "L", "XL"],
    soldOutSizes: ["M"],
    isNew: true,
    isBestSeller: false,
    fabric: "Pamuk karışımlı dokulu kumaş",
    care: "30°C hassas programda yıkama önerilir.",
  },

  {
    id: "8",
    slug: "venezia-pantolon",
    name: "Venezia Pantolon",
    description:
      "Rahat kalıp ve şık görünümü bir araya getiren modern pantolon.",
    price: 2690,
    images: [],
    category: "alt-giyim",
    color: "#111111",
    colorName: "Siyah",
    sizes: ["30", "32", "34", "36"],
    soldOutSizes: [],
    isNew: false,
    isBestSeller: true,
    fabric: "Premium pamuk karışımlı kumaş",
    care: "30°C hassas yıkama önerilir.",
  },

  {
    id: "9",
    slug: "monaco-takim",
    name: "Monaco Takım",
    description:
      "Modern kalıbı ve güçlü silüetiyle premium iki parçalı takım.",
    price: 7990,
    images: [],
    category: "takim",
    color: "#252525",
    colorName: "Füme",
    sizes: ["46", "48", "50", "52", "54"],
    soldOutSizes: [],
    isNew: true,
    isBestSeller: true,
    fabric: "Premium yün karışımlı takım kumaşı",
    care: "Yalnızca kuru temizleme önerilir.",
  },

  {
    id: "10",
    slug: "capri-denim",
    name: "Capri Denim",
    description:
      "Modern kesimli, günlük kullanıma uygun premium denim pantolon.",
    price: 2890,
    images: [],
    category: "jean",
    color: "#26394E",
    colorName: "Koyu Mavi",
    sizes: ["30", "32", "34", "36"],
    soldOutSizes: ["36"],
    isNew: true,
    isBestSeller: true,
    fabric: "Premium pamuk denim",
    care: "Ters çevirerek 30°C'de yıkama önerilir.",
  },

  {
    id: "11",
    slug: "verona-gomlek",
    name: "Verona Gömlek",
    description:
      "Rahat kalıbı ve sade tasarımıyla modern günlük gömlek.",
    price: 2190,
    images: [],
    category: "gomlek",
    color: "#B8B3A9",
    colorName: "Taş",
    sizes: ["S", "M", "L", "XL"],
    soldOutSizes: [],
    isNew: false,
    isBestSeller: false,
    fabric: "%100 pamuk",
    care: "30°C makinede yıkama önerilir.",
  },

  {
    id: "12",
    slug: "bari-triko-polo",
    name: "Bari Triko Polo",
    description:
      "Minimal tasarımıyla günlük ve akşam kombinlerine uyum sağlayan polo.",
    price: 1990,
    images: [],
    category: "tshirt",
    color: "#D4CCBD",
    colorName: "Kum",
    sizes: ["S", "M", "L", "XL"],
    soldOutSizes: [],
    isNew: true,
    isBestSeller: false,
    fabric: "İnce pamuk triko",
    care: "Hassas programda düşük ısıda yıkama önerilir.",
  },
];

export const categories = [
  {
    slug: "jean" as const,
    name: "Jean",
  },
  {
    slug: "tshirt" as const,
    name: "Triko & Polo",
  },
  {
    slug: "gomlek" as const,
    name: "Gömlek",
  },
  {
    slug: "ceket" as const,
    name: "Ceket",
  },
  {
    slug: "takim" as const,
    name: "Takım Elbise",
  },
  {
    slug: "alt-giyim" as const,
    name: "Pantolon",
  },
];

export const categoryNames: Record<string, string> = {
  jean: "Jean",
  tshirt: "Triko & Polo",
  gomlek: "Gömlek",
  ceket: "Ceket",
  takim: "Takım Elbise",
  "alt-giyim": "Pantolon",
  "yeni-gelenler": "Yeni Gelenler",
};

export function getProductsByCategory(slug: string): Product[] {
  if (slug === "yeni-gelenler") {
    return products.filter((product) => product.isNew);
  }

  return products.filter((product) => product.category === slug);
}

export function searchProducts(query: string): Product[] {
  const q = query.trim().toLocaleLowerCase("tr-TR");

  if (!q) {
    return products;
  }

  return products.filter((product) => {
    const name = product.name.toLocaleLowerCase("tr-TR");
    const description = product.description.toLocaleLowerCase("tr-TR");
    const category = product.category.toLocaleLowerCase("tr-TR");
    const color = product.colorName.toLocaleLowerCase("tr-TR");

    return (
      name.includes(q) ||
      description.includes(q) ||
      category.includes(q) ||
      color.includes(q)
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
