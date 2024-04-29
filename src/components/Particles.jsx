import React, { useEffect, useRef, useState } from "react";


//Sin funcionamiento es mejor intentarlo en un js 


export default function Particles() {
  const canvas = useRef(null);

  const [horizon, setHorizon] = useState(10);
  const [vertic, setVertic] = useState(10);

  useEffect(() => {
    if (canvas.current.getContext) {
      const ctx = canvas.current.getContext("2d");

      class Particle {
        constructor(x, y, directionX, directionY, size, color) {
          this.x = x;
          this.y = y;
          this.directionX = directionX;
          this.directionY = directionY;
          this.size = size;
          this.color = color;
        }

        draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = this.color; //// ACA HACE FALTA EL COLOR
          ctx.fill();
        }

        update() {
          if (this.x > canvas.width || this.x < 0) {
            this.directionX = -this.directionX;
          }
          if (this.y > canvas.height || this.y < 0) {
            this.directionY = -this.directionY;
          }

          this.x += this.directionX;
          this.y += this.directionY;

          //Dibujar particulas
          this.draw();
        }
      }

      let particlesArray = [];
      function init() {
        for (let i = 0; i < 20; i++) {
          let size = 20;
          let x = 10;
          let y = 10;
          let directionX = Math.random() * 5 - 2;
          let directionY = Math.random() * 5 - 2;
          let color = "#8C5523";

          particlesArray.push(
            new Particle(x, y, directionX, directionY, size, color)
          );
          particlesArray[2].draw()
        }
      }

      function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i <= particlesArray; i++) {
          particlesArray[i].update();
        }
      }

      init();

      return () => cancelAnimationFrame(animate);
    } else {
      window.alert("canvas no soportado");
    }
  }, []);

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
