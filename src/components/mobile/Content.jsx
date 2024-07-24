import React from "react";

import Scroller from "./Scroller";
import Footer from "./Footer";

import { cases } from "./../json/cases";
import scheme from "./../../assets/prueba/scheme.jpg";
import sound from "./../../assets/sound.png";

export default function Content() {
  return (
    <div className=" w-full absolute bg-[#2A3145] pb-[350px] " id="home">
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
      <div
        className="w-full flex flex-col items-center bg-[#291647] shadow-[#291647] shadow-[0_0_40px_20px] "
        id="explore"
      >
        <Title title="EXPLORAR" />
        <div className="w-full p-3 flex flex-col gap-5 mt-5">
          <Proyects />
        </div>
        <Title title="FUTUROS APRENDIZAJES" />
        <p className="p-4 text-white font-['Itim'] mt-8 ">
          Como profesional en constante busqueda de mejora y crecimiento, estoy
          comprometido a continuar adquiriendo nuevos conocimientos y
          habilidades cruciales en mi carrera. Mis futuros aprendizajes
          incluirán:{" "}
        </p>
        <Scroller />
      </div>
      <Footer />
    </div>
  );
}

function Title({ title }) {
  return (
    <div className="text-white font-['Irish_Grover'] h-[40px] gap-4 tracking-wider text-xl flex flex-row  items-center mt-[50px] ">
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

function Proyects() {
  return cases.map((index, id) => (
    <div
      className=" w-full h-[140px] relative overflow-hidden rounded-lg grayscale flex justify-start items-start "
      key={id}
    >
      <div className=" text-white absolute bottom-2 left-2 font-['Itim'] ">
        <h1 className="font-bold">{index.title}</h1>
        <p>{index.about}</p>
      </div>
      <img src={index.image} alt="backgroundCode" className="w-full " />
    </div>
  ));
}
