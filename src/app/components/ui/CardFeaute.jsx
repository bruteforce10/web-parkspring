"use client";
import React from "react";
import CardHeading from "./CardHeading";
import CardFeature from "./CardFeature";
import { useAppContext } from "@/app/utils/stateContext";

const CardFeaute = ({
  image,
  imageDenah,
  title,
  lt,
  lb,
  bathroom,
  bedroom,
  carport,
  description,
  electric,
  linkVR,
}) => {
  const { setIsOpen } = useAppContext();
  return (
    <>
      <div className="rounded-3xl hover:-translate-y-4 transition-all bg-white overflow-hidden group  ">
        <div className="relative ">
          <img
            src={`${image}`}
            alt="type rumah parkspring villa"
            className="max-md:h-auto h-[300px] w-full object-cover"
          />
          <div
            onClick={() =>
              setIsOpen({
                open: true,
                type: {
                  name: title,
                  lt: lt,
                  lb: lb,
                  bathroom: bathroom,
                  bedroom: bedroom,
                  carport: carport,
                  description: description,
                  electric: electric,
                  linkVR: linkVR,
                  imageDenah: imageDenah,
                },
              })
            }
            className="group-hover:z-[2] cursor-pointer transition-all  z-[-99] absolute left-0 right-0 bottom-0 top-0 place-content-center bg-primary/70 "
          >
            <p className="text-white hover:text-white/80 cursor-pointer text-center  text-2xl font-light underline underline-offset-2">
              See Details
            </p>
          </div>
        </div>
        <div className="py-6 px-6 max-sm:px-4 text-primary">
          <CardHeading name={title} lt={lt} lb={lb} />
          <CardFeature
            bathroom={bathroom}
            bedroom={bedroom}
            carport={carport}
          />
        </div>
      </div>
    </>
  );
};

export default CardFeaute;
