import React, { useContext } from "react";

import { ScrollerContext } from "../../context/Scroller";

import sunMobile from "./../../assets/sunMobile.jpg";
import music from "./../../assets/headphone.png";
import front from "./../../assets/front4.png"

export default function Home() {
  const scroller = useContext(ScrollerContext);

  return (
    <div className="w-[100%] h-auto fixed rounded-b-[30px] overflow-hidden">
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
      <div className="w-10 h-10 absolute right-0 bottom-0 m-2 ">
        <img src={music} alt="musica" className="w-[100%] h-auto " />
      </div>
    </div>
  );
}
