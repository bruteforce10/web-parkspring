import dateFormat from "@/app/utils/dateFormat";
import Link from "next/link";
import React from "react";

const CardSide = ({ title, cover, category, createdAt, slug }) => {
  return (
    <div>
      <div className="w-full">
        <img
          src={cover?.url}
          alt={cover?.fileName}
          className="rounded-xl w-full h-[150px] object-center object-cover"
        />
        <div className="space-y-2 mt-3">
          <div className="flex gap-4 items-center">
            {category.map((item, index) => {
              return (
                <div className="badge badge-secondary" key={index}>
                  {item}
                </div>
              );
            })}

            <p className="text-black/70">{dateFormat(createdAt)}</p>
          </div>
          <Link
            href={`/berita-media/${slug}`}
            className="block hover:opacity-75 "
          >
            <h2 className="font-semibold text-lg max-sm:line-clamp-2">
              {title}
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardSide;
