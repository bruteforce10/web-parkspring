import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardSide = () => {
  return (
    <div>
      <div className="w-full">
        <Image
          src={"/slider-2.webp"}
          alt="bg-tab"
          className="rounded-xl w-full  h-[150px] object-center object-cover"
          width={800}
          height={800}
        />
        <div className="space-y-2 mt-3">
          <div className="flex gap-4 items-center">
            <div className="badge badge-secondary">Article</div>
            <p className="text-black/70">22 Agustus 2024</p>
          </div>
          <Link href={"/"} className="block hover:opacity-75">
            <h2 className="font-semibold text-lg ">
              Rumah Mewah dan Murah di Kelapa Gading
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardSide;
