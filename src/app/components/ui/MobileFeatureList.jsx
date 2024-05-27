import Image from "next/image";
import React from "react";

const MobileFeatureList = ({ content }) => {
  return (
    <div className="sm:hidden">
      {content.map((item, index) => (
        <div key={index} className="border-b-[1px] border-secondary relative">
          {item?.content}
          <div className="absolute w-full bottom-0 bg-gradient-to-b from-transparent py-4 px-4 to-black/50">
            <h4 className="text-white text-xl text-light">{item?.title}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileFeatureList;
