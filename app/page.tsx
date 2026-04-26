"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "@/components/hero";
import Stack from "@/components/stack";
import Navbar from "@/components/navbar";
import WindowHeader from "@/components/window-header";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Home() {
  const containerRef = useRef(null);
  const twmRef = useRef(null);

  useGSAP(
    () => {
      gsap.set(".hero-window-panel", {
        borderColor: "#a855f7",
        boxShadow: "0 0 15px rgba(168,85,247,0.2)",
      });
      gsap.set(".stack-window-panel, .projects-window-panel", {
        borderColor: "rgba(255,255,255,0.2)",
        boxShadow: "none",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: twmRef.current,
          start: "top top",
          end: "+=2000",
          scrub: 1,
          pin: true,
        },
      });

      // FASE 1: División Vertical (Izquierda al 50%, Derecha aparece al 50%)
      tl.to(".left-workspace", { width: "50%", ease: "none" }, 0)
        // El Hero crece para llenar su nueva zona izquierda (pasa del 60% al 100%)
        .to(".hero-window", { width: "100%", height: "100%", ease: "none" }, 0)
        // Pierde focus
        .to(
          ".hero-window-panel",
          { borderColor: "rgba(255,255,255,0.2)", boxShadow: "none" },
          0,
        )
        // Aparece la derecha (Stack)
        .to(".right-workspace", { width: "50%", opacity: 1, ease: "none" }, 0)
        // Gana focus
        .to(
          ".stack-window-panel",
          {
            borderColor: "#a855f7",
            boxShadow: "0 0 15px rgba(168,85,247,0.2)",
          },
          0,
        );

      // FASE 2: División Horizontal en la izquierda
      tl.to(".hero-window", { height: "calc(50% - 0.5rem)", ease: "none" }, 1)
        // Stack pierde focus
        .to(
          ".stack-window-panel",
          { borderColor: "rgba(255,255,255,0.2)", boxShadow: "none" },
          1,
        )
        // Aparecen Proyectos
        .to(
          ".projects-window",
          {
            height: "calc(50% - 0.5rem)",
            marginTop: "1rem",
            opacity: 1,
            ease: "none",
          },
          1,
        )
        // Proyectos ganan focus
        .to(
          ".projects-window-panel",
          {
            borderColor: "#a855f7",
            boxShadow: "0 0 15px rgba(168,85,247,0.2)",
          },
          1,
        );
    },
    { scope: containerRef },
  );

  return (
    <div
      className="bg-black text-white flex flex-col min-h-screen"
      ref={containerRef}
    >
      <Navbar />

      <div
        ref={twmRef}
        className="w-full h-screen pt-20 pb-6 px-6 md:px-10 max-w-[1800px] mx-auto flex flex-row overflow-hidden"
      >
        <div
          className="left-workspace flex flex-col items-center justify-center h-full pr-0 md:pr-2"
          style={{ width: "100%" }}
        >
          {/* TERMINAL HERO: Empieza pequeña (60% x 60%) */}
          <div
            className="hero-window flex items-center justify-center"
            style={{ width: "60%", height: "60%" }}
          >
            <Hero />
          </div>

          <div
            className="projects-window w-full overflow-hidden flex flex-col"
            style={{ height: "0%", opacity: 0, marginTop: "0" }}
          >
            <div className="architect-panel projects-window-panel w-full h-full flex flex-col transition-colors duration-300">
              <WindowHeader title="~/luis-valverde/projects" />

              <div className="p-6 font-mono text-sm overflow-y-auto">
                <div className="mb-4">
                  <span className="text-primary">&gt;</span>
                  <span className="text-white ml-2">
                    curl https://api.luisvalverde.com/featured
                  </span>
                </div>
                <div className="text-muted animate-pulse">
                  [====&gt;.....................] 20% Fetching architecture
                  data...
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="right-workspace h-full overflow-hidden pl-0 md:pl-2"
          style={{ width: "0%", opacity: 0 }}
        >
          <Stack />
        </div>
      </div>
    </div>
  );
}
