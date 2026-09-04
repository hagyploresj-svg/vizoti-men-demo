"use client";

import { useState } from "react";

type ProductCardProps = {
  name: string;
  category?: string;
  price: string;
  oldPrice?: string;
  index?: number;
};

const backgrounds = [
  "bg-[#d8d1c5]",
  "bg-[#c5c0b7]",
  "bg-[#252525]",
  "bg-[#a9aaa5]",
  "bg-[#ddd7cd]",
  "bg-[#303638]",
];

export default function ProductCard({
  name,
  category = "VIZOTI MEN",
  price,
  oldPrice,
  index = 0,
}: ProductCardProps) {
  const [favorite, setFavorite] = useState(false);

  const dark = index % backgrounds.length === 2 ||
               index % backgrounds.length === 5;

  return (
    <article className="group">
      <div
        className={`relative flex aspect-[3/4] overflow-hidden ${
          backgrounds[index % backgrounds.length]
        }`}
      >
        <div className="absolute left-5 top-5">
          <span
            className={`text-[9px] uppercase tracking-[0.25em] ${
              dark ? "text-white/50" : "text-black/45"
            }`}
          >
            New Season
          </span>
        </div>

        <button
          type="button"
          onClick={() => setFavorite(!favorite)}
          className={`absolute right-5 top-4 z-10 text-xl transition-transform hover:scale-110 ${
            dark ? "text-white" : "text-black"
          }`}
          aria-label="Favorilere ekle"
        >
          {favorite ? "♥" : "♡"}
        </button>

        <div className="flex w-full items-end p-6 sm:p-8">
          <div
            className={`transition-transform duration-500 group-hover:-translate-y-2 ${
              dark ? "text-white" : "text-black"
            }`}
          >
            <p className="text-[9px] uppercase tracking-[0.3em] opacity-45">
              {category}
            </p>

            <p className="mt-3 text-3xl font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-4xl">
              {name}
            </p>
          </div>
        </div>

        <div
          className={`pointer-events-none absolute -bottom-12 -right-5 text-[10rem] font-black leading-none opacity-[0.035] transition-transform duration-700 group-hover:scale-110 sm:text-[13rem] ${
            dark ? "text-white" : "text-black"
          }`}
        >
          V
        </div>
      </div>

      <div className="flex items-start justify-between gap-4 py-4">
        <div>
          <h3 className="text-sm font-medium uppercase tracking-[0.04em]">
            {name}
          </h3>

          <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-black/40">
            {category}
          </p>
        </div>

        <div className="shrink-0 text-right">
          <p className="text-sm font-medium">{price}</p>

          {oldPrice && (
            <p className="mt-1 text-xs text-black/35 line-through">
              {oldPrice}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
