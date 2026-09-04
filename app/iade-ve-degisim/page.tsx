import { Metadata } from "next";
import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "İade ve Değişim",
  description: "Master Jeans iade ve değişim koşulları.",
};

const steps = [
  {
    title: "Talebinizi Oluşturun",
    text: "İletişim sayfamızdan veya WhatsApp hattımızdan sipariş numaranızla iade/değişim talebinizi iletin.",
  },
  {
    title: "Ürünü Paketleyin",
    text: "Ürünü, etiketleri çıkarılmamış ve kullanılmamış şekilde orijinal ambalajıyla paketleyin.",
  },
  {
    title: "Kargoya Verin",
    text: "Size iletilen anlaşmalı kargo kodu ile ürünü ücretsiz olarak kargoya verin.",
  },
  {
    title: "İade/Değişim Tamamlansın",
    text: "Ürün tarafımıza ulaştıktan sonra incelenir ve 3-5 iş günü içinde iade veya değişim işleminiz tamamlanır.",
  },
];

export default function ReturnsPage() {
  return (
    <div className="container-page py-10 lg:py-14 max-w-2xl">
      <h1 className="font-display font-black text-3xl lg:text-5xl mb-8">
        İADE &amp; DEĞİŞİM
      </h1>

      <div className="space-y-6 text-stone leading-relaxed text-sm mb-12">
        <p>
          Ürünlerinizi teslim aldığınız tarihten itibaren 14 gün içinde, etiketleri
          çıkarılmamış ve kullanılmamış olmak koşuluyla iade veya değişim
          işlemine tabi tutabilirsiniz.
        </p>
        <p>
          İç giyim ürünleri ve indirim kuponuyla kişiselleştirilmiş ürünler hijyen
          ve kişiselleştirme sebebiyle iade kapsamı dışındadır.
        </p>
      </div>

      <h2 className="font-display font-black text-xl mb-6">Nasıl İade/Değişim Yaparım?</h2>
      <ol className="space-y-6">
        {steps.map((s, i) => (
          <li key={s.title} className="flex gap-4">
            <span className="w-8 h-8 shrink-0 rounded-full border border-ink flex items-center justify-center text-sm font-medium">
              {i + 1}
            </span>
            <div>
              <p className="font-medium">{s.title}</p>
              <p className="text-sm text-stone mt-1">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-12 border-t border-line pt-8">
        <p className="text-sm text-stone mb-4">
          Sorularınız için bize WhatsApp üzerinden ulaşabilirsiniz.
        </p>
        <a
          href={buildWhatsAppLink("Merhaba, bir iade/değişim talebim var.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3.5 bg-ink text-paper text-sm tracking-wide hover:bg-charcoal transition-colors"
        >
          WhatsApp'tan Ulaşın
        </a>
        <Link
          href="/iletisim"
          className="inline-block px-8 py-3.5 border border-ink text-sm tracking-wide hover:bg-ink hover:text-paper transition-colors ml-3"
        >
          İletişim Formu
        </Link>
      </div>
    </div>
  );
}
