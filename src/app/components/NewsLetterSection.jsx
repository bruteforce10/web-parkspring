"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import CardSide from "../berita-media/[id]/_components/CardSide";

const NewsLetterSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref);
  return (
    <section
      id="newsletter"
      className="max-sm:py-10 pt-20 sm:space-y-16 -scroll-mt-28 space-y-10 "
    >
      <div className="px-8 max-w-[1250px] mx-auto relative">
        <h2
          ref={ref}
          className="text-center text-2xl sm:text-4xl font-semibold w-full md:w-[70%] lg:w-[40%] mx-auto leading-tight"
        >
          Portal Berita
        </h2>
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: isInView ? "15%" : "0%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-[30%] h-[1.5px] bg-secondary opacity-50 mt-2 sm:mt-4 mx-auto"
        ></motion.div>

        <div className="grid md:grid-cols-4 grid-cols-1 gap-14 justify-center mt-16">
          <CardSide />
          <CardSide />
          <CardSide />
          <CardSide />
        </div>

        <Link
          href={"/berita-media"}
          className="text-center block underline-offset-2 underline py-12 text-secondary text-lg"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default NewsLetterSection;
