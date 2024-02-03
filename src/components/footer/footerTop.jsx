import React from "react";
import Facebook from "../../assets/img/facebook.png";
import Twitter from "../../assets/img/twitter.png";
import Instagram from "../../assets/img/icon.png";
import Linkedin from "../../assets/img/linkedin.png";
import Logo from "../../assets/img/logo.png";

export default function footerTop() {
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
      <div className="flex-1">
        <h1 className="text-t16 text-blackUi font-bold my-8">CATALOG</h1>
        <ul className="capitalize text-grayUi text-t14 flex flex-col gap-y-2">
          <li className="cursor-pointer hover:text-redUi">Necklaces</li>
          <li className="cursor-pointer hover:text-redUi">hoodies</li>
          <li className="cursor-pointer hover:text-redUi">Jewelry Box</li>
          <li className="cursor-pointer hover:text-redUi">t-shirt</li>
          <li className="cursor-pointer hover:text-redUi">jacket</li>
        </ul>
      </div>
      <div className="flex-1">
        <h1 className="text-t16 text-blackUi font-bold my-8">ABOUT US</h1>
        <ul className="capitalize text-grayUi text-t14 flex flex-col gap-y-2">
          <li className="cursor-pointer hover:text-redUi">Our Producers</li>
          <li className="cursor-pointer hover:text-redUi">Sitemap</li>
          <li className="cursor-pointer hover:text-redUi">FAQ</li>
          <li className="cursor-pointer hover:text-redUi">About Us</li>
          <li className="cursor-pointer hover:text-redUi">
            Terms & Conditions
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <h1 className="text-t16 text-blackUi font-bold my-8">
          CUSTOMER SERVICES
        </h1>
        <ul className="capitalize text-grayUi text-t14 flex flex-col gap-y-2">
          <li className="cursor-pointer hover:text-redUi">Contact Us</li>
          <li className="cursor-pointer hover:text-redUi">Track Your Order</li>
          <li className="cursor-pointer hover:text-redUi">
            Product Care & Repair
          </li>
          <li className="cursor-pointer hover:text-redUi">
            Book an Appointment
          </li>
          <li className="cursor-pointer hover:text-redUi">
            Shipping & Returns
          </li>
        </ul>
      </div>
    </div>
  );
}
