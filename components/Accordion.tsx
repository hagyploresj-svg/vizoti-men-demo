"use client";

import { ReactNode, useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  title: string;
  content: ReactNode;
}

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-t border-line">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.title} className="border-b border-line">
            <button
              onClick={() => setOpenIndex(open ? null : i)}
              className="w-full flex items-center justify-between py-4 text-left"
              aria-expanded={open}
            >
              <span className="text-sm font-medium">{item.title}</span>
              <ChevronDown
                size={18}
                strokeWidth={1.5}
                className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`grid transition-all duration-200 ${
                open ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
              }`}
              style={{ display: "grid" }}
            >
              <div className="overflow-hidden">
                <div className="text-sm text-stone leading-relaxed">{item.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
