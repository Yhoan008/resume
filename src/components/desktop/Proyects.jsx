import React, { useEffect, useState } from "react";

import multi from "./../../assets/prueba/multi.png";
import cont from "./../../assets/cont.png";
import scheme from "./../../assets/prueba/scheme.jpg";

import { cases } from "../json/cases";

export default function Proyects() {
  const [states, setStates] = useState([false, true, false]);

  return (
    <div
      className="w-full h-[100vh] bg-[#011c39] flex flex-row justify-around p-10  "
      id="explore"
    >
      <div className=" w-full h-[80%] flex p-10 gap-7 ">
        <Pages states={states} setStates={setStates} />
      </div>
      {cases.map((index, id) => {
        return (
          <div className=" w-full text-white p-10 basis-3/4 " key={id}>
            <h1 className=" font-bold text-2xl font-['Irish_Grover'] tracking-wider ">
              {index.title}
            </h1>
            <p className="pt-5 font-['Itim'] tracking-wide ">{index.about}</p>
          </div>
        );
      })}
    </div>
  );
}

function Pages({ states, setStates }) {
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
