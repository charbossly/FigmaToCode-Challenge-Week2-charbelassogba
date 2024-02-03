import React from "react";
import Iconpayements from "../../assets/img/iconpayements.png";
import Top from "../../assets/img/top.png";

function footer(props) {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col lg:flex-row  gap-y-4 justify-evenly items-center bg-grayUi p-4"
    >
      <p className="text-t16 text-white order-2 lg:order-1">
        © 2022 Coral , Inc.
      </p>
      <img src={Iconpayements} alt="" className="lg:order-1" />
      <div className="hidden lg:flex gap-1">
        <p className="text-t16 text-white">Scroll to top</p>
        <img src={Top} alt="" />
      </div>
    </div>
  );
}

export default footer;
