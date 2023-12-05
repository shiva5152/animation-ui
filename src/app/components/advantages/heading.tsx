import React from "react";

const Heading = () => {
  return (
    <div>
      <p className="text-[#c9c9c9] mb-[1.5rem]">Is it really good?</p>
      <div className="flex justify-between items-end">
        <h1 className="text-[42px] font-bold font-Orbitron mb-[1.3rem]">
          Our Advantages
        </h1>
        <button className="button-glow bg-[#8d2fe6] font-medium rounded-[50px] items-center  flex p-2">
          <span className=" bg-white rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#b782fc"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </span>{" "}
          <span className="px-4">Get started</span>
        </button>
      </div>
    </div>
  );
};

export default Heading;
