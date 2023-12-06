import React from "react";

const Heading = () => {
  return (
    <div>
      <p className="text-[#c9c9c9] mb-[0.5rem] sm:mb-[1.5rem]">
        Is it really good?
      </p>
      <div className="flex justify-between flex-col sm:flex-row items-start sm:items-end">
        <h1 className="sm:text-[42px] text-[2rem] font-bold font-Orbitron mb-[1.3rem]">
          Why Flexbot Stands Out?
        </h1>
        <button className="button-glow bg-[#8d2fe6] font-medium rounded-[50px] items-center  flex p-2">
          <span className=" bg-white rounded-full sm:p-2 p-1">
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
          <span className="sm:px-4 px-1">White paper</span>
        </button>
      </div>
    </div>
  );
};

export default Heading;
