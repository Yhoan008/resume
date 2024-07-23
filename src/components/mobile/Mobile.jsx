import React from "react";

import Navbar from "./Navbar";
import Home from "./Home";
import Content from "./Content";
import Intro from "./Intro";

export default function Mobile() {
  return (
    <>
      <Intro />
      <Navbar />
      <Home />
      <Content />
    </>
  );
}
