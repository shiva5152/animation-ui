"use client";
import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import Buttons from "./buttons";

const Text = () => {
  const textRef = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        duration: 1.3,
        delay: 0.3,
        y: "-=10",
        stagger: 0.5,
      });
      t1.from(
        "#box",
        {
          yPercent: "-100",
          duration: 1,
          ease: "power4.out",
        },
        0
      );
    }, textRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="flex relative z-40 flex-col justify-between gap-[5rem] "
      ref={textRef}
    >
      <div className=" relative z-10 flex flex-col justify-center">
        <div className="text-[28px] max-w-[60%]  leading-snug font-bold font-Orbitron">
          {/* <h1 id="title-1">
            Innovate<span className="text-[#8d2fe6]">.</span>
          </h1>
          <h1 id="title-2 ">
            Solve problem<span className="text-[#8d2fe6]">.</span>
          </h1>
          <h1 id="title-3">
            Innovate some more<span className="text-[#8d2fe6]">.</span>
          </h1> */}
          <h1 className="text-[3rem]">
            Paving The Way To Intelligent Crypto Trading!
          </h1>
          <h2 className="text-[1.5rem] font-ubuntu font-normal mt-7">
            Ace perpetual trading and stay ahead in the dynamic world of
            cryptocurrencies with FLEXBOT.
          </h2>
        </div>
      </div>
      <Buttons />
    </div>
  );
};

export default Text;
