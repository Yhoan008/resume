import React, { useContext, useEffect, useState } from "react";

import { ScrollerContext } from "./../../context/Scroller";

import codeimg from "./../../assets/prueba/code3.jpg";

export default function About() {
  const scroller = useContext(ScrollerContext);

  const limit1 = 500;
  const limit2 = 1200

  return (
    <div>
      <div className="w-full bg-[#011C39] h-[100vh] flex justify-center items-center ">
        <div className=" w-[50%] h-[60%] relative flex justify-center items-center mt-[100px] ">
          <div
            className=" h-full absolute  transition-transform "
            style={{
              transform:
                scroller < limit1
                  ? "scale(20%)"
                  : "translateX(150px) translateY(-70px) ",
            }}
          >
            <img src={codeimg} alt="Coding" className="h-full rounded-3xl  " />
          </div>
          <div
            className=" w-[80%] absolute p-8  bg-[#2A3145] text-white rounded-2xl m-auto mr-0 transition-transform  "
            style={{
              transform:
                scroller < limit1 ? "" : "translateX(-150px) translateY(70px) ",
            }}
          >
            <h1>
              Tengo 22 años, vivo actualmente en la ciudad de Bogotá, Colombia,
              y mis pasatiempos son el deporte y la música. <br /> En mi
              recorrido de aprendizaje tuve mis primeros pasos con HTML, CSS y
              Javascript, hasta explorar la dinámica de frameworks como React,
              TailwindCss, y express para gestión de servidores y bases de datos
              noSQL.
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#011C39] h-[100vh] flex justify-center items-center ">
        <div className=" w-[50%] h-[60%] relative flex justify-center items-center mt-[100px] ">
          <div
            className=" h-full absolute  transition-transform "
            style={{
              transform:
                scroller < limit2
                  ? "scale(20%)"
                  : "translateX(-150px) translateY(-70px) ",
            }}
          >
            <img src={codeimg} alt="Coding" className="h-full rounded-3xl  " />
          </div>
          <div
            className=" w-[80%] absolute p-8  bg-[#2A3145] text-white rounded-2xl m-auto mr-0 transition-transform  "
            style={{
              transform:
                scroller < limit2 ? "" : "translateX(150px) translateY(70px) ",
            }}
          >
            <h1>
              Además, como diseñador UX mi enfoque integral incluye
              investigaciones del público objetivo y estudios de usabilidad
              mediante encuestas y análisis para comprender las necesidades y
              expectativas de los usuarios; Esto se complementa con auditorias
              competitivas permitiéndome identificar tendencias y oportunidades
              clave.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
