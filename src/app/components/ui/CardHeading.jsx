import { fontPrimary } from "@/app/utils/FontPrimary";
import React from "react";

const CardHeading = ({ name, lt, lb }) => {
  return (
    <div className="flex justify-between ">
      <h4 className={`${fontPrimary} text-5xl max-sm:text-4xl `}>{name}</h4>
      <div className="flex gap-4 divide-x h-fit">
        <div className="flex items-start gap-[4px]  pl-4">
          <p className="text-sm">LT</p>
          <h6 className="font-semibold text-xl max-sm:text-sm whitespace-nowrap">
            {lt} m<sup className="text-sm">2</sup>
          </h6>
        </div>
        <div className="flex items-start gap-[4px] pl-4">
          <p className="text-sm">LB</p>
          <h6 className="font-semibold text-xl max-sm:text-sm whitespace-nowrap">
            {lb} m<sup className="text-sm">2</sup>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default CardHeading;
