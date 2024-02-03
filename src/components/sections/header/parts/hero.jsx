import React from "react";
import IconBag from "/img/iconbag.png";
import deco from "/img/Frame.png";

import heroImage from "/img/engin-akyurt-jaZoffxg1yc-unsplash.png";

export default function hero() {
  return (
    <div className="relative max-w-screen-lg p-4 py-12 mx-auto flex gap-x-8 items-center">
      <div className="lg:w-2/3 flex flex-col gap-y-8  justify-start lg:items-start">
        <h1 className="text-center lg:text-left text-t28 lg:text-t44">
          Collections
        </h1>
        <p className="text-center lg:text-start text-t21 capitalize leading-10">
          you can explore ans shop many differnt collection <br /> from various
          barands here.
        </p>
        <a
          href=""
          className="hover:text-white hover:bg-redUi duration-300 capitalize bg-grayUi text-white p-4 py-2 flex justify-center items-center"
        >
          <img className="" src={IconBag} alt="" />{" "}
          <span className="mx-2">shop now</span>
        </a>
      </div>
      <div className="hidden lg:block w-1/3 mr-24 relative">
        <div className=" absolute -right-3 top-3 w-[265px]  rounded-tl-[100px]  rounded-br-[130px] h-[370px] border-2 border-gray-400"></div>
        <img
          className="z-0  relative rounded-tl-[100px] rounded-br-[130px]"
          src={heroImage}
          alt=""
          data-aos="fade-top"
        />
      </div>
      <img
        data-aos="fade-left"
        src={deco}
        alt=""
        className="w-36 absolute bottom-0 lg:bottom-4 right-0 lg:-right-40"
      />
    </div>
  );
}
