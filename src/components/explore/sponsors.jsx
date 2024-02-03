import React from "react";

export default function sponsors() {
  const sponsorsList = [
    "05.svg",
    "01.svg",
    "brand03.svg",
    "brand02.svg",
    "brand-2.png",
  ];
  return (
    <div
      data-aos="flip-down"
      className="max-w-screen-lg p-4 py-8 mx-auto grid grid-cols-2  lg:flex justify-center items-center"
    >
      {sponsorsList.map((spon, index) => {
        return (
          <img
            src={`/img/${spon}`}
            key={index}
            className={`${
              index == sponsorsList.length - 1 ? "hidden lg:block" : "block"
            }`}
            alt=""
          />
        );
      })}
    </div>
  );
}
