import React from "react";
import MainImage from "../hero/img";
import Image from "next/image";

const About = () => {
  return (
    <section className="relative mt-24">
      <div className=" relative z-50">
        <h1 className="sm:text-[42px] text-[2rem] sm:mb-16 mb-8 text-center font-bold font-Orbitron">
          About Us
        </h1>
        <div className="sec-1 flex flex-col sm:flex-row justify-between items-center sm:mb-20 mb-4 ">
          <div className="flex flex-col sm:gap-6 gap-3 sm:w-[50%] w-full ">
            <h2 className="text-[1.5rem] sm:text-[2.5rem] text-center font-bold font-Orbitron">
              All-in-One Comprehensive trading bot
            </h2>
            <p className="sm:text-[1.5rem] text-[1rem] font-ubuntu text-center ">
              Flexbot is your multichain perpetual trading bot powered by
              Synthetix, dydx and GMX utilizing AI gem scanning for optimal
              trading outcomes. With an All-in-One comprehensive solution that
              enables you to outperform modern day crypto trading.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              id="box"
              src={"/image/about-2.png"}
              height={400}
              width={400}
              alt="robo"
            />
          </div>
        </div>
        <div className="sec-2 flex flex-col-reverse sm:flex-row  justify-between items-center">
          <div className="flex justify-center">
            <Image
              id="box"
              src={"/image/about-1.png"}
              height={400}
              width={400}
              alt="robo"
            />
          </div>
          <div className="flex flex-col gap-3 sm:gap-6 sm:w-[50%] w-full">
            <h2 className="text-[1.5rem] sm:text-[2.5rem] text-center font-bold font-Orbitron">
              Robust & Convenient
            </h2>
            <p className="sm:text-[1.5rem] text-[1rem] font-ubuntu text-center ">
              Flexbot is your Ultimate Companion for Robust and Convenient
              Crypto Trading! Flexbot enables you to trade anywhere at any time,
              at the best price leveraging its optimized trading features.
            </p>
          </div>
        </div>
      </div>
      {/* glow */}

      <div className="glow">
        <div className="absolute w-fit h-0  top-[50%] right-[30%] testimonials-glow "></div>
        <div className="absolute w-0 h-0  top-[90%] left-[15%] faq-glow z-0 "></div>
      </div>
    </section>
  );
};

export default About;
