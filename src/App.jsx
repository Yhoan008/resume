import React, { useEffect, useState } from "react";

import Pruebas from "./components/Pruebas";

import ScrollerProvider from "./context/Scroller";
import Mobile from "./components/mobile/Mobile";
import Desktop from "./components/desktop/Desktop";

export default function App() {
  const [respon, setRespond] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setRespond(window.innerWidth);
    });
  }, []);

  return (
    <ScrollerProvider>
      {window.innerWidth >= 768 ? <Desktop /> : <Mobile />}
    </ScrollerProvider>
  );
}
