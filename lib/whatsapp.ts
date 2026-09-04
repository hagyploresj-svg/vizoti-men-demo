// Replace with the brand's real WhatsApp Business number (international format, no + or spaces).
export const WHATSAPP_NUMBER = "905555555555";

export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export function productWhatsAppMessage(productName: string): string {
  return `Merhaba, "${productName}" ürünü hakkında bilgi almak istiyorum.`;
}
