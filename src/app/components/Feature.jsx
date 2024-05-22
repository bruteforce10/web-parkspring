import React from "react";
import { LuLeaf } from "react-icons/lu";
import { TbLocationCheck } from "react-icons/tb";
import { BsHouseHeart } from "react-icons/bs";
import FeatureList from "./ui/feature-list";

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
    <>
      <div className=" px-8 max-w-[1250px] mx-auto grid grid-cols-1 gap-12  lg:grid-cols-3 lg:gap-8 my-16">
        {data.map((item, index) => (
          <FeatureList
            key={index}
            Icon={item.Icon}
            heading={item.heading}
            desc={item.desc}
          />
        ))}
      </div>
      <div className="w-full bg-black h-[1px] opacity-50 px-8 max-w-[1250px] mx-auto" />
    </>
  );
};

export default Feature;
