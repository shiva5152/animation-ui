import Image from "next/image";
import Hero from "./components/hero";
import Logo from "./components/logo";
import Intro from "./components/intro";
import Advantages from "./components/advantages";
import Testimonial from "./components/testimonials";
import Pricing from "./components/pricing";
import Faq from "./components/fag";
import Footer from "./components/footer";
import Features from "./components/features";

export default function Home() {
  return (
    <main className="_hero relative min-h-screen p-[20px] md:py-12  md:px-24">
      <Hero />
      <Logo />
      {/* <Intro /> */}
      <Features />
      <Advantages />
      <Testimonial />
      <Pricing />
      <Faq />
      <Footer />
    </main>
  );
}
