import React, { useEffect, useState } from "react";

import multi from "./../../assets/prueba/multi.png";
import cont from "./../../assets/cont.png";
import scheme from "./../../assets/prueba/scheme.jpg";
import Clock from "../proyects/clock/Clock";
import LiquidButton from "../proyects/liquidbutton/LiquidButton";

import { cases } from "../json/cases";

export default function Proyects() {
  return (
    <div className="w-full flex flex-col bg ">
      <div className=" w-full flex justify-center items-center py-4 relative ">
        <LiquidButton title={"PRÁCTICA"} />
      </div>
      <div className="w-full h-[80vh] flex justify-around mt-10 ">
        <Clock />
        <div className="w-full p-10 text-white flex flex-col justify-start  ">
          <h1 className=" text-3xl mb-10 font-['Irish_Grover'] ">
            Avances Constantes en Poco Tiempo
          </h1>
          <p className=" font-['Itim'] text-xl ">
            Aunque llevo poco tiempo en el desarrollo, estoy comprometido con el
            aprendizaje constante. Me esfuerzo por asumir proyectos cada vez más
            desafiantes, lo que me ha permitido en poco tiempo mejorar mis
            habilidades y enfrentar problemas complejos con soluciones
            innovadoras. Mi enfoque está en adaptarme rápidamente y seguir
            creciendo.
          </p>
        </div>
      </div>
      <DefaultProyect />
    </div>
  );
}

function DefaultProyect() {
  return (
    <div
      className="w-full h-[100vh] bg-[#011c39] flex flex-row justify-around p-10  "
      id="explore"
    >
      <div className=" w-full h-[80%] flex p-10 gap-7 ">
        <Pages />
      </div>
      <div className=" w-full text-white p-10 basis-3/4 ">
        <h1 className=" font-bold text-2xl font-['Irish_Grover'] tracking-wider ">
          SUBIENDO...
        </h1>
        <p className="pt-5 font-['Itim'] tracking-wide ">
          Caso de uso en proceso⚙️, próntamente estare subiendo proyectos nuevos
        </p>
      </div>
    </div>
  );
}

function Pages() {
  const [states, setStates] = useState([false, true, false]);

  return states.map((index, id) => (
    <div
      className="w-full h-full rounded-xl overflow-hidden transition-all "
      key={id}
      style={{
        flexBasis: index ? "100%" : "50%",
      }}
      onMouseEnter={() => {
        if (id == 0) {
          setStates([true, false, false]);
        } else if (id == 1) {
          setStates([false, true, false]);
        } else if (id == 2) {
          setStates([false, false, true]);
        }
      }}
    >
      <img
        src={id == 0 ? multi : id == 1 ? cont : scheme}
        alt="Photo page"
        className="w-full h-full object-cover "
      />
    </div>
  ));
}
