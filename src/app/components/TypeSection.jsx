import React from "react";
import LogoParkspring from "./ui/LogoParkspring";
import CardFeaute from "./ui/CardFeaute";

const data = [
  {
    image: "/type-house/hiro.png",
    name: "Hiro",
    lt: 60,
    lb: 74,
    bathroom: 1,
    bedroom: 2,
    carport: 1,
  },
  {
    image: "/type-house/villa.png",
    name: "Villa",
    lt: 60,
    lb: 91,
    bathroom: "2+1",
    bedroom: "3+1",
    carport: 1,
  },
  {
    image: "/type-house/grand.png",
    name: "Grand",
    lt: 80,
    lb: 111,
    bathroom: "3+1",
    bedroom: "3+1",
    carport: 2,
  },
];

const TypeSection = () => {
  return (
    <section id="type" className="bg-[#F4F4F4] pb-12 -scroll-mt-28">
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
    </section>
  );
};

export default TypeSection;
