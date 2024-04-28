import React, { useEffect, useRef } from "react";

export default function Canvas() {
  const canvas = useRef(null);

  useEffect(() => {
    if (canvas.current.getContext) {
      const context = canvas.current.getContext("2d");

      context.arc(0,0,360,0,360,true)
    } else {
      window.alert("canvas no soportado");
    }
  });

  return (
    <div className="w-full h-[100vh] flex justify-center items-center ">
      <canvas
        width={500}
        height={300}
        ref={canvas}
        className="border-2 border-black"
      >
        {" "}
      </canvas>
    </div>
  );
}
