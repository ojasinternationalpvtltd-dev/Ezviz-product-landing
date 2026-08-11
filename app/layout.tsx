import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "OJAS | EZVIZ H6c Pro Smart Home Security", description: "Order the EZVIZ H6c Pro wireless CCTV with Cash on Delivery." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
