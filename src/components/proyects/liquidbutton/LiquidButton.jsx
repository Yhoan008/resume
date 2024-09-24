import React from "react";

import "./liquidbutton.css";

export default function LiquidButton({ title }) {
  return (
    <a className="container" >
      <span>{title}</span>
      <div class="liquid"></div>
    </a>
  );
}
