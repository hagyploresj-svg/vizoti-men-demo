import { Metadata } from "next";
import Accordion from "@/components/Accordion";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular",
  description: "Kargo, iade, beden ve ödeme hakkında sıkça sorulan sorular.",
};

const faqs = [
  {
    title: "Siparişim ne zaman kargoya verilir?",
    content: "Siparişleriniz, ödemenin onaylanmasının ardından 1-3 iş günü içinde kargoya teslim edilir.",
  },
  {
    title: "Kargo ücreti ne kadar?",
    content:
      "1.500 TL ve üzeri siparişlerde kargo ücretsizdir. Bu tutarın altındaki siparişlerde sabit kargo ücreti uygulanır.",
  },
  {
    title: "Ürünümü nasıl iade edebilirim?",
    content:
      "Ürünlerinizi teslim aldıktan sonra 14 gün içinde, etiketleri çıkarılmamış ve kullanılmamış olmak koşuluyla iade edebilirsiniz. Detaylar için İade & Değişim sayfasını inceleyin.",
  },
  {
    title: "Beden değişimi yapabilir miyim?",
    content:
      "Evet, uygun bedenin stokta olması koşuluyla ürününüzü farklı bir bedenle değiştirebilirsiniz.",
  },
  {
    title: "Doğru bedeni nasıl seçerim?",
    content:
      "Her ürün sayfasındaki 'Beden Rehberi' bağlantısından göğüs, bel ve kalça ölçülerinize uygun bedeni bulabilirsiniz.",
  },
  {
    title: "Hangi ödeme yöntemlerini kullanabilirim?",
    content:
      "Tüm kredi ve banka kartlarıyla, 3D Secure güvenli ödeme sistemi üzerinden ödeme yapabilirsiniz.",
  },
  {
    title: "Siparişimi nasıl takip edebilirim?",
    content:
      "Siparişiniz kargoya verildiğinde takip numaranız e-posta ve SMS ile tarafınıza iletilir.",
  },
  {
    title: "Ürünler hakkında nasıl bilgi alabilirim?",
    content:
      "WhatsApp hattımızdan ya da iletişim sayfamızdaki formdan bize ulaşabilirsiniz, size hızlıca dönüş yapılır.",
  },
];

export default function FAQPage() {
  return (
    <div className="container-page py-10 lg:py-14 max-w-2xl">
      <h1 className="font-display font-black text-3xl lg:text-5xl mb-2">
        SIKÇA SORULAN SORULAR
      </h1>
      <p className="text-stone mb-10">
        Aradığınız cevabı bulamadıysanız bize iletişim sayfasından ulaşabilirsiniz.
      </p>
      <Accordion items={faqs} />
    </div>
  );
}
