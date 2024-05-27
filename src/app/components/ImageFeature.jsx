/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import { HoverBorderGradient } from "./ui/ButtonOutline";

const ImageFeature = () => {
  return (
    <div className="pt-14">
      <div className="text-center flex flex-col mb-8 gap-4 items-center max-w-[1250px] mx-auto px-8">
        <div className="-space-y-1">
          <h5 className="text-primary text-lg sm:text-xl">Dirancang oleh</h5>
          <h3 className="sm:text-4xl text-3xl leading-normal font-medium">
            Stanley Winaryo dari <br className="max-sm:block" />
            <span className="font-semibold">Satu Arsitek</span>
          </h3>
        </div>
        <HoverBorderGradient className={"text-black "}>
          Nikmati konsep Japanese Tropical di setiap sudut hinuan Anda
        </HoverBorderGradient>
      </div>
      <div className="w-fit mx-auto">
        <ImgComparisonSlider className="max-w-[1250px] lg:rounded-3xl">
          <img slot="first" src="/slider.png" />
          <img slot="second" src="/slider-2.png" />
        </ImgComparisonSlider>
      </div>
    </div>
  );
};

export default ImageFeature;
