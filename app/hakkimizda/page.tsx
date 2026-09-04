import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "Master Jeans'in hikayesi, kalite anlayışı ve stil vizyonu.",
};

export default function AboutPage() {
  return (
    <div>
      <div className="relative h-[46vh] min-h-[320px] max-h-[520px] w-full overflow-hidden bg-ink">
        <Image
          src="https://picsum.photos/seed/master-jeans-about/1800/1000"
          alt="Master Jeans atölye ve tasarım süreci"
          fill
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-ink/30" />
        <div className="container-page relative h-full flex items-end pb-10 lg:pb-14">
          <h1 className="font-display font-black text-4xl lg:text-6xl text-paper tracking-tightest">
            MASTER JEANS
          </h1>
        </div>
      </div>

      <div className="container-page py-14 lg:py-20 max-w-2xl">
        <p className="text-lg leading-relaxed">
          Master Jeans, modern erkeğin günlük hayatına uyum sağlayan, kaliteli ve
          şık parçalar üretmek amacıyla yola çıktı.
        </p>
        <p className="text-stone leading-relaxed mt-6">
          Jean, t-shirt, gömlek, ceket, takım ve alt giyim koleksiyonlarımızı
          hazırlarken önceliğimiz her zaman doğru kalıp ve dayanıklı kumaş oldu.
          Kalıplarımızı güncel silüetlere göre şekillendiriyor, kullandığımız
          kumaşları konfor ve dayanıklılık göz önünde bulundurarak seçiyoruz.
        </p>
        <p className="text-stone leading-relaxed mt-6">
          Amacımız; ofisten hafta sonuna, günlük kombinlerden özel davetlere
          kadar her ana uygun, zamanla eskimeyen bir stil sunmak. Müşteri
          deneyimini de ürün kadar önemsiyoruz — sorularınızı hızlıca
          yanıtlamak ve alışveriş sürecinizi olabildiğince kolay hale getirmek
          için buradayız.
        </p>
        <p className="text-stone leading-relaxed mt-6">
          Master Jeans ile stilini yenile.
        </p>
      </div>
    </div>
  );
}
