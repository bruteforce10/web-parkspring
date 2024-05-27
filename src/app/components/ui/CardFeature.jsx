import React from "react";
import { IoIosBed } from "react-icons/io";
import { TbBathFilled } from "react-icons/tb";
import { FaCarAlt } from "react-icons/fa";
import { fontPrimary } from "@/app/utils/FontPrimary";

const CardFeature = ({ bathroom, bedroom, carport }) => {
  return (
    <div className="flex  mt-7 justify-between ">
      <div className="flex items-center gap-3">
        <IoIosBed className="text-xl text-secondary" />
        <div className="-space-y-2">
          <h6 className={`${fontPrimary}  text-xl`}>{bedroom}</h6>
          <p className="font-light ">Bedroom</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <TbBathFilled className="text-xl text-secondary" />
        <div className="-space-y-2">
          <h6 className={`${fontPrimary}  text-xl`}>{bathroom}</h6>
          <p className="font-light ">Bathroom</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <FaCarAlt className="text-xl text-secondary" />
        <div className="-space-y-2">
          <h6 className={`${fontPrimary}  text-xl`}>{carport}</h6>
          <p className="font-light ">Carport</p>
        </div>
      </div>
    </div>
  );
};

export default CardFeature;
