import Image from "next/image";
import React from "react";
import CardHeading from "./CardHeading";
import CardFeature from "./CardFeature";

const CardFeaute = ({ image, name, lt, lb, bathroom, bedroom, carport }) => {
  return (
    <div className="rounded-3xl bg-white overflow-hidden group cursor-pointer transition-all hover:-translate-y-6">
      <div className="relative ">
        <Image
          src={`${image}`}
          alt="type rumah parkspring villa"
          width={600}
          className="max-md:h-auto h-[300px] w-full object-cover"
          height={600}
        />
        <div className="group-hover:z-[99] transition-all  z-[-99] absolute left-0 right-0 bottom-0 top-0 place-content-center bg-primary/70 ">
          <p className="text-white hover:text-white/80 cursor-pointer text-center  text-2xl font-light underline underline-offset-2">
            See Details
          </p>
        </div>
      </div>
      <div className="py-6 px-6 text-primary">
        <CardHeading name={name} lt={lt} lb={lb} />
        <CardFeature bathroom={bathroom} bedroom={bedroom} carport={carport} />
      </div>
    </div>
  );
};

export default CardFeaute;
