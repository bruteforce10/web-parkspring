import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ContextProvider } from "./utils/stateContext";
import CallToAction from "./components/CallToAction";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "PARKSPRING Gading, Rumah 1,5 M-an Japanese Tropical",
  description:
    "Fasilitas PARKSPRING Gading · One Gate System & 24 Hours Security with Security Hub · Zen Garden · Fish Feeding Pond · Hidden Yoga Spot · Children Playground.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
