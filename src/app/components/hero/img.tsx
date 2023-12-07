import React from "react";
import Image from "next/image";

const MainImage = () => {
  return (
    <div className="relative ">
      <div className="relative z-0 flex justify-center">
        <Image
          id="box"
          src={"/image/robo-1.png"}
          height={350}
          width={350}
          className="w-[250Px] sm:w-[350px]"
          alt="robo"
        />
        <div className="gradient-circle absolute left-[50%] bottom-[20%] -z-10"></div>
        <div className="white-circle absolute top-8 left-6 -z-10"></div>
      </div>
    </div>
  );
};

export default MainImage;
