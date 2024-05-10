import React, { useEffect, useRef } from "react";

//Sin funcionamiento es mejor intentarlo en un js

export default function Particles() {
  const canvas = useRef();

  useEffect(() => {
    const ctx = canvas.current.getContext("2d");
    if (canvas.current.getContext) {
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
          if (
            this.x + this.size > canvas.current.width ||
            this.x - this.size < 0
          ) {
            this.directionX = -this.directionX;
          }
          if (
            this.y + this.size > canvas.current.height ||
            this.y - this.size < 0
          ) {
            this.directionY = -this.directionY;
          }

          this.x += this.directionX;
          this.y += this.directionY;

          //Dibujar particulas
          this.draw();
        }
      }

      let particles = [];

      function init() {
        for (let i = 0; i <= 2; i++) {
          let x = Math.random() * 500;
          let y = Math.random() * 300;
          let directionX = Math.random() * 5 - 2;
          let directionY = Math.random() * 5 - 2;
          let size = 10;
          let color = "#8C5523";

          particles.push(
            new Particle(x, y, directionX, directionY, size, color)
          );
        }
      }

      function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
        for (let i = 0; i < particles.length; i++) {
          particles[i].update();
        }
      }

      init();
      requestAnimationFrame(animate);

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
