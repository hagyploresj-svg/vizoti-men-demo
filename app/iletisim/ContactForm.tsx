"use client";

import { useState, FormEvent } from "react";
import { Check } from "lucide-react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-line p-8 flex flex-col items-start gap-3 max-w-lg">
        <span className="w-10 h-10 rounded-full bg-ink text-paper flex items-center justify-center">
          <Check size={18} strokeWidth={2.5} />
        </span>
        <p className="font-medium">Mesajınız gönderildi</p>
        <p className="text-sm text-stone">
          En kısa sürede size dönüş yapacağız.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input required placeholder="Ad Soyad" className="border border-line px-3.5 py-3 outline-none focus:border-ink sm:col-span-1" />
        <input required type="email" placeholder="E-posta" className="border border-line px-3.5 py-3 outline-none focus:border-ink sm:col-span-1" />
      </div>
      <input placeholder="Konu" className="w-full border border-line px-3.5 py-3 outline-none focus:border-ink" />
      <textarea
        required
        placeholder="Mesajınız"
        rows={6}
        className="w-full border border-line px-3.5 py-3 outline-none focus:border-ink resize-none"
      />
      <button
        type="submit"
        className="px-8 py-3.5 bg-ink text-paper text-sm tracking-wide hover:bg-charcoal transition-colors"
      >
        Mesaj Gönder
      </button>
    </form>
  );
}
