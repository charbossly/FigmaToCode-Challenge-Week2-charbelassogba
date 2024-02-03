import React from "react";
import Card from "../card";

export default function galery() {
  const images = [
    {
      image: "/img/17.svg",
      title: "Basic Dress Green",
    },
    {
      image: "/img/card.svg",
      title: "Nike Sportswear Futura Luxe",
      type: "sale",
    },
    {
      image: "/img/03.svg",
      title: "Yellow Reserved Hoodie",
    },
    {
      image: "/img/20.png",
      title: "Nike Air Zoom Pegasus",
    },
  ];
  return (
    <div className="max-w-screen-lg mx-auto relative p-4 overflow-hidden flex flex-col lg:flex-row gap-x-4 ">
      <div className="relative text-center lg:text-left lg:absolute top-[50%]  py-4 lg:py-0 lg:-translate-y-[50%] lg:-left-[12%] lg:-translate-x-[12%]">
        <p className="lg:-rotate-90 text-t21 uppercase">
          Explore new and popular styles
        </p>
      </div>
      <div className="lg:w-1/2">
        <img
          src={"/img/18.png"}
          className="lg:pl-4 w-full h-[240px] object-cover lg:object-none lg:h-full"
          alt=""
        />
      </div>
      <div className="lg:w-1/2 grid grid-cols-2 grid-rows-2 gap-4">
        {images.map((image, index) => {
          return (
            <Card
              data-aos={`${index % 2 == 0 ? "flip-left" : "flip-right"}`}
              product={image}
              key={index}
              type="2"
            />
          );
        })}
      </div>
    </div>
  );
}
