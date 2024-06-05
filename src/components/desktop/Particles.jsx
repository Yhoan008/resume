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
        for (let i = 0; i <= canvas.current.width / 10; i++) {
          let x = Math.random() * 500;
          let y = Math.random() * 300;
          let directionX = Math.random() * 5 - 2;
          let directionY = Math.random() * 5 - 2;
          let size = Math.random() * (5 - 2) + 2;
          let color = "#011A37";

          particles.push(
            new Particle(x, y, directionX, directionY, size, color)
          );
        }
      }

      function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
        for (let i = 0; i < particles.length; i++) {
          if (particles[i].x) particles[i].update();
          for (let j = 0; j < particles.length; j++) {
            let distanceX = Math.abs(particles[i].x - particles[j].x);
            let distanceY = Math.abs(particles[i].y - particles[j].y);
            let distance = Math.sqrt(
              distanceX * distanceX + distanceY * distanceY
            );
            if (distance < 80) {
              ctx.beginPath();
              ctx.strokeStyle = "#011A37";
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
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
    <div className="w-auto h-auto absolute right-0 top-0 z-0 ">
      <canvas
        width={(window.innerWidth * 2) / 3}
        height={window.innerHeight / 2}
        ref={canvas}
        className=" "
      ></canvas>
    </div>
  );
}
