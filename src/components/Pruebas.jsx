import React, { useEffect, useState } from "react";
import { Link, Element, Events } from "react-scroll";

//Documento destinado a hacer prubas con funcionalidades para la pagina
// Sustraccion por superposicion
// React Scroll

export default function Pruebas() {
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
          className="p-2 bg-[#97C8EB] rounded-md cursor-pointer font-bold hover:scale-125 transition-transform "
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
      <Point />
    </div>
  );
}

function Point() {
  const [scroller, setScroller] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroller(window.scrollY);
      console.log(window.scrollY);
    });
  }, []);

  const style = {
    transform: `translateY(${scroller < 500 ? scroller : 500}px)`,
  };

  return (
    <div
      className="w-10 h-10 bg-[#3AAFB9] fixed top-12 left-[50%] right-[50%] mx-auto transition duration-500 "
      style={style}
    />
  );
}
