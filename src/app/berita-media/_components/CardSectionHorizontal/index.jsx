"use client";
import React from "react";
import CardNewsHorizontal from "./CardNewsHorizontal";
import Pagination from "./Pagination";

const CardSectionHorizontal = ({ articels, articelsConnection }) => {
  return (
    <div className="mt-12 w-full mb-24 sm:px-8 px-4 max-w-[1250px] mx-auto container">
      <div className="space-y-16">
        {articels.map((item, index) => {
          return <CardNewsHorizontal {...item} key={index} />;
        })}
      </div>
      {articels.length === 0 && (
        <div className="text-center">Tidak ada Berita</div>
      )}

      {articelsConnection?.aggregate?.count >= 3 && (
        <Pagination lengthInitial={articelsConnection?.aggregate?.count} />
      )}
    </div>
  );
};

export default CardSectionHorizontal;
