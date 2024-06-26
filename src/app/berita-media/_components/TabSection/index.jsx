import React from "react";
import Tab from "./Tab";
import SelectFilter from "./SelectFilter";

const TabSection = () => {
  return (
    <section className="  mt-12 sm:px-8 px-4 max-w-[1250px] mx-auto container">
      <div role="tablist" className="tabs tabs-lifted ">
        <SelectFilter />
        <Tab />
      </div>
    </section>
  );
};

export default TabSection;
