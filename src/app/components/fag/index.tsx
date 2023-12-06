import React from "react";
import SingleFaq from "./singleFaq";

const faqText = [
  {
    id: 1,
    text: "What is Flexbot?",
  },
  {
    id: 2,
    text: "How does the Referral Program work?",
  },
  {
    id: 3,
    text: "What sets Flexbot apart from others?",
  },
  {
    id: 4,
    text: "Which blockchains does Flexbot support",
  },
];

const Faq = () => {
  return (
    <div className="relative">
      <div className="sm:mt-24 mt-12 relative z-10 ">
        <h1 className="text-[40px] text-center font-semibold">FAQ</h1>
        <div className="flex flex-col mt-5 gap-5">
          {faqText.map((obj) => (
            <SingleFaq key={obj.id} text={obj.text} />
          ))}
        </div>
      </div>
      <div className="absolute w-fit h-0 rounded-full inset-0 top-[50%] left-[10%] faq-glow "></div>
    </div>
  );
};

export default Faq;
