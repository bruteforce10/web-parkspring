import React from "react";
import CardSide from "./_components/CardSide";
import Image from "next/image";
import SocialMedia from "./_components/SocialMedia";
import Hastag from "./_components/Hastag";

const pageBerita = () => {
  return (
    <main className="sm:px-8 px-4 max-w-[1250px] mx-auto container mt-20">
      <section className="flex gap-8">
        <div className="w-full">
          <div className="text-center space-y-2">
            <p className="text-black/70 ">22 Agustus 2024</p>
            <h1 className="font-semibold text-3xl">
              5 Model Kanopi Lengkung yang Ideal untuk Mempercantik Rumah
            </h1>
          </div>

          <Image
            src={"/slider-2.webp"}
            alt="bg-tab"
            className="rounded-xl w-full my-7 object-center object-cover"
            width={800}
            height={800}
          />

          <p className="leading-loose">
            Mempercantik rumah bukan hanya tentang interior yang menawan, tapi
            juga tentang menciptakan eksterior yang menarik. Kanopi lengkung
            adalah salah satu elemen yang dapat ditambahkan untuk meningkatkan
            estetika rumah Anda. Baik dipasang di area depan rumah maupun di
            taman belakang, kanopi tidak hanya berfungsi untuk melindungi rumah
            dari cuaca eksternal, tetapi juga dapat mempercantik hunian Anda.
            Dalam artikel ini, kita akan menjelajahi lima model kanopi lengkung
            yang ideal untuk mempercantik rumah Anda. Dari kanopi lipat baja
            ringan yang praktis hingga kanopi kaca buram yang elegan, setiap
            model memiliki karakteristik unik yang dapat disesuaikan dengan gaya
            dan kebutuhan rumah Anda.
          </p>
          <div className=" mt-16 space-y-2">
            <Hastag />
            <SocialMedia />
          </div>
          <div className="mt-8 space-y-2">
            <h4 className="text-xl font-medium">Referensi</h4>
            <a
              href="#"
              target="_blank"
              className="underline underline-offset-2 block text-secondary"
            >
              https://storage.wefinite.com/PARKSPRING_Gading/
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-medium mb-6">Recent Updates</h3>
          <CardSide />
        </div>
      </section>
    </main>
  );
};

export default pageBerita;
