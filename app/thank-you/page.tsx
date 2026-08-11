"use client";
import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { formatNpr } from "@/lib/product";

export default function ThankYou() { return <Suspense fallback={<main className="min-h-screen bg-cream" />}><ThankYouContent /></Suspense>; }
function ThankYouContent(){const p=useSearchParams(); const total=Number(p.get("total")); return <main className="grid min-h-screen place-items-center bg-cream px-5"><section className="max-w-lg rounded-3xl bg-white p-8 text-center shadow-xl shadow-black/5 md:p-12"><div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-yellow-300 text-3xl">✓</div><p className="mt-7 font-bold text-gold">ORDER RECEIVED</p><h1 className="mt-2 text-4xl font-black">Thank you for your order!</h1><p className="mt-4 leading-7 text-black/60">Our sales representative will call you soon to confirm your order.</p><div className="mt-8 rounded-2xl bg-cream p-5 text-left text-sm"><p><b>Order ID:</b> {p.get("orderId")}</p><p className="mt-3"><b>Product:</b> {p.get("product")}</p><p className="mt-3"><b>Quantity:</b> {p.get("quantity")}</p><p className="mt-3"><b>Total:</b> {formatNpr(total)}</p><p className="mt-3"><b>Payment:</b> Cash On Delivery</p></div><Link href="/" className="mt-8 inline-block rounded-full bg-ink px-6 py-4 font-bold text-white">Back to Home</Link></section></main>}
