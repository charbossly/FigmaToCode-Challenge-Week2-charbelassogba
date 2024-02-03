import React from "react";
import Instagram from "/img/icon2.png";

function image({ url }) {
  return (
    <div className="relative group w-[150px] h-[150px] overflow-hidden">
      <img
        src={url}
        alt="Normal Image"
        className="w-[150px] h-[150px] object-cover  hover:filter hover:brightness-50 hover:contrast-150 hover:grayscale-50"
      />
      <img
        src={Instagram}
        alt=""
        className="w-[48px] h-[48px] text-white group-hover:absolute inset-0 m-auto"
      />
    </div>
  );
}

export default image;
