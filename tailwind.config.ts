import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"], theme: { extend: { colors: { ink: "#09070a", gold: "#ffad7d", cream: "#fffafd" } } }, plugins: [] } satisfies Config;
