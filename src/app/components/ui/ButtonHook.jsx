"use client";
import { useAppContext } from "@/app/utils/stateContext";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const ButtonHook = ({ children, className }) => {
  const { data } = useAppContext();
  const noWhatsapp = data?.data?.dataLandingPages[0]?.noWhatsapp?.slice(1);

  return (
    <button
      onClick={() =>
        window.open(
          `https://api.whatsapp.com/send?phone=%2062${noWhatsapp}&text=Hai,%20saya%20dapat%20info%20dari%20website%20PARKSPRING%20Gading`
        )
      }
      className={`${className} bg-white text-lg px-6 py-2 rounded-full scale-[110%] h-fit transition-all hover:bg-transparent group hover:border-[1px] `}
    >
      <div className="flex justify-center items-center gap-2">
        <FaWhatsapp className="text-secondary flex-shrink-0 group-hover:text-white" />
        <div className="text-primary font-semibold whitespace-nowrap group-hover:text-white">
          {children}
        </div>
      </div>
    </button>
  );
};

export default ButtonHook;
