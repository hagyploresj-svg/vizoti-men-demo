import type { Product } from "@/lib/types";

export const products: Product[] = [
  {
    id: "1",
    slug: "milano-ceket",
    name: "Milano Ceket",
    category: "ceket",
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
    category: "pantolon",
    price: 2490,
    oldPrice: undefined,
    description: "Rahat kalıp ve modern görünümü bir araya getiren şehir pantolonu.",
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
    category: "gomlek",
    price: 1990,
    oldPrice: undefined,
    description: "Minimal çizgilere sahip zamansız erkek gömleği.",
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
    category: "triko",
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
    category: "ceket",
    price: 5490,
    oldPrice: 6490,
    description: "Keskin silüetiyle modern erkek stilini tamamlayan blazer.",
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
    category: "triko",
    price: 1790,
    oldPrice: undefined,
    description: "Günlük kombinlere uyum sağlayan modern polo.",
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
    category: "ceket",
    price: 3490,
    oldPrice: undefined,
    description: "Katmanlı şehir kombinleri için tasarlanmış modern overshirt.",
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
    category: "pantolon",
    price: 2690,
    oldPrice: undefined,
    description: "Rahat kalıp ve şık görünümü bir araya getiren pantolon.",
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

  return products.filter((product) => product.category === slug);
}

export function searchProducts(query: string): Product[] {
  const normalizedQuery = query
    .trim()
    .toLocaleLowerCase("tr-TR");

  if (!normalizedQuery) {
    return products;
  }

  return products.filter((product) => {
    const productName = product.name.toLocaleLowerCase("tr-TR");
    const productCategory = product.category.toLocaleLowerCase("tr-TR");

    return (
      productName.includes(normalizedQuery) ||
      productCategory.includes(normalizedQuery)
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
