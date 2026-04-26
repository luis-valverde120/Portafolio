"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function GeometricBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Rotación continua
      gsap.to(".rotate-slow", {
        rotation: 360,
        duration: "random(40, 80)",
        repeat: -1,
        ease: "none",
      });

      gsap.to(".rotate-reverse", {
        rotation: -360,
        duration: "random(50, 90)",
        repeat: -1,
        ease: "none",
      });

      // Flotación de figuras
      gsap.utils.toArray(".float").forEach((shape: any) => {
        gsap.to(shape, {
          y: "random(-40, 40)",
          x: "random(-40, 40)",
          duration: "random(10, 20)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // Plus markers girando suavemente (giros continuos)
      gsap.to(".plus-marker", {
        rotation: "+=180",
        duration: "random(15, 25)",
        repeat: -1,
        ease: "none",
      });

      // Pulsos en los nodos de conexión
      gsap.to(".node", {
        scale: 1.8,
        opacity: 1,
        duration: "random(1.5, 3)",
        stagger: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Estrellas fugaces (Shooting Stars veloces pero más esporádicas)
      gsap.utils.toArray(".shooting-star").forEach((star: any) => {
        gsap.set(star, {
          x: () => -300,
          y: () => gsap.utils.random(-200, window.innerHeight / 2),
          opacity: 0,
        });

        gsap.to(star, {
          x: () => window.innerWidth + 300,
          y: () => "+=" + (window.innerWidth + 600),
          opacity: 1,
          duration: "random(0.4, 0.8)",
          delay: "random(0, 4)",
          repeat: -1,
          repeatDelay: gsap.utils.random(4, 8), // Aparecen cada 4 a 8 segundos
          ease: "power1.in",
          onRepeat: () => {
            gsap.set(star, {
              x: -300,
              y: gsap.utils.random(-200, window.innerHeight / 2),
              opacity: 0,
            });
          },
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-80 bg-black"
    >
      {/* Grid de Puntos Base */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Estrellas fugaces (Líneas esporádicas) */}
      <div className="shooting-star absolute w-[250px] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent rotate-45 blur-[0.5px] opacity-70" />
      <div className="shooting-star absolute w-[150px] h-[2px] bg-gradient-to-r from-transparent via-white to-transparent rotate-45 blur-[1px] opacity-90" />

      {/* Círculos y Cuadrados (Arquitectura Pura - Más claros) */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-40">
        <div className="absolute w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] rounded-full border border-white/30 rotate-slow" />
        <div className="absolute w-[60vw] h-[60vw] md:w-[45vw] md:h-[45vw] rounded-full border border-white-[0.15] border-dashed rotate-reverse" />
        <div className="absolute w-[40vw] h-[40vw] md:w-[30vw] md:h-[30vw] border border-white/20 rotate-slow" />
      </div>

      {/* Hexágonos SVG Reponsivos */}
      <div className="float absolute top-[15%] right-[20%] w-20 h-20 opacity-50 rotate-slow">
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          <polygon
            points="50,0 100,25 100,75 50,100 0,75 0,25"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="float absolute bottom-[20%] left-[25%] w-28 h-28 opacity-40 rotate-reverse">
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          <polygon
            points="50,0 100,25 100,75 50,100 0,75 0,25"
            fill="none"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="4,4"
          />
        </svg>
      </div>

      {/* Líneas, Vectores y Flechas (SVG) - Más claros */}
      <svg
        className="absolute inset-0 w-full h-full opacity-60"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Líneas de conexión */}
        <line
          x1="10%"
          y1="20%"
          x2="25%"
          y2="50%"
          stroke="white"
          strokeWidth="0.8"
          strokeDasharray="4,4"
          className="float"
        />
        <line
          x1="80%"
          y1="15%"
          x2="55%"
          y2="40%"
          stroke="white"
          strokeWidth="0.8"
          className="float"
        />
        <line
          x1="30%"
          y1="85%"
          x2="60%"
          y2="70%"
          stroke="white"
          strokeWidth="0.8"
          strokeDasharray="2,6"
          className="float"
        />

        {/* Flecha Izquierda-Derecha */}
        <g className="float">
          <line
            x1="15%"
            y1="70%"
            x2="25%"
            y2="60%"
            stroke="white"
            strokeWidth="1.5"
          />
          <polygon
            points="25%,60% 22%,63% 26%,65%"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
        </g>

        {/* Flecha Derecha-Izquierda */}
        <g className="float">
          <line
            x1="85%"
            y1="80%"
            x2="70%"
            y2="80%"
            stroke="white"
            strokeWidth="1.5"
          />
          <polygon
            points="70%,80% 73%,77% 73%,83%"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
        </g>

        {/* Nodos de intersección */}
        <circle cx="25%" cy="50%" r="2.5" fill="white" className="node" />
        <circle
          cx="55%"
          cy="40%"
          r="3.5"
          fill="transparent"
          stroke="white"
          strokeWidth="1.5"
        />
        <circle cx="60%" cy="70%" r="2" fill="white" className="node" />
      </svg>

      {/* Plus (+) Markers estilo planos - Animados y más claros */}
      <div className="plus-marker float absolute top-[15%] left-[15%] text-white/60 text-3xl font-light">
        +
      </div>
      <div className="plus-marker float absolute top-[25%] left-[45%] text-white/50 text-2xl font-light">
        +
      </div>
      <div className="plus-marker float absolute bottom-[25%] right-[10%] text-white/60 text-3xl font-light">
        +
      </div>
      <div className="plus-marker float absolute bottom-[40%] right-[35%] text-white/40 text-xl font-light">
        +
      </div>
      <div className="plus-marker float absolute top-[50%] right-[15%] text-white/50 text-3xl font-light">
        +
      </div>
      <div className="plus-marker float absolute bottom-[15%] left-[20%] text-white/50 text-3xl font-light">
        +
      </div>
      <div className="plus-marker float absolute top-[70%] left-[40%] text-white/40 text-xl font-light">
        +
      </div>
      <div className="plus-marker float absolute top-[10%] right-[40%] text-white/30 text-2xl font-light">
        +
      </div>
      <div className="plus-marker float absolute bottom-[10%] left-[45%] text-white/40 text-2xl font-light">
        +
      </div>

      {/* Cuadros pequeños adicionales */}
      <div className="float absolute top-[30%] left-[40%] w-6 h-6 border border-white/50 rotate-45" />
      <div className="float absolute bottom-[40%] right-[30%] w-8 h-8 border border-white/40" />
    </div>
  );
}
