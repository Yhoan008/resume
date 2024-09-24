import React, { useEffect, useState } from "react";

import "./clock.css";

export default function Clock() {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const [date, setDate] = useState(new Date());
  const [hour, setHour] = useState(
    date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
  );
  const [minute, setMinute] = useState(
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
  );
  const [second, setSecond] = useState(
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
  );
  const [ap, setAp] = useState(hour >= 12 ? "pm" : "am");

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
      setHour(date.getHours() < 10 ? "0" + date.getHours() : date.getHours());
      setMinute(
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
      );
      setSecond(
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
      );
      setAp(hour >= 12 ? "pm" : "am");
      console.log(hour, minute, second);
    }, 1000);

    return () => clearInterval(interval);
  }, [date, hour, minute, second, ap]);

  return (
    <div className=" w-full h-auto py-10  ">
      <div className="contenedor">
        <div className="circle">
          <div className="numbers">
            {num.map((index, id) => {
              return (
                <span
                  key={id}
                  style={{ transform: `rotate(calc(30deg*${index})` }}
                >
                  <b style={{ transform: `rotate(calc(-30deg*${index})` }}>
                    {index}
                  </b>
                </span>
              );
            })}
          </div>

          <div className="ring"></div>
          <div className="ring"></div>
          <div className="ring"></div>

          <div
            className="point point_hh"
            id="circle_hh"
            style={{ transform: `rotate(${hour * 30}deg)` }}
          ></div>
          <div
            className="point point_mm"
            id="circle_mm"
            style={{ transform: `rotate(${minute * 6}deg)` }}
          ></div>
          <div
            className="point point_ss"
            id="circle_ss"
            style={{ transform: `rotate(${second * 6}deg)` }}
          ></div>
        </div>
        <div className="clock">
          <div className="hour">
            <div className="digits hour_hh" id="hh">
              {hour}
            </div>
            :
            <div className="digits hour_mm" id="mm">
              {minute}
            </div>
            :
            <div className="digits hour_ss" id="ss">
              {second}
            </div>
            <div className="ampm" id="hour_ampm">
              {ap}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
