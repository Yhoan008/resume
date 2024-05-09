import React, { useEffect, useState } from "react";

import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Pruebas from "./components/Pruebas";
import Particles from "./components/Particles";

import ScrollerProvider from "./context/Scroller";

export default function App() {
  const [responsive, setResponsive] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setResponsive(window.innerWidth);
    });
  }, []);

  return (
    <ScrollerProvider>
      <Navbar responsive={responsive} />
      <Main responsive={responsive} />
      <Content responsive={responsive} />
    </ScrollerProvider>
  );
}
