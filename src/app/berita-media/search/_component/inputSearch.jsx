"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const InputSearch = () => {
  const router = useRouter();
  const [text, setText] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/berita-media/search?q=${text}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4">
      <input
        type="text"
        name="q"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Keyword"
        className="input input-bordered w-full "
      />
      <button type="submit" className="btn btn-primary text-white">
        Search
        <IoSearchSharp className="text-lg" />
      </button>
    </form>
  );
};

export default InputSearch;
