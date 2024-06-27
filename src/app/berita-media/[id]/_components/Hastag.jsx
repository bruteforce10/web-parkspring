import React from "react";

const Hastag = ({ data }) => {
  return (
    <div className="space-x-2">
      {data?.map((item) => (
        <div className="badge badge-primary badge-outline" key={item}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default Hastag;
