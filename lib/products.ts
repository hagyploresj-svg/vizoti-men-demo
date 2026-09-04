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
