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
    linkVR: "https://storage.wefinite.com/PARKSPRING_Gading/",
  },
  {
    image: "/type-house/villa.webp",
    imageDenah: "/type-house/denah/villa.webp",
    linkVR: "https://storage.wefinite.com/PARKSPRING_Gading/",
  },
  {
    image: "/type-house/grand.webp",
    imageDenah: "/type-house/denah/grand-fix.webp",
    linkVR: "https://storage.wefinite.com/PARKSPRING_Gading/",
  },
];

const TypeSection = ({ headingTypeUnit, typeHouse }) => {
  const { isOpen } = useAppContext();

  const combinedData = typeHouse.map((item, index) => ({
    ...item,
    ...data[index],
  }));

  return (
    <>
      <section id="type" className="bg-[#F4F4F4] pb-12 -scroll-mt-28">
        <div className="max-w-[1250px]   mx-auto px-8 sm:py-20 py-12">
          <div className="flex justify-center flex-col items-center max-sm:scale-[85%]">
            <p className="text-[#304824] font-light text-xl text-center mb-1">
              Type Unit
            </p>
            <LogoParkspring />
            <p className="text-light text-lg mt-4 sm:mt-2 tracking-wide max-md:text-center">
              {headingTypeUnit}
            </p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-8 sm:mt-16 mt-12 ">
            {combinedData.map((item, index) => {
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
