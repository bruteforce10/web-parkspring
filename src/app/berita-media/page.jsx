import React from "react";
import HeaderSlide from "./_components/HeaderSlide";
import TabSection from "./_components/TabSection";
import BreadCrumpSearch from "./_components/BreadCrumpSearch";
import CardSectionHorizontal from "./_components/CardSectionHorizontal";
import HookSection from "../components/HookSection";
import { revalidatePath } from "next/cache";
import HeaderSlideMobile from "./_components/HeaderSlideMobile";

const getData = async (
  orderBy = "createdAt_DESC",
  category = "",
  first = "",
  skip = ""
) => {
  const res = await fetch(
    `https://parkspring.vercel.app/api/news?orderBy=${orderBy}&category=${category}&first=${first}&skip=${skip}`,
    {
      cache: "force-cache",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  revalidatePath("/berita-media");
  return data;
};

export default async function pageMedia({ searchParams }) {
  const { orderBy, category, first, skip } = searchParams;
  const { data } = await getData(orderBy, category, first, skip);

  return (
    <main className="mt-8">
      <BreadCrumpSearch />
      <HeaderSlide />
      <HeaderSlideMobile />
      <TabSection />
      <CardSectionHorizontal {...data} />
      <HookSection />
    </main>
  );
}
