import React, { useEffect } from "react";

import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Proyects from "./Proyects";
import Future from "./Future";
import Footer from "./Footer";

export default function Desktop() {
  useEffect(() => {
    document.body.style.overflowY = "visible";
  });

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Proyects />
      <Future />
      <Footer />
    </>
  );
}
