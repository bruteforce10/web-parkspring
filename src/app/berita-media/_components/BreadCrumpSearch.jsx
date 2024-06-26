"use client";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

const BreadCrumpSearch = () => {
  const inputRef = useRef(null);
  const router = useRouter();

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      router.push(`/berita-media/search?q=${inputRef.current.value}`);
    }
  };

  return (
    <section className="flex justify-between max-sm:flex-col mb-4 w-full sm:mb-6 sm:items-end sm:px-8 px-4 max-w-[1250px] mx-auto container">
      <div className="breadcrumbs text-lg  text-[#5F603A]">
        <ul>
          <li>
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-4 w-4 stroke-current mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                ></path>
              </svg>
              Home
            </a>
          </li>
          <li>
            <a className="font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-4 w-4 stroke-current mr-2 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                ></path>
              </svg>
              Portal Berita
            </a>
          </li>
        </ul>
      </div>
      <label className="input max-sm:w-full  w-auto rounded-xl input-bordered flex items-center gap-2">
        <input
          type="text"
          className="grow"
          ref={inputRef}
          onKeyDown={handleKeyDown}
          placeholder="Search"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-6 w-6 opacity-70"
        >
          <path
            fill="#5F603A"
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
    </section>
  );
};

export default BreadCrumpSearch;
