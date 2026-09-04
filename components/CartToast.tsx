"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartToast() {
  const { lastAdded } = useCart();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!lastAdded) return;
    setVisible(true);
    const t = setTimeout(() => setVisible(false), 2600);
    return () => clearTimeout(t);
  }, [lastAdded]);

  if (!lastAdded) return null;

  return (
    <div
      className={`fixed bottom-5 left-5 z-50 bg-ink text-paper px-4 py-3 flex items-center gap-3 shadow-lg transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
      }`}
      role="status"
    >
      <span className="bg-paper text-ink rounded-full w-5 h-5 flex items-center justify-center shrink-0">
        <Check size={13} strokeWidth={3} />
      </span>
      <span className="text-sm">
        <strong className="font-medium">{lastAdded.name}</strong> sepete eklendi
      </span>
    </div>
  );
}
