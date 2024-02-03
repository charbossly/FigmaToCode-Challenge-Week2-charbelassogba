import React from "react";
import Bag from "/img/bag2.png";
import User from "/img/user.png";
import Logo from "/img/logo.png";
import ImgSearch from "/img/search1.png";

export default function headerTop({ state, setState }) {
  return (
    <div className="flex lg:justify-between items-center py-4">
      <p className="hidden lg:block flex-1 text-t16 text-white">
        <img src={ImgSearch} alt="" className="cursor-pointer" />
      </p>
      <div className="flex-1 flex gap-x-4 justify-center lg:justify-start items-center">
        <img src={Logo} alt="" />
        <p className="text-grayUi text-t28 cursor-pointer hover:text-redUi">
          CORAL
        </p>
        <img src={Logo} alt="" />
      </div>
      <div className="md:hidden">
        <button
          className="text-gray-700 outline-none hover:outline-none focus:outline-none p-2 rounded-md"
          onClick={() => setState(!state)}
        >
          {state ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 absolute top-10 right-3"
              viewBox="0 0 20 20"
              fill="black"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
            >
              <path
                d="M18.2448 14.8979C18.63 14.8981 19.0003 15.0465 19.2791 15.3124C19.5579 15.5782 19.7238 15.9411 19.7423 16.3259C19.7608 16.7106 19.6306 17.0878 19.3786 17.3792C19.1266 17.6705 18.7722 17.8538 18.3888 17.8909L18.2448 17.8979H2.24475C1.85953 17.8978 1.48916 17.7494 1.21036 17.4835C0.931572 17.2177 0.765739 16.8548 0.747227 16.47C0.728714 16.0853 0.858943 15.7081 1.11093 15.4167C1.36291 15.1254 1.71733 14.9421 2.10075 14.9049L2.24475 14.8979H18.2448ZM18.2448 7.89795C18.6426 7.89795 19.0241 8.05598 19.3054 8.33729C19.5867 8.61859 19.7448 9.00012 19.7448 9.39795C19.7448 9.79577 19.5867 10.1773 19.3054 10.4586C19.0241 10.7399 18.6426 10.8979 18.2448 10.8979H2.24475C1.84693 10.8979 1.4654 10.7399 1.18409 10.4586C0.902786 10.1773 0.744751 9.79577 0.744751 9.39795C0.744751 9.00012 0.902786 8.61859 1.18409 8.33729C1.4654 8.05598 1.84693 7.89795 2.24475 7.89795H18.2448ZM18.2448 0.897949C18.6426 0.897949 19.0241 1.05598 19.3054 1.33729C19.5867 1.61859 19.7448 2.00012 19.7448 2.39795C19.7448 2.79577 19.5867 3.1773 19.3054 3.45861C19.0241 3.73991 18.6426 3.89795 18.2448 3.89795H2.24475C1.84693 3.89795 1.4654 3.73991 1.18409 3.45861C0.902786 3.1773 0.744751 2.79577 0.744751 2.39795C0.744751 2.00012 0.902786 1.61859 1.18409 1.33729C1.4654 1.05598 1.84693 0.897949 2.24475 0.897949H18.2448Z"
                fill="#3A8EF6"
              />
            </svg>
          )}
        </button>
      </div>
      <div className="hidden lg:flex gap-4 items-center text-t16">
        <div className="flex gap-1 items-center">
          <img src={User} alt="" />
          <p className="text-t16 text-blackUi cursor-pointer hover:text-redUi">
            Account
          </p>
        </div>
        <div className="flex gap-1 items-center">
          <img src={Bag} alt="" />
          <p className="text-t16 text-blackUi cursor-pointer hover:text-redUi">
            Shoping
          </p>
        </div>
      </div>
    </div>
  );
}
