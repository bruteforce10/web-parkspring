import React from "react";
import { IoMdCheckmark } from "react-icons/io";

const CheckList = ({ text }) => {
  return (
    <div className="flex gap-3 items-center justify-start">
      <IoMdCheckmark className="text-xl text-primary flex-shrink-0" />
      <p className="text-lg max-sm:text-sm text-primary font-medium text-left">
        {text}
      </p>
    </div>
  );
};

export default CheckList;
