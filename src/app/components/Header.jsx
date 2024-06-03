"use client";
import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { useAppContext } from "../utils/stateContext";

const Header = () => {
  const { isScrolled } = useAppContext();

  return (
    <div className="relative">
      <Image
        src="/cover-header.webp"
        alt="rumah-minimalis-murah-1-miliyar-kelapa-gading"
        width={1920}
        quality={50}
        className="min-w-screen object-contain lg:-mt-[24rem] md:-mt-[20rem] xl:-mt-[30rem] hidden md:block"
        height={1080}
        priority
      />

      <Image
        src="/cover-mobile.webp"
        alt="rumah-minimalis-murah-1-miliyar-kelapa-gading"
        width={1920}
        quality={50}
        className="min-w-screen object-contain max-sm:-mt-24 -mt-32 block md:hidden"
        height={1080}
        priority
      />
      <div
        className={clsx(
          "icon-scroll lg:top-[65%] top-[90%] max-sm:hidden xl:top-[65%]",
          isScrolled && "hidden"
        )}
      />
    </div>
  );
};

export default Header;
