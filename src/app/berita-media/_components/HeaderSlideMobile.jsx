"use client";
import React, { useEffect, useRef, useTransition } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getAll } from "@/app/utils/getAll";
import dateFormat from "@/app/utils/dateFormat";

const HeaderSlideMobile = () => {
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

  if (isPending) {
    return (
      <div className="skeleton h-[400px] sm:px-8 px-4 mt-8 max-w-[1250px] hidden mx-auto container max-md:block"></div>
    );
  }

  return (
    <section
      id="mobile"
      className="max-md:block hidden sm:px-8 px-4 mt-8 max-w-[1250px] mx-auto container"
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
        {data?.map((item, index) => (
          <SwiperSlide className="pb-12" key={index}>
            <img
              src="/slider-2.webp"
              alt="image-about"
              className="w-full rounded-xl"
            />
            <div className="space-y-4 mt-6">
              <div className="flex gap-4 items-center">
                <div className="badge badge-secondary">News</div>
                {item?.category.map((item, index) => (
                  <div className="badge badge-secondary" key={index}>
                    {item}
                  </div>
                ))}
                <p className="text-black/70">{dateFormat(item?.createdAt)}</p>
              </div>
              <Link href={"/"} className="block hover:opacity-75">
                <h2 className="font-semibold text-2xl ">{item?.title}</h2>
              </Link>
              <p className="leading-relaxed line-clamp-2 lg:line-clamp-3">
                {item?.metaDescription}
              </p>
              <Link
                href={`/berita-media/${item?.slug}`}
                className="text-primary underline-offset-2 block underline hover:opacity-75"
              >
                Read More
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeaderSlideMobile;
