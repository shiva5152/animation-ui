"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
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
    }, textRef);

    return () => ctx.revert();
  }, []);
  return (
    <div className="relative" ref={textRef}>
      <div className="relative z-10">
        <p id="title-1" className="text-[#c9c9c9] mb-[1.5rem]">
          All-in-one solution
        </p>
        <h1
          id="title-2"
          className="sm:text-[42px] text-[24px] font-bold font-Orbitron mb-[1.3rem]"
        >
          Unlock the True Power of AI
        </h1>
        <p id="title-3" className="w-[100%] sm:w-[50%]">
          Dive into the vast potential of artificial intelligence with NextAI.
          Explore the myriad ways AI can revolutionize your operations!
        </p>
      </div>
      <div className="absolute faq-glow w-0 h-0 right-0 top-[20%]"></div>
    </div>
  );
};

export default Text;
