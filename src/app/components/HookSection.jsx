import React from "react";
import ButtonHook from "./ui/ButtonHook";

const HookSection = ({
  descriptionHook = "Segera buat janji dengan tim penjualan kami dan kunjungi show unit kami untuk merasakan kenyamanan tinggal di PARKSPRING Gading",
  headingHook = "Kunjungi Show Unit Kami!",
}) => {
  return (
    <div className="bg-gradient-to-r from-primary max-sm:-mt-10 to-[#445a2c] text-white mt-8">
      <div className="max-w-[1250px] mx-auto px-8 py-16 flex gap-x-12 gap-y-8 max-md:text-center  md:flex-row flex-col items-center">
        <div className="space-y-4">
          <h3 className="text-5xl font-semibold ">{headingHook}</h3>
          <p className="font-light text-lg sm:w-[70%] leading-relaxed max-md:mx-auto">
            {descriptionHook}
          </p>
        </div>
        <ButtonHook>Buat Janji</ButtonHook>
      </div>
    </div>
  );
};

export default HookSection;
