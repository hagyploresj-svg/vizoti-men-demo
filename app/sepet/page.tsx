import { Metadata } from "next";
import CartPageClient from "./CartPageClient";

export const metadata: Metadata = {
  title: "Sepetim",
  description: "Sepetinizdeki ürünleri görüntüleyin ve ödemeye geçin.",
};

export default function CartPage() {
  return <CartPageClient />;
}
