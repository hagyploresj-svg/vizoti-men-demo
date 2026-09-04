"use client";

import { X } from "lucide-react";

const rows = [
  { size: "S / 30", chest: "92-96", waist: "76-80", hip: "94-98" },
  { size: "M / 32", chest: "97-101", waist: "81-85", hip: "99-103" },
  { size: "L / 34", chest: "102-106", waist: "86-90", hip: "104-108" },
  { size: "XL / 36", chest: "107-111", waist: "91-95", hip: "109-113" },
  { size: "XXL / 38", chest: "112-116", waist: "96-100", hip: "114-118" },
];

export default function SizeGuideModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-ink/50" onClick={onClose} />
      <div className="relative bg-paper w-full max-w-lg max-h-[85vh] overflow-y-auto p-6">
        <button
          aria-label="Kapat"
          onClick={onClose}
          className="absolute top-4 right-4 p-1"
        >
          <X size={20} strokeWidth={1.5} />
        </button>
        <h3 className="font-display font-black text-xl mb-1">BEDEN TABLOSU</h3>
        <p className="text-sm text-stone mb-5">Tüm ölçüler santimetre (cm) cinsindendir.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-ink text-left">
                <th className="py-2 pr-3 font-medium">Beden</th>
                <th className="py-2 pr-3 font-medium">Göğüs</th>
                <th className="py-2 pr-3 font-medium">Bel</th>
                <th className="py-2 font-medium">Kalça</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.size} className="border-b border-line">
                  <td className="py-2 pr-3">{r.size}</td>
                  <td className="py-2 pr-3">{r.chest}</td>
                  <td className="py-2 pr-3">{r.waist}</td>
                  <td className="py-2">{r.hip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone mt-4">
          Ölçüleriniz iki beden arasında kalıyorsa daha büyük bedeni tercih etmenizi öneririz.
        </p>
      </div>
    </div>
  );
}
