import { fontPrimary } from "@/app/utils/FontPrimary";
import React from "react";

const CardHeading = ({ name, lt, lb }) => {
  return (
    <div className="flex justify-between ">
      <h4 className={`${fontPrimary} text-5xl max-sm:text-4xl `}>{name}</h4>
      <div className="flex gap-4 divide-x h-fit">
        <div className="flex items-start gap-[4px]  pl-4">
          <p className="text-sm">LT</p>
          <p className="font-semibold text-xl max-sm:text-sm whitespace-nowrap">
            {lt} m<sup className="text-sm">2</sup>
          </p>
        </div>
        <div className="flex items-start gap-[4px] pl-4">
          <p className="text-sm">LB</p>
          <p className="font-semibold text-xl max-sm:text-sm whitespace-nowrap">
            {lb} m<sup className="text-sm">2</sup>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardHeading;
