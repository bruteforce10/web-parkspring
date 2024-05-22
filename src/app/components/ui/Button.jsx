import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Button = ({ children }) => {
  return (
    <button className="flex group hover:bg-secondary transition-all hover:text-white hover:border-none  gap-8 pr-2 pl-6 py-2 border-[1px] border-black rounded-full items-center">
      <span>{children}</span>
      <div className="p-2 rounded-full group-hover:bg-white/20 transition-all bg-secondary">
        <IoIosArrowForward className="text-lg" />
      </div>
    </button>
  );
};

export default Button;
