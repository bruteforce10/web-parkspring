"use client";
import React, { useEffect } from "react";
import { getAll } from "@/app/utils/getAll";
import CardSide from "./CardSide";

const SideSection = () => {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    getAll("createdAt_DESC").then((res) => {
      const sortedArray = res?.articels.sort((a, b) => a - b);
      const topThree = sortedArray.slice(0, 3);
      setData(topThree);
    });
  }, []);

  return (
    <div className="md:w-72 w-full ">
      <h3 className="text-xl font-medium mb-6">Recent Updates</h3>
      <div className="flex items-end sm:flex-col max-sm:pb-8 overflow-x-auto gap-8 ">
        {data?.map((item, index) => (
          <div key={index} className="max-sm:w-[500px] ">
            <CardSide {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideSection;
