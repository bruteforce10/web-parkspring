"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const ImageAbout = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div style={{ scrollMotion: true }}>
      <div className="relative w-fit ">
        <Image
          src={"/about-us.webp"}
          alt="image-about"
          className="rounded-xl"
          width={400}
          height={400}
          quality={50}
        />
        <motion.div
          className="absolute bottom-[200px] w-64 space-y-4 -right-32 max-sm:hidden"
          style={{ bottom: scroll * 0.15 - 100 }}
        >
          <Image
            src={"/aboutsecond.webp"}
            alt="image-about"
            className="rounded-xl  shadow-md"
            width={250}
            height={250}
            quality={50}
          />
          <a
            href="https://storage.wefinite.com/PARKSPRING_Gading"
            target="_blank"
            className="bg-gray-50  p-4 rounded-3xl flex gap-4 items-center"
          >
            <Image
              src={"/360.svg"}
              alt="image-about"
              width={40}
              height={40}
              quality={50}
            />
            <p className="text-[#5F603A] leading-snug">
              Jelajahi PARKSPRING Gading secara Virtual!
            </p>
          </a>
        </motion.div>
        <a
          href="https://storage.wefinite.com/PARKSPRING_Gading"
          target="_blank"
          className="bg-gray-50 -mt-[90px] mx-auto w-[95%] relative p-4 rounded-xl max-sm:flex hidden gap-4 items-center"
        >
          <Image
            src={"/360.svg"}
            alt="image-about"
            width={40}
            height={40}
            quality={50}
          />
          <p className="text-[#5F603A] leading-snug ">
            Klik Disini untuk Jelajahi PARKSPRING Gading secara Virtual!
          </p>
        </a>
      </div>
    </motion.div>
  );
};
