import React from "react";

import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Proyects from "./Proyects";
import Future from "./Future";
import Footer from "./Footer";

export default function Desktop() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Proyects />
      <Future />
      <Footer/>
    </>
  );
}
