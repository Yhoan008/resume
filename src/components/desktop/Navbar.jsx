import React, { useContext } from "react";
import { ScrollerContext } from "../../context/Scroller";

import logo from "./../../assets/Logo4.png";

export default function Navbar() {
  const scroller = useContext(ScrollerContext);

  return (
    <div
      className="w-full h-[60px] fixed top-0 z-20 px-2 flex justify-center items-center"
      style={{ backdropFilter: scroller < 100 ? "" : "blur(10px)" }}
    >
      <div className="h-[40px] flex items-center absolute left-0 ">
        <img src={logo} alt="Dragon Y" className="h-full w-auto " />
        <h1 className="text-[#E9D985] text-xl font-['Irish_Grover'] mt-2 ">
          HOAN
        </h1>
      </div>
      <ul className="flex gap-[80px] text-white underline font-['Irish_Grover'] text-base absolute ml-8 ">
        <li>
          <a href="#home">INICIO</a>
        </li>
        <li>
          <a href="#explore">EXPLORAR</a>
        </li>
      </ul>
    </div>
  );
}
