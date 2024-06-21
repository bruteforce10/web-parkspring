"use client";
import React, { useRef } from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import SlideDescription from "./SlideDescription";

const HeaderSlide = () => {
  const swiperRef = useRef(null);

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

  return (
    <main className="px-8 max-w-[1250px] mx-auto container h-[30000px]">
      <Swiper
        ref={swiperRef}
        spaceBetween={50}
        loop={true}
        slidesPerView={1}
        centeredSlides={true}
        className="rounded-3xl relative"
        autoplay={{
          delay: 10500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SlideDescription />

        <div className="absolute bottom-6 right-6  z-[100]">
          <button onClick={handlePrev}>
            <IoMdArrowDropleft className="text-6xl  text-base-layout hover:scale-90 transition-all" />
          </button>
          <button onClick={handleNext}>
            <IoMdArrowDropright className="text-6xl -ml-5 text-base-layout hover:scale-90 transition-all" />
          </button>
        </div>
      </Swiper>
    </main>
  );
};

export default HeaderSlide;
