import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchPage = () => {
  return (
    <main className="sm:px-8 px-4 max-w-[1250px] mx-auto container mt-20 mb-12">
      <h2 className="text-2xl mb-6">
        <span className="font-semibold">Search Result for:</span>
        {"  "}
        {"5 Model Kanopi Lengkung yang Ideal untuk Mempercantik Rumah"}
      </h2>
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Enter Keyword"
          className="input input-bordered w-full "
        />
        <button className="btn btn-primary text-white">
          Search
          <IoSearchSharp className="text-lg" />
        </button>
      </div>
    </main>
  );
};

export default SearchPage;
