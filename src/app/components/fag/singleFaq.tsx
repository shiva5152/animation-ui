import React from "react";

const SingleFaq = () => {
  return (
    <div className="review-border single-faq justify-between cursor-pointer flex p-5">
      <p className="">
        1. Can I use it for other types of projects, besides just AI products?
      </p>
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
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </span>
    </div>
  );
};

export default SingleFaq;
