import React from "react";
import SingleFaq from "./singleFaq";

const Faq = () => {
  return (
    <div className="relative">
      <div className="mt-24 relative z-10 ">
        <h1 className="text-[40px] text-center font-semibold">FAQ</h1>
        <div className="flex flex-col mt-5 gap-5">
          <SingleFaq />
          <SingleFaq />
          <SingleFaq />
          <SingleFaq />
        </div>
      </div>
      <div className="absolute w-fit h-0 rounded-full inset-0 top-[50%] left-[10%] faq-glow "></div>
    </div>
  );
};

export default Faq;
