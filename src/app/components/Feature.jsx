import React from "react";
import FeatureList from "./ui/feature-list";
import LogoParkspring from "./ui/LogoParkspring";

const Feature = ({ headingHeader, featureList }) => {
  return (
    <div
      style={{
        backgroundImage: "url(/bg-leaf.webp)",
        backgroundRepeat: "no-repeat",
        width: "100%",
        minHeight: "400px",
      }}
      className="w-full py-16 space-y-12"
    >
      <div className="flex justify-center flex-col items-center max-sm:scale-[85%]">
        <LogoParkspring color="#EBBD4E" />
        <p className="text-[#F6F6E8] font-light text-xl">{headingHeader}</p>
      </div>
      <div className=" px-8 max-w-[1250px] mx-auto grid grid-cols-1 gap-12 max-sm:gap-y-8  lg:grid-cols-3 lg:gap-12 ">
        {featureList.map((item, index) => {
          return (
            <FeatureList
              key={index}
              id={item?.id}
              heading={item?.title}
              desc={item?.description}
            />
          );
        })}
      </div>
      {/* <div className="w-full bg-black h-[1px] opacity-50 px-8 max-w-[1250px] mx-auto" /> */}
    </div>
  );
};

export default Feature;
