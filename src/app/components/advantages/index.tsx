import React from "react";
import Heading from "./heading";

const Advantages = () => {
  return (
    <div className="mt-24 relative z-10">
      <Heading />
      <div className="grid grid-cols-3 gap-10 mt-12">
        <div>
          <h1 className=" text-[1.2rem] font-semibold">User Centric Design</h1>
          <div className="light-border my-5 rounded"></div>
          <p className="text-[0.9rem] font-light">
            Our user interface is designed for maximum convenience, ensuring
            hassle-free trading experience for both novice and degen traders.
            Designed for maximum convenience, Our user interface ensures
            hassle-free trading experience for both novice and degen traders.
          </p>
        </div>
        <div>
          <h1 className=" text-[1.2rem] font-semibold">
            Enhanced Account Security
          </h1>
          <div className="light-border my-5 rounded"></div>
          <p className=" text-[0.9rem] font-light">
            Fortify your assets with Flexbot. Our Fully Completely enhanced
            account security ensures peace of mind in your crypto journey.
          </p>
        </div>
        <div>
          <h1 className=" text-[1.2rem] font-semibold">
            Omnichain Infrastructure
          </h1>
          <div className="light-border my-5 rounded"></div>
          <p className=" text-[0.9rem] font-light">
            Powered by LayerZero, Flexbot operates on an omnichain
            infrastructure for enhanced scalability and efficiency. Stop jumping
            form chain to chain to execute those fancy trades. With multi chain
            integration, Flex essures your diversified portfolio is intact
          </p>
        </div>
        <div>
          <h1 className=" text-[1.2rem] font-semibold">Cutting-edge Routing</h1>
          <div className="light-border my-5 rounded"></div>
          <p className=" text-[0.9rem] font-light">
            Flexbot employs 1inch for cutting-edge routing to ensure access to
            endless liquidity for seamless trading and optimizing trading
            strategies
          </p>
        </div>
        <div>
          <h1 className=" text-[1.2rem] font-semibold"> Web3 Authentication</h1>
          <div className="light-border my-5 rounded"></div>
          <p className=" text-[0.9rem] font-light">
            Flexbot implements Web3 authentication for a seamless onboarding
            experience guaranteeing hassle-free trading experience for even
            non-Web3 traders.
          </p>
        </div>
        <div>
          <h1 className=" text-[1.2rem] font-semibold">
            Gasless Trading with Arcana
          </h1>
          <div className="light-border my-5 rounded"></div>
          <p className=" text-[0.9rem] font-light">
            Leveraging Arcana for gasless transactions, Flexbot enhances your
            trading experience by eliminating gas fees for a smoother onboarding
            process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
