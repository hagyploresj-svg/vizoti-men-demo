import { Category, Product } from "./types";

export const categories: Category[] = [
  { slug: "jean", name: "Jean", image: "/images/categories/jean.jpg" },
  { slug: "tshirt", name: "T-Shirt", image: "/images/categories/tshirt.jpg" },
  { slug: "gomlek", name: "Gömlek", image: "/images/categories/gomlek.jpg" },
  { slug: "ceket", name: "Ceket", image: "/images/categories/ceket.jpg" },
  { slug: "takim", name: "Takım", image: "/images/categories/takim.jpg" },
  { slug: "alt-giyim", name: "Alt Giyim", image: "/images/categories/alt-giyim.jpg" },
];

export const categoryNames: Record<string, string> = {
  ...Object.fromEntries(categories.map((c) => [c.slug, c.name])),
  "yeni-gelenler": "Yeni Gelenler",
};

function img(seed: string, variant: number) {
  return `https://picsum.photos/seed/master-jeans-${seed}-${variant}/900/1200`;
}

export const products: Product[] = [
  // ---- JEAN ----
  {
    id: "p01",
    slug: "master-premium-slim-jean",
    name: "Master Premium Slim Jean",
    description:
      "Vücudu saran modern kesimi ve hafif esneyen kumaşı ile gün boyu konfor sağlayan premium slim jean. Günlük kombinlerin vazgeçilmezi.",
    price: 1249,
    oldPrice: 1549,
    images: [img("slim-jean", 1), img("slim-jean", 2)],
    category: "jean",
    color: "#2B4A6F",
    colorName: "Koyu Mavi",
    sizes: ["29", "30", "31", "32", "33", "34", "36"],
    soldOutSizes: ["29"],
    isNew: false,
    isBestSeller: true,
    discount: 19,
    fabric: "%98 Pamuk, %2 Elastan",
    care: "30°C'de yıkayın, ters çevirerek yıkayın, ağartıcı kullanmayın.",
  },
  {
    id: "p02",
    slug: "master-comfort-straight-jean",
    name: "Master Comfort Straight Jean",
    description:
      "Rahat kalıbı ile klasik bir duruş sunan straight fit jean. Ofisten hafta sonuna her ana uyum sağlar.",
    price: 1099,
    images: [img("straight-jean", 1), img("straight-jean", 2)],
    category: "jean",
    color: "#3C5A7A",
    colorName: "Orta Mavi",
    sizes: ["30", "31", "32", "33", "34", "36", "38"],
    soldOutSizes: [],
    isNew: true,
    isBestSeller: false,
    fabric: "%100 Pamuk",
    care: "30°C'de yıkayın, düşük ısıda ütüleyin.",
  },
  {
    id: "p03",
    slug: "master-black-denim",
    name: "Master Black Denim",
    description:
      "Yıkamalı siyah tonu ve slim tapered kalıbıyla şehir stiline modern bir dokunuş katan denim pantolon.",
    price: 1199,
    images: [img("black-denim", 1), img("black-denim", 2)],
    category: "jean",
    color: "#1C1B1A",
    colorName: "Siyah",
    sizes: ["29", "30", "31", "32", "33", "34"],
    soldOutSizes: ["34"],
    isNew: false,
    isBestSeller: true,
    fabric: "%97 Pamuk, %3 Elastan",
    care: "30°C'de ters çevirerek yıkayın.",
  },
  {
    id: "p04",
    slug: "master-relaxed-wide-jean",
    name: "Master Relaxed Wide Jean",
    description:
      "Bol kesimi ve rahat düşüşü ile sokak stilini önceleyen wide leg jean.",
    price: 1349,
    images: [img("wide-jean", 1), img("wide-jean", 2)],
    category: "jean",
    color: "#4E6E8E",
    colorName: "Açık Mavi",
    sizes: ["30", "31", "32", "33", "34", "36"],
    soldOutSizes: [],
    isNew: true,
    isBestSeller: false,
    fabric: "%99 Pamuk, %1 Elastan",
    care: "30°C'de yıkayın, kurutma makinesi kullanmayın.",
  },
  // ---- T-SHIRT ----
  {
    id: "p05",
    slug: "master-essential-oversize-tshirt",
    name: "Master Essential Oversize T-Shirt",
    description:
      "Ağır gramajlı pamuklu kumaşı ve oversize kalıbı ile günlük kullanım için tasarlanan temel t-shirt.",
    price: 449,
    oldPrice: 599,
    images: [img("oversize-tee", 1), img("oversize-tee", 2)],
    category: "tshirt",
    color: "#0E0E10",
    colorName: "Siyah",
    sizes: ["S", "M", "L", "XL", "XXL"],
    soldOutSizes: [],
    isNew: false,
    isBestSeller: true,
    discount: 25,
    fabric: "%100 Organik Pamuk",
    care: "30°C'de yıkayın, düşük ısıda kurutun.",
  },
  {
    id: "p06",
    slug: "master-premium-basic-tshirt",
    name: "Master Premium Basic T-Shirt",
    description:
      "Yumuşak dokusu ve düzgün kalıbıyla gardırobun temel taşı olacak premium basic t-shirt.",
    price: 399,
    images: [img("basic-tee", 1), img("basic-tee", 2)],
    category: "tshirt",
    color: "#F5F3EF",
    colorName: "Ekru",
    sizes: ["S", "M", "L", "XL"],
    soldOutSizes: ["S"],
    isNew: false,
    isBestSeller: true,
    fabric: "%100 Pamuk",
    care: "30°C'de yıkayın.",
  },
  {
    id: "p07",
    slug: "master-ribbed-tshirt",
    name: "Master Ribbed T-Shirt",
    description:
      "Fitilli dokusu ile modern siluet sunan slim fit t-shirt.",
    price: 429,
    images: [img("ribbed-tee", 1), img("ribbed-tee", 2)],
    category: "tshirt",
    color: "#1C1B1A",
    colorName: "Antrasit",
    sizes: ["S", "M", "L", "XL"],
    soldOutSizes: [],
    isNew: true,
    isBestSeller: false,
    fabric: "%95 Pamuk, %5 Elastan",
    care: "30°C'de ters çevirerek yıkayın.",
  },
  {
    id: "p08",
    slug: "master-pocket-tshirt",
    name: "Master Pocket T-Shirt",
    description:
      "Göğüs cebi detayı ile sade ama karakterli bir günlük t-shirt.",
    price: 419,
    images: [img("pocket-tee", 1), img("pocket-tee", 2)],
    category: "tshirt",
    color: "#5C7C9C",
    colorName: "Denim Mavi",
    sizes: ["S", "M", "L", "XL", "XXL"],
    soldOutSizes: [],
    isNew: false,
    isBestSeller: false,
    fabric: "%100 Pamuk",
    care: "30°C'de yıkayın.",
  },
  // ---- GÖMLEK ----
  {
    id: "p09",
    slug: "master-oxford-casual-shirt",
    name: "Master Oxford Casual Shirt",
    description:
      "Oxford dokuma kumaşı ile hem gündelik hem şık kombinlere uyum sağlayan casual gömlek.",
    price: 999,
    images: [img("oxford-shirt", 1), img("oxford-shirt", 2)],
    category: "gomlek",
    color: "#F5F3EF",
    colorName: "Beyaz",
    sizes: ["S", "M", "L", "XL"],
    soldOutSizes: [],
    isNew: false,
    isBestSeller: true,
    fabric: "%100 Pamuk",
    care: "30°C'de yıkayın, orta ısıda ütüleyin.",
  },
  {
    id: "p10",
    slug: "master-premium-overshirt",
    name: "Master Premium Overshirt",
    description:
      "Kalın dokusu ile katman kombinlerinde öne çıkan, ceket-gömlek arası kullanılabilen overshirt.",
    price: 1399,
    oldPrice: 1699,
    images: [img("overshirt", 1), img("overshirt", 2)],
    category: "gomlek",
    color: "#8C8A85",
    colorName: "Taş Grisi",
    sizes: ["S", "M", "L", "XL", "XXL"],
    soldOutSizes: ["XXL"],
    isNew: true,
    isBestSeller: false,
    discount: 18,
    fabric: "%80 Pamuk, %20 Polyester",
    care: "30°C'de yıkayın.",
  },
  {
    id: "p11",
    slug: "master-linen-summer-shirt",
    name: "Master Linen Summer Shirt",
    description:
      "Keten karışımlı hafif kumaşı ile sıcak günler için nefes alan gömlek.",
    price: 899,
    images: [img("linen-shirt", 1), img("linen-shirt", 2)],
    category: "gomlek",
    color: "#EAE7E0",
    colorName: "Bej",
    sizes: ["S", "M", "L", "XL"],
    soldOutSizes: [],
    isNew: true,
    isBestSeller: false,
    fabric: "%55 Keten, %45 Pamuk",
    care: "El yıkama önerilir.",
  },
  {
    id: "p12",
    slug: "master-check-flannel-shirt",
    name: "Master Check Flannel Shirt",
    description:
      "Ekose desenli fanila kumaşı ile kışın vazgeçilmezi olacak sıcak tutan gömlek.",
    price: 949,
    images: [img("flannel-shirt", 1), img("flannel-shirt", 2)],
    category: "gomlek",
    color: "#3C5A7A",
    colorName: "Lacivert Ekose",
    sizes: ["S", "M", "L", "XL"],
    soldOutSizes: [],
    isNew: false,
    isBestSeller: false,
    fabric: "%100 Pamuklu Fanila",
    care: "30°C'de yıkayın.",
  },
  // ---- CEKET ----
  {
    id: "p13",
    slug: "master-denim-jacket",
    name: "Master Denim Jacket",
    description:
      "Klasik kesim ve dayanıklı denim kumaşıyla her sezon giyilebilecek ikonik ceket.",
    price: 1799,
    images: [img("denim-jacket", 1), img("denim-jacket", 2)],
    category: "ceket",
    color: "#2B4A6F",
    colorName: "Koyu Mavi",
    sizes: ["S", "M", "L", "XL", "XXL"],
    soldOutSizes: [],
    isNew: false,
    isBestSeller: true,
    fabric: "%100 Pamuklu Denim",
    care: "30°C'de ters çevirerek yıkayın.",
  },
  {
    id: "p14",
    slug: "master-urban-bomber-jacket",
    name: "Master Urban Bomber Jacket",
    description:
      "Rahat kalıbı ve teknik kumaşıyla şehir yaşamına uygun bomber ceket.",
    price: 2199,
    oldPrice: 2599,
    images: [img("bomber-jacket", 1), img("bomber-jacket", 2)],
    category: "ceket",
    color: "#0E0E10",
    colorName: "Siyah",
    sizes: ["S", "M", "L", "XL"],
    soldOutSizes: ["S"],
    isNew: true,
    isBestSeller: true,
    discount: 15,
    fabric: "%100 Polyester (Su İtici)",
    care: "30°C'de yıkayın, kurutma makinesi kullanmayın.",
  },
  {
    id: "p15",
    slug: "master-quilted-jacket",
    name: "Master Quilted Jacket",
    description:
      "Kapitone dokusu ile hafif ve sıcak tutan geçiş mevsimi ceketi.",
    price: 1949,
    images: [img("quilted-jacket", 1), img("quilted-jacket", 2)],
    category: "ceket",
    color: "#1C1B1A",
    colorName: "Antrasit",
    sizes: ["M", "L", "XL", "XXL"],
    soldOutSizes: [],
    isNew: false,
    isBestSeller: false,
    fabric: "Dış: %100 Polyester, İç: Sentetik Dolgu",
    care: "Kuru temizlemeye verin.",
  },
  {
    id: "p16",
    slug: "master-leather-look-jacket",
    name: "Master Leather Look Jacket",
    description:
      "Deri görünümlü kumaşı ile güçlü bir siluet sunan biker kesim ceket.",
    price: 2399,
    images: [img("leather-jacket", 1), img("leather-jacket", 2)],
    category: "ceket",
    color: "#1C1B1A",
    colorName: "Siyah",
    sizes: ["M", "L", "XL"],
    soldOutSizes: [],
    isNew: true,
    isBestSeller: false,
    fabric: "%100 Suni Deri",
    care: "Nemli bezle silin, kuru temizlemeye verin.",
  },
  // ---- TAKIM ----
  {
    id: "p17",
    slug: "master-classic-suit",
    name: "Master Classic Suit",
    description:
      "Zarif duruşu ve düzgün kalıbı ile özel günler için tasarlanmış klasik takım elbise.",
    price: 3299,
    images: [img("classic-suit", 1), img("classic-suit", 2)],
    category: "takim",
    color: "#1C1B1A",
    colorName: "Lacivert",
    sizes: ["46", "48", "50", "52", "54"],
    soldOutSizes: ["46"],
    isNew: false,
    isBestSeller: true,
    fabric: "%70 Polyester, %30 Viskon",
    care: "Kuru temizlemeye verin.",
  },
  {
    id: "p18",
    slug: "master-modern-fit-suit",
    name: "Master Modern Fit Suit",
    description:
      "Modern slim kalıbı ile hem ofis hem davetlerde şıklığını koruyan takım elbise.",
    price: 3099,
    oldPrice: 3599,
    images: [img("modern-suit", 1), img("modern-suit", 2)],
    category: "takim",
    color: "#2B2B2B",
    colorName: "Antrasit",
    sizes: ["46", "48", "50", "52"],
    soldOutSizes: [],
    isNew: true,
    isBestSeller: false,
    discount: 14,
    fabric: "%68 Polyester, %30 Viskon, %2 Elastan",
    care: "Kuru temizlemeye verin.",
  },
  {
    id: "p19",
    slug: "master-linen-summer-suit",
    name: "Master Linen Summer Suit",
    description:
      "Keten karışımlı hafif kumaşıyla yaz düğünleri ve davetleri için ideal takım.",
    price: 2899,
    images: [img("linen-suit", 1), img("linen-suit", 2)],
    category: "takim",
    color: "#EAE7E0",
    colorName: "Bej",
    sizes: ["48", "50", "52", "54"],
    soldOutSizes: [],
    isNew: true,
    isBestSeller: false,
    fabric: "%55 Keten, %45 Viskon",
    care: "Kuru temizlemeye verin.",
  },
  // ---- ALT GİYİM ----
  {
    id: "p20",
    slug: "master-modern-fit-trousers",
    name: "Master Modern Fit Trousers",
    description:
      "Şık ve rahat kalıbı ile hem günlük hem ofis kombinlerine uyum sağlayan kumaş pantolon.",
    price: 899,
    images: [img("trousers", 1), img("trousers", 2)],
    category: "alt-giyim",
    color: "#1C1B1A",
    colorName: "Siyah",
    sizes: ["30", "31", "32", "33", "34", "36"],
    soldOutSizes: [],
    isNew: false,
    isBestSeller: true,
    fabric: "%65 Polyester, %33 Viskon, %2 Elastan",
    care: "30°C'de yıkayın.",
  },
  {
    id: "p21",
    slug: "master-cargo-pants",
    name: "Master Cargo Pants",
    description:
      "Fonksiyonel cep detayları ile sokak stilini tamamlayan cargo pantolon.",
    price: 949,
    images: [img("cargo-pants", 1), img("cargo-pants", 2)],
    category: "alt-giyim",
    color: "#5C5A52",
    colorName: "Haki",
    sizes: ["30", "31", "32", "33", "34", "36"],
    soldOutSizes: ["36"],
    isNew: true,
    isBestSeller: false,
    fabric: "%100 Pamuk",
    care: "30°C'de yıkayın.",
  },
  {
    id: "p22",
    slug: "master-jogger-pants",
    name: "Master Jogger Pants",
    description:
      "Esnek beli ve rahat kalıbıyla gün boyu konfor sunan jogger pantolon.",
    price: 699,
    images: [img("jogger-pants", 1), img("jogger-pants", 2)],
    category: "alt-giyim",
    color: "#8C8A85",
    colorName: "Gri Melanj",
    sizes: ["S", "M", "L", "XL", "XXL"],
    soldOutSizes: [],
    isNew: false,
    isBestSeller: true,
    fabric: "%80 Pamuk, %20 Polyester",
    care: "30°C'de yıkayın.",
  },
  {
    id: "p23",
    slug: "master-chino-pants",
    name: "Master Chino Pants",
    description:
      "Zamansız kesimi ile her dolaba yakışan, çok yönlü chino pantolon.",
    price: 849,
    oldPrice: 999,
    images: [img("chino-pants", 1), img("chino-pants", 2)],
    category: "alt-giyim",
    color: "#C7BFA9",
    colorName: "Bej",
    sizes: ["30", "31", "32", "33", "34"],
    soldOutSizes: [],
    isNew: false,
    isBestSeller: false,
    discount: 15,
    fabric: "%98 Pamuk, %2 Elastan",
    care: "30°C'de yıkayın.",
  },
  {
    id: "p24",
    slug: "master-shorts",
    name: "Master Essential Shorts",
    description:
      "Yazlık kombinlerin tamamlayıcısı, rahat kalıplı şort.",
    price: 549,
    images: [img("shorts", 1), img("shorts", 2)],
    category: "alt-giyim",
    color: "#2B4A6F",
    colorName: "Denim Mavi",
    sizes: ["S", "M", "L", "XL"],
    soldOutSizes: [],
    isNew: true,
    isBestSeller: false,
    fabric: "%100 Pamuk",
    care: "30°C'de yıkayın.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "yeni-gelenler") return products.filter((p) => p.isNew);
  return products.filter((p) => p.category === category);
}

export function getBestSellers(limit = 8): Product[] {
  return products.filter((p) => p.isBestSeller).slice(0, limit);
}

export function getNewArrivals(limit = 8): Product[] {
  return products.filter((p) => p.isNew).slice(0, limit);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}

export function searchProducts(query: string): Product[] {
  const q = query.trim().toLocaleLowerCase("tr-TR");
  if (!q) return [];
  return products.filter((p) => {
    const categoryName = categoryNames[p.category]?.toLocaleLowerCase("tr-TR") ?? "";
    return (
      p.name.toLocaleLowerCase("tr-TR").includes(q) ||
      categoryName.includes(q) ||
      p.colorName.toLocaleLowerCase("tr-TR").includes(q)
    );
  });
}
