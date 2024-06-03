import React from "react";
import { LuLeaf } from "react-icons/lu";
import { TbLocationCheck } from "react-icons/tb";
import { BsHouseHeart } from "react-icons/bs";

const FeatureList = ({ id, heading, desc }) => {
  const style = "text-3xl text-[#ffd77a]";
  let Icon = () => {
    switch (id) {
      case "clwsw0c195pu807lm2a6z0m3p":
        return <LuLeaf className={style} />;
      case "clwsw0c185pu607lm8iashkkk":
        return <TbLocationCheck className={style} />;
      case "clwsw0c175pu407lmh0dsprw4":
        return <BsHouseHeart className={style} />;
      default:
        return <LuLeaf className={style} />;
    }
  };

  return (
    <div className="space-y-4 text-[#F6F6E8]">
      <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm border-[1px] border-[#fff2d2] hover:border-[#ffd77a]  transition-all  group flex items-center gap-4 ">
        <Icon />
        <h3 className="text-2xl font-semibold">{heading}</h3>
      </div>
      <p className="leading-relaxed font-light">{desc}</p>
    </div>
  );
};

export default FeatureList;
