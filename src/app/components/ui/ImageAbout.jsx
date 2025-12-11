"use client";
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
        <img
          src={"/about-us.webp"}
          alt="image-about"
          className="rounded-xl w-[400px] h-auto"
        />
        <motion.div
          className="absolute bottom-[200px] w-64 space-y-4 -right-32 max-sm:hidden"
          style={{ bottom: scroll * 0.15 - 100 }}
        >
          <img
            src={"/aboutsecond.webp"}
            alt="image-about"
            className="rounded-xl shadow-md w-[250px] h-auto"
          />
          <a
            href="https://storage.wefinite.com/PARKSPRING_Gading"
            target="_blank"
            className="bg-gray-50 hover:scale-95 transition-all p-4 rounded-3xl flex gap-4 items-center"
          >
            <img
              src={"/360.svg"}
              alt="image-about"
              className="w-[40px] h-[40px]"
            />
            <p className="text-[#5F603A] leading-snug ">
              Jelajahi PARKSPRING Gading secara Virtual!
            </p>
          </a>
          <img
            src={"/cursor.svg"}
            alt="cursor VR Parkspring"
            className="absolute right-0 -bottom-2 -rotate-45 w-[25px] h-[25px]"
          />
        </motion.div>
        <a
          href="https://storage.wefinite.com/PARKSPRING_Gading"
          target="_blank"
          className="bg-gray-50 -mt-[90px] mx-auto w-[95%] relative p-4 rounded-xl max-sm:flex hidden gap-4 items-center"
        >
          <img
            src={"/360.svg"}
            alt="image-about"
            className="w-[40px] h-[40px]"
          />
          <p className="text-[#5F603A] leading-snug ">
            Jelajahi PARKSPRING Gading secara Virtual!
          </p>
        </a>
      </div>
    </motion.div>
  );
};
