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
      "One Gate System memberikan Anda lebih banyak privasi dan menjamin keamanan lingkungan rumah Anda. Dengan keamanan 24 jam, Anda tak perlu lagi merasa khawatir karena PARKSPRING Gading akan selalu terpantau, aman, dan nyaman.",
    content: (
      <Image
        src="/feature/1.webp"
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
      "Area serbaguna yang disediakan untuk berbagai aktivitas, seperti acara keluarga, pertemuan komunitas, atau sebagai working space atau kegiatan sosial lainnya. Area ini didesain fleksibel agar dapat digunakan sesuai dengan kebutuhan penghuni.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/feature/2.webp"
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
      "Sarana bermain anak di PARKSPRING Gading dirancang khusus dengan konsep yang menyatu dengan alam. Anak-anak dapat bermain sembari menjelajahi kreativitasnya. Dengan berbagai macam permainan, anak-anak dapat meningkatkan kemampuan motorik dan ketahanan tubuhnya di sini.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/feature/3.webp"
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
      "Fasilitas gym dengan konsep terbuka yang memungkinkan penghuni untuk berolahraga dengan berbagai macam equipment sambil menikmati udara segar.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/feature/4.webp"
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
      "Jogging Path memberikan kesempatan bagi penghuni untuk melakukan aktivitas olahraga atau sekadar berjalan santai tanpa harus pergi jauh keluar komplek rumah.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/feature/5.webp"
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
          src="/feature/6.webp"
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
          src="/feature/7.webp"
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
    <section
      id="facilities"
      className="max-sm:py-10 pt-20 sm:space-y-16 -scroll-mt-28 space-y-10"
    >
      <div className="px-8 max-w-[1250px] mx-auto relative">
        {/* <Image
          src={"/bird.webp"}
          alt="parkspring"
          className="opacity-75 left-36 top-8 absolute max-lg:hidden "
          width={125}
          height={125}
        />
        <Image
          src={"/bird.webp"}
          alt="parkspring"
          className="opacity-60 right-36 top-0 absolute max-lg:hidden scale-x-[-1] "
          width={120}
          height={120}
        /> */}
        <h2
          ref={ref}
          className="text-center text-2xl sm:text-4xl font-semibold w-full md:w-[70%] lg:w-[40%] mx-auto leading-tight"
        >
          Quality Time dengan Berbagai Fasilitas Unggulan
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
    </section>
  );
};

export default FeatureList;
