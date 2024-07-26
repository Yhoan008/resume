import React, { useContext, useEffect, useRef, useState } from "react";

import { ScrollerContext } from "./../../context/Scroller";

import codeimg from "./../../assets/prueba/code3.jpg";

export default function About() {
  const scroller = useContext(ScrollerContext);

  const abouts = [
    "Tengo 22 años, vivo actualmente en la ciudad de Bogotá, Colombia, y mis pasatiempos son el deporte y la música. En mi recorrido de aprendizaje tuve mis primeros pasos con HTML, CSS y Javascript, hasta explorar la dinámica de frameworks como React, TailwindCss, y express para gestión de servidores y bases de datos no SQL.",
    "Además, como diseñador UX mi enfoque integral incluye investigaciones del público objetivo y estudios de usabilidad mediante encuestas y análisis para comprender las necesidades y expectativas de los usuarios; Esto se complementa con auditorias competitivas permitiéndome identificar tendencias y oportunidades clave.",
  ];

  const limit1 = 500;
  const limit2 = 1200;

  return (
    <div className="bg-[#011C39]">
      {abouts.map((index, id) => {
        return (
          <div
            className="w-full h-[100vh] flex justify-center items-center relative  "
            key={id}
          >
            <div className="absolute w-full h-full">
              <Fond reverse={true} />
              <Fond reverse={false} />
            </div>
            <div className=" w-[50%] h-[60%] relative flex justify-center items-center mt-[100px] ">
              <div
                className=" h-full absolute  transition-transform "
                style={{
                  transform:
                    id == 0
                      ? scroller < limit1
                        ? "scale(20%)"
                        : "translateX(150px) translateY(-70px) "
                      : scroller < limit2
                      ? "scale(20%)"
                      : "translateX(-150px) translateY(-70px) ",
                }}
              >
                <img
                  src={codeimg}
                  alt="Coding"
                  className="h-full rounded-3xl  "
                />
              </div>
              <div
                className=" w-[80%] absolute p-8  bg-[#2A3145] text-white rounded-2xl m-auto mr-0 transition-transform  "
                style={{
                  transform:
                    id == 0
                      ? scroller < limit1
                        ? ""
                        : "translateX(-150px) translateY(70px)"
                      : scroller < limit2
                      ? ""
                      : "translateX(150px) translateY(70px)",
                }}
              >
                <h1>{index}</h1>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Fond({ reverse }) {
  const [radio, setRadio] = useState(Math.random() * (300 - 100) + 200);

  const [x, setX] = useState(Math.random() * (window.innerWidth - radio));

  const [y, setY] = useState(Math.random() * (window.innerHeight - radio));

  return (
    <div
      className=" rounded-full shadow-[inset_0_0_50px_15px_rgba(0,0,0)] absolute animate-[rotate_100s_ease_infinite] "
      style={{
        width: radio,
        height: radio,
        top: `${y}px`,
        left: `${x}px`,
        animationDirection: reverse ? "reverse" : "normal",
      }}
    />
  );
}
