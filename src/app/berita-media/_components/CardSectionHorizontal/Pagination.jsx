"use client";
import { getAll } from "@/app/utils/getAll";
import { useAppContext } from "@/app/utils/stateContext";
import clsx from "clsx";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const Pagination = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentParams = new URLSearchParams(searchParams);
  const category = searchParams.get("category");
  const sort = searchParams.get("orderBy");
  const { active, setActive } = useAppContext();
  const [length, setLength] = React.useState(0);
  const array = new Array(active + 2).fill(0);

  useEffect(() => {
    getAll(sort, category).then((data) => {
      setLength(data?.articels?.length);
    });
  }, [category, sort, setLength]);

  if (length <= 0) return null;

  return (
    <div className="join mt-20 flex justify-center ">
      <button
        className="join-item btn"
        onClick={() => {
          if (active === 0) return active;
          setActive((prev) => prev - 1);
          currentParams.set("skip", active - 1);
          const newUrl = currentParams.toString()
            ? `/berita-media?${currentParams.toString()}`
            : "/berita-media";
          router.replace(newUrl, { scroll: false });
        }}
      >
        «
      </button>
      {array.map((item, index) => {
        return (
          <button
            className={clsx(
              "join-item btn",
              index === active && "btn-active",
              index === length && "hidden"
            )}
            onClick={() => {
              const number = index;

              currentParams.set("skip", number);
              const newUrl = currentParams.toString()
                ? `/berita-media?${currentParams.toString()}`
                : "/berita-media";
              router.replace(newUrl, { scroll: false });

              setActive(number);
            }}
            key={index}
          >
            {index + 1}
          </button>
        );
      })}
      {length > array.length && (
        <>
          <button className="join-item btn btn-disabled">...</button>
          <button
            className="join-item btn"
            onClick={() => {
              setActive(length - 1);
              currentParams.set("skip", length - 1);
              const newUrl = currentParams.toString()
                ? `/berita-media?${currentParams.toString()}`
                : "/berita-media";
              router.replace(newUrl, { scroll: false });
            }}
          >
            {length}
          </button>
        </>
      )}
      <button
        className="join-item btn"
        onClick={() => {
          const lengthMin = length - 1;
          if (active === lengthMin) return active;
          setActive((prev) => prev + 1);
          currentParams.set("skip", active + 1);
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
