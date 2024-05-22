"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import StyleList from "./ui/style-list";
import { LuInstagram } from "react-icons/lu";
import { GrFacebookOption } from "react-icons/gr";
import clsx from "clsx";
import { motion, spring } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <motion.div
      layout
      transition={spring}
      className={clsx(
        "py-6 ",
        isScrolled && "bg-white/80 backdrop-blur-sm py-0 "
      )}
    >
      <div className="navbar px-8 max-w-[1250px] mx-auto">
        <div className="navbar-start">
          <Image
            src="/logo-parkspring.svg"
            alt="logo-parkspring"
            className="w-[60%] md:hidden block object-contain z-50"
            width={50}
            height={50}
          />
          <div className="hidden lg:block">
            <ul className="menu gap-10 menu-horizontal">
              <StyleList herf="/" text="About" />
              <StyleList herf="/" text="Type" />
              <StyleList herf="/" text="Facilities" />
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <motion.div animate={{ scale: isScrolled ? 0.75 : 1 }}>
            <Image
              src="/logo-parkspring.svg"
              alt="logo-parkspring"
              className="w-[95%] md:block hidden object-contain z-50"
              width={50}
              height={50}
            />
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
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
          {/* end dropdown */}
          <ul className="menu flex-nowrap gap-10 hidden lg:flex  items-center menu-horizontal">
            <StyleList herf="/" text="Virtual Tour" />
            <StyleList herf="/" text="Location" />
            <div className="flex  gap-3   ">
              <LuInstagram className="text-xl text-[#9b9d59] hover:text-white cursor-pointer transition-all" />
              <GrFacebookOption className="text-xl text-[#9b9d59] hover:text-white cursor-pointer transition-all" />
            </div>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
