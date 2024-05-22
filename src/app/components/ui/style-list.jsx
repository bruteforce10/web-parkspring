import React from "react";

const StyleList = ({ herf, text }) => {
  return (
    <li>
      <div>
        <a
          href={herf}
          className="text-transparent text-xl bg-gradient-to-b from-[#5F603A] to-[#C4C678] bg-clip-text"
        >
          {text}
        </a>
      </div>
    </li>
  );
};

export default StyleList;
