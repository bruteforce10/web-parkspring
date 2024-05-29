import React from "react";
import Image from "next/image";
import { fontPrimary } from "@/app/utils/FontPrimary";
import { IoIosBed } from "react-icons/io";
import { TbBathFilled } from "react-icons/tb";
import { FaCarAlt } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import { useAppContext } from "@/app/utils/stateContext";

const Modal = ({
  name,
  description,
  linkVR,
  bathroom,
  bedroom,
  carport,
  electric,
}) => {
  const [slide, setSlide] = React.useState(1);
  const { setIsOpen } = useAppContext();
  const denah = name.toLowerCase();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 bottom-0 left-0 right-0 bg-white z-[99] "
    >
      <IoCloseOutline
        onClick={() => setIsOpen(false)}
        className="text-3xl lg:text-primary text-white absolute right-8 cursor-pointer top-8 z-[99]"
      />
      <div className="flex flex-col lg:flex-row  gap-6 lg:items-center">
        <div className="relative  ">
          {Array.from({ length: 5 }).map((_, index) => {
            if (index == slide) {
              return (
                <AnimatePresence key={index}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    exit={{ opacity: 0 }}
                  >
                    <Image
                      src={`/type-house/interior/${name}/${slide}.webp`}
                      alt="image-about"
                      width={1200}
                      className="lg:h-screen h-[50vw] object-bottom   object-cover"
                      height={600}
                    />
                  </motion.div>
                </AnimatePresence>
              );
            }
          })}
          <div className="absolute bottom-8 right-8 flex gap-4">
            <FaArrowRightLong
              onClick={() => {
                if (slide <= 1) {
                  setSlide(4);
                } else {
                  setSlide((prev) => prev - 1);
                }
              }}
              className="text-5xl hover:opacity-80 transition-all -scale-x-100 bg-black/40 cursor-pointer p-3 text-white rounded-full"
            />
            <FaArrowRightLong
              onClick={() => {
                if (slide < 4) {
                  setSlide((prev) => prev + 1);
                } else {
                  setSlide(1);
                }
              }}
              className="text-5xl hover:opacity-80 transition-all  bg-black/40 cursor-pointer p-3 text-white rounded-full"
            />
          </div>
        </div>
        <div className=" px-8 max-lg:-mt-2">
          <div className="space-y-2">
            <h2 className={`${fontPrimary} text-5xl lg:text-7xl text-primary`}>
              {name}
            </h2>
            <p className="text-lg">{description}</p>
            <a
              className="underline underline-offset-2 block hover:text-secondary transition-all"
              href={linkVR}
            >
              Get VR 360 <sup>o</sup>
            </a>
          </div>
          <div className="mt-12 text-primary flex gap-8 flex-wrap max-lg:hidden">
            <div className="flex items-center gap-3">
              <IoIosBed className="text-4xl text-secondary/80 bg-slate-100 rounded-full p-2 flex-shrink-0" />
              <div className="flex items-center gap-2">
                <h6 className={`${fontPrimary}  text-2xl`}>{bedroom}</h6>
                <p className="font-medium text-xl  ">Bedroom</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <TbBathFilled className="text-4xl text-secondary/80 bg-slate-100 rounded-full p-2 flex-shrink-0" />
              <div className="flex items-center gap-2">
                <h6 className={`${fontPrimary}  text-2xl`}>{bathroom}</h6>
                <p className="font-medium text-xl  ">Bathroom</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaCarAlt className="text-4xl text-secondary/80 bg-slate-100 rounded-full p-2 flex-shrink-0" />
              <div className="flex items-center gap-2">
                <h6 className={`${fontPrimary}  text-2xl`}>{carport}</h6>
                <p className="font-medium text-xl  ">Carport</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <AiFillThunderbolt className="text-4xl text-secondary/80 bg-slate-100 rounded-full p-2 flex-shrink-0" />
              <div className="flex items-center gap-2">
                <h6 className={`${fontPrimary}  text-2xl`}>{electric}</h6>
                <p className="font-medium text-xl  ">VA</p>
              </div>
            </div>
          </div>
          <Image
            src={`/type-house/denah/${denah}.webp`}
            alt="image-about"
            className=" mt-8  lg:mt-12"
            width={300}
            height={300}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Modal;
