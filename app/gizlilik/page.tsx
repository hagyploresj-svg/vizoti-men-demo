import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "Master Jeans gizlilik politikası ve kişisel verilerin korunması.",
};

export default function PrivacyPage() {
  return (
    <div className="container-page py-10 lg:py-14 max-w-2xl">
      <h1 className="font-display font-black text-3xl lg:text-5xl mb-8">GİZLİLİK</h1>

      <div className="space-y-8 text-stone leading-relaxed text-sm">
        <section>
          <h2 className="text-ink font-medium mb-2">1. Toplanan Bilgiler</h2>
          <p>
            Master Jeans olarak, sitemiz üzerinden alışveriş yapmanız, hesap oluşturmanız
            veya bizimle iletişime geçmeniz sırasında ad, soyad, e-posta adresi, telefon
            numarası, teslimat adresi ve sipariş bilgileriniz gibi kişisel verileri
            işleriz.
          </p>
        </section>
        <section>
          <h2 className="text-ink font-medium mb-2">2. Bilgilerin Kullanımı</h2>
          <p>
            Toplanan bilgiler; siparişlerinizin işlenmesi, kargo takibi, müşteri desteği
            sağlanması ve yasal yükümlülüklerin yerine getirilmesi amacıyla kullanılır.
            Bilgileriniz izniniz olmadan üçüncü taraflarla pazarlama amacıyla
            paylaşılmaz.
          </p>
        </section>
        <section>
          <h2 className="text-ink font-medium mb-2">3. Çerezler</h2>
          <p>
            Sitemiz, alışveriş deneyiminizi iyileştirmek amacıyla (örneğin sepet ve
            favori bilgilerinizin hatırlanması için) çerezler kullanır. Tarayıcı
            ayarlarınızdan çerez tercihlerinizi yönetebilirsiniz.
          </p>
        </section>
        <section>
          <h2 className="text-ink font-medium mb-2">4. Veri Güvenliği</h2>
          <p>
            Kişisel verilerinizin güvenliği için makul teknik ve idari önlemler
            alınmaktadır. Ödeme bilgileriniz, 3D Secure destekli güvenli ödeme
            altyapısı üzerinden işlenir ve tarafımızca saklanmaz.
          </p>
        </section>
        <section>
          <h2 className="text-ink font-medium mb-2">5. Haklarınız</h2>
          <p>
            6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında, kişisel
            verilerinize erişme, düzeltme, silme ve işlenmesine itiraz etme hakkına
            sahipsiniz. Talepleriniz için iletişim sayfamızdan bize ulaşabilirsiniz.
          </p>
        </section>
      </div>
    </div>
  );
}
