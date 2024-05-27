"use client";
import { useInView, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import MobileFeatureList from "./ui/MobileFeatureList";

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <Image
        src="/bg-leaf.webp"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/bg-leaf.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

const FeatureList = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="max-sm:py-10 py-20 sm:space-y-16 space-y-10">
      <div className="px-8 max-w-[1250px] mx-auto relative">
        <Image
          src={"/bird.png"}
          alt="parkspring"
          className="opacity-75 left-36 top-8 absolute max-lg:hidden "
          width={125}
          height={125}
        />
        <Image
          src={"/bird.png"}
          alt="parkspring"
          className="opacity-60 right-36 top-0 absolute max-lg:hidden scale-x-[-1] "
          width={120}
          height={120}
        />
        <h2
          ref={ref}
          className="text-center text-2xl sm:text-4xl font-semibold w-full md:w-[70%] lg:w-[40%] mx-auto leading-tight"
        >
          Quality Time dengan Berbagai Fasilitas Kawasan
        </h2>
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: isInView ? "30%" : "0%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-[30%] h-[1.5px] bg-secondary opacity-50 mt-2 sm:mt-4 mx-auto"
        ></motion.div>
      </div>

      <StickyScroll content={content} />
      <MobileFeatureList content={content} />
    </div>
  );
};

export default FeatureList;
