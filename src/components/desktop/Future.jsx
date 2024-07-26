import React from "react";

import bootstrap from "./../../assets/bootstrap.png";
import adobe from "./../../assets/adobe.jpg";
import react from "./../../assets/react.jpg";

import { futures } from "./../json/futures";

export default function Future() {
  return (
    <div className="w-full bg-[#011c39] flex justify-center items-center flex-col text-white ">
      <h1 className=" font-['Irish_Grover'] tracking-wide text-2xl ">
        FUTUROS APRENDIZAJES
      </h1>
      <p className="max-w-[80%] text-center py-6 font-['Itim'] ">
        Como profesional en constante busqueda de mejora y crecimiento, estoy
        comprometido a continuar adquiriendo nuevos conocimientos y habilidades
        cruciales en mi carrera. Mis futuros aprendizajes incluirán:{" "}
      </p>
      <div className="flex flex-wrap justify-around w-[90%] h-auto gap-10 mb-[100px] ">
        {futures.map((index, id) => {
          return (
            <div className=" w-[400px] h-[300px] relative " key={id}>
              <img
                src={index.image}
                alt="Image Framework"
                className="h-full object-cover rounded-2xl "
              />
              <div className="absolute bottom-0 p-2 text-center">
                <p className="font-['Itim'] ">
                  <span className="font-bold">{index.title} : </span>{" "}
                  {index.about}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
