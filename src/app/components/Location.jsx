import React from "react";
import LogoParkspring from "./ui/LogoParkspring";
import Image from "next/image";
import { ListLocation } from "./ui/ListLocation";

const dataLocation = [
  {
    title: "3-5 Menit",
    list: ["Kelapa Gading", "Singapore International School"],
  },
  {
    title: "8-10 Menit",
    list: [
      "Rumah Sakit Gading Pluit",
      "Mall Kelapa Gading",
      "North Jakarta International School",
      "Wisata Kuliner Kelapa Gading",
      "Beacon Academy International School",
      "Tol Tanjung Priok",
    ],
  },
  {
    title: "10-15 Menit",
    list: [
      "Mall Artha Gading",
      "Rumah Sakit Mitra Keluarga",
      "Mall of Indonesia",
      "Penabur International School",
    ],
  },
];

const Location = ({ headingLocation, listLocation }) => {
  return (
    <div className="py-16 sm:mt-8 -mt-4 bg-[#F4F4F4]">
      <div className="px-8 max-w-[1250px] mx-auto sm:space-y-12 space-y-8">
        <div className="flex justify-center flex-col items-center max-sm:scale-[85%]">
          <LogoParkspring />
          <p className="text-[#304824] font-light text-xl text-center">
            {headingLocation}
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1  gap-14 justify-center ">
          <div className="space-y-12">
            {listLocation.map((item, index) => (
              <ListLocation
                key={index}
                title={item.titleDuration}
                list={item.location}
                duration={index}
              />
            ))}
          </div>
          <Image
            src="/map.webp"
            alt="location"
            className="max-w-full h-auto "
            width={900}
            height={900}
            quality={50}
          />
        </div>
      </div>
    </div>
  );
};

export default Location;
