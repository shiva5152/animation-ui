import { features } from "process";
import React from "react";
import SingleFeature from "./singleFeatures";

const featuresArr = [
  {
    id: 1,
    title: "Perpetual Trading",
    icon: "/image/trading.png",
    description:
      "Powered by DyDx, Synthetix, and GMX, Flexbot ensures uninterrupted and reliable perpetual trading, allowing you to capitalize on market opportunities with confidence.",
  },
  {
    id: 2,
    title: "Precise Token Snipping",
    icon: "/image/tablet.png",
    description:
      "The automated token snipping feature empowers you to act decisively, seizing profitable opportunities the moment they arise",
  },
  {
    id: 3,
    title: "Copy Trading",
    icon: "/image/copy-trading.png",
    description: `
        Effortlessly Emulate Expert Strategies by replicating expert strategies of
seasoned traders.
Flexbot enables you to replicate expert strategies effortlessly while
enhancing your trading experience.
      `,
  },
  {
    id: 4,
    title: "Airdrop Farming",
    icon: "/image/air-drop.png",
    description: `
       Earn rewards by participating in airdrops and amplify your profits while
diversifying your crypto portfolio effortlessly.

      `,
  },
  {
    id: 5,
    title: "Attractive Referral System",
    icon: "/image/refrel.png",
    description: `
      Grow with Flexbot and earn together. Enjoy a 6.9% discount on
transaction fees for your referees, while receiving 69% of their
transaction fees as a referral bonus.
      `,
  },
  {
    id: 6,
    title: "Revenue Sharing",
    icon: "/image/analysis.png",
    description: `
      Earn more with Flexbot. Get 69% of the net fees generated back in your
pocket while making sure your success is rewarded.
      `,
  },
];

const Features = () => {
  return (
    <div className=" relative z-50 mt-24">
      <div className="heading">
        <h1 className="text-[42px] font-bold font-Orbitron">
          Flexbot Features
        </h1>
        <p className=" text-[1.2rem] w-6/12 text-[#c9c9c9]">
          Elevate your crypto trading experience with Flexbot, the intelligent
          and comprehensive solution designed for the modern crypto trader
        </p>
      </div>
      <div className="mt-12 grid grid-cols-3 gap-[6rem]">
        {featuresArr.map((item) => (
          <SingleFeature {...item} />
        ))}
      </div>
    </div>
  );
};

export default Features;
