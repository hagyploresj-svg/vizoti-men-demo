import type { Product } from "@/lib/types";

export const products: Product[] = [
  {
    id: "1",
    slug: "milano-ceket",
    name: "Milano Ceket",
    category: "Ceket",
    price: 4990,
    oldPrice: undefined,
    description: "Modern kesimli, şehir stiline uygun premium ceket.",
    images: [],
    color: "Siyah",
    colors: ["Siyah", "Antrasit"],
    sizes: ["S", "M", "L", "XL"],
    stock: 12,
    isNew: true,
    isFeatured: true,
  },
  {
    id: "2",
    slug: "roma-pantolon",
    name: "Roma Pantolon",
    category: "Pantolon",
    price: 2490,
    oldPrice: undefined,
    description: "Rahat kalıp, modern görünüm ve günlük kullanım için tasarlandı.",
    images: [],
    color: "Bej",
    colors: ["Bej", "Siyah"],
    sizes: ["30", "32", "34", "36"],
    stock: 16,
    isNew: true,
    isFeatured: true,
  },
  {
    id: "3",
    slug: "como-gomlek",
    name: "Como Gömlek",
    category: "Gömlek",
    price: 1990,
    oldPrice: undefined,
    description: "Minimal çizgiler ve zamansız erkek stili.",
    images: [],
    color: "Beyaz",
    colors: ["Beyaz", "Siyah"],
    sizes: ["S", "M", "L", "XL"],
    stock: 20,
    isNew: true,
    isFeatured: true,
  },
  {
    id: "4",
    slug: "siena-triko",
    name: "Siena Triko",
    category: "Triko",
    price: 2290,
    oldPrice: undefined,
    description: "Yeni sezon için sade ve güçlü triko tasarımı.",
    images: [],
    color: "Krem",
    colors: ["Krem", "Antrasit"],
    sizes: ["S", "M", "L", "XL"],
    stock: 15,
    isNew: true,
    isFeatured: true,
  },
  {
    id: "5",
    slug: "torino-blazer",
    name: "Torino Blazer",
    category: "Ceket",
    price: 5490,
    oldPrice: 6490,
    description: "Keskin silüetli modern blazer.",
    images: [],
    color: "Antrasit",
    colors: ["Antrasit", "Siyah"],
    sizes: ["S", "M", "L", "XL"],
    stock: 9,
    isNew: false,
    isFeatured: true,
  },
  {
    id: "6",
    slug: "firenze-polo",
    name: "Firenze Polo",
    category: "Triko",
    price: 1790,
    oldPrice: undefined,
    description: "Günlük kombinlere uygun modern polo.",
    images: [],
    color: "Lacivert",
    colors: ["Lacivert", "Krem"],
    sizes: ["S", "M", "L", "XL"],
    stock: 18,
    isNew: false,
    isFeatured: false,
  },
  {
    id: "7",
    slug: "napoli-overshirt",
    name: "Napoli Overshirt",
    category: "Ceket",
    price: 3490,
    oldPrice: undefined,
    description: "Katmanlı kombinler için modern overshirt.",
    images: [],
    color: "Kahve",
    colors: ["Kahve", "Siyah"],
    sizes: ["S", "M", "L", "XL"],
    stock: 14,
    isNew: true,
    isFeatured: false,
  },
  {
    id: "8",
    slug: "venezia-pantolon",
    name: "Venezia Pantolon",
    category: "Pantolon",
    price: 2690,
    oldPrice: undefined,
    description: "Rahat ama şık şehir pantolonu.",
    images: [],
    color: "Siyah",
    colors: ["Siyah", "Bej"],
    sizes: ["30", "32", "34", "36"],
    stock: 17,
    isNew: false,
    isFeatured: false,
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

  const categoryName = categoryNames[slug];

  if (!categoryName) {
    return [];
  }

  return products.filter(
    (product) =>
      product.category.toLocaleLowerCase("tr-TR") ===
      categoryName.toLocaleLowerCase("tr-TR")
  );
}

export function searchProducts(query: string): Product[] {
  const normalizedQuery = query.trim().toLocaleLowerCase("tr-TR");

  if (!normalizedQuery) {
    return products;
  }

  return products.filter((product) => {
    return (
      product.name.toLocaleLowerCase("tr-TR").includes(normalizedQuery) ||
      product.category.toLocaleLowerCase("tr-TR").includes(normalizedQuery)
    );
  });
}
export function getProductBySlug(slug: string): Product | undefined {
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
