import React from "react";

import music from "./../assets/musicplay.png";

export default function Navbar() {
  return <NavDesktop />;
}

function NavDesktop() {
  return (
    <div className="w-full h-10 py bg-black fixed top-0 z-40 ">
      <div className="w-[50px] h-[50px] rounded-full bg-[#E9995E] absolute z-20 flex items-center justify-center ">
        <img src={music} alt="Music Play" className="w-[80%] h-[80%] " />
      </div>
    </div>
  );
}

function NavMobile() {
  return (
    <div className="w-[25px] h-auto  m-[15px] absolute top-0 left-0 flex flex-col justify-around gap-1 ">
      <div className=" bg-[#E9D985] w-[70%] h-[4px] rounded-3xl self-end " />
      <div className=" bg-[#E9D985] w-[100%] h-[4px] rounded-3xl" />
      <div className=" bg-[#E9D985] w-[60%] h-[4px] rounded-3xl" />
    </div>
  );
}
