"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SideSection from "./_components/SideSection";
import BreadCrumpSearch from "../_components/BreadCrumpSearch";
import dateFormatNew from "@/app/utils/dateFormatNew";
import { getContentFragment } from "@/app/utils/contentFragment";
import Hastag from "./_components/Hastag";
import SocialMedia from "./_components/SocialMedia";
import { getOne } from "@/app/utils/getAll";

const PageBeritaSection = ({ params }) => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    getOne(params?.id).then((data) => {
      setArticle(data?.articel);
    });
  }, []);

  // const fetchNews = async (slug) => {
  //   try {
  //     const res = await fetch(`http://localhost:3000/api/news/${slug.id}`, {
  //       cache: "no-store",
  //     });

  //     if (!res.ok) {
  //       throw new Error("Failed to fetch data");
  //     }

  //     const data = await res.json();
  //     setArticle(data?.data?.articel);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchNews(params);
  // }, []);

  if (!article) {
    return (
      <main className=" max-sm:mt-14 sm:mt-20 max-sm:mb-24">
        <div className="sm:mb-12 mb-8">
          <BreadCrumpSearch />
        </div>
        <section className="flex md:flex-row flex-col gap-12 sm:px-8 px-4 max-w-[1250px] mx-auto container">
          <div className="w-full">
            <div className="text-center space-y-2">
              <p className="text-black/70 ">Loading...</p>
              <h1 className="font-semibold leading-relaxed text-3xl">
                Loading...
              </h1>
            </div>
          </div>
        </section>
      </main>
    );
  }

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
            <div className="flex justify-center">
              <h5>Intan Dwiyanti</h5>
              <span className="mx-2">|</span>
              <span className="text-secondary">Content Writter</span>
            </div>
          </div>

          <Image
            src={article?.cover?.url}
            alt={article?.fileName}
            className="rounded-xl w-full my-7 object-center object-cover"
            width={800}
            height={800}
          />

          <article>
            {article?.description?.raw?.children.map((typeObj, index) => {
              const children = typeObj?.children.map((item, itemindex) => {
                return getContentFragment(itemindex, item.text, item);
              });
              return getContentFragment(index, children, typeObj, typeObj.type);
            })}
          </article>
          <div className=" mt-16 max-sm:mt-8 max-sm:space-y-4 space-y-2">
            <Hastag data={article?.hastag} />
            <SocialMedia />
          </div>
          {article?.reference && (
            <div className="mt-8 space-y-2">
              <h4 className="text-xl font-medium">Referensi</h4>
              <a
                href="#"
                target="_blank"
                className="underline underline-offset-2 block text-secondary"
              >
                {article?.reference}
              </a>
            </div>
          )}
        </div>
        <SideSection />
      </section>
    </main>
  );
};

export default PageBeritaSection;
