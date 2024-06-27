"use client";
import React, { useEffect, useTransition } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import CardSide from "../berita-media/[id]/_components/CardSide";
import { getAll } from "../utils/getAll";

const NewsLetterSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref);
  const [data, setData] = React.useState([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      getAll("createdAt_ASC").then((res) => {
        const sortedArray = res?.articels.sort((a, b) => a - b);
        const topThree = sortedArray.slice(0, 4);
        setData(topThree);
      });
    });
  }, []);

  if (isPending) {
    return (
      <div className="grid md:grid-cols-4 grid-cols-1 gap-14 justify-center">
        {Array.from({ length: 4 }).map((_, index) => (
          <div className="flex w-full flex-col gap-4" key={index}>
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <section
      id="newsletter"
      className="max-sm:py-10 pt-20 sm:space-y-16 -scroll-mt-28 space-y-10 "
    >
      <div ref={ref} className="px-8 max-w-[1250px] mx-auto relative">
        <h2 className="text-center text-3xl sm:text-4xl font-semibold w-full md:w-[70%] lg:w-[40%] mx-auto leading-tight">
          Portal Berita
        </h2>
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: isInView ? "30%" : "15%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-[30%] h-[1.5px] bg-secondary opacity-50 mt-2 sm:mt-4 mx-auto"
        ></motion.div>

        <div className="grid md:grid-cols-4 grid-cols-1 gap-14 justify-center mt-16">
          {data?.map((item, index) => (
            <CardSide key={index} {...item} />
          ))}
        </div>

        <Link
          href={"/berita-media"}
          className="text-center block underline-offset-2 underline pt-6 pb-14 text-secondary text-lg"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default NewsLetterSection;
