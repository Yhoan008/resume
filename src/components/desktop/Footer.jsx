import React from "react";

import mail from "./../../assets/mail.png";
import linkedin from "./../../assets/linkedin.png";
import git from "./../../assets/git.png";
import wha from "./../../assets/wha.png";
import logo from "./../../assets/Logo4.png";

export default function Footer() {
  return (
    <div className="w-full bg-[#291647] p-5 flex justify-between items-end text-white ">
      <div>
        <h1>©2024 Yhoan Mateo Moreno</h1>
      </div>
      <div className="flex flex-col justify-around items-center gap-6 " >
        <div className="w-[100px]">
          <img
            src={logo}
            alt="Dragon icon"
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-center " >  
          Gracias por visitar mi portafolio, tu interés significa mucho para mi.
        </h1>
      </div>
      <div className="flex flex-row gap-4 ">
        <a href="#" className="w-9 h-10">
          <img src={mail} alt="icon Mail" className="w-full" />
        </a>
        <a href="#" className="w-9 h-10">
          <img src={git} alt="icon Git" className="w-full" />
        </a>
        <a href="#" className="w-9 h-10">
          <img src={wha} alt="icon WahtsApp" className="w-full" />
        </a>
        <a href="#" className="w-9 h-10">
          <img src={linkedin} alt="icon Linkedin" className="w-full" />
        </a>
      </div>
    </div>
  );
}
