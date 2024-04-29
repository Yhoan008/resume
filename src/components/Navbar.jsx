import React from "react";

import logo from "./../assets/Logo4.png";

export default function Navbar() {
  return <NavDesktop />;
}

function NavDesktop() {

  // Falta agregar los eventos de navegacion 

  return (
    <div className="w-full h-[50px] fixed top-0 z-40 px-2 pt-4 flex justify-between items-center ">
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

function NavMobile() {
  return (
    <div className="w-[25px] h-auto  m-[15px] absolute top-0 left-0 flex flex-col justify-around gap-1 ">
      <div className=" bg-[#E9D985] w-[70%] h-[4px] rounded-3xl self-end " />
      <div className=" bg-[#E9D985] w-[100%] h-[4px] rounded-3xl" />
      <div className=" bg-[#E9D985] w-[60%] h-[4px] rounded-3xl" />
    </div>
  );
}
