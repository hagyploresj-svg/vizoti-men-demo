import { Metadata } from "next";
import ContactForm from "./ContactForm";
import { Instagram, Mail, MessageCircle, Phone } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Master Jeans ile WhatsApp, e-posta veya telefon üzerinden iletişime geçin.",
};

export default function ContactPage() {
  return (
    <div className="container-page py-10 lg:py-14">
      <h1 className="font-display font-black text-3xl lg:text-5xl mb-2">İLETİŞİM</h1>
      <p className="text-stone mb-10 lg:mb-14 max-w-md">
        Sorularınız için bize aşağıdaki kanallardan ulaşabilir ya da formu doldurabilirsiniz.
      </p>

      <div className="grid lg:grid-cols-[320px_1fr] gap-12 lg:gap-16">
        <div className="space-y-6">
          <a
            href={buildWhatsAppLink("Merhaba, bir sorum var.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group"
          >
            <span className="w-11 h-11 flex items-center justify-center border border-line group-hover:border-ink transition-colors">
              <MessageCircle size={18} strokeWidth={1.5} />
            </span>
            <div>
              <p className="text-sm font-medium">WhatsApp</p>
              <p className="text-sm text-stone">+90 555 555 55 55</p>
            </div>
          </a>

          <a href="mailto:info@masterjeans.com" className="flex items-center gap-4 group">
            <span className="w-11 h-11 flex items-center justify-center border border-line group-hover:border-ink transition-colors">
              <Mail size={18} strokeWidth={1.5} />
            </span>
            <div>
              <p className="text-sm font-medium">E-posta</p>
              <p className="text-sm text-stone">info@masterjeans.com</p>
            </div>
          </a>

          <a href="tel:+905555555555" className="flex items-center gap-4 group">
            <span className="w-11 h-11 flex items-center justify-center border border-line group-hover:border-ink transition-colors">
              <Phone size={18} strokeWidth={1.5} />
            </span>
            <div>
              <p className="text-sm font-medium">Telefon</p>
              <p className="text-sm text-stone">+90 555 555 55 55</p>
            </div>
          </a>

          <a
            href="https://instagram.com/masterjeans"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group"
          >
            <span className="w-11 h-11 flex items-center justify-center border border-line group-hover:border-ink transition-colors">
              <Instagram size={18} strokeWidth={1.5} />
            </span>
            <div>
              <p className="text-sm font-medium">Instagram</p>
              <p className="text-sm text-stone">@masterjeans</p>
            </div>
          </a>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
