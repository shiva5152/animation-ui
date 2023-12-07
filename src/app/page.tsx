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
import Navbar from "./components/hero/nav";
import About from "./components/about";

export default function Home() {
  return (
    <div className="container _hero relative min-h-screen p-[20px] md:py-12  md:px-24 overflow-x-hidden">
      <Navbar />
      <main className="">
        <Hero />
        <About />
        {/* <Logo /> */}
        {/* <Intro /> */}
        <Features />
        <Advantages />
        {/* <Testimonial /> */}
        {/* <Pricing /> */}
        <Faq />
        <Footer />
      </main>
    </div>
  );
}
