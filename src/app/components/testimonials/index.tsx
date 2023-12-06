import React from "react";
import SingleReview from "./signleReview";

const Testimonial = () => {
  const reviewArray = Array.from({ length: 3 }, (_, index) => index);
  return (
    <div className="relative">
      <div className="relative z-10 sm:mt-24  mt-16 flex justify-center items-center flex-col">
        <h1 className="sm:text-[42px] text-[2rem]  font-bold font-Orbitron mb-[1.3rem]">
          Testimonials
        </h1>
        <p className=" text-[1.2rem] text-center sm:w-6/12 w-full text-[#c9c9c9]">
          Hear from our happy clients and how NextAI has enhanced their AI
          ventures.
        </p>
        <div className="flex gap-4 element flex-col sm:flex-row mt-10">
          {reviewArray.map((_, index) => {
            return (
              <div key={index} className="flex gap-4  flex-col">
                <div>
                  <SingleReview />
                </div>
                <div className="hidden sm:block">
                  <SingleReview />
                </div>
                <div className="hidden sm:block">
                  <SingleReview />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute testimonials-glow top-[0%] left-[10%]  w-0 h-0 "></div>
    </div>
  );
};

export default Testimonial;
