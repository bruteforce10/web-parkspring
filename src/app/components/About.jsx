import React from "react";
import { ImageAbout } from "./ui/ImageAbout";
import Button from "./ui/Button";

const About = ({ headingAboutUs, descriptionAboutUs }) => {
  const arrayHeading = headingAboutUs.split(" ");
  const combinedHeading = [
    arrayHeading.slice(0, 3).join(" "),
    arrayHeading.slice(3).join(" "),
  ];

  return (
    <section
      id="about"
      className="grid grid-cols-1 scroll-mt-20 gap-y-8 lg:grid-cols-2 max-w-[1250px] mx-auto px-8 py-16"
    >
      <ImageAbout />
      <div className="space-y-4">
        <div className="space-y-1">
          <p className="text-primary font-medium text-xl">About Us</p>
          <h3 className="text-4xl leading-normal font-semibold">
            {combinedHeading[0]} <br className="max-md:hidden" />{" "}
            {[combinedHeading[1]]}
          </h3>
        </div>
        <p className="leading-relaxed">{descriptionAboutUs}</p>
        <Button>Lean More</Button>
      </div>
    </section>
  );
};

export default About;
