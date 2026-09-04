# Master Jeans — E-Ticaret Sitesi

Modern erkek giyim markası Master Jeans için Next.js 14 (App Router) + TypeScript +
Tailwind CSS ile hazırlanmış, üretime hazır e-ticaret sitesi.

## Kurulum

```bash
npm install
npm run dev
```

Site `http://localhost:3000` adresinde açılır.

## Build

```bash
npm run build
npm run start
```

## Vercel'e Deploy

Depoyu GitHub'a yükleyip Vercel'de "Import Project" ile bağlamanız yeterlidir.
Ek bir yapılandırma gerekmez.

## Proje Yapısı

```
app/            Next.js App Router sayfaları (rotalar)
components/     Yeniden kullanılabilir UI bileşenleri
context/        Sepet ve favoriler için React Context (localStorage destekli)
lib/            Ürün verisi, tipler, yardımcı fonksiyonlar, ödeme servis katmanı
public/         Statik dosyalar
```

## Ürün Görselleri

Ürün, kategori ve Instagram görselleri şu an `picsum.photos` üzerinden otomatik
oluşturulan yer tutucu görsellerdir (her ürün için sabit bir "seed" kullanılır, bu
yüzden görseller her yüklemede aynı kalır). Gerçek ürün fotoğraflarınız hazır
olduğunda:

1. Görselleri `public/images/products/`, `public/images/categories/` ve
   `public/images/instagram/` klasörlerine ekleyin.
2. `lib/products.ts` dosyasındaki ilgili `images` alanlarını
   `/images/products/urun-01.jpg` gibi yerel yollarla değiştirin.

Kod, `next/image` kullandığı için bu değişiklik başka hiçbir yeri etkilemez.

## Ödeme Entegrasyonu (iyzico / PayTR)

`lib/payment.ts` dosyası, gerçek bir ödeme sağlayıcısına bağlanmak için hazır bir
servis katmanı içerir. Şu an gerçek ödeme işlemi YAPILMAZ — sadece mimari
hazırlanmıştır. Devreye almak için:

1. `.env.local` dosyanıza sağlayıcı bilgilerinizi ekleyin:
   ```
   PAYMENT_PROVIDER=iyzico
   PAYMENT_API_KEY=...
   PAYMENT_SECRET_KEY=...
   PAYMENT_BASE_URL=...
   ```
2. `lib/payment.ts` içindeki `createPayment` fonksiyonunu seçtiğiniz sağlayıcının
   SDK'sı veya REST API'siyle doldurun.
3. `app/sepet/CartPageClient.tsx` içindeki `CheckoutForm` bileşeninin
   `handleSubmit` fonksiyonundan `createPayment` fonksiyonunu çağırın.

Arayüzde şu an yalnızca **3D Secure** ile kredi/banka kartı ödemesi
sunulmaktadır. Non-3D (2D) ödeme seçeneği, sağlayıcı/üye işyeri hesabınız bunu
açıkça desteklemeden arayüze eklenmemelidir (`lib/payment.ts` içindeki
`NON_3D_AVAILABLE` sabitine bakın).

## WhatsApp Numarası

`lib/whatsapp.ts` içindeki `WHATSAPP_NUMBER` değerini markanın gerçek WhatsApp
Business numarasıyla güncelleyin.

## Teknik Notlar

- Next.js App Router, TypeScript (strict mode), Tailwind CSS
- Sepet ve favoriler `localStorage` ile kalıcı hale getirilir (React Context)
- Tüm sayfalar mobil öncelikli responsive olarak tasarlanmıştır
- SEO: her sayfada `metadata`, ürün sayfalarında OpenGraph, `sitemap.xml` ve
  `robots.txt` otomatik oluşturulur
- İletişim formu ve ödeme adımı arayüz olarak tamamlanmıştır; gerçek e-posta
  gönderimi ve ödeme işlemi için kendi backend/servis entegrasyonlarınızı
  eklemeniz gerekir
