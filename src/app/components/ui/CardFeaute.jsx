"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import CardHeading from "./CardHeading";
import CardFeature from "./CardFeature";
import Modal from "./Modal";
import { useAppContext } from "@/app/utils/stateContext";

const CardFeaute = ({ image, name, lt, lb, bathroom, bedroom, carport }) => {
  const { isOpen, setIsOpen } = useAppContext();
  return (
    <>
      <div className="rounded-3xl bg-white overflow-hidden group  ">
        <div className="relative ">
          <Image
            src={`${image}`}
            alt="type rumah parkspring villa"
            width={600}
            className="max-md:h-auto h-[300px] w-full object-cover"
            height={600}
          />
          <div
            onClick={() => setIsOpen(true)}
            className="group-hover:z-[2] cursor-pointer transition-all  z-[-99] absolute left-0 right-0 bottom-0 top-0 place-content-center bg-primary/70 "
          >
            <p className="text-white hover:text-white/80 cursor-pointer text-center  text-2xl font-light underline underline-offset-2">
              See Details
            </p>
          </div>
        </div>
        <div className="py-6 px-6 max-sm:px-4 text-primary">
          <CardHeading name={name} lt={lt} lb={lb} />
          <CardFeature
            bathroom={bathroom}
            bedroom={bedroom}
            carport={carport}
          />
        </div>
      </div>
      {isOpen && <Modal />}
    </>
  );
};

export default CardFeaute;
