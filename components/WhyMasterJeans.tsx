import { Shirt, Ruler, ShieldCheck, Headset } from "lucide-react";

const items = [
  {
    icon: Shirt,
    title: "Kaliteli Kumaş",
    text: "Dayanıklı ve konforlu kumaşlarla üretilen parçalar.",
  },
  {
    icon: Ruler,
    title: "Modern Kalıplar",
    text: "Güncel siluetlere uygun, vücuda doğru oturan kesimler.",
  },
  {
    icon: ShieldCheck,
    title: "Güvenli Ödeme",
    text: "3D Secure destekli, korumalı ödeme altyapısı.",
  },
  {
    icon: Headset,
    title: "Hızlı Destek",
    text: "WhatsApp ve e-posta üzerinden hızlı müşteri desteği.",
  },
];

export default function WhyMasterJeans() {
  return (
    <section className="container-page py-16 lg:py-24">
      <h2 className="font-display font-black text-3xl lg:text-4xl mb-10 lg:mb-14">
        MASTER JEANS FARKI
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="border-t border-ink pt-5">
            <Icon size={26} strokeWidth={1.25} />
            <p className="font-medium mt-4">{title}</p>
            <p className="text-sm text-stone mt-1.5 leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
