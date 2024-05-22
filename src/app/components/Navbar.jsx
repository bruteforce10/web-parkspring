"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import StyleList from "./ui/style-list";
import { LuInstagram } from "react-icons/lu";
import { GrFacebookOption } from "react-icons/gr";
import clsx from "clsx";

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
    <div
      className={clsx("py-6 ", isScrolled && "bg-white/80 backdrop-blur-sm ")}
    >
      <div className="navbar px-8 max-w-[1250px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown hidden max-md:block">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
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
          <div>
            <ul className="menu gap-10 menu-horizontal">
              <StyleList herf="/" text="About" />
              <StyleList herf="/" text="Type" />
              <StyleList herf="/" text="Facilities" />
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Image
            src="/logo-parkspring.svg"
            alt="logo-parkspring"
            className="w-[95%] object-contain z-50"
            width={50}
            height={50}
          />
        </div>
        <div className="navbar-end z-50">
          <ul className="menu gap-10 items-center menu-horizontal">
            <StyleList herf="/" text="Virtual Tour" />
            <StyleList herf="/" text="Location" />
            <div className="flex gap-3">
              <LuInstagram className="text-xl text-[#9b9d59] hover:text-white cursor-pointer transition-all" />
              <GrFacebookOption className="text-xl text-[#9b9d59] hover:text-white cursor-pointer transition-all" />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
