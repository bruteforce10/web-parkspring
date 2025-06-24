import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ContextProvider } from "./utils/stateContext";
import CallToAction from "./components/CallToAction";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

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

const GTM_ID = "GTM-KHCKPCVT";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* GTM Script */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
      </head>
      <Analytics />
      <ContextProvider>
        <body className={outfit.className}>
          {/* GTM noscript */}
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
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
