import React, { useEffect, useState } from "react";

import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Pruebas from "./components/Pruebas";
import Particles from "./components/Particles";

export default function App() {
  const [responsive, setResponsive] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setResponsive(window.innerWidth);
    });
  });

  return (
    <main className="w-full h-[200vh] ">
      <Navbar responsive={responsive} />
      <Main responsive={responsive} />
      <div>content</div>
    </main>
  );
}
