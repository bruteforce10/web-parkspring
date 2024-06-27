"use client";
import React, { useEffect, useRef, useTransition } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import Image from "next/image";
import { getAll } from "@/app/utils/getAll";
import dateFormat from "@/app/utils/dateFormat";
import { useRouter } from "next/navigation";

const HeaderSlide = () => {
  const swiperRef = useRef(null);
  const [isPending, startTransition] = useTransition();
  const [data, setData] = React.useState([]);
  const router = useRouter();

  useEffect(() => {
    startTransition(() => {
      getAll("createdAt_ASC").then((res) => {
        const sortedArray = res?.articels.sort((a, b) => a - b);
        const topThree = sortedArray.slice(0, 3);
        setData(topThree);
      });
    });
  }, []);

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  if (isPending) {
    return (
      <div className="skeleton h-[400px] max-w-[1250px] mx-auto container max-md:hidden"></div>
    );
  }

  return (
    <section
      id="desktop"
      className="max-md:hidden sm:px-8 px-4 max-w-[1250px] mx-auto container"
    >
      <Swiper
        ref={swiperRef}
        loop={true}
        slidesPerView={1}
        centeredSlides={true}
        className="rounded-3xl relative"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {data &&
          data?.map((item, index) => (
            <SwiperSlide key={index}>
              <Image
                src={item?.cover?.url}
                alt={item?.cover?.title}
                className="w-full "
                width={400}
                height={400}
              />
              <div className="absolute py-16 bg-gradient-to-t from-black/50 to-black/0 text-white w-full  bottom-0 px-8">
                <div className="max-w-[650px] space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-semibold">{item?.title}</h3>
                    <h4 className="text-xl text-[#f6c461] ">
                      {dateFormat(item?.createdAt)}
                    </h4>
                  </div>
                  <p className="text-base opacity-90 font-light">
                    {item?.metaDescription}
                  </p>
                  <button
                    onClick={() => router.push(`/berita-media/${item?.slug}`)}
                    className="btn btn-outline text-white"
                  >
                    Lean More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}

        <div className="absolute bottom-6 right-6  z-[100]">
          <button onClick={handlePrev}>
            <IoMdArrowDropleft className="text-6xl  text-base-layout hover:scale-90 transition-all" />
          </button>
          <button onClick={handleNext}>
            <IoMdArrowDropright className="text-6xl -ml-5 text-base-layout hover:scale-90 transition-all" />
          </button>
        </div>
      </Swiper>
    </section>
  );
};

export default HeaderSlide;
