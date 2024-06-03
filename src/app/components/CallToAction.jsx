"use client";
import React from "react";
import { useAppContext } from "../utils/stateContext";
import { FaWhatsapp } from "react-icons/fa6";

const CallToAction = () => {
  const { data } = useAppContext();
  const noWhatsapp = data?.data?.dataLandingPages[0].noWhatsapp.slice(1);

  return (
    <React.Fragment>
      <div
        onClick={() =>
          window.open(
            `https://api.whatsapp.com/send?phone=%2062${noWhatsapp}&text=Hai,%20saya%20dapat%20info%20dari%20website%20PARKSPRING%20Gading`
          )
        }
        className="bg-[#289b52]  p-3 rounded-full w-fit max-sm:mr-10 mr-16 mb-12 max-sm:mb-10 ml-auto relative cursor-pointer"
      >
        <div className=" bg-red-700 animate-bounce text-center mx-auto absolute rounded-full h-5 w-5 top-0 -left-1">
          <p className="text-white text-sm">1</p>
        </div>
        <FaWhatsapp className="text-white text-3xl " />
        <div className="bg-[#289b52] animate-ping z-[-1] p-5 top-[7px] left-[7.2px] rounded-full absolute "></div>
      </div>

      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled && !hide ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={
          "h-[4.5rem] flex gap-4 max-sm:px-4 items-center w-screen max-sm:hidden justify-center bg-primary relative"
        }
      >
        <h3 className="text-xl text-white">Mau info lebih lanjut?</h3>
        <ButtonHook className={"scale-[89%] origin-left max-sm:origin-right"}>
          Chat Sekarang
        </ButtonHook>
        <div
          onClick={() => isHide(!hide)}
          className="bg-white max-sm:hidden  cursor-pointer font-medium w-5 h-5 rounded-full absolute right-[10%] flex items-center justify-center"
        >
          <div>x</div>
        </div>
      </motion.div> */}
    </React.Fragment>
  );
};

export default CallToAction;
