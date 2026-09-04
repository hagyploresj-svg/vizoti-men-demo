import { Metadata } from "next";
import FavoritesPageClient from "./FavoritesPageClient";

export const metadata: Metadata = {
  title: "Favorilerim",
  description: "Beğendiğiniz ürünleri favorilerinizde saklayın.",
};

export default function FavoritesPage() {
  return <FavoritesPageClient />;
}
