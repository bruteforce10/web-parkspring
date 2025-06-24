import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ContextProvider } from "./utils/stateContext";
import CallToAction from "./components/CallToAction";
import { Analytics } from "@vercel/analytics/react";
import GoogleTagManagerScript from "@/lib/Head";
import GoogleTagManagerNoScript from "@/lib/Body";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://parkspring.vercel.app"),
  title: "PARKSPRING Gading, Rumah 1,5 M-an Japanese Tropical",
  description:
    "Fasilitas PARKSPRING Gading · One Gate System & 24 Hours Security with Security Hub · Zen Garden · Fish Feeding Pond · Hidden Yoga Spot · Children Playground.",
  // kalo beda pakai ini
  openGraph: {
    images: "/opengraph-image.png",
    title: "PARKSPRING Gading, Rumah 1,5 M-an Japanese Tropical",
    description:
      "Fasilitas PARKSPRING Gading · One Gate System & 24 Hours Security with Security Hub · Zen Garden · Fish Feeding Pond · Hidden Yoga Spot · Children Playground.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Analytics />
      <GoogleTagManagerScript />
      <GoogleTagManagerNoScript />
      <ContextProvider>
        <body className={outfit.className}>
          <div className=" top-0 z-[99] sticky">
            <Navbar />
          </div>
          {children}
          <div className="fixed bottom-0 z-[99] w-full">
            <CallToAction />
          </div>
        </body>
      </ContextProvider>
    </html>
  );
}
