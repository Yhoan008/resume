import React, { useEffect } from "react";

import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Proyects from "./Proyects";
import Future from "./Future";
import Footer from "./Footer";
import Cockie from "../Cockie";

export default function Desktop() {
  useEffect(() => {
    document.body.style.overflowY = "visible";
  });

  return (
    <>
      <Navbar />
      <Cockie />
      <Home />
      <About />
      <Proyects />
      <Future />
      <Footer />
    </>
  );
}
