import React from "react";
import CardNewsHorizontal from "../_components/CardSectionHorizontal/CardNewsHorizontal";
import InputSearch from "./_component/inputSearch";

const getData = async (q) => {
  const res = await fetch(`https://parkspring.vercel.app/api/${q}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
};

export default async function SearchPage({ searchParams }) {
  const { q } = searchParams;
  const { data } = await getData(q);

  return (
    <main className="sm:px-8 px-4 max-w-[1250px] mx-auto container mt-20 mb-12">
      <h2 className="text-2xl mb-6">
        <span className="font-semibold">Search Result for:</span>
        {q}
      </h2>

      <InputSearch />

      <div className="mt-10 space-y-8">
        {data?.articels.map((data, index) => (
          <CardNewsHorizontal {...data} key={index} />
        ))}
      </div>
      {data?.articels?.length === 0 && (
        <div className="text-center text-2xl">Pencarian Tidak Ditemukan</div>
      )}
    </main>
  );
}
