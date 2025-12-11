import React from "react";
import SocialMedia from "./_components/SocialMedia";
import Hastag from "./_components/Hastag";
import SideSection from "./_components/SideSection";
import dateFormat from "@/app/utils/dateFormat";
import BreadCrumpSearch from "../_components/BreadCrumpSearch";
import { getContentFragment } from "@/app/utils/contentFragment";

const getData = async (params) => {
  const res = await fetch(
    `https://web-parkspring.vercel.app/api/news/${params.id}`,
    {
      cache: "no-cache",
      next: {
        revalidate: 10,
      },
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
};

export async function generateMetadata({ params, searchParams }, parent) {
  const { data } = await getData(params);
  const { articel } = data;

  return {
    title: articel?.metaTitle,
    description: articel?.metaDescription,
    openGraph: {
      images: articel?.cover?.url,
    },
  };
}

export default async function pageBerita({ params }) {
  const { data } = await getData(params);
  const { articel } = data;

  return (
    <main className=" max-sm:mt-14 sm:mt-20 max-sm:mb-24">
      <div className="sm:mb-12 mb-8">
        <BreadCrumpSearch />
      </div>
      <section className="flex md:flex-row flex-col gap-12 sm:px-8 px-4 max-w-[1250px] mx-auto container">
        <div className="w-full">
          <div className="text-center space-y-2">
            <p className="text-black/70 ">{dateFormat(articel?.createdAt)}</p>
            <h1 className="font-semibold leading-relaxed text-3xl">
              {articel?.title}
            </h1>
          </div>

          <img
            src={articel?.cover?.url}
            alt={articel?.fileName}
            className="rounded-xl w-full my-7 object-center object-cover"
          />

          <article>
            {articel?.description?.raw?.children.map((typeObj, index) => {
              const children = typeObj?.children.map((item, itemindex) => {
                return getContentFragment(itemindex, item.text, item);
              });
              return getContentFragment(index, children, typeObj, typeObj.type);
            })}
          </article>
          <div className=" mt-16 max-sm:mt-8 max-sm:space-y-4 space-y-2">
            <Hastag data={articel?.hastag} />
            <SocialMedia />
          </div>
          {articel?.reference && (
            <div className="mt-8 space-y-2">
              <h4 className="text-xl font-medium">Referensi</h4>
              <a
                href="#"
                target="_blank"
                className="underline underline-offset-2 block text-secondary"
              >
                {articel?.reference}
              </a>
            </div>
          )}
        </div>
        <SideSection />
      </section>
    </main>
  );
}
