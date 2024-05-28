"use client";
import React from "react";
import { useAppContext } from "../utils/stateContext";
import ButtonHook from "./ui/ButtonHook";
import { motion } from "framer-motion";

const CallToAction = () => {
  const { isScrolled } = useAppContext();
  const [hide, isHide] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isScrolled && !hide ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={
        "h-[4.5rem] flex gap-4  items-center w-screen justify-center bg-primary relative"
      }
    >
      <h3 className="text-xl text-white">Mau info lebih lanjut?</h3>
      <ButtonHook className={"scale-[89%] origin-left"}>
        Chat Sekarang
      </ButtonHook>
      <div
        onClick={() => isHide(!hide)}
        className="bg-white max-sm:hidden  cursor-pointer font-medium w-5 h-5 rounded-full absolute right-[10%] flex items-center justify-center"
      >
        <div>x</div>
      </div>
    </motion.div>
  );
};

export default CallToAction;
