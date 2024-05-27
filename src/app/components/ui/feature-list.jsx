import React from "react";

const FeatureList = ({ Icon, heading, desc }) => {
  return (
    <div className="space-y-4 text-[#F6F6E8]">
      <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm border-[1px] border-[#fff2d2] hover:border-[#ffd77a]  transition-all  group flex items-center gap-4 ">
        <Icon className="text-4xl text-[#ffd77a] " />
        <h3 className="text-2xl font-semibold   ">{heading}</h3>
      </div>
      <p className="leading-relaxed font-light">{desc}</p>
    </div>
  );
};

export default FeatureList;
