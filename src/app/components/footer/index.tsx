import React from "react";
import SingleSocialMedia from "./singleSocialMedia";

const social = [
  {
    id: "facebook",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="#8d2fe6"
        viewBox="0 0 256 256"
      >
        <path d="M232,128a104.16,104.16,0,0,1-91.55,103.26,4,4,0,0,1-4.45-4V152h24a8,8,0,0,0,8-8.53,8.17,8.17,0,0,0-8.25-7.47H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,8-8.53A8.17,8.17,0,0,0,167.73,80H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0-8,8.53A8.17,8.17,0,0,0,96.27,152H120v75.28a4,4,0,0,1-4.44,4A104.15,104.15,0,0,1,24.07,124.09c2-54,45.74-97.9,99.78-100A104.12,104.12,0,0,1,232,128Z"></path>
      </svg>
    ),
  },
  {
    id: "twitter",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="#8d2fe6"
        viewBox="0 0 256 256"
      >
        <path d="M245.66,77.66l-29.9,29.9C209.72,177.58,150.67,232,80,232c-14.52,0-26.49-2.3-35.58-6.84-7.33-3.67-10.33-7.6-11.08-8.72a8,8,0,0,1,3.85-11.93c.26-.1,24.24-9.31,39.47-26.84a110.93,110.93,0,0,1-21.88-24.2c-12.4-18.41-26.28-50.39-22-98.18a8,8,0,0,1,13.65-4.92c.35.35,33.28,33.1,73.54,43.72V88a47.87,47.87,0,0,1,14.36-34.3A46.87,46.87,0,0,1,168.1,40a48.66,48.66,0,0,1,41.47,24H240a8,8,0,0,1,5.66,13.66Z"></path>
      </svg>
    ),
  },
  {
    id: "discord",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="#8d2fe6"
        viewBox="0 0 256 256"
      >
        <path d="M247.51,174.39,218,58a16.08,16.08,0,0,0-13-11.88l-36.06-5.92a16.22,16.22,0,0,0-18.26,11.88l-.21.85a4,4,0,0,0,3.27,4.93,155.62,155.62,0,0,1,24.41,5.62,8.2,8.2,0,0,1,5.62,9.7,8,8,0,0,1-10.19,5.64,155.4,155.4,0,0,0-90.8-.1,8.22,8.22,0,0,1-10.28-4.81,8,8,0,0,1,5.08-10.33,156.85,156.85,0,0,1,24.72-5.72,4,4,0,0,0,3.27-4.93l-.21-.85A16.21,16.21,0,0,0,87.08,40.21L51,46.13A16.08,16.08,0,0,0,38,58L8.49,174.39a15.94,15.94,0,0,0,9.06,18.51l67,29.71a16.17,16.17,0,0,0,21.71-9.1l3.49-9.45a4,4,0,0,0-3.27-5.35,158.13,158.13,0,0,1-28.63-6.2,8.2,8.2,0,0,1-5.61-9.67,8,8,0,0,1,10.2-5.66,155.59,155.59,0,0,0,91.12,0,8,8,0,0,1,10.19,5.65,8.19,8.19,0,0,1-5.61,9.68,157.84,157.84,0,0,1-28.62,6.2,4,4,0,0,0-3.27,5.35l3.49,9.45a16.18,16.18,0,0,0,21.71,9.1l67-29.71A15.94,15.94,0,0,0,247.51,174.39ZM92,152a12,12,0,1,1,12-12A12,12,0,0,1,92,152Zm72,0a12,12,0,1,1,12-12A12,12,0,0,1,164,152Z"></path>
      </svg>
    ),
  },
  {
    id: "instagram",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="#8d2fe6"
        viewBox="0 0 256 256"
      >
        <path d="M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24ZM128,176a48,48,0,1,1,48-48A48.05,48.05,0,0,1,128,176Zm60-96a12,12,0,1,1,12-12A12,12,0,0,1,188,80Zm-28,48a32,32,0,1,1-32-32A32,32,0,0,1,160,128Z"></path>
      </svg>
    ),
  },
  {
    id: "linkedIn",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="#8d2fe6"
        viewBox="0 0 256 256"
      >
        <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z"></path>
      </svg>
    ),
  },
  {
    id: "message",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="#8d2fe6"
        viewBox="0 0 256 256"
      >
        <path d="M232,56V184a16,16,0,0,1-16,16H156.53l-14.84,24.29a16,16,0,0,1-27.41-.06L99.5,200.06,40,200a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z"></path>
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <div className="mt-24 flex footer  p-12 justify-between">
      <div>
        <h1 className=" text-[2.5rem] font-semibold">NextAI</h1>
        <p className="text-[0.8rem] text-[#c9c9c9] ">
          © 2023 All right are reserved
        </p>
      </div>
      <div>
        <h2 className="text-[1.4rem] font-semibold">About</h2>
        <p className="text-[0.95rem]  flex flex-col text-[#c9c9c9] ">
          <span>The ultimate Framer template to bring.</span>
          <span>Get it for free and use it right away!</span>
        </p>
      </div>
      <div>
        <h2 className="text-[1.4rem] font-semibold">Other Templates</h2>
        <ul className=" font-normal">
          <li>BJ Group</li>
          <li>Marko Blinker</li>
          <li>See more</li>
        </ul>
      </div>
      <div className=" grid grid-cols-2 gap-2">
        {social.map((item) => (
          <SingleSocialMedia id={item.id} logo={item.logo} />
        ))}
      </div>
    </div>
  );
};

export default Footer;