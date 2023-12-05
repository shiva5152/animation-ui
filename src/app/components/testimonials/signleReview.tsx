import React from "react";
import Image from "next/image";

const SingleReview = () => {
  const svgArray = Array.from({ length: 5 }, (_, index) => index);
  return (
    <div className="p-4 review-border">
      <div className="flex gap-4 justify-start mb-5">
        <div className="h-50 w-50 rounded-full">
          <Image
            src="/image/user.webp"
            alt="user"
            width={50}
            className=" object-fill rounded-full aspect-[1/1]"
            height={50}
          />
        </div>
        <div>
          <p className="text-[0.9rem] font-semibold">John Doe</p>
          <p className="text-[0.9rem] -mt-1">Data scientist, ABC Group</p>
        </div>
      </div>
      <p className="font-normal text-[0.9rem]">
        The template’s ease of customization allowed us to align it seamlessly
        with our brand, making our online presence as innovative as our
        services. Highly recommended!"
      </p>
      <div className="flex mt-4">
        {svgArray.map((_, index) => (
          <span key={index}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#6469ee"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#6469ee"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
};

export default SingleReview;
