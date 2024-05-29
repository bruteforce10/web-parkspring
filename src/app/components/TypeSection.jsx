"use client";
import React from "react";
import LogoParkspring from "./ui/LogoParkspring";
import CardFeaute from "./ui/CardFeaute";
import Modal from "./ui/Modal";
import { useAppContext } from "../utils/stateContext";

const data = [
  {
    image: "/type-house/hiro.webp",
    imageDenah: "/type-house/denah/hiro.webp",
    name: "Hiro",
    description: "The key to finding a happy and healthy life is balance.",
    linkVR: "test",
    electric: 2200,
    lt: 60,
    lb: 74,
    bathroom: 1,
    bedroom: 2,
    carport: 1,
  },
  {
    image: "/type-house/villa.webp",
    imageDenah: "/type-house/denah/villa.webp",
    name: "Villa",
    description: "It's time to start living your life you've always imagined.",
    linkVR: "test",
    electric: 2200,
    lt: 60,
    lb: 91,
    bathroom: "2+1",
    bedroom: "3+1",
    carport: 1,
  },
  {
    image: "/type-house/grand.webp",
    imageDenah: "/type-house/denah/grand-fix.webp",
    name: "Grand",
    description: "It's a place where you make memories with your family.",
    linkVR: "test",
    electric: 3500,
    lt: 80,
    lb: 111,
    bathroom: "3+1",
    bedroom: "3+1",
    carport: 2,
  },
];

const TypeSection = () => {
  const { isOpen } = useAppContext();

  return (
    <>
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
            {data.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <CardFeaute {...item} />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>
      {isOpen?.open && <Modal {...isOpen?.type} />}
    </>
  );
};

export default TypeSection;
