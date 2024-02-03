import { useState, useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/sections/header";
import Galery from "./components/sections/galery";
import Topproducts from "./components/sections/popular";
import CallToAction from "./components/sections/calltoaction";
import Bestsellers from "./components/sections/bestsellers";
import NewsLetter from "./components/sections/newsletter";
import Footer from "./components/sections/footer";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <Galery />
      <Topproducts />
      <CallToAction />
      <Bestsellers />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
