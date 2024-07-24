import React, { createContext, useContext, useEffect, useState } from "react";
import { Link, Element, Events } from "react-scroll";

//Documento destinado a hacer prubas con funcionalidades para la pagina
// Sustraccion por superposicion
// React Scroll

const ThemeContext = createContext(null);
export default function Pruebas() {

  useEffect(()=>{
    document.body.style.overflowY = "visible"
  })

  return <ReactScroller />;
}

function ReactScroller() {
  return (
    <div className="w-full h-[300vh] flex flex-col align-middle bg-[#001011] ">
      <div></div>
      <div className="w-full h-[100vh] flex justify-around items-center ">
        <Link
          smooth={true}
          duration={500}
          to="pageone"
          className="p-2 bg-[#97C8EB] rounded-md cursor-pointer font-bold hover:scale-125 transition-transform "
        >
          SCROLLER TO PAGE ONE
        </Link>
        <Link
          smooth={true}
          duration={500}
          to="pagetwo"
          className="p-2 bg-[#161c20] rounded-md cursor-pointer font-bold hover:scale-125 transition-transform "
        >
          SCROLLER TO PAGE TWO
        </Link>
      </div>
      <Element
        name="pageone"
        className="w-full h-[100vh] flex justify-center items-center"
      >
        <div className="text-white text-2xl font-bold ">SECOND PAGE</div>
      </Element>
      <Element
        name="pagetwo"
        className="w-full h-[100vh] flex justify-center items-center"
      >
        <div className="text-white text-2xl font-bold ">THREE PAGE</div>
      </Element>
    </div>
  );
}
