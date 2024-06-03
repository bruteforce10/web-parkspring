"use client";
import { useInView, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import MobileFeatureList from "./ui/MobileFeatureList";
import { PiMouseScrollThin } from "react-icons/pi";

const FeatureList = ({ headingFeature, listFeature }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  const transformedData = listFeature.map((item, index) => ({
    title: item?.title,
    description: item?.description,
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={item?.image?.url}
          width={300}
          height={300}
          className="h-auto w-full sm:rounded-lg"
          alt="linear board demo"
          quality={50}
        />
      </div>
    ),
  }));

  return (
    <section
      id="facilities"
      className="max-sm:py-10 pt-20 sm:space-y-16 -scroll-mt-28 space-y-10"
    >
      <div className="px-8 max-w-[1250px] mx-auto relative">
        {/* <Image
          src={"/bird.webp"}
          alt="parkspring"
          className="opacity-75 left-36 top-8 absolute max-lg:hidden "
          width={125}
          height={125}
        />
        <Image
          src={"/bird.webp"}
          alt="parkspring"
          className="opacity-60 right-36 top-0 absolute max-lg:hidden scale-x-[-1] "
          width={120}
          height={120}
        /> */}
        <h2
          ref={ref}
          className="text-center text-2xl sm:text-4xl font-semibold w-full md:w-[70%] lg:w-[40%] mx-auto leading-tight"
        >
          {headingFeature}
        </h2>
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: isInView ? "30%" : "0%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-[30%] h-[1.5px] bg-secondary opacity-50 mt-2 sm:mt-4 mx-auto"
        ></motion.div>
      </div>

      <div className="relative">
        <StickyScroll content={transformedData} />
        <div className="absolute top-8 animate-bounce  flex right-[10%] xl:right-[20%]">
          <p className="text-md animate-pulse">Scroll Down to See</p>
          <PiMouseScrollThin className="w-6 h-6 text-secondary" />
        </div>
      </div>

      <MobileFeatureList content={transformedData} />
    </section>
  );
};

export default FeatureList;
