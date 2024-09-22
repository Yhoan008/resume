import React, { useEffect, useState } from "react";

import close from "./../assets/close.png";
import speak from "./../assets/speak.png";

export default function Cockie() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 5000);
    setTimeout(() => {
      setActive(false);
    }, 40000);
  }, []);

  return (
    <div
      className="fixed bottom-4 z-50 w-[90%] h-[50px] bg-[#759FBC] left-0 right-0 m-auto rounded-lg flex justify-between items-center px-5 transition "
      style={{
        transform: active ? "" : "translateY(70px)",
        filter: active ? "" : "opacity(0.2)",
      }}
    >
      <div
        className="absolute -top-1 -right-1 bg-slate-500 rounded-full w-5 h-5 flex justify-center items-center cursor-pointer "
        onClick={() => {
          setActive(false);
        }}
      >
        <img src={close} alt="Cerrar" className=" w-[60%] " />
      </div>
      <h1
        className={`font-[´Itim´] font-bold  ${
          window.innerWidth < 768 ? "text-sm" : "text-lg"
        }`}
      >
        Para una mejor experiencia, por favor, activa el sonido.
      </h1>
      <div className="h-[80%] ">
        <img
          src={speak}
          alt="Speaker"
          className="h-full w-auto object-contain "
        />
      </div>
    </div>
  );
}
