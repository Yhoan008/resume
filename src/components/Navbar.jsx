import React, { useContext, useState } from "react";

import logo from "./../assets/Logo4.png";
import front from "./../assets/front.png";
import mail from "./../assets/mail.png";
import linkedin from "./../assets/linkedin.png";
import git from "./../assets/git.png";
import wha from "./../assets/wha.png";
import homecinema from "./../assets/homecinema.png";
import soundSearch from "./../assets/soundSearch.png";

import { ResponsiveContext } from "../context/Responsive";

export default function Navbar() {
  const responsive = useContext(ResponsiveContext);

  return responsive < 768 ? <NavMobile /> : <NavDesktop />;
}

function NavDesktop() {
  // Falta agregar los eventos de navegacion

  return (
    <div className="w-full h-[50px] fixed top-0 z-10 px-2 pt-4 flex justify-between items-center ">
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
  const [navActive, setNavActive] = useState(false);

  return (
    <>
      <button
        className="w-[25px] h-auto  m-[15px] fixed top-0 left-0 flex flex-col justify-around gap-1 z-10 "
        onClick={() => {
          setNavActive(true);
        }}
      >
        <div className=" bg-[#E9D985] w-[70%] h-[4px] rounded-3xl self-end " />
        <div className=" bg-[#E9D985] w-[100%] h-[4px] rounded-3xl" />
        <div className=" bg-[#E9D985] w-[60%] h-[4px] rounded-3xl" />
      </button>
      <div
        className="w-[85vw] h-[100vh] fixed z-20 bg-gray-900/60 backdrop-filter backdrop-blur transition rounded-r-3xl flex flex-col justify-between  "
        style={{
          transform: `${
            navActive == false ? "translateX(-100vw)" : "translateX(0vw)"
          }`,
        }}
      >
        <div
          className="w-10 h-10 bg-[#272443] rounded-full absolute -right-5 top-5 p-1 "
          onClick={() => {
            setNavActive(false);
          }}
        >
          <button className="w-full h-full bg-[#7D7C7C] rounded-full flex justify-center items-center  ">
            <div className="w-6 h-1 bg-white absolute rounded-full -rotate-45 " />
            <div className="w-6 h-1 bg-white absolute rounded-full rotate-45 " />
          </button>
        </div>

        {/* En las siguientes lineas son las opciones del navbar */}

        <div className="flex flex-row mt-4 ml-3 items-center ">
          <div className="w-[60px] h-[60px] border-2 border-white rounded-full bg-white overflow-hidden  ">
            <img src={front} alt="Face" className="w-full" />
          </div>
          <div className="flex flex-col pl-2 text-white font-['Itim'] ">
            <h1 className="font-bold ">Yhoan Moreno, 22</h1>
            <p>Bogotá, Colombia</p>
          </div>
        </div>

        <ul className=" ml-5 flex flex-col gap-5 text-white font-medium font-['Itim'] ">
          <li className="flex flex-row items-end gap-2">
            <img src={homecinema} alt="Parlante Icon" className="max-h-8 " />
            <a href="#">INICIO</a>
          </li>
          <li className="flex flex-row items-center gap-2">
            <img
              src={soundSearch}
              alt="Search Music Icon"
              className="max-h-8 "
            />
            <a href="#">EXPLORAR</a>
          </li>
        </ul>

        <div className="flex justify-between items-end ">
          {/* Hace falta agregar los enlaces */}
          <div className="flex flex-col gap-2 ml-3 mb-4 ">
            <a href="#" className="w-8 h-10">
              <img src={mail} alt="icon Mail" className="w-full" />
            </a>
            <a href="#" className="w-8 h-10">
              <img src={git} alt="icon Git" className="w-full" />
            </a>
            <a href="#" className="w-8 h-10">
              <img src={wha} alt="icon WahtsApp" className="w-full" />
            </a>
            <a href="#" className="w-8 h-10">
              <img src={linkedin} alt="icon Linkedin" className="w-full" />
            </a>
          </div>
          <button className="mr-4 mb-4 bg-[#E9D985] px-3 py-2 rounded-xl font-medium tracking-wider font-['Irish_Grover'] ">
            CONTACTO
          </button>
        </div>
      </div>
    </>
  );
}
