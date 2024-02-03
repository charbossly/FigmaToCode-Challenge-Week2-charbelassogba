import React from "react";

import Hero from "./parts/hero";
import { useState } from "react";
import HeaderTop from "./parts/headerTop";
import HeaderBottom from "./parts/headerBottom";

export default function index() {
  const [state, setState] = useState(false);

  return (
    <div className="bg-[#f4f4f5] ">
      <div className="max-w-screen-lg mx-auto px-4">
        <HeaderTop state={state} setState={setState} />
        <HeaderBottom state={state} />
      </div>
      <Hero />
    </div>
  );
}
