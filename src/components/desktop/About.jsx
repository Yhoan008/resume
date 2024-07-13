import React, { useContext } from "react";

import ScrollerContext from "./../../context/Scroller";

import codeimg from "./../../assets/prueba/code3.jpg";

export default function About() {
  const scroller = useContext(ScrollerContext);

  return (
    <div className="w-full bg-[#011C39] h-[100vh] flex justify-center items-center ">
      <div
        className=" w-[50%] h-[60%] relative flex justify-center items-center mt-[100px] "
        onScroll={(event) => {
          console.log(event.scrollY);
        }}
      >
        <div
          className=" h-full absolute "
          style={{
            transform:
              scroller < 600
                ? "scale(20%)"
                : "translateX(150px) translateY(-70px)",
            //style={{ transform: "translateX(150px) translateY(-70px) " }}
            //style={{ transform: "scale(20%)" }}
          }}
        >
          <img src={codeimg} alt="Coding" className="h-full rounded-3xl  " />
        </div>
        <div
          className=" w-[80%] absolute p-8  bg-[#2A3145] text-white rounded-2xl m-auto mr-0 "
          //style={{ transform: "translateX(-150px) translateY(70px) " }}
        >
          <h1>
            Tengo 22 años, vivo actualmente en la ciudad de Bogotá, Colombia, y
            mis pasatiempos son el deporte y la música. <br /> En mi recorrido
            de aprendizaje tuve mis primeros pasos con HTML, CSS y Javascript,
            hasta explorar la dinámica de frameworks como React, TailwindCss, y
            express para gestión de servidores y bases de datos noSQL.
          </h1>
        </div>
      </div>
    </div>
  );
}
