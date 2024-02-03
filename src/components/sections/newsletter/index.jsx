import React from "react";
import NewsLetterInput from "./parts/newsLetterInput";
import Follows from "./parts/follows";
export default function index() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-screen-lg  mx-auto py-16 px-4 text-blackUi flex flex-col gap-y-6">
        <Follows />
        <NewsLetterInput />
      </div>
    </div>
  );
}
