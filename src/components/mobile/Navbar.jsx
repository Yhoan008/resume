import React, { useState } from "react";

import front from "./../../assets/front.png";
import mail from "./../../assets/mail.png";
import linkedin from "./../../assets/linkedin.png";
import git from "./../../assets/git.png";
import wha from "./../../assets/wha.png";
import homecinema from "./../../assets/homecinema.png";
import soundSearch from "./../../assets/soundSearch.png";
import downicon from "./../../assets/downIcon.png";

import hdv from "./../../assets/HDV.pdf";

export default function Navbar() {
  const [navActive, setNavActive] = useState(false);

  return (
    <>
      <button
        className="w-[25px] h-auto m-[15px] fixed top-0 left-0 flex flex-col justify-around gap-1 z-20 "
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
            <a
              href="#home"
              onClick={() => {
                setNavActive(false);
              }}
            >
              INICIO
            </a>
          </li>
          <li className="flex flex-row items-center gap-2">
            <img
              src={soundSearch}
              alt="Search Music Icon"
              className="max-h-8 "
            />
            <a
              href="#explore"
              onClick={() => {
                setNavActive(false);
              }}
            >
              EXPLORAR
            </a>
          </li>
        </ul>

        <div className="flex justify-between items-end ">
          <div className="flex flex-col gap-3 ml-5 mb-4 ">
            <a className="w-8 h-10" href="mailto:yhoanmoreno8@gmail.com?">
              <img src={mail} alt="icon Mail" className="w-full" />
            </a>
            <a
              href="https://github.com/Yhoan008"
              target="_blank"
              className="w-8 h-10"
            >
              <img src={git} alt="icon Git" className="w-full" />
            </a>
            <a
              href="https://wa.me/573222561871?text=Hola, me gustaria conversar contigo."
              target="_blank"
              className="w-8 h-10"
            >
              <img src={wha} alt="icon WahtsApp" className="w-full" />
            </a>
            <a
              href="https://www.linkedin.com/in/yhoan-mateo-moreno-35100a224/"
              target="_blank"
              className="w-8 h-10"
            >
              <img src={linkedin} alt="icon Linkedin" className="w-full" />
            </a>
          </div>
          <a
            className="mr-4 mb-4 bg-[#E9D985] px-3 py-2 rounded-xl font-medium tracking-wider font-['Irish_Grover'] flex items-center gap-1 text-xl "
            href={hdv}
            download="YhoanMoreno.pdf"
          >
            CV
            <div className="w-5 ">
              <img src={downicon} alt="Download" />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
