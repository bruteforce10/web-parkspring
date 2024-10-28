"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SideSection from "./_components/SideSection";
import BreadCrumpSearch from "../_components/BreadCrumpSearch";
import dateFormatNew from "@/app/utils/dateFormatNew";

const PageBeritaSection = ({ params }) => {
  const [article, setArticle] = useState({});

  const fetchNews = async (slug) => {
    try {
      const res = await fetch(
        `https://www.parkspring.co.id/api/news/${slug.id}`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();
      setArticle(data.data.articel);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchNews(params);
  }, []);

  return (
    <main className=" max-sm:mt-14 sm:mt-20 max-sm:mb-24">
      <div className="sm:mb-12 mb-8">
        <BreadCrumpSearch />
      </div>
      <section className="flex md:flex-row flex-col gap-12 sm:px-8 px-4 max-w-[1250px] mx-auto container">
        <div className="w-full">
          <div className="text-center space-y-2">
            <p className="text-black/70 ">
              {dateFormatNew(article?.createdAt)}
            </p>
            <h1 className="font-semibold leading-relaxed text-3xl">
              {article?.title}
            </h1>
          </div>

          <Image
            src={article?.cover?.url}
            alt={article?.fileName}
            className="rounded-xl w-full my-7 object-center object-cover"
            width={800}
            height={800}
          />
        </div>
        <SideSection />
      </section>
    </main>
  );
};

export default PageBeritaSection;
