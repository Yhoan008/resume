import React, { useContext } from "react";
import { ScrollerContext } from "../../context/Scroller";

import logo from "./../../assets/Logo4.png";

export default function Navbar() {
  const scroller = useContext(ScrollerContext);

  return (
    <div
      className="w-full h-[60px] fixed top-0 z-20 px-2 flex justify-between items-center"
      style={{ backdropFilter: scroller < 100 ? "" : "blur(10px)" }}
    >
      <div className="h-[40px] flex items-center ">
        <img src={logo} alt="Dragon Y" className="h-full w-auto " />
        <h1 className="text-[#E9D985] text-xl font-['Irish_Grover'] mt-2 ">
          HOAN
        </h1>
      </div>
      <nav>
        <ul className="flex gap-[80px] relative left-7 text-white underline font-['Irish_Grover'] text-base ">
          <li>
            <a href="#">INICIO</a>
          </li>
          <li>
            <a href="#">EXPLORAR</a>
          </li>
        </ul>
      </nav>
      <button className="mr-2 bg-[#E9D985] px-3 py-2 rounded-xl font-medium tracking-wider font-['Irish_Grover'] ">
        CONTACTO
      </button>
    </div>
  );
}
