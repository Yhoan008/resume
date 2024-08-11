import React, { useContext, useEffect, useRef, useState } from "react";

import { ScrollerContext } from "../../context/Scroller";

import sunMobile from "./../../assets/sunMobile.jpg";
import headphone from "./../../assets/headwhite.png";
import music from "./../../assets/musicplay.png";
import front from "./../../assets/front4.png";
import intro from "./../../assets/music/intro.mp3";
import afrobeat from "./../../assets/music/afrobeat1.mp3";
import beat1 from "./../../assets/music/beat1.mp3";
import beat2 from "./../../assets/music/beat2.mp3";
import beat3 from "./../../assets/music/beat3.mp3";
import beat4 from "./../../assets/music/beat4.mp3";
import beat5 from "./../../assets/music/MosesConcas Moonshines.mp3";

const beats = [afrobeat, beat1, beat2, beat3, beat4, beat5];

export default function Home() {
  const scroller = useContext(ScrollerContext);
  const audioref = useRef(null);
  const [playing, setPlay] = useState(false);
  const [song, setSong] = useState(0);

  useEffect(() => {
    playing ? audioref.current.play() : audioref.current.pause();
  });

  return (
    <div className="w-full h-auto fixed z-10 top-0 rounded-b-[30px] overflow-hidden">
      <img
        src={sunMobile}
        alt="sunMobile"
        className={` w-[100%] object-cover object-bottom relative transition `}
        style={{
          height: `${window.scrollY < 120 ? 170 - scroller : 50}px`,
        }}
      />
      <div className=" w-[70px] h-[70px] bg-slate-300 rounded-full absolute bottom-20 right-0 m-2 overflow-hidden border-slate-300 border-2 flex justify-center ">
        <img
          src={front}
          alt="Perfil"
          className="w-[90%] h-auto object-cover object-top "
        />
      </div>
      <div
        className=" w-auto h-auto absolute bottom-3 left-3 text-white transition-transform duration-100 "
        style={{
          transform: `translateY(-${scroller < 120 ? scroller : 120}px)`,
        }}
      >
        <p className=" font-itim text-sm ">Hola! Soy</p>
        <h1 className="text-3xl font-medium font-irishGrover ">Yhoan Mateo</h1>
      </div>
      <div
        className="w-10 h-10 absolute right-0 bottom-0 m-2 flex justify-center "
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
            <img src={headphone} alt="headphone" />
            <div className="w-[10px] h-2 absolute bottom-2 flex justify-around items-center flex-row ">
              <Line state={3} />
              <Line state={6} />
              <Line state={8} />
              <Line state={6} />
              <Line state={3} />
            </div>
          </>
        ) : (
          <img src={music} alt="Play Music" className=" animate-pulse " />
        )}
      </div>
    </div>
  );
}

function Line({ state }) {
  return (
    <div
      className="w-[1px] bg-white rounded animate-[musicBar_1s_ease-in-out_infinite] delay-1000 "
      style={{ height: `${state}px` }}
    />
  );
}
