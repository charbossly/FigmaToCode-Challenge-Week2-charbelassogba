import React from "react";
import zara from "../../assets/img/zara.svg";
import ZaraLogo from "../../assets/img/Zara_Logo.svg";
import ZaraLogo2 from "/img/aZara_Logo.png";

export default function index() {
  return (
    <div className="h-[775px] relative bg-specialUi w-full text-white">
      <div className="w-full lg:w-[80%] h-full  bg-hero bg-zara bg-no-repeat bg-cover bg-center">
        <div className="max-w-screen-lg mx-auto absolute right-[10%] top-[40%]">
          <div className="lg:w-[500px]  flex gap-y-10 px-4 lg:px-0 flex-col items-center  lg:justify-end lg:items-start">
            <img className="w-[190px] h-[80px]" src={ZaraLogo} alt="" />
            <p className="text-white text-t26">
              Lustrous yet understated. The new evening wear collection
              exclusively offered at the reopened Giorgio Armani boutique in Los
              Angeles.
            </p>
            <a className="text-black bg-white p-2 px-4 capitalize" href="">
              see collection
            </a>
            <img
              data-aos="fade-down"
              className="absolute right-0 lg:-right-32 -top-64 w-[442px] h-[209px]"
              src={ZaraLogo2}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
