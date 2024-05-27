import { Cardo } from "next/font/google";

const cardo = Cardo({ subsets: ["latin"], weight: "400" });
export const fontPrimary = cardo.className;
