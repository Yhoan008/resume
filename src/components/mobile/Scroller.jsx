import React, { useEffect, useRef } from "react";

import bootstrap from "./../../assets/bootstrap.png";
import adobe from "./../../assets/adobe.jpg";
import react from "./../../assets/react.jpg";

export default function Scroller() {
  const containerScroll = useRef(null);

  let fase;

  useEffect(() => {
    fase = containerScroll.current.scrollWidth / 3;
  });

  return (
    <div
      ref={containerScroll}
      className="w-full flex flex-row overflow-x-scroll gap-5 p-8 scroll-smooth"
      onScroll={() => {
        setTimeout(() => {
          if (
            containerScroll.current.scrollLeft <
            containerScroll.current.scrollWidth / 8
          ) {
            containerScroll.current.scrollLeft = 0;
          } else if (
            containerScroll.current.scrollLeft >=
              containerScroll.current.scrollWidth / 8 &&
            containerScroll.current.scrollLeft <=
              containerScroll.current.scrollWidth / 2.1
          ) {
            containerScroll.current.scrollLeft = fase - fase / 15;
            console.log(containerScroll.current.scrollWidth);
          } else if (
            containerScroll.current.scrollLeft >
            containerScroll.current.scrollWidth / 2.1
          ) {
            containerScroll.current.scrollLeft = fase * 2;
          }
        }, 500);
      }}
    >
      <div
        className=" min-w-[80vw] bg-gradient-to-b from-[#3E358B] to-[#1E3D4A] p-4 rounded-2xl text-center text-white "
        onClick={() => {
          containerScroll.current.scrollLeft = 0;
        }}
      >
        <h1 className=" font-['Irish_Grover'] font-bold tracking-widest ">ADOBE XD</h1>
        <div className="w-full ">
          <img src={adobe} alt="Adobe XD" />
        </div>
        <p className="font-['Itim']">
          Herramienta de diseño y prototipado para experiencias digitales,
          permite colaboración entre diseñadores e ingenieros
        </p>
      </div>
      <div
        className=" min-w-[80vw] bg-gradient-to-b from-[#3E358B] to-[#1E3D4A] p-4 rounded-2xl text-center text-white "
        onClick={() => {
          containerScroll.current.scrollLeft = fase - fase / 15;
        }}
      >
        <h1 className=" font-['Irish_Grover'] font-bold tracking-widest ">BOOTSTRAP</h1>
        <div className="w-full ">
          <img src={bootstrap} alt="bootstrap" />
        </div>
        <p className="font-['Itim']">
          Framework CSS de diseño de forma rápida y con un diseño moderno. Su
          enfoque en la responsividad garantiza una experiencia óptima en todos
          los dispositivos
        </p>
      </div>
      <div
        className=" min-w-[80vw] bg-gradient-to-b from-[#3E358B] to-[#1E3D4A] p-4 rounded-2xl text-center text-white "
        onClick={() => {
          containerScroll.current.scrollLeft = fase * 2;
        }}
      >
        <h1 className=" font-['Irish_Grover'] font-bold tracking-widest ">REACT NATIVE</h1>
        <div className="w-full ">
          <img src={react} alt="React Native" />
        </div>
        <p className="font-['Itim']">
          Desarrollo de aplicaciones móviles con desarrollo nativo y la
          flexibilidad de React, permitiendo crear aplicaciones multiplataforma.
        </p>
      </div>
    </div>
  );
}
