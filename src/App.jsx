import { useState , useEffect} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "./components/card";
import Image from "./components/card/image";
import Footer from "./components/footer";
import Zara from "./components/zara";
import NewsLetter from "./components/newsletter";
import Bestsellers from "./components/products/bestsellers";
import Topproducts from "./components/products/topproducts";
import Header from "./components/header";
import Explore from "./components/explore";


function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <Explore />
      <Topproducts />
      <Zara />
      <Bestsellers />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
