import React from "react";

const StyleList = ({ herf, text }) => {
  return (
    <li>
      <div>
        <a
          href={herf}
          className="text-xl font-medium text-[#5F603A] hover:text-[#C4C678] transition-colors"
        >
          {text}
        </a>
      </div>
    </li>
  );
};

export default StyleList;
