"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const SelectArchives = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSelectChange = async (e) => {
    const orderBy = e.target.value;
    const currentParams = new URLSearchParams(searchParams);
    currentParams.set("orderBy", orderBy);

    router.replace(`/berita-media?${currentParams.toString()}`, {
      scroll: false,
    });
  };

  return (
    <a role="tab" className="tab flex flex-col justify-end -mr-3 max-sm:hidden">
      <select
        className="select select-ghost w-[110px] text-lg"
        onChange={handleSelectChange}
      >
        <option disabled selected>
          Filter
        </option>
        <option value="createdAt_ASC">Terbaru</option>
        <option value="createdAt_DESC">Lawas</option>
      </select>
    </a>
  );
};

export default SelectArchives;
