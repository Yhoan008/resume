import React, { useState } from "react";

export default function Pruebas() {
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(true);
  const [state3, setState3] = useState(false);

  return (
    <div className="w-full h-[100vh] flex justify-center items-center ">
      <div className=" w-[600px] h-[400px] bg-slate-600 p-5 gap-5 flex ">
        <div
          className="w-full h-full bg-black "
          style={{ flexBasis: state1 ? "100%" : "50%" }}
          onMouseEnter={() => {
            setState1(true);
            setState2(false);
            setState3(false);
          }}
        />
        <div
          className="w-full h-full bg-black "
          style={{ flexBasis: state2 ? "100%" : "50%" }}
          onMouseEnter={() => {
            setState1(false);
            setState2(true);
            setState3(false);
          }}
        />
        <div
          className="w-full h-full bg-black "
          style={{ flexBasis: state3 ? "100%" : "50%" }}
          onMouseEnter={() => {
            setState1(false);
            setState2(false);
            setState3(true);
          }}
        />
      </div>
    </div>
  );
}
