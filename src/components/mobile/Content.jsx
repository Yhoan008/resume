import React from "react";

import water from "./../../assets/water-florida.gif";

export default function Content() {
  return (
    <div className=" w-full h-[200vh] absolute bg-[#2A3145] ">
      <div className="mt-[30vh] text-white p-4  ">
        <h1 className="font-['Irish_Grover'] text-2xl tracking-wider pt-2 ">
          DESARROLLADOR Y DISEÑADOR UX
        </h1>
        <p className=" mt-5 font-['Itim'] ">
          Tengo 22 Años, vivo actualmente en Bogotá, Colombia, y mis pasatiempos
          favorittos son el deporte y la música. <br /> En mi recorrido de
          aprendizaje tuvé mis primeros pasos con HTML, CSS y JavaScript; Hasta
          explorar la dinamica de frameworks como React, Tailwind y Express para
          gestión de servidores y bases de datos noSQL.{" "}
        </p>
      </div>
      <div className="w-full h-auto rounded-full overflow-hidden " >
        <img src={water} alt="WaterFlorida" className="w-full h-auto"  />
      </div>
    </div>
  );
}
