import React from "react";
import { LuLeaf } from "react-icons/lu";
import { TbLocationCheck } from "react-icons/tb";
import { BsHouseHeart } from "react-icons/bs";
import FeatureList from "./ui/feature-list";
import LogoParkspring from "./ui/LogoParkspring";

const data = [
  {
    Icon: LuLeaf,
    heading: "Japanese Tropical",
    desc: "Konsep yang memberikan kenyamanan penghuni namun tetap estetik",
  },
  {
    Icon: TbLocationCheck,
    heading: "Lokasi Strategis",
    desc: "Berlokasi di area Kelapa Gading, memberikan kemudahan untuk menjangkau banyak fasilitas publik",
  },
  {
    Icon: BsHouseHeart,
    heading: "Beragam Fasilitas",
    desc: "Dilengkapi oleh berbagai fasilitas eksklusif untuk menjaga keseimbangan hidup Anda",
  },
];

const Feature = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/bg-leaf.webp)",
        backgroundRepeat: "no-repeat",
        width: "100%",
        minHeight: "400px",
      }}
      className="w-full py-16 space-y-12"
    >
      <div className="flex justify-center flex-col items-center max-sm:scale-[85%]">
        <LogoParkspring color="#EBBD4E" />
        <p className="text-[#F6F6E8] font-light text-xl">
          Hunian Ideal Untuk Anda dan Keluarga
        </p>
      </div>
      <div className=" px-8 max-w-[1250px] mx-auto grid grid-cols-1 gap-12 max-sm:gap-y-8  lg:grid-cols-3 lg:gap-8 ">
        {data.map((item, index) => (
          <FeatureList
            key={index}
            Icon={item.Icon}
            heading={item.heading}
            desc={item.desc}
          />
        ))}
      </div>
      {/* <div className="w-full bg-black h-[1px] opacity-50 px-8 max-w-[1250px] mx-auto" /> */}
    </div>
  );
};

export default Feature;
