import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mesafeli Satış Sözleşmesi",
  description: "Master Jeans mesafeli satış sözleşmesi.",
};

export default function DistanceSalesPage() {
  return (
    <div className="container-page py-10 lg:py-14 max-w-2xl">
      <h1 className="font-display font-black text-3xl lg:text-5xl mb-8">
        MESAFELİ SATIŞ SÖZLEŞMESİ
      </h1>

      <div className="space-y-8 text-stone leading-relaxed text-sm">
        <section>
          <h2 className="text-ink font-medium mb-2">1. Taraflar</h2>
          <p>
            İşbu sözleşme, Master Jeans ("Satıcı") ile sitemiz üzerinden sipariş veren
            müşteri ("Alıcı") arasında, 6502 sayılı Tüketicinin Korunması Hakkında
            Kanun ve Mesafeli Sözleşmeler Yönetmeliği hükümleri gereğince
            düzenlenmiştir.
          </p>
        </section>
        <section>
          <h2 className="text-ink font-medium mb-2">2. Sözleşmenin Konusu</h2>
          <p>
            Sözleşmenin konusu, Alıcının Satıcıya ait internet sitesinden elektronik
            ortamda sipariş verdiği ürünün satışı ve teslimi ile ilgili olarak
            tarafların hak ve yükümlülüklerinin belirlenmesidir.
          </p>
        </section>
        <section>
          <h2 className="text-ink font-medium mb-2">3. Sipariş ve Ödeme</h2>
          <p>
            Ürün siparişleri site üzerinden, kredi/banka kartı ile 3D Secure güvenli
            ödeme sistemi kullanılarak alınır. Sipariş, ödemenin onaylanmasının
            ardından işleme alınır.
          </p>
        </section>
        <section>
          <h2 className="text-ink font-medium mb-2">4. Teslimat</h2>
          <p>
            Siparişler, ödeme onayının ardından belirtilen teslimat adresine anlaşmalı
            kargo firması aracılığıyla gönderilir. Teslimat süresi ürün ve bölgeye göre
            değişiklik gösterebilir.
          </p>
        </section>
        <section>
          <h2 className="text-ink font-medium mb-2">5. Cayma Hakkı</h2>
          <p>
            Alıcı, ürünü teslim aldığı tarihten itibaren 14 gün içinde herhangi bir
            gerekçe göstermeksizin ve cezai şart ödemeksizin sözleşmeden cayma
            hakkına sahiptir. Cayma hakkının kullanımına ilişkin detaylar İade &amp;
            Değişim sayfamızda yer almaktadır.
          </p>
        </section>
      </div>
    </div>
  );
}
