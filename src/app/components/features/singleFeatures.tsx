import Image from "next/image";
import React from "react";

type Props = {
  id: number;
  title: string;
  icon: string;
  description: string;
};

const SingleFeature = ({ id, title, icon, description }: Props) => {
  return (
    <div className=" text-center">
      <div className="flex relative float-animation justify-center ">
        <Image className="" src={icon} height={150} width={150} alt={title} />
        <div className="feature-glow absolute bottom-0 -z-10"></div>
      </div>
      <div className="relative z-10">
        <h3 className="mt-8 font-Orbitron font-semibold">{title}</h3>
        <p className="mt-3 font-light">{description}</p>
      </div>
    </div>
  );
};

export default SingleFeature;
