export type Product = {
  id: number;
  name: string;
  category: string;
  price: string;
  oldPrice?: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Milano Ceket",
    category: "Ceket",
    price: "₺4.990",
  },
  {
    id: 2,
    name: "Roma Pantolon",
    category: "Pantolon",
    price: "₺2.490",
  },
  {
    id: 3,
    name: "Como Gömlek",
    category: "Gömlek",
    price: "₺1.990",
  },
  {
    id: 4,
    name: "Siena Triko",
    category: "Triko",
    price: "₺2.290",
  },
  {
    id: 5,
    name: "Torino Blazer",
    category: "Ceket",
    price: "₺5.490",
    oldPrice: "₺6.490",
  },
  {
    id: 6,
    name: "Firenze Polo",
    category: "Triko",
    price: "₺1.790",
  },
  {
    id: 7,
    name: "Napoli Overshirt",
    category: "Ceket",
    price: "₺3.490",
  },
  {
    id: 8,
    name: "Venezia Pantolon",
    category: "Pantolon",
    price: "₺2.690",
  },
  {
    id: 9,
    name: "Capri Gömlek",
    category: "Gömlek",
    price: "₺2.190",
  },
  {
    id: 10,
    name: "Monaco Ceket",
    category: "Ceket",
    price: "₺5.990",
  },
  {
    id: 11,
    name: "Bari Polo",
    category: "Triko",
    price: "₺1.890",
  },
  {
    id: 12,
    name: "Verona Pantolon",
    category: "Pantolon",
    price: "₺2.790",
  },
  {
    id: 13,
    name: "Floransa Gömlek",
    category: "Gömlek",
    price: "₺2.290",
  },
  {
    id: 14,
    name: "Lazio Triko",
    category: "Triko",
    price: "₺2.490",
  },
  {
    id: 15,
    name: "Pisa Ceket",
    category: "Ceket",
    price: "₺4.790",
  },
  {
    id: 16,
    name: "Como Relaxed Pantolon",
    category: "Pantolon",
    price: "₺2.590",
  },
];

export const categories = [
  {
    slug: "ceket",
    name: "Ceket",
  },
  {
    slug: "gomlek",
    name: "Gömlek",
  },
  {
    slug: "pantolon",
    name: "Pantolon",
  },
  {
    slug: "triko",
    name: "Triko",
  },
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
