"use client";
import Image from "next/image";
import React from "react";
import StyleList from "./ui/style-list";
import { LuInstagram } from "react-icons/lu";
import { GrFacebookOption } from "react-icons/gr";
import clsx from "clsx";
import { motion, spring } from "framer-motion";
import { useAppContext } from "../utils/stateContext";
import Link from "next/link";

const Navbar = () => {
  const { isScrolled, data } = useAppContext();
  const linkData = data?.data?.dataLandingPages[0];

  return (
    <motion.div
      layout
      transition={spring}
      className={clsx(
        "my-4 ",
        isScrolled &&
          "bg-white/80 backdrop-blur-sm o md:h-24 h-fit max-md:py-4 "
      )}
    >
      <div className="navbar px-8 max-w-[1250px] mx-auto">
        <div className="navbar-start">
          <Link href="/">
            <Image
              src="/logo-parkspring.svg"
              alt="logo-parkspring"
              className="w-[60%] md:hidden block object-contain z-50"
              width={50}
              height={50}
              quality={50}
            />
          </Link>
          <div className="hidden lg:block">
            <ul className="menu gap-10 menu-horizontal">
              <StyleList herf="/type" text="Type" />
              <StyleList herf="/#facilities" text="Facilities" />
              <StyleList herf="/berita-media" text="Berita" />
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <motion.div animate={{ scale: isScrolled ? 0.75 : 1 }}>
            <Link href="/">
              <Image
                src="/logo-parkspring.svg"
                alt="logo-parkspring"
                className="w-[95%] md:block hidden object-contain z-50"
                width={50}
                height={50}
                quality={50}
              />
            </Link>
          </motion.div>
        </div>
        <div className="navbar-end z-50">
          <div className="dropdown lg:hidden ">
            <div
              tabIndex={0}
              role="button"
              className="btn bg-base-layout btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content -left-[90px] mt-3 z-[1] p-2 shadow bg-base-100 rounded-box"
            >
              <li>
                <a href="/#about">About</a>
              </li>
              <li>
                <a href="/type">Type</a>
              </li>
              <li>
                <a href="/#facilities">Facilities</a>
              </li>
              <li>
                <a href="/#vr">Virtual Tour</a>
              </li>
              <li>
                <a href="/#location">Location</a>
              </li>
              <li>
                <a href="/#berita-media">Berita Media</a>
              </li>
            </ul>
          </div>
          {/* end dropdown */}
          <ul className="menu flex-nowrap gap-10 hidden lg:flex  items-center menu-horizontal">
            <StyleList herf="#vr" text="Virtual Tour" />
            <StyleList herf="#location" text="Location" />
            <li className="flex flex-row  ">
              <a
                aria-label="link instagram parksrping"
                href={linkData?.linkInstagram}
                target="_blank"
              >
                <LuInstagram
                  className={clsx(
                    "text-xl text-[#9b9d59] hover:text-white cursor-pointer transition-all",
                    isScrolled && "hover:text-secondary transition-all"
                  )}
                />
              </a>
              <a
                aria-label="link facebook parksrping"
                href={linkData?.linkFacebook}
                target="_blank"
              >
                <GrFacebookOption
                  className={clsx(
                    "text-xl text-[#9b9d59] hover:text-white cursor-pointer transition-all",
                    isScrolled && "hover:text-secondary transition-all"
                  )}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
