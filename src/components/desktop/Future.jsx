import React from "react";

import bootstrap from "./../../assets/bootstrap.png";
import adobe from "./../../assets/adobe.jpg";
import react from "./../../assets/react.jpg";

export default function Future() {
  return (
    <div className="w-full bg-[#011c39] flex justify-center items-center flex-col pt-10 text-white ">
      <h1 className=" font-['Irish_Grover'] tracking-wide text-2xl ">
        FUTUROS APRENDIZAJES
      </h1>
      <p className="max-w-[80%] text-center py-6 font-['Itim'] ">
        Como profesional en constante busqueda de mejora y crecimiento, estoy
        comprometido a continuar adquiriendo nuevos conocimientos y habilidades
        cruciales en mi carrera. Mis futuros aprendizajes incluirán:{" "}
      </p>
      <div className="flex flex-wrap justify-around w-[90%] h-auto gap-10 mb-[100px] ">
        <div className=" w-[400px] h-[300px] relative ">
          <img
            src={bootstrap}
            alt="Adobe XD"
            className="h-full object-cover "
          />
          <div className="absolute bottom-0 p-2 text-center">
            <p className="font-['Itim'] ">
              Framework CSS de diseño de forma rápida y con un diseño moderno.
              Su enfoque en la responsividad garantiza una experiencia óptima en
              todos los dispositivos
            </p>
          </div>
        </div>
        <div className=" w-[400px] h-[300px] relative ">
          <img src={adobe} alt="Adobe XD" className="h-full object-cover " />
          <div className="absolute bottom-0 p-2 text-center">
            <p className="font-['Itim'] ">
              <span className="font-bold">Adobe XD: </span> Herramienta de
              diseño y prototipado para experiencias digitales, permite
              colaboración entre diseñadores e ingenieros
            </p>
          </div>
        </div>
        <div className=" w-[400px] h-[300px] relative ">
          <img src={react} alt="Adobe XD" className="h-full object-cover " />
          <div className="absolute bottom-0 p-2 text-center">
            <p className="font-['Itim'] ">
              <span className="font-bold">React Native: </span>Desarrollo de
              aplicaciones móviles con desarrollo nativo y la flexibilidad de
              React, permitiendo crear aplicaciones multiplataforma.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
