import Link from "next/link";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { categories } from "@/lib/products";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper mt-24">
      <div className="container-page py-14 grid grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="col-span-2 lg:col-span-2">
          <p className="font-display font-black text-2xl tracking-tightest">MASTER JEANS</p>
          <p className="text-sm text-paper/60 mt-3 max-w-xs leading-relaxed">
            Modern erkek modası için tasarlanmış, kaliteli kumaşlar ve güncel
            kalıplarla hazırlanmış bir giyim markası.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <a
              href="https://instagram.com/masterjeans"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 border border-paper/25 hover:border-paper transition-colors"
            >
              <Instagram size={18} strokeWidth={1.5} />
            </a>
            <a
              href="https://wa.me/905555555555"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2 border border-paper/25 hover:border-paper transition-colors"
            >
              <MessageCircle size={18} strokeWidth={1.5} />
            </a>
            <a
              href="mailto:info@masterjeans.com"
              aria-label="E-posta"
              className="p-2 border border-paper/25 hover:border-paper transition-colors"
            >
              <Mail size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium mb-4">Kategoriler</p>
          <ul className="space-y-2.5 text-sm text-paper/60">
            <li>
              <Link href="/kategori/yeni-gelenler" className="hover:text-paper transition-colors">
                Yeni Gelenler
              </Link>
            </li>
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/kategori/${c.slug}`} className="hover:text-paper transition-colors">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium mb-4">Müşteri Hizmetleri</p>
          <ul className="space-y-2.5 text-sm text-paper/60">
            <li>
              <Link href="/iletisim" className="hover:text-paper transition-colors">
                İletişim
              </Link>
            </li>
            <li>
              <Link href="/sss" className="hover:text-paper transition-colors">
                Sıkça Sorulan Sorular
              </Link>
            </li>
            <li>
              <Link href="/iade-ve-degisim" className="hover:text-paper transition-colors">
                İade &amp; Değişim
              </Link>
            </li>
            <li>
              <Link href="/sepet" className="hover:text-paper transition-colors">
                Sepetim
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium mb-4">Kurumsal</p>
          <ul className="space-y-2.5 text-sm text-paper/60">
            <li>
              <Link href="/hakkimizda" className="hover:text-paper transition-colors">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link href="/gizlilik" className="hover:text-paper transition-colors">
                Gizlilik
              </Link>
            </li>
            <li>
              <Link href="/mesafeli-satis" className="hover:text-paper transition-colors">
                Mesafeli Satış Sözleşmesi
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/15">
        <div className="container-page py-5 text-xs text-paper/50">
          © 2026 Master Jeans. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
