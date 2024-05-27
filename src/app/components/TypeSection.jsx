import React from "react";
import LogoParkspring from "./ui/LogoParkspring";
import Image from "next/image";
import { fontPrimary } from "../utils/FontPrimary";

const TypeSection = () => {
  return (
    <div className="max-w-[1250px] mx-auto px-8 py-20">
      <div className="flex justify-center flex-col items-center max-sm:scale-[85%]">
        <p className="text-[#304824] font-light text-xl text-center">
          Type Unit
        </p>
        <LogoParkspring />
        <p className="text-light text-lg mt-2 tracking-wide">
          PARKSPRING Gading Memiliki 3 tipe unit untuk membantu mewujudkan
          hunian impian Anda!
        </p>
      </div>
      <div className="grid grid-cols-3 mt-16">
        <div>
          <Image
            src={"/type-house/hiro.png"}
            alt="type rumah parkspring villa"
            width={600}
            height={600}
          />
          <h4 className={`${fontPrimary}`}>Hiro</h4>
        </div>
      </div>
    </div>
  );
};

export default TypeSection;
