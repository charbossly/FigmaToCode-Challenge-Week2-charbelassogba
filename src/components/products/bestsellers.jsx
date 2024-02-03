import React from "react";
import Section from "./index";

export default function bestsellers() {
  const produits = [
    {
      type: "hot",
      image: "/img/top-product1.png",
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
      type: "sale",
      image: "/img/04.png",
      title: "Yellow Reserved Hoodie",
      category: "Dress",
      promotion: true,
      price: "364.00",
      pricepromo: "155.00",
    },
    {
      type: "sale",
      image: "/img/top-product2.png",
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
        title="Best sellers"
        buttonText="show all"
        direction="true"
        icon="false"
        products={produits}
      />
    </div>
  );
}
