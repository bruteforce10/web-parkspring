import dateFormat from "@/app/utils/dateFormat";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardNewsHorizontal = ({
  metaDescription,
  title,
  cover,
  createdAt,
  category,
  slug,
}) => {
  return (
    <div className="flex gap-8 md:h-[200px] max-md:flex-col items-center ">
      <Image
        src={cover.url}
        alt={cover.fileName}
        className="rounded-xl w-full md:max-w-[300px] h-[200px] object-center object-cover"
        width={800}
        height={800}
      />
      <div className="space-y-4">
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
        <Link href={"/"} className="block hover:opacity-75">
          <h2 className="font-semibold text-2xl ">{title}</h2>
        </Link>
        <p className="leading-relaxed line-clamp-2 lg:line-clamp-3">
          {metaDescription}
        </p>
        <Link
          href={`/berita-media/${slug}`}
          className="text-primary underline-offset-2 underline hover:opacity-75 block"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default CardNewsHorizontal;
