import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page py-24 text-center">
      <p className="font-display font-black text-6xl lg:text-8xl">404</p>
      <h1 className="font-display font-black text-2xl lg:text-3xl mt-4">
        SAYFA BULUNAMADI
      </h1>
      <p className="text-stone mt-3">
        Aradığınız sayfa taşınmış veya kaldırılmış olabilir.
      </p>
      <Link
        href="/"
        className="inline-block mt-8 px-8 py-3.5 bg-ink text-paper text-sm tracking-wide hover:bg-charcoal transition-colors"
      >
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}
