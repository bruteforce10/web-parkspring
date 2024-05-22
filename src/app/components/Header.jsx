"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import clsx from "clsx";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <Image
        src="/cover-header.webp"
        alt="rumah-minimalis-murah-1-miliyar-kelapa-gading"
        width={1920}
        className="min-w-screen object-contain -mt-60 hidden md:block"
        height={1080}
      />

      <Image
        src="/cover-mobile.webp"
        alt="rumah-minimalis-murah-1-miliyar-kelapa-gading"
        width={1920}
        className="min-w-screen object-contain -mt-40 block md:hidden"
        height={1080}
      />
      <div
        className={clsx(
          "icon-scroll top-[90%] max-sm:hidden lg:top-[70%]",
          isScrolled && "hidden"
        )}
      />
    </div>
  );
};

export default Header;
