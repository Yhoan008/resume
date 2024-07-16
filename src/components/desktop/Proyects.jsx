import React, { useEffect, useState } from "react";

import multi from "./../../assets/prueba/multi.png";
import finals from "./../../assets/prueba/finals.png";
import scheme from "./../../assets/prueba/scheme.jpg";

export default function Proyects() {
  const [states, setStates] = useState([false, true, false]);

  return (
    <div className="w-full h-[100vh] bg-[#011c39] flex flex-row justify-around p-10  ">
      <div className=" w-full h-[80%] flex p-10 gap-7 ">
        <Pages states={states} setStates={setStates} />
      </div>
      <div className=" w-full text-white p-10 basis-3/4 ">
        <h1 className=" font-bold text-2xl font-['Irish_Grover'] tracking-wider ">
          Pagina Web de Ejemplo
        </h1>
        <p className="pt-5 font-['Itim'] tracking-wide ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus,
          blanditiis expedita dicta earum, officiis eos ipsa iure sapiente
          soluta laboriosam delectus aliquid quae molestias! Nostrum temporibus
          officiis voluptate perferendis rerum itaque illum? A praesentium,
          velit placeat autem cum, sed eveniet maiores voluptates totam nihil
          ipsum facere provident error beatae ipsa recusandae sint, architecto
          ab incidunt dicta impedit? Illum dicta ipsam facere fugiat? Autem
          explicabo maxime ipsam amet. Debitis, amet repudiandae hic mollitia
          assumenda voluptatem, nulla facere, totam eos veritatis quod dolorem
          veniam obcaecati quo molestias est odit
        </p>
      </div>
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
        src={id == 0 ? multi : id == 1 ? finals : scheme}
        alt="Photo page"
        className="w-full h-full object-cover "
      />
    </div>
  ));
}
