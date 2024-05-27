import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const HookSection = () => {
  return (
    <div className="bg-gradient-to-r from-primary max-sm:-mt-10 to-[#445a2c] text-white mt-8">
      <div className="max-w-[1250px] mx-auto px-8 py-16 flex gap-x-12 gap-y-8 max-md:text-center  md:flex-row flex-col items-center">
        <div className="space-y-4">
          <h3 className="text-3xl font-semibold">Kunjungi Show Unit Kami!</h3>
          <p className="font-light text-lg sm:w-[70%] leading-relaxed max-md:mx-auto">
            Segera buat janji dengan tim penjualan kami dan kunjungi show unit
            kami untuk merasakan kenyamanan tinggal di Parkspring Gading
          </p>
        </div>
        <button className="bg-white text-lg px-6 py-2 rounded-full scale-[110%] h-fit transition-all hover:bg-transparent group hover:border-[1px] ">
          <div className="flex justify-center items-center gap-2">
            <FaWhatsapp className="text-secondary flex-shrink-0 group-hover:text-white" />
            <div className="text-primary font-semibold whitespace-nowrap group-hover:text-white">
              Buat Janji
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default HookSection;
