import React from "react";
import Section from "./index";

export default function topproducts() {
  const produits = [
    {
      image: "/img/top-product.png",
      title: "Basic Dress Green",
      category: "Dress",
      promotion: false,
      price: "236.00",
    },
    {
      type: "",
      image: "/img/14.svg",
      title: "Nike Sportswear Futura Luxe",
      category: "Bag",
      promotion: false,
      price: "130.00",
    },
    {
      image: "/img/13.svg",
      title: "Yellow Reserved Hoodie",
      category: "Dress",
      promotion: true,
      price: "364.00",
      pricepromo: "155.00",
    },
    {
      type: "hot",
      image: "/img/04.png",
      title: "Nike Air Zoom Pegasus",
      category: "shoe",
      promotion: true,
      price: "220.00",
      pricepromo: "198.00",
    },
    {
      type: "sale",
      image: "/img/top-product1.png",
      title: "Basic Dress Green",
      category: "Dress",
      promotion: false,
      price: "236.00",
    },
    {
      type: "",
      image: "/img/top-product2.png",
      title: "Nike Sportswear Futura Luxe",
      category: "Bag",
      promotion: false,
      price: "130.00",
    },
    {
      image: "/img/17.svg",
      title: "Yellow Reserved Hoodie",
      category: "Dress",
      promotion: true,
      price: "364.00",
      pricepromo: "155.00",
    },
    {
      image: "/img/16.svg",
      title: "Nike Air Zoom Pegasus",
      category: "shoe",
      promotion: true,
      price: "220.00",
      pricepromo: "198.00",
    },
  ];
  return (
    <div className="my-24">
      <Section
        title="Or subscribe to the newsletter"
        buttonText="filter"
        direction="false"
        icon="true"
        products={produits}
      />
    </div>
  );
}
