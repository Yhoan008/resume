import React, { useEffect, useRef } from "react";

import { futures } from "./../json/futures";

export default function Scroller() {
  const containerScroll = useRef(null);

  let fase;

  useEffect(() => {
    fase = containerScroll.current.scrollWidth / 3;
  });

  return (
    <div
      ref={containerScroll}
      className="w-full flex flex-row overflow-x-scroll gap-5 p-8 scroll-smooth "
      onScroll={() => {
        setTimeout(() => {
          if (
            containerScroll.current.scrollLeft <
            containerScroll.current.scrollWidth / 8
          ) {
            containerScroll.current.scrollLeft = 0;
          } else if (
            containerScroll.current.scrollLeft >=
              containerScroll.current.scrollWidth / 8 &&
            containerScroll.current.scrollLeft <=
              containerScroll.current.scrollWidth / 2.1
          ) {
            containerScroll.current.scrollLeft = fase - fase / 15;
          } else if (
            containerScroll.current.scrollLeft >
            containerScroll.current.scrollWidth / 2.1
          ) {
            containerScroll.current.scrollLeft = fase * 2;
          }
        }, 500);
      }}
    >
      <Tech containerScroll={containerScroll} />
    </div>
  );
}

function Tech({ containerScroll }) {
  let fase;

  useEffect(() => {
    fase = containerScroll.current.scrollWidth / 3;
  }, []);

  return futures.map((index, id) => {
    return (
      <div
        className=" min-w-[80vw] bg-gradient-to-b from-[#3E358B] to-[#1E3D4A] p-4 rounded-2xl text-center text-white "
        onClick={() => {
          containerScroll.current.scrollLeft =
            id == 0 ? 0 : id == 1 ? fase - fase / 15 : fase * 2;
        }}
        key={id}
      >
        <h1 className=" font-['Irish_Grover'] font-bold tracking-widest ">
          {index.title}
        </h1>
        <div className="w-full ">
          <img src={index.image} alt="React Native" />
        </div>
        <p className="font-['Itim']">{index.about}</p>
      </div>
    );
  });
}
