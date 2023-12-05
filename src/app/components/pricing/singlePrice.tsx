import React from "react";

const SinglePrice = () => {
  const reviewArray = Array.from({ length: 3 }, (_, index) => index);
  return (
    <div className="px-7 single-price py-6 min-w-[30%] price-border ">
      <p>Light</p>
      <h2 className="text-[2.2rem] font-bold font-Orbitron mb-[1.3rem]">
        $5/month
      </h2>
      <div className=" bg-white mb-5 flex font-semibold text-[0.8rem] max-w-[60%] rounded-[15px] ">
        <div className="text-[#8d2fe6] text-center py-1 w-6/12 ">Monthly</div>
        <div className="bg-[#8d2fe6] w-6/12  text-center py-1 rounded-[15px] text-white ">
          Yearly
        </div>
      </div>
      <div>
        {reviewArray.map((item) => (
          <p className="flex gap-2 mb-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span>Basic Ai Modules</span>
          </p>
        ))}
      </div>
      <button className="button-glow mt-8 bg-[#8d2fe6] font-medium rounded-[50px] items-center  flex p-2">
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
  );
};

export default SinglePrice;
