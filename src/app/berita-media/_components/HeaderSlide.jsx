"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import SlideDescription from "./SlideDescription";
import Image from "next/image";
import Link from "next/link";

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
    <>
      <section
        id="desktop"
        className="max-md:hidden sm:px-8 px-4 max-w-[1250px] mx-auto container"
      >
        <Swiper
          ref={swiperRef}
          spaceBetween={50}
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
      </section>
      <section
        id="mobile"
        className="max-md:block hidden sm:px-8 px-4 max-w-[1250px] mx-auto container"
      >
        <Swiper
          ref={swiperRef}
          spaceBetween={50}
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
          <SwiperSlide className="pb-12">
            <Image
              src="/slider-2.webp"
              alt="image-about"
              className="w-full rounded-xl"
              width={400}
              height={400}
            />
            <div className="space-y-4 mt-6">
              <div className="flex gap-4 items-center">
                <div className="badge badge-secondary">News</div>
                <div className="badge badge-secondary">Article</div>
                <p className="text-black/70">22 Agustus 2024</p>
              </div>
              <Link href={"/"} className="block hover:opacity-75">
                <h2 className="font-semibold text-2xl ">
                  Rumah Mewah dan Murah di Kelapa Gading
                </h2>
              </Link>
              <p className="leading-relaxed line-clamp-2 lg:line-clamp-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                dolorem, molestiae quia dolorum, porro magnam vero consequuntur
                quam enim quidem nihil quisquam soluta? Nemo, reiciendis?
                Quibusdam sapiente reiciendis aliquam facilis? Nulla, at?
                Expedita aliquid amet voluptas, voluptatibus eveniet, fugit illo
                quibusdam, qui sed ab architecto maiores fugiat saepe minus
                atque. Lorem ipsum dolor
              </p>
              <Link
                href={"/"}
                className="text-primary underline-offset-2 underline hover:opacity-75"
              >
                Read More
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-12">
            <Image
              src="/slider-2.webp"
              alt="image-about"
              className="w-full rounded-xl"
              width={400}
              height={400}
            />
            <div className="space-y-4 mt-6">
              <div className="flex gap-4 items-center">
                <div className="badge badge-secondary">News</div>
                <div className="badge badge-secondary">Article</div>
                <p className="text-black/70">22 Agustus 2024</p>
              </div>
              <Link href={"/"} className="block hover:opacity-75">
                <h2 className="font-semibold text-2xl ">
                  Rumah Mewah dan Murah di Kelapa Gading
                </h2>
              </Link>
              <p className="leading-relaxed line-clamp-2 lg:line-clamp-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                dolorem, molestiae quia dolorum, porro magnam vero consequuntur
                quam enim quidem nihil quisquam soluta? Nemo, reiciendis?
                Quibusdam sapiente reiciendis aliquam facilis? Nulla, at?
                Expedita aliquid amet voluptas, voluptatibus eveniet, fugit illo
                quibusdam, qui sed ab architecto maiores fugiat saepe minus
                atque. Lorem ipsum dolor
              </p>
              <Link
                href={"/"}
                className="text-primary underline-offset-2 underline hover:opacity-75"
              >
                {" "}
                Read More
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default HeaderSlide;
