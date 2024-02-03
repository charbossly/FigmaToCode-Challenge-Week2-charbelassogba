import React from "react";

export default function NewsLetterInput() {
  return (
    <div className="flex flex-col gap-y-16 items-center justify-center">
      <h1 className="text-t18 lg:text-t37 text-blackUi font-medium capitalize">
        Or subscribe to the newsletter
      </h1>
      <form action="" className="flex gap-x-6 items-center">
        <input
          type="text"
          name=""
          className="hover:border-redUi lg:w-[520px] bg-transparent border-b-2 border-b-blackUi p-2 focus:outline-none"
          id=""
          placeholder="Email address..."
        />
        <input
          type="submit"
          className="border-b-2 border-b-blackUi p-2 px-4 text-center hover:text-redUi hover:border-redUi"
          value="SUBMIT"
        />
      </form>
    </div>
  );
}
