import React, { useEffect, useState } from "react";

import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Pruebas from "./components/Pruebas";
import Particles from "./components/Particles";

export default function App() {
  const [responsive, setResponsive] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setResponsive(window.innerWidth);
    });
  });

  return <Pruebas />;

  /*<main className="w-full h-[200vh] bg-[#2A3145]  ">
      <Navbar responsive={responsive} />
      <Main responsive={responsive} />
      <Content responsive={responsive} />
  </main>*/
}
