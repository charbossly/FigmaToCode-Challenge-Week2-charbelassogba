import React from "react";
import Card from "./card/product";
import Left from "/img/a.png";
import Right from "/img/b.png";
import { useState } from "react";

export default function index({
  title,
  buttonText,
  direction,
  icon,
  products,
}) {
  const [scroll, setscroll] = useState(0);

  const prev = () => {
    let newscroll = scroll - 150;
    console.log(newscroll);
    if (newscroll < 0) {
      setscroll(0);
    } else {
      setscroll(scroll - 150);
    }
  };

  const next = () => {
    let newscroll = scroll + 150;

    if (newscroll > products.length * 300) {
      setscroll(products.length * 300);
    } else {
      console.log(newscroll);
      setscroll(scroll + 150);
    }
  };
  return (
    <div className="max-w-screen-lg mx-auto  relative flex flex-col gap-y-6 justify-center">
      <h1 className="text-t18 lg:text-t37 text-center text-blackUi font-medium">
        {title}
      </h1>
      <div className="flex justify-between px-4 lg:px-0">
        <ul className="hidden lg:flex gap-x-4  text-blackUi opacity-70 items-center t-t16 capitalize">
          <li className="cursor-pointer focus:opacity-100 focus:font-medium">
            all products
          </li>
          <li className="cursor-pointer focus:opacity-90 focus:font-medium">
            t-shirt
          </li>
          <li className=" cursor-pointer focus:opacity-100 focus:font-medium">
            hoodies
          </li>
          <li className=" cursor-pointer focus:opacity-100 focus:font-medium">
            jacket
          </li>
        </ul>
        <button className="capitalize block lg:hidden cursor-pointer focus:opacity-90 focus:font-medium">
          all products
        </button>
        <a
          href=""
          className="p-4 py-1 flex items-center gap-x-2 capitalize bg-grayUi text-white hover:bg-redUi"
        >
          {icon == "true" && <img src={"/img/icon.png"} />} {buttonText}
        </a>
      </div>

      <div
        className={`flex px-4 overflow-x-auto lg:overflow-auto lg:grid relative lg:grid-cols-4 items-center gap-4 gap-x-8 lg:pl-0`}
      >
        {products.map((product, index) => {
          return <Card key={index} product={product} type="1" />;
        })}
      </div>
      {direction == "true" && (
        <div className="absolute top-[60%] -translate-y-[60%] flex justify-between w-full  items-center">
          <a
            onClick={(e) => prev()}
            className="cursor-pointer text-gray-400 text-t50"
          >
            <img src={Left} alt="" />
          </a>
          <a
            onClick={(e) => next()}
            className="cursor-pointer text-gray-400 text-t50"
          >
            <img src={Right} alt="" />
          </a>
        </div>
      )}
    </div>
  );
}
