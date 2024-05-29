/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import { HoverBorderGradient } from "./ui/ButtonOutline";
import Image from "next/image";

const ImageFeature = () => {
  return (
    <div className="pt-14">
      <div className="text-center flex flex-col mb-8 gap-4 items-center max-w-[1250px] mx-auto px-8">
        <div className="space-y-6 mb-2">
          <h5 className="text-primary text-lg sm:text-xl">
            Didesain Oleh <span className="font-semibold">Stanley Winaryo</span>{" "}
            dari
          </h5>
          <Image
            src={"/satu-arsitek.webp"}
            className="mx-auto"
            width={230}
            height={230}
          />
        </div>
        <HoverBorderGradient className={"text-black "}>
          Nikmati keindahan konsep Japanese Tropical di setiap sudut hunian Anda
        </HoverBorderGradient>
      </div>
      <div className="w-fit mx-auto">
        <ImgComparisonSlider className="max-w-[1250px] lg:rounded-3xl slider-with-animated-handle">
          <img slot="first" src="/slider.webp" />
          <img slot="second" src="/slider-2.webp" />
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
              stroke-width="1"
              fill="#fff"
              vector-effect="non-scaling-stroke"
            ></path>
          </svg>
        </ImgComparisonSlider>
      </div>
    </div>
  );
};

export default ImageFeature;
