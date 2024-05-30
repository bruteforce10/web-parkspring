import Image from "next/image";
import React from "react";
import { fontPrimary } from "../utils/FontPrimary";
import { FaLocationDot, FaCalendarDays, FaClock } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <div className="h-screen md:pt-[7rem] max-md:py-12 text-primary">
      <div className="max-w-[1250px] mx-auto px-8 flex max-md:flex-col max-md:justify-center justify-between  gap-8 md:gap-12">
        <div className="space-y-10 max-md:space-y-6 max-md:mx-auto w-fit ">
          <Image
            src="/logo-parkspring.svg"
            alt="logo-parkspring"
            width={300}
            height={300}
          />
          <p className="text-lg max-md:text-center">
            Envisioned By Karsindo Group.
          </p>
          <Image
            src="/karsindo-group.webp"
            alt="logo-parkspring"
            className="max-md:mx-auto "
            width={200}
            height={200}
          />
        </div>
        <div className=" w-fit max-md:text-center ">
          <h5
            className={`font-semibold text-4xl max-md:text-center max-md:text-3xl leading-relaxed`}
          >
            Rumah berkonsep Modern Japanese Tropical di area Kelapa Gading
          </h5>
          <div className="mt-4 flex max-sm:flex-col justify-between gap-8">
            <div className="space-y-6">
              <h6 className="text-xl font-medium">
                Kunjungi 360° PARKSPRING Gading
              </h6>
              <Image
                src={"/qr-virtual-reality.webp"}
                alt="map"
                className="max-md:mx-auto"
                width={300}
                height={300}
              />
            </div>
            <div className="space-y-6 text-start">
              <div className="flex items-start gap-2">
                <FaLocationDot className="text-xl mt-2" />
                <p className="text-lg font-light w-[80%] leading-relaxed">
                  Jl. Tipar Cakung No.52, RT.5/RW.5, Sukapura, Kec. Cilincing,
                  Jkt Utara
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-xl " />
                <p className="text-lg font-light leading-relaxed">
                  09.00 - 17.00 WIB
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendarDays className="text-xl " />
                <p className="text-lg font-light leading-relaxed">
                  Buka setiap hari.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <IoLogoWhatsapp className="text-xl " />
                <p className="text-lg font-light leading-relaxed">
                  0817-9000-104
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p id="vr" className="text-center mt-14 opacity-70 mb-4">
        Copyright © 2024 - All right reserved
      </p>
    </div>
  );
};

export default Footer;
