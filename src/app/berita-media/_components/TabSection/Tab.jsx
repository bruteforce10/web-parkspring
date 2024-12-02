"use client";
import clsx from "clsx";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Tab = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dataTab = ["All", "Article", "Event", "Media_Relase", "News"];
  const [activeTab, setActiveTab] = React.useState("All");

  React.useEffect(() => {
    const currentParams = new URLSearchParams(searchParams);
    currentParams.delete("category");
    currentParams.delete("skip");
    const newUrl = currentParams.toString()
      ? `/berita-media?${currentParams.toString()}`
      : "/berita-media";

    router.replace(newUrl, { scroll: false });
    setActiveTab("All");
  }, []);

  const handleClick = (name) => {
    if (activeTab !== name) {
      setActiveTab(name);

      const currentParams = new URLSearchParams(searchParams);

      if (name === "All") {
        currentParams.delete("category");
        currentParams.delete("skip");
      } else {
        currentParams.set("category", name);
        currentParams.delete("skip");
      }

      const newUrl = currentParams.toString()
        ? `/berita-media?${currentParams.toString()}`
        : "/berita-media";
      router.replace(newUrl, { scroll: false });
    }
  };

  return (
    <>
      {dataTab.map((item, index) => (
        <a
          key={index}
          role="tab"
          onClick={() => handleClick(item)}
          className={clsx("tab text-lg", activeTab === item && "tab-active")}
        >
          {item === "Media_Relase" ? "Media Release" : item}
        </a>
      ))}
    </>
  );
};

export default Tab;
