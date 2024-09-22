import React, { useContext, useEffect, useState, useRef } from "react";

import background from "./../../assets/background.png";
import pausephone from "./../../assets/headphone.png";
import playphone from "./../../assets/blackplay.png";
import downIcon from "./../../assets/downIcon.png";
import mail from "./../../assets/mail.png";
import linkedin from "./../../assets/linkedin.png";
import git from "./../../assets/git.png";
import wha from "./../../assets/wha.png";
import hdv from "./../../assets/HDV.pdf";

import afrobeat from "./../../assets/music/afrobeat1.mp3";
import beat1 from "./../../assets/music/beat1.mp3";
import beat2 from "./../../assets/music/beat2.mp3";
import beat3 from "./../../assets/music/beat3.mp3";
import beat4 from "./../../assets/music/beat4.mp3";
import beat5 from "./../../assets/music/MosesConcas Moonshines.mp3";

import Particles from "./Particles";

import { ScrollerContext } from "./../../context/Scroller";

export default function Home() {
  return (
    <div
      className="w-full h-[50vw] bg-[#9C9B99] relative flex justify-center items-center "
      id="home"
    >
      <div className="absolute w-full h-full z-10 text-white flex flex-row ">
        <div className="flex justify-center flex-col items-center w-full p-10 ">
          <h1 className="mr-[50%] font-['Itim'] ">HOLA! SOY</h1>
          <h1 className="font-['Irish_Grover'] text-4xl ">YHOAN MATEO</h1>
          <h1 className="font-['Itim'] ml-[70%] w-full ">
            DESARROLLADOR Y DISEÑADOR WEB
          </h1>
        </div>
        <div className="flex flex-col justify-end items-end m-[100px] w-full gap-4 ">
          <div className="flex flex-row gap-4 ml-3 mb-4 ">
            <a
              href="mailto:yhoanmoreno8@gmail.com?"
              className="w-9 h-10"
              target="_blank"
            >
              <img src={mail} alt="icon Mail" className="w-full" />
            </a>
            <a
              href="https://github.com/Yhoan008"
              className="w-9 h-10"
              target="_blank"
            >
              <img src={git} alt="icon Git" className="w-full" />
            </a>
            <a
              href="https://wa.me/573222561871?text=Hola, me gustaria conversar contigo."
              className="w-9 h-10"
              target="_blank"
            >
              <img src={wha} alt="icon WahtsApp" className="w-full" />
            </a>
            <a
              href="https://www.linkedin.com/in/yhoan-mateo-moreno-35100a224/"
              className="w-9 h-10"
              target="_blank"
            >
              <img src={linkedin} alt="icon Linkedin" className="w-full" />
            </a>
          </div>
          <a
            className="flex h-[20px] justify-center items-center gap-2 bg-[#E9D985] p-2 box-content rounded-xl cursor-pointer "
            href={hdv}
            download="YhoanMoreno.pdf"
          >
            <h1 className="font-['Itim'] text-xl text-black font-bold ">CV</h1>
            <div className="h-full ">
              <img
                src={downIcon}
                alt="Download Icon"
                className="h-[100%] w-auto "
              />
            </div>
          </a>
        </div>
      </div>
      <Particles />
      <img
        src={background}
        alt="Figure Fond"
        className="w-[100%] right-0 bottom-2 z-0 "
      />
      <div
        className={` w-[${window.innerWidth}px] h-[${window.innerWidth}px] shadow-[inset_0_0_0_350px_black] absolute z-20 rounded-full `}
      />
      <Music />
    </div>
  );
}

const beats = [afrobeat, beat1, beat2, beat3, beat4, beat5];

function Music() {
  const scroller = useContext(ScrollerContext);

  const audioref = useRef(null);
  const [playing, setPlay] = useState(false);
  const [song, setSong] = useState(0);

  useEffect(() => {
    playing ? audioref.current.play() : audioref.current.pause();
  });

  return (
    <div
      className="w-[135px] h-[135px] fixed left-0 right-0 top-0 m-auto flex items-center justify-center transition z-30 rounded-full bg-[#E9995E] cursor-pointer "
      style={{
        transform: `translateY(${
          scroller > 80 ? -2.6 : 17 - scroller / 4
        }vw) scale(${scroller > 60 ? 40 : 100 - scroller}%) `,
      }}
      onClick={() => {
        setPlay((prev) => !prev);
      }}
    >
      <audio
        src={beats[song]}
        ref={audioref}
        onEnded={() => {
          setSong((prev) => (prev < beats.length ? prev + 1 : 0));
        }}
      ></audio>
      {playing ? (
        <>
          <div className="w-10 h-10  absolute bottom-4 flex justify-center items-center">
            <Line state={8} />
            <Line state={15} />
            <Line state={25} />
            <Line state={15} />
            <Line state={8} />
          </div>
          <img
            src={pausephone}
            alt="Headphone"
            className="w-[80%] h-[80%] absolute"
          />
        </>
      ) : (
        <>
          <img
            src={playphone}
            alt="headphone"
            className=" w-[80%] h-[80%] absolute "
          />
          <div
            className="w-full h-full absolute top-0 left-0 border-4 animate-[musicPulse_1s_ease-in_infinite] border-[#EA9A5E] rounded-full "
            style={{ animationDelay: "1s" }}
          />
        </>
      )}
    </div>
  );
}

function Line({ state }) {
  // Variacion en heigh de 2 a 6
  // aca estoy usando una animacion prediseñada desde tailwind.config.js

  return (
    <div
      className="w-[5px] h-6 bg-black rounded mx-[2px] animate-[musicBar_1s_ease-in-out_infinite] delay-1000 "
      style={{ height: `${state}px` }}
    />
  );
}
