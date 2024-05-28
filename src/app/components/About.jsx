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
            Konsep Balance Living in <br className="max-sm:hidden" /> Kelapa
            Gading
          </h3>
        </div>
        <p className="leading-relaxed">
          PARKSPRING Gading is the latest residential project by Karsindo Group
          and is the last residence in the Kelapa Gading area with Modern
          Japanese Tropical concept that emphasize the Japanese Balance Living.
          Start your <strong>#BalanceLiving</strong> with PARKSPRING Gading!
        </p>
        <Button>Lean More</Button>
      </div>
    </section>
  );
};

export default About;
