import React from "react";
import Image from "next/image";

const MainImage = () => {
  return (
    <div className="relative hidden md:block">
      <div className="relative z-0">
        <Image
          id="box"
          src={"/image/robo-1.png"}
          height={350}
          width={350}
          alt="robo"
        />
        <div className="gradient-circle absolute left-[50%] bottom-[20%] -z-10"></div>
        <div className="white-circle absolute top-8 left-6 -z-10"></div>
      </div>
    </div>
  );
};

export default MainImage;
