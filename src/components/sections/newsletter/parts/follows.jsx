import React from "react";
import Image from "../../../utilities/products/card/image";

export default function follows() {
  const images = [
    "/img/1.svg",
    "/img/07.png",
    "/img/09.png",
    "/img/05.png",
    "/img/2.svg",
    "/img/10.png",
  ];
  return (
    <div className="flex flex-col gap-y-6 my-8 items-center">
      <h1 className="text-blackUi font-medium text-t18 lg:text-t37 text-center">
        Follow products and discounts on Instagram
      </h1>
      <div className="grid grid-cols-2 lg:flex  lg:flex-row gap-x-6">
        {images.map((img, index) => {
          return (
            <Image
              data-aos={`${index % 2 == 0 ? "flip-left" : "flip-right"}`}
              key={index}
              url={img}
            />
          );
        })}
      </div>
    </div>
  );
}
