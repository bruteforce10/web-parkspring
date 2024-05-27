import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";

const CheckList = ({ text }) => {
  return (
    <div className="flex gap-3 items-start justify-start ">
      <FaCircleCheck className="text-xl text-secondary flex-shrink-0 mt-[6px] ml-2" />
      <p className="text-lg max-sm:text-sm text-primary font-medium text-left ">
        {text}
      </p>
    </div>
  );
};

export default CheckList;
