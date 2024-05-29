import React from "react";
import { ImageAbout } from "./ui/ImageAbout";
import Button from "./ui/Button";

const About = () => {
  return (
    <section
      id="about"
      className="grid grid-cols-1 scroll-mt-20 gap-y-8 lg:grid-cols-2 max-w-[1250px] mx-auto px-8 py-16"
    >
      <ImageAbout />
      <div className="space-y-4">
        <div className="space-y-1">
          <h5 className="text-primary font-medium text-xl">About Us</h5>
          <h3 className="text-4xl leading-normal font-semibold">
            Balance Living at <br className="max-md:hidden" /> PARKSPRING Gading
          </h3>
        </div>
        <p className="leading-relaxed">
          PARKSPRING Gading merupakan hunian tapak modern berkonsep Japanese
          Tropical di area Kelapa Gading. Menjadi proyek hunian terbaru
          persembahan dari Karsindo Group, PARKSPRING Gading juga merupakan
          hunian terakhir di kawasan Kelapa Gading. Awali hidup seimbang Anda
          bersama PARKSPRING Gading!
        </p>
        <Button>Lean More</Button>
      </div>
    </section>
  );
};

export default About;
