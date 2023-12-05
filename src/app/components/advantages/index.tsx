import React from "react";
import Heading from "./heading";

const Advantages = () => {
  return (
    <div className="mt-24">
      <Heading />
      <div className="flex gap-10 mt-12">
        <div>
          <h1 className=" text-[1.2rem] font-semibold">Innovative Layout</h1>
          <div className="light-border my-5 rounded"></div>
          <p className=" text-[10px] font-light">
            Experience a fresh layout with NextAI. Its modern design perfectly
            frames your AI service, making a bold statement that stands out.
          </p>
        </div>
        <div>
          <h1 className=" text-[1.2rem] font-semibold">Custom 3D Models</h1>
          <div className="light-border my-5 rounded"></div>
          <p className=" text-[10px] font-light">
            The custom 3D models by Midjourney bring a futuristic touch to your
            presentation, reflecting the advanced nature of your AI technology.
          </p>
        </div>
        <div>
          <h1 className=" text-[1.2rem] font-semibold">Colors & Gradients</h1>
          <div className="light-border my-5 rounded"></div>
          <p className=" text-[10px] font-light">
            NextAI's color palette is carefully chosen to complement the AI and
            tech vibe, adding a dash of intrigue and engagement to your site.
          </p>
        </div>
        <div>
          <h1 className=" text-[1.2rem] font-semibold">Easy Customization</h1>
          <div className="light-border my-5 rounded"></div>
          <p className=" text-[10px] font-light">
            Tweak the template effortlessly to match your brand. With NextAI,
            creating a unique digital product is simple and straightforward.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
