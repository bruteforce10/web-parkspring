import React from "react";
import LogoParkspring from "./ui/LogoParkspring";
import CardFeaute from "./ui/CardFeaute";

const data = [
  {
    image: "/type-house/hiro.png",
    name: "Hiro",
    lt: 32,
    lb: 20,
    bathroom: 2,
    bedroom: 3,
    carport: 1,
  },
  {
    image: "/type-house/villa.png",
    name: "Villa",
    lt: 72,
    lb: 40,
    bathroom: 4,
    bedroom: 4,
    carport: 2,
  },
  {
    image: "/type-house/grand.png",
    name: "Grand",
    lt: 32,
    lb: 20,
    bathroom: 2,
    bedroom: 3,
    carport: 1,
  },
];

const TypeSection = () => {
  return (
    <div className="bg-[#F4F4F4] pb-12">
      <div className="max-w-[1250px]   mx-auto px-8 sm:py-20 py-12">
        <div className="flex justify-center flex-col items-center max-sm:scale-[85%]">
          <p className="text-[#304824] font-light text-xl text-center">
            Type Unit
          </p>
          <LogoParkspring />
          <p className="text-light text-lg mt-4 sm:mt-2 tracking-wide max-md:text-center">
            PARKSPRING Gading Memiliki 3 tipe unit untuk membantu mewujudkan
            hunian impian Anda!
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-8 sm:mt-16 mt-12 ">
          {data.map((item, index) => (
            <CardFeaute key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TypeSection;
