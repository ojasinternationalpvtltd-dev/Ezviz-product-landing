import Link from "next/link";
import Image from "next/image";
import { catalogProducts } from "@/lib/catalog";
import { formatNpr } from "@/lib/product";

export function ProductCatalogue() {
  const categories = [...new Set(catalogProducts.map((product) => product.category))];

  return (
    <section id="products" className="bg-white px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="font-bold text-gold">OJAS PRODUCT CATALOGUE</p>
        <h2 className="mt-2 text-4xl font-black">Security products for every setup</h2>
        <p className="mt-4 max-w-3xl leading-7 text-black/60">
          Browse {catalogProducts.length} EZVIZ products. Every listed sale price is the supplied DPP rate plus Rs. 500.
        </p>
        <div className="mt-10 space-y-10">
          {categories.map((category) => {
            const products = catalogProducts.filter((product) => product.category === category);
            return <div key={category}>
              <div className="mb-4 flex items-center justify-between gap-4"><h3 className="text-2xl font-black">{category}</h3><span className="rounded-full bg-[#fff3c4] px-3 py-1 text-sm font-bold">{products.length} products</span></div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => <article key={`${product.name}-${product.price}`} className="flex min-h-60 flex-col rounded-2xl border border-black/10 bg-cream p-5 shadow-sm">
                  <div className="relative mb-4 h-32 overflow-hidden rounded-xl bg-white"><Image src={product.image} alt={product.name} fill className="object-contain p-3" sizes="(max-width: 768px) 50vw, 20vw" /></div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gold">{product.category}</p>
                  <h4 className="mt-3 text-lg font-black leading-snug">{product.name}</h4>
                  <p className="mt-2 text-sm text-black/55">Model: {product.model}</p>
                  <div className="mt-auto flex items-end justify-between gap-3 pt-5"><strong className="text-xl">{formatNpr(product.price)}</strong><Link href={`/checkout?product=${encodeURIComponent(product.name)}&quantity=1&price=${product.price}`} className="rounded-full bg-[#f5b920] px-4 py-2 text-sm font-bold text-black transition hover:bg-[#e3a30c]">Order</Link></div>
                </article>)}
              </div>
            </div>;
          })}
        </div>
      </div>
    </section>
  );
}
