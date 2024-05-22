import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ContextProvider } from "./utils/stateContext";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        </body>
      </ContextProvider>
    </html>
  );
}
