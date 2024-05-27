"use client";
import { useInView, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import MobileFeatureList from "./ui/MobileFeatureList";
import { PiMouseScrollThin } from "react-icons/pi";

const content = [
  {
    title: "One Gate System",
    description:
      "Gated Community memberikan Anda lebih banyak privasi dan menjamin keamanan kawasan. Anda tak perlu lagi merasa khawatir, karena PARKSPRING Gading akan selalu terpantau selama 24 jam.",
    content: (
      <Image
        src="/feature/1.png"
        width={300}
        height={300}
        className="h-auto w-full sm:rounded-lg"
        alt="linear board demo"
      />
    ),
  },
  {
    title: "Multi-Purpose Area",
    description:
      "Area serbaguna yang disediakan untuk berbagai aktivitas, seperti acara keluarga, pertemuan komunitas, atau kegiatan sosial lainnya. Area ini didesain fleksibel agar dapat digunakan sesuai dengan kebutuhan penghuni.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/feature/2.png"
          width={300}
          height={300}
          className="h-auto w-full sm:rounded-lg"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Natural Playground",
    description:
      "Kawasan kids friendly yang menyediakan fasilitas khusus untuk keceriaan anak Anda. Playdate dari dalam kawasan yang aman tetap akan menyenangkan tanpa perlu merasa khawatir.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/feature/3.png"
          width={300}
          height={300}
          className="h-auto w-full sm:rounded-lg"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Outdoor Gym",
    description:
      "Fasilitas gym terbuka yang memungkinkan penghuni untuk menjaga kebugaran fisik sambil menikmati udara segar.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/feature/4.png"
          width={300}
          height={300}
          className="h-auto w-full sm:rounded-lg"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Jogging Path",
    description:
      "Jalur jogging yang dirancang dengan baik untuk para penghuni yang ingin berolahraga lari atau jalan santai. ",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/feature/5.png"
          width={300}
          height={300}
          className="h-auto w-full sm:rounded-lg"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Zen Garden",
    description:
      "Bukan hanya rumah secara fisik yang Anda butuhkan, namun juga rumah untuk jiwa Anda. Zen Garden diciptakan untuk me-recharge jiwa Anda dari padatnya kehidupan sehari-hari.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/feature/6.png"
          width={300}
          height={300}
          className="h-auto w-full sm:rounded-lg"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Hidden Yoga Spot",
    description:
      "Lepaskan sejenak penat Anda, and reconnect with yourself. Dengan adanya Hidden Yoga Spot, memulai #BalanceLiving terasa sangat mudah.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/feature/7.png"
          width={300}
          height={300}
          className="h-auto w-full sm:rounded-lg"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

const FeatureList = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="max-sm:py-10 pt-20 sm:space-y-16 space-y-10">
      <div className="px-8 max-w-[1250px] mx-auto relative">
        {/* <Image
          src={"/bird.png"}
          alt="parkspring"
          className="opacity-75 left-36 top-8 absolute max-lg:hidden "
          width={125}
          height={125}
        />
        <Image
          src={"/bird.png"}
          alt="parkspring"
          className="opacity-60 right-36 top-0 absolute max-lg:hidden scale-x-[-1] "
          width={120}
          height={120}
        /> */}
        <h2
          ref={ref}
          className="text-center text-2xl sm:text-4xl font-semibold w-full md:w-[70%] lg:w-[40%] mx-auto leading-tight"
        >
          Quality Time dengan Berbagai Fasilitas Kawasan
        </h2>
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: isInView ? "30%" : "0%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-[30%] h-[1.5px] bg-secondary opacity-50 mt-2 sm:mt-4 mx-auto"
        ></motion.div>
      </div>

      <div className="relative">
        <StickyScroll content={content} />
        <div className="absolute top-8 animate-bounce  flex right-[10%] xl:right-[20%]">
          <p className="text-md animate-pulse">Scroll Down to See</p>
          <PiMouseScrollThin className="w-6 h-6 text-secondary" />
        </div>
      </div>

      <MobileFeatureList content={content} />
    </div>
  );
};

export default FeatureList;
