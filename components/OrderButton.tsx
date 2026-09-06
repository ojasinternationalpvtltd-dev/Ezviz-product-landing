"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { product } from "@/lib/product";
import { trackMetaEvent } from "@/lib/metaPixel";
export function OrderButton({ label = "Order Now", className = "" }: { label?: string; className?: string }) {
  const router = useRouter(); const [quantity, setQuantity] = useState(1);
  function order() { trackMetaEvent("AddToCart", { content_name: product.name, content_type: "product", value: product.price * quantity, currency: "NPR", num_items: quantity }); router.push(`/checkout?product=${encodeURIComponent(product.name)}&quantity=${quantity}&price=${product.price}`); }
  return <button onClick={order} className={className}>{label}</button>;
}
export function QuantityOrder() {
 const router = useRouter(); const [quantity,setQuantity] = useState(1);
 function order(){ trackMetaEvent("AddToCart", { content_name: product.name, content_type: "product", value: product.price * quantity, currency: "NPR", num_items: quantity }); router.push(`/checkout?product=${encodeURIComponent(product.name)}&quantity=${quantity}&price=${product.price}`); }
 return <div className="space-y-5"><div className="flex items-center justify-between"><span className="font-semibold">Quantity</span><div className="flex overflow-hidden rounded-full border border-black/15 bg-white"><button aria-label="Decrease quantity" onClick={()=>setQuantity(Math.max(1,quantity-1))} className="h-10 w-10 text-xl">−</button><span className="flex h-10 w-10 items-center justify-center font-bold">{quantity}</span><button aria-label="Increase quantity" onClick={()=>setQuantity(quantity+1)} className="h-10 w-10 text-xl">+</button></div></div><div className="flex items-end justify-between border-y border-black/10 py-4"><span className="text-sm text-black/60">Total (COD)</span><span className="text-2xl font-black">Rs. {(product.price * quantity).toLocaleString("en-NP")}</span></div><button onClick={order} className="w-full rounded-full bg-yellow-400 px-6 py-4 font-bold text-black shadow-lg shadow-yellow-400/30 transition hover:bg-yellow-300">Order Now — Cash on Delivery</button></div>;
}
