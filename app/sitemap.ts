import { MetadataRoute } from "next";
import { categories, products } from "@/lib/products";

const BASE_URL = "https://www.masterjeans.com.tr";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/kategori/yeni-gelenler",
    "/hakkimizda",
    "/iletisim",
    "/sss",
    "/gizlilik",
    "/mesafeli-satis",
    "/iade-ve-degisim",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));

  const categoryRoutes = categories.map((c) => ({
    url: `${BASE_URL}/kategori/${c.slug}`,
    lastModified: new Date(),
  }));

  const productRoutes = products.map((p) => ({
    url: `${BASE_URL}/urun/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
