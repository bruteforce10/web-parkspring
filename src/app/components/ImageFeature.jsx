/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import { HoverBorderGradient } from "./ui/ButtonOutline";

const ImageFeature = ({ headingMadeBy, descriptionMadeBy }) => {
  const heading = [
    headingMadeBy.slice(0, 14),
    headingMadeBy.slice(14, 30),
    headingMadeBy.slice(30),
  ];

  return (
    <div className="pt-14">
      <div className="text-center flex flex-col mb-8 gap-4 items-center max-w-[1250px] mx-auto px-8">
        <div className="space-y-6 mb-2">
          <p className="text-primary text-lg sm:text-xl">
            {heading[0]} <span className="font-semibold">{heading[1]}</span>{" "}
            {heading[2]}
          </p>
          <img
            src={"/satu-arsitek.webp"}
            className="mx-auto w-[230px] h-auto"
            alt="satu arsitek parskpsring"
          />
        </div>
        <HoverBorderGradient className={"text-black "}>
          {descriptionMadeBy}
        </HoverBorderGradient>
      </div>
      <div className="w-fit mx-auto">
        <ImgComparisonSlider className="max-w-[1250px] lg:rounded-3xl slider-with-animated-handle">
          <img
            slot="first"
            src="/slider.webp"
            alt="interior parkspring rumah mewah"
            className="w-full"
            width={500}
            height={500}
          />
          <img
            slot="second"
            src="/slider-2.webp"
            alt="interior parkspring rumah mewah"
            className="w-full"
            width={500}
            height={500}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            className="custom-animated-handle"
            slot="handle"
            viewBox="-8 -3 16 6"
          >
            <path
              stroke="#fff"
              d="M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2"
              strokeWidth="1"
              fill="#fff"
              vectorEffect="non-scaling-stroke"
            ></path>
          </svg>
        </ImgComparisonSlider>
      </div>
    </div>
  );
};

export default ImageFeature;
