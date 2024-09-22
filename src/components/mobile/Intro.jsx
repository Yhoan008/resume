import React, { useEffect, useRef, useState } from "react";

import headphone from "./../../assets/headphone.png";

import introSound from "./../../assets/music/intro.mp3";

export default function Intro() {
  const [active, setActive] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setActive(false);
      document.body.style.overflowY = "visible";
    }, 5000);
  }, []);

  return (
    <div
      className="w-full h-[100vh] bg-gradient-to-br from-[#291647] to-[#2A3145] flex justify-center items-center absolute top-0 left-0 z-50 "
      style={{ display: active ? "flex" : "none" }}
    >
      <div className="w-[100px] h-[100px] bg-[#EA9A5E] p-3 rounded-full relative flex justify-center items-center ">
        <img src={headphone} alt="HeadPhone" />
        <div
          className="w-full h-full absolute top-0 left-0 border-4 animate-[musicPulse_1s_ease-in_infinite] border-[#EA9A5E] rounded-full "
          style={{ animationDelay: "1s" }}
        />
        <div className="flex items-center gap-[2px] h-4 absolute bottom-6 ">
          <Line delay={1} />
          <Line delay={2} />
          <Line delay={3} />
          <Line delay={4} />
          <Line delay={5} />
        </div>
      </div>
    </div>
  );
}

function Line({ delay }) {
  return (
    <span
      className="w-[3px] h-1 bg-black rounded animate-[loading_1s_ease_infinite] "
      style={{ animationDelay: `.${delay}s` }}
    />
  );
}
