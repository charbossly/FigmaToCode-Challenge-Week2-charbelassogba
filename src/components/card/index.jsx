import React from "react";
import Bag from "../../assets/img/14.svg";
import HeartIcon from "../../assets/img/heart.png";
import SearchIcon from "../../assets/img/searchwhiteicon.png";
import BagIcon from "../../assets/img/iconbag.png";

export default function index({ product, type }) {
  return (
    <div
      className={`flex flex-col gap-y-4 ${
        type == "1" ? "" : ""
      } lg:w-full duration-400`}
    >
      <div
        className={`relative  group hover:overflow-hidden h-full ${
          type == "1" ? "w-[372px]" : ""
        }  lg:w-auto`}
      >
        <img
          className={`h-full object-cover group-hover:scale-125 ${
            type == "1" ? "w-[372px]" : ""
          }`}
          src={product.image}
          alt=""
        />
        {product.type && (
          <span
            className={`uppercase absolute top-4 left-0 ${
              product.type == "hot" ? "bg-redUi" : "bg-grayUi"
            } text-whiteUi p-1 px-4`}
          >
            {product.type}
          </span>
        )}
        <div className="duration-400 hidden duration-100 transition-all group-hover:flex absolute bottom-0 w-full bg-grayUi text-white justify-between items-center p-2">
          {type == "1" && (
            <>
              <div className="flex gap-2 items-center">
                <img src={HeartIcon} alt="" />
                <img src={SearchIcon} alt="" />
              </div>
              <div className="flex gap-2 items-center">
                <img src={BagIcon} alt="" />
                <span className="text-t18 capitalize">shop now</span>
              </div>
            </>
          )}
          {type == "2" && (
            <>
              {" "}
              <p className="capitalize">jacket</p>
              <p className="capitalize">103 product</p>
            </>
          )}
        </div>
      </div>
      {type == "1" && (
        <div className="flex flex-col gap-y-2">
          <h4 className="text-blackUi text-t16 capitalize font-bold ml-1">
            {product.title}
          </h4>
          <div className="flex justify-between items-center">
            <span className="text-blackUi text-opacity-50 text-t14 font-normal capitalize">
              {product.category}
            </span>
            {!product.promotion && (
              <span className="text-blackUi text-t14 font-semibold">
                ${product.price}
              </span>
            )}

            {product.promotion && (
              <div>
                <span className="duration-400 text-blackUi text-t14 text-opacity-50 mx-1">
                  ${product.price}
                </span>
                <span className="text-t14 font-semibold text-redUi mx-1">
                  ${product.pricepromo}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
