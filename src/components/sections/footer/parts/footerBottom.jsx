import React from "react";
import Iconpayements from "/img/iconpayements.png";
import Top from "/img/top.png";

function footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex flex-col lg:flex-row  gap-y-4 justify-evenly items-center bg-grayUi p-4">
      <p className="text-t16 text-white order-2 lg:order-1">
        © 2022 Coral , Inc.
      </p>
      <img src={Iconpayements} alt="" className="lg:order-1" />
      <div
        className="hidden lg:flex gap-1 cursor-pointer"
        onClick={scrollToTop}
      >
        <p className="text-t16 text-white">Scroll to top</p>
        <img src={Top} alt="" />
      </div>
    </div>
  );
}

export default footer;
