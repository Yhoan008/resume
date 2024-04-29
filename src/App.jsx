import React from "react";

import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Pruebas from "./components/Pruebas";
import Particles from "./components/Particles";

export default function App() {
  return (
    <main className="w-full h-[200vh] ">
      <Navbar />
      <Main />
      <div>content</div>
    </main>
  );
}
