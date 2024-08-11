import React from "react";

import Navbar from "./Navbar";
import Home from "./Home";
import Content from "./Content";
import Intro from "./Intro";
import Cockie from "../Cockie";

export default function Mobile() {
  return (
    <>
      <Intro />
      <Cockie />
      <Navbar />
      <Home />
      <Content />
    </>
  );
}
