import React from "react";
import { HoverBorderGradient } from "./ButtonOutline";
import CheckList from "./CheckList";
import { ButtonBorder, MovingBorder } from "./ButtonBorder";

export const ListLocation = ({ title, list, duration }) => {
  return (
    <div className="space-y-4">
      {/* <h3 className="text-xl text-center  py-2 px-4 rounded-3xl bg-white  text-primary font-bold">
        {title}
      </h3> */}
      <ButtonBorder
        duration={2000 + duration * 1000}
        className={"border-none text-primary font-bold text-xl"}
      >
        {title}
      </ButtonBorder>
      <div className="grid gap-y-6 gap-x-4 grid-cols-2">
        {list.map((item, index) => (
          <CheckList key={index} text={item} />
        ))}
      </div>
    </div>
  );
};
