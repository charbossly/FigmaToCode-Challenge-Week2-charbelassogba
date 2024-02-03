import React from "react";
import Facebook from "/img/facebook.png";
import Twitter from "/img/twitter.png";
import Instagram from "/img/icon.png";
import Linkedin from "/img/linkedin.png";
import Logo from "/img/logo.png";

export default function footerTop() {
  const linksList = [
    {
      title: "CATALOG",
      links: ["Necklaces", "hoodies", "Jewelry Box", "t-shirt", "jacket"],
    },
    {
      title: "ABOUT US",
      links: [
        "Our Producers",
        "Sitemap",
        "FAQ",
        "About Us",
        "Terms & Conditions",
      ],
    },
    {
      title: "CUSTOMER SERVICES",
      links: [
        "Contact Us",
        "Track Your Order",
        "Product Care & Repair",
        "Book an Appointment",
        "Shipping & Returns",
      ],
    },
    { title: "", links: [] },
  ];
  return (
    <div
      data-aos="fade-up"
      className="max-w-screen-lg mx-auto py-28 flex px-4 lg:px-0  flex-col lg:flex-row items-start lg:items-center gap-16"
    >
      <div className="lg:w-1/3 flex flex-col justify-center gap-y-6">
        <div className="flex gap-x-4 items-center">
          <img src={Logo} alt="" />
          <p className="text-grayUi text-t28 hover:text-redUi">CORAL</p>
          <img src={Logo} alt="" />
        </div>
        <p className="text-grayUi text-opacity-50 text-t16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <div className="flex gap-x-4">
          <img src={Facebook} alt="" />
          <img src={Twitter} alt="" />
          <img src={Linkedin} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      <>
        {linksList.slice(0, 3).map(({ title, links }) => {
          return (
            <div className="flex-1">
              <h1 className="text-t16 text-blackUi font-bold my-8">{title}</h1>
              <ul className="capitalize text-grayUi text-t14 flex flex-col gap-y-2">
                {links.map((link) => {
                  return (
                    <li className="cursor-pointer hover:text-redUi">{link}</li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </>
    </div>
  );
}
