import React from "react";

const FeatureList = ({ Icon, heading, desc }) => {
  return (
    <div className="space-y-4 ">
      <div className="p-4 rounded-full border-2 border-primary group transition-all hover:text-white hover:bg-primary group flex items-center gap-4 ">
        <Icon className="text-4xl" />
        <h3 className="text-2xl font-semibold group-hover:font-light transition-all">
          {heading}
        </h3>
      </div>
      <p className="leading-relaxed">{desc}</p>
    </div>
  );
};

export default FeatureList;
