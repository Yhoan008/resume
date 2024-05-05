import React from "react";

export default function Content({ responsive }) {
  return (
    <div
      className="bg-red-800 w-full  "
      style={{
        height: `${window.scrollY < 120 ? 170 - scroller : 50}px`,
      }}
    >
      hola mundo
      <div className=""></div>
    </div>
  );
}
