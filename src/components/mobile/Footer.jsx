import React from "react";

import logo from "./../../assets/Logo4.png";

export default function Footer() {
  return (
    <div className="w-full bg-[#2A3145] absolute bottom-0 flex flex-col justify-around items-center text-center text-white gap-5 py-5 ">
      <div className="w-[100px]">
        <img src={logo} alt="Dragon Icon" />
      </div>
      <h1>©2024 Yhoan Mateo Moreno</h1>
      <h1>
        Gracias por visitar mi portafolio, tu interés significa mucho para mi.
      </h1>
    </div>
  );
}
