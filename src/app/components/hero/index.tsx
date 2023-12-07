import React from "react";
import Navbar from "./nav";
import Text from "./text";
import Buttons from "./buttons";
import Image from "./img";

const Hero = () => {
  return (
    <section className="hero flex flex-col sm:flex-row gap-6">
      <Text />
      <Image />
    </section>
  );
};

export default Hero;
