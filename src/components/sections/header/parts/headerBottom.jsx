import React from "react";

export default function headerBottom({ state }) {
  const linksList = [
    "Jewelry & Accessories",
    "Clothing & Shoes",
    " Home & Living",
    "Wedding & Party",
    "Toys & Entertainment",
    "Art & Collectibles",
    "Craft Supplies & Tools",
  ];

  return (
    <div
      className={`
    ${
      state ? "flex flex-col gap-y-6 justify-center" : "hidden"
    } lg:flex justify-between items-center text-t14 font-normal border-t-2  border-t-gray-200 py-6 capitalize`}
    >
      {linksList.map((link) => {
        return (
          <a href="" className="hover:text-redUi">
            {link}
          </a>
        );
      })}
    </div>
  );
}
