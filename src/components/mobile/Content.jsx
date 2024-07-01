import React, { useEffect, useRef } from "react";

import cont from "./../../assets/cont.png";
import scheme from "./../../assets/prueba/scheme.jpg";
import sound from "./../../assets/sound.png";

export default function Content() {
  return (
    <div className=" w-full h-[200vh] absolute bg-[#2A3145] ">
      <div className="mt-[30vh] text-white p-4  ">
        <h1 className="font-['Irish_Grover'] text-2xl tracking-wider pt-2 ">
          DESARROLLADOR Y DISEÑADOR UX
        </h1>
        <p className=" mt-5 font-['Itim'] ">
          Tengo 22 Años, vivo actualmente en Bogotá, Colombia, y mis pasatiempos
          favoritos son el deporte y la música. <br /> En mi recorrido de
          aprendizaje tuvé mis primeros pasos con HTML, CSS y JavaScript; Hasta
          explorar la dinamica de frameworks como React, Tailwind y Express para
          gestión de servidores y bases de datos noSQL.{" "}
        </p>
      </div>
      <div className="w-full h-auto p-3 overflow-hidden ">
        <img
          src={scheme}
          alt="WaterFlorida"
          className="w-full h-auto rounded-xl "
        />
      </div>
      <p className=" m-5 font-['Itim'] text-white ">
        Además, como diseñador UX mi enfoque integral incluye investigaciones
        del público objetivo y estudios de usabilidad mediante encuestas y
        análisis para comprender las necesidades y expectativas de los usuarios;
        Esto se complementa con auditorias competitivas permitiéndome
        identificar tendencias y oportunidades clave.
      </p>
      <div className="w-full flex flex-col items-center bg-[#291647] shadow-[#291647] shadow-[0_0_40px_20px] ">
        <Title title="EXPLORAR" />
        <div className="w-full p-3 flex flex-col gap-5 mt-5">
          <Proyects />
        </div>
        <Title title="FUTUROS APRENDIZAJES" />
        <Scroller />
      </div>
    </div>
  );
}

/// EN ESTE ELEMENTO HACE FALTA UN ARRAY VALIDO

function Scroller() {
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
        className=" min-w-[80vw] h-[100px] bg-red-700 border-2 border-black "
        onClick={() => {
          containerScroll.current.scrollLeft = 0;
        }}
      ></div>
      <div
        className=" min-w-[80vw] h-[100px] bg-red-700 border-2 border-black "
        onClick={() => {
          containerScroll.current.scrollLeft = fase - fase / 15;
        }}
      ></div>
      <div
        className=" min-w-[80vw] h-[100px] bg-red-700 border-2 border-black "
        onClick={() => {
          containerScroll.current.scrollLeft = fase * 2;
        }}
      ></div>
    </div>
  );
}

function Title({ title }) {
  return (
    <div className="text-white font-['Irish_Grover'] h-[40px] gap-4 tracking-wider text-xl flex flex-row  items-center mt-10 ">
      <div className="h-full">
        <img src={sound} alt="" className="h-full " />
      </div>
      <h1 className="text-center max-w-[150px] ">{title}</h1>
      <div className="h-full">
        <img src={sound} alt="" className="h-full " />
      </div>
    </div>
  );
}

/// EN ESTE ELEMENTO HACE FALTA UN ARRAY VALIDO
function Proyects() {
  const images = [0, 0, 0];

  return images.map((index, id) => (
    <div
      className=" w-full h-[140px] relative overflow-hidden rounded-lg opacity-80 flex justify-start items-start "
      key={id}
    >
      <div className=" text-white absolute bottom-2 left-2 font-['Itim'] ">
        <h1 className="font-bold">Lorem ipsum dolor sit.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, vero.
        </p>
      </div>
      <img src={cont} alt="" className="w-full " />
    </div>
  ));
}
