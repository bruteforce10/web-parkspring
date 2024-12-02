"use client";
import { getAll } from "@/app/utils/getAll";
import clsx from "clsx";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const Pagination = ({ lengthInitial }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [length, setLength] = React.useState(0);
  const currentParams = new URLSearchParams(searchParams);
  const category = currentParams.get("category");
  const orderBy = currentParams.get("orderBy");
  const totalPage = Math.ceil(length / 6);
  const currentPage = parseInt(currentParams.get("skip") || 0);

  useEffect(() => {
    getAll(orderBy, category).then((res) => {
      setLength(res?.articels?.length);
    });
  }, [category, orderBy]);

  if (length < 6) {
    return null;
  }

  return (
    <div className="join mt-20 flex justify-center ">
      <button
        className="join-item btn"
        onClick={() => {
          if (Number(currentPage) <= 0) {
            return;
          }
          currentParams.set("skip", currentPage - 6);
          const newUrl = currentParams.toString()
            ? `/berita-media?${currentParams.toString()}`
            : "/berita-media";
          router.replace(newUrl, { scroll: false });
        }}
      >
        «
      </button>
      {[...Array(totalPage)].map((_, index) => (
        <button
          key={index}
          className={clsx(
            "join-item btn",
            index * 6 == currentPage && "btn-active"
          )}
          onClick={() => {
            currentParams.set("skip", index * 6);
            const newUrl = currentParams.toString()
              ? `/berita-media?${currentParams.toString()}`
              : "/berita-media";
            router.replace(newUrl, { scroll: false });
          }}
        >
          {index + 1}
        </button>
      ))}
      {/* <button className="join-item btn btn-disabled">...</button> */}
      {/* <button
        className={clsx(
          "join-item btn",
          currentParams.get("skip") == (totalPage - 1) * 6 && "btn-active"
        )}
        onClick={() => {
          currentParams.set("skip", (totalPage - 1) * 6);
          const newUrl = currentParams.toString()
            ? `/berita-media?${currentParams.toString()}`
            : "/berita-media";
          router.replace(newUrl, { scroll: false });
        }}
      >
        {totalPage}
      </button> */}
      <button
        className="join-item btn"
        onClick={() => {
          if (Number(currentPage + 6) >= Number(length)) {
            return;
          }
          currentParams.set("skip", currentPage + 6);
          const newUrl = currentParams.toString()
            ? `/berita-media?${currentParams.toString()}`
            : "/berita-media";
          router.replace(newUrl, { scroll: false });
        }}
      >
        »
      </button>
    </div>
  );
};

export default Pagination;
