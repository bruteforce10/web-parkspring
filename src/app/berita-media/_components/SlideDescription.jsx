import Image from "next/image";
import React from "react";
import { SwiperSlide } from "swiper/react";

const SlideDescription = () => {
  return (
    <SwiperSlide className="relative">
      <Image
        src="/slider-2.webp"
        alt="image-about"
        className="w-full "
        width={400}
        height={400}
      />
      <div className="absolute py-16 bg-gradient-to-t from-black/50 to-black/0 text-white w-full  bottom-0 px-8">
        <div className="max-w-[650px] space-y-4">
          <div className="space-y-2">
            <h3 className="text-3xl font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <h4 className="text-xl text-[#f6c461] ">24 Agustus 2020</h4>
          </div>
          <p className="text-base opacity-90 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            aliquam corrupti obcaecati nulla consequatur laudantium!
          </p>
          <button className="btn btn-outline text-white">Lean More</button>
        </div>
      </div>
    </SwiperSlide>
  );
};

export default SlideDescription;
