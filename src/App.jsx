import React, { useEffect, useState } from "react";

import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Pruebas from "./components/Pruebas";
import Particles from "./components/Particles";

import ScrollerProvider from "./context/Scroller";
import ResponsiveProvider from "./context/Responsive";

export default function App() {
  return (
    <ScrollerProvider>
      <ResponsiveProvider>
        <Navbar />
        <Main />
        <Content />
      </ResponsiveProvider>
    </ScrollerProvider>
  );
}
