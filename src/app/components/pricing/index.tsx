"use client";
import React from "react";
import SinglePrice from "./singlePrice";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

const Pricing = () => {
  const textRef = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(["#title-1", "#title-2", "#title-3"], {
        duration: 0.3,
        delay: 0.8,
        y: "-=10",
        stagger: 0.1,
      });
      t1.from(
        "#price",
        {
          xPercent: "100",
          duration: 1,
          ease: "power4.out",
        },
        0
      );
    }, textRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative">
      <div className="relative z-10 mt-24" ref={textRef}>
        <p id="title-1" className="text-[#c9c9c9] text-center mb-[1.5rem]">
          Pricing?
        </p>
        <div>
          <h1
            id="title-2"
            className="text-[42px] text-center font-bold font-Orbitron mb-[1.3rem]"
          >
            Choose Your own price
          </h1>
          <div className="flex justify-center mb-16">
            <p
              id="title-3"
              className=" text-[1.2rem] text-center w-6/12 text-[#c9c9c9]"
            >
              Discover flexible pricing options tailored to accommodate the
              diverse needs of your AI venture, ensuring value at every tier.
            </p>
          </div>
        </div>
        <div id="price" className="flex w-[100%]  justify-evenly gap-4">
          <SinglePrice />
          <SinglePrice />
          <SinglePrice />
        </div>
      </div>
      <div className="absolute price-glow top-[40%] right-0  w-0 h-0 "></div>
    </div>
  );
};

export default Pricing;
