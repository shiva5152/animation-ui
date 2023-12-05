"use client";
import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
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
    <section className="flex relative z-40 justify-between " ref={textRef}>
      <div>
        {/* <p className="text-[#c9c9c9] mb-[1rem]">
          Paving The Way To Intelligent Crypto Trading!
        </p> */}
        <div className="text-[28px] max-w-[80%]  leading-snug font-bold font-Orbitron">
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
          <h2 className="text-[2rem] mt-7">
            Ace perpetual trading and stay ahead in the dynamic world of
            cryptocurrencies with FLEXBOT.
          </h2>
        </div>
      </div>
      <div className=" hidden md:block">
        <div className="w-[300px] h-[50vh] relative ">
          <Image id="box" src={"/image/robo-1.png"} fill={true} alt="box" />
          <div className="gradient-circle absolute left-[50%] bottom-[20%]  -z-30"></div>
        </div>
      </div>
    </section>
  );
};

export default Text;
