export const product = {
  name: "EZVIZ H6c Pro 5MP Wireless CCTV",
  price: 4700,
  originalPrice: 5000,
  delivery: "Free delivery inside the valley",
  description: "A smart pan-and-tilt security camera with crisp 3K coverage and complete control from the EZVIZ app.",
  benefits: ["5MP / 3K clear video", "360° pan & tilt coverage", "Smart human tracking", "Color night vision", "Two-way talk & privacy shutter", "Wi-Fi and LAN support"],
  images: ["/products/ezviz-h6c.png"],
};
export const formatNpr = (amount: number) => `Rs. ${amount.toLocaleString("en-NP")}`;
