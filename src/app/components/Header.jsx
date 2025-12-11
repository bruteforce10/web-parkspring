"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { useAppContext } from "../utils/stateContext";

const Header = () => {
  const { isScrolled } = useAppContext();

  return (
    <div
      className="relative -mt-72 sm:h-[200vh] h-[180vh] w-full "
      style={{
        backgroundImage: "url('/cover-header.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="md:pt-[24rem] pt-[21rem] container mx-auto px-8">
        <div className="flex max-lg:gap-12 max-lg:flex-col max-lg:justify-center max-lg:items-center items-start">
          <div className="flex flex-col gap-6">
            <h3 className="xl:text-3xl lg:text-xl md:text-xl text-white py-2 bg-gradient-to-r from-primary to-[#5f813b] rounded-xl inline-block w-fit px-6 max-lg:mx-auto">
              Japanese Tropical Home
            </h3>
            <h1 className=" text-white lg:text-6xl max-lg:text-center text-5xl md:text-6xl  xl:text-7xl font-semibold md:leading-tight text-shadow-lg ">
              Hunian Modern Mengutamakan Keseimbangan Hidup
            </h1>
            <button
              onClick={() => {
                gtag_report_conversion(
                  "https://api.whatsapp.com/send?phone=%20628988187773&text=Hai,%20saya%20dapat%20info%20dari%20website%20PARKSPRING%20Gading"
                );
              }}
              id="cta-button"
              className="flex gap-4 max-lg:mx-auto text-white items-center w-fit text-lg bg-secondary border-[#d1bb40] shadow-sm lg:font-semibold before:absolute before:w-full relative z-10 px-8 py-3 overflow-hidden  rounded-full group max-sm:text-base max-sm:px-4 max-sm:py-2 border-2"
            >
              Dapatkan Promonya Sekarang
              <svg
                className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-white/50 backdrop-blur-lg text-gray-50 ease-linear duration-300 rounded-full border border-gray-200 group-hover:border-2 p-2 rotate-45"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  className="fill-gray-200 group-hover:fill-gray-100"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <Image
              src="https://res.cloudinary.com/ddaoyv9wh/image/upload/v1765440209/price-label_u3535t.webp"
              alt="Parkspring Gading Logo"
              width={800}
              height={800}
              className="sm:max-w-[500px] max-w-[350px] h-auto object-contain"
              priority
              quality={50}
            />
            <div className="inline-flex sm:hidden items-center justify-center px-6 py-4 border-[#e2c60f] border-2 bg-gradient-to-r from-[#5f823a] to-[#688b41] rounded-xl">
              <p className="text-transparent  bg-clip-text bg-gradient-to-r from-secondary to-[#e2c60f] font-bold text-4xl">
                FREE PPN
                <sup
                  className="text-secondary opacity-50 text-sm"
                  style={{ verticalAlign: "super" }}
                >
                  *
                </sup>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <Image
        src="/cover-header.webp"
        alt="rumah-minimalis-murah-1-miliyar-kelapa-gading"
        width={1920}
        quality={50}
        className="min-w-screen object-contain lg:-mt-[24rem] md:-mt-[20rem] xl:-mt-[30rem] hidden md:block"
        height={1080}
        priority
      /> */}

      {/* <Image
        src="/cover-mobile.webp"
        alt="rumah-minimalis-murah-1-miliyar-kelapa-gading"
        width={1920}
        quality={50}
        className="min-w-screen object-contain max-sm:-mt-24 -mt-32 block md:hidden"
        height={1080}
        priority
      /> */}

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
