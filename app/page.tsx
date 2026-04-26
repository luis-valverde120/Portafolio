"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

import Hero from "@/components/hero";
import Stack from "@/components/stack";
import Navbar from "@/components/navbar";
import WindowHeader from "@/components/window-header";
import Projects from "@/components/projects";
import About from "@/components/about";
import Contact from "@/components/contact";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const twmRef = useRef<HTMLElement>(null);
  const [activePhase, setActivePhase] = useState(0);

  const handleNavigate = (index: number) => {
    const times = [0, 1, 2.5, 4, 5.5];
    const targetScroll = times[index] * 1000;
    
    window.scrollTo({
      top: (twmRef.current?.offsetTop || 0) + targetScroll,
      behavior: "smooth"
    });
  };

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        // Estado inicial de los bordes
        gsap.set(".hero-window-panel", {
          borderColor: "#a855f7",
          boxShadow: "0 0 15px rgba(168,85,247,0.2)",
          borderWidth: "1px",
        });
        gsap.set(".stack-window-panel, .projects-window-panel", {
          borderColor: "rgba(255,255,255,0.2)",
          boxShadow: "none",
          borderWidth: "1px",
        });

        // Estado inicial de las ventanas (Posición)
        gsap.set(".right-workspace", { autoAlpha: 0, width: "0%" });
        gsap.set(".projects-window", { 
          autoAlpha: 0, 
          width: "calc(50% - 0.5rem)", 
          height: "calc(50% - 0.5rem)",
          left: "0%",
          top: "calc(50% + 0.5rem)",
          xPercent: 0,
          yPercent: 0
        });
        gsap.set(".about-window", { 
          autoAlpha: 0, 
          scale: 0.9, 
          y: 50 
        });
        gsap.set(".contact-window", { 
          autoAlpha: 0, 
          scale: 0.9, 
          y: 50 
        });

        // Estado inicial de los bordes para que GSAP pueda interpolar correctamente
        gsap.set(".hero-window-panel", {
          borderColor: "#a855f7",
          boxShadow: "0 0 15px rgba(168,85,247,0.2)"
        });
        gsap.set(".stack-window-panel, .projects-window-panel, .about-window-panel, .contact-window-panel", {
          borderColor: "rgba(255,255,255,0.2)",
          boxShadow: "none"
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: twmRef.current,
            start: "top top",
            end: "+=5500",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              const time = self.progress * 5.5;
              if (time < 0.5) setActivePhase(0);
              else if (time < 1.75) setActivePhase(1);
              else if (time < 3.25) setActivePhase(2);
              else if (time < 4.75) setActivePhase(3);
              else setActivePhase(4);
            }
          },
        });

        // FASE 1
        tl.to(".left-workspace", { width: "50%", ease: "power2.inOut", duration: 1 }, 0)
          .to(".hero-window", { width: "100%", height: "calc(50% - 0.5rem)", marginTop: 0, marginBottom: "auto", ease: "power2.inOut", duration: 1 }, 0)
          .to(".hero-window-panel", { borderColor: "rgba(255,255,255,0.2)", boxShadow: "none", duration: 1 }, 0)
          .to(".right-workspace", { width: "50%", autoAlpha: 1, ease: "power2.inOut", duration: 1 }, 0)
          .to(".stack-window-panel", { borderColor: "#a855f7", boxShadow: "0 0 15px rgba(168,85,247,0.2)", duration: 1 }, 0)
          .to(".projects-window", { autoAlpha: 1, ease: "power2.inOut", duration: 1 }, 0);

        // FASE 2
        tl.to(".hero-window", { height: "100%", ease: "power2.inOut", duration: 1 }, 1.5)
          .to(".stack-window-panel", { borderColor: "rgba(255,255,255,0.2)", boxShadow: "none", duration: 1 }, 1.5)
          .to(".projects-window", { left: "50%", top: "50%", xPercent: -50, yPercent: -50, width: "60%", height: "80%", ease: "power2.inOut", duration: 1 }, 1.5)
          .to(".projects-window-panel", { borderColor: "#a855f7", boxShadow: "0 0 15px rgba(168,85,247,0.2)", duration: 1 }, 1.5);

        // FASE 3
        tl.to(".hero-window", { height: "calc(50% - 0.5rem)", ease: "power2.inOut", duration: 1 }, 3)
          .to(".projects-window", { left: "0%", top: "calc(50% + 0.5rem)", xPercent: 0, yPercent: 0, width: "calc(50% - 0.5rem)", height: "calc(50% - 0.5rem)", autoAlpha: 1, ease: "power2.inOut", duration: 1 }, 3)
          .to(".about-window", { autoAlpha: 1, scale: 1, y: 0, ease: "back.out(1.7)", duration: 1 }, 3)
          .to(".projects-window-panel", { borderColor: "rgba(255,255,255,0.2)", boxShadow: "none", duration: 1 }, 3)
          .to(".about-window-panel", { borderColor: "#a855f7", boxShadow: "0 0 15px rgba(168,85,247,0.2)", duration: 1 }, 3);

        // FASE 4
        tl.to(".about-window", { autoAlpha: 0, scale: 0.9, y: -50, ease: "power2.inOut", duration: 1 }, 4.5)
          .to(".hero-window, .right-workspace, .projects-window", { autoAlpha: 0, scale: 0.8, ease: "power2.inOut", duration: 1 }, 4.5)
          .to(".contact-window", { autoAlpha: 1, scale: 1, y: 0, ease: "back.out(1.7)", duration: 1 }, 4.5)
          .to(".about-window-panel", { borderColor: "rgba(255,255,255,0.2)", boxShadow: "none", duration: 1 }, 4.5)
          .to(".contact-window-panel", { borderColor: "#a855f7", boxShadow: "0 0 15px rgba(168,85,247,0.2)", duration: 1 }, 4.5);
      });

      // Reset para móviles (scroll normal hacia abajo, layout vertical)
      mm.add("(max-width: 767px)", () => {
        gsap.set(".hero-window-panel, .stack-window-panel, .projects-window-panel, .about-window-panel, .contact-window-panel", {
          clearProps: "all"
        });
        gsap.set([".left-workspace", ".hero-window", ".right-workspace", ".projects-window", ".about-window", ".contact-window"], {
          clearProps: "all",
          autoAlpha: 1
        });
        
        // Efecto parallax simple o reveal si se desea en móvil
        const sections = [".right-workspace", ".projects-window", ".about-window", ".contact-window"];
        sections.forEach((sec) => {
          gsap.from(sec, {
            scrollTrigger: {
              trigger: sec,
              start: "top 85%",
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out"
          });
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef, dependencies: [] },
  );

  return (
    <div className="text-white" ref={containerRef}>
      <Navbar activeSection={activePhase} onNavigate={handleNavigate} />

      {/* 
        TWM Section — un div de bloque normal (no flex/grid parent). 
        ScrollTrigger necesita que este elemento sea un bloque directo en el 
        flujo del documento para calcular bien el pin-spacer.
      */}
      <section
        ref={twmRef}
        className="w-full h-auto md:h-screen min-h-screen relative"
        style={{ padding: "5rem 1.5rem 1.5rem" }}
      >
        <div className="h-full max-w-[1800px] mx-auto flex flex-col md:flex-row relative gap-8 md:gap-0 pb-10 md:pb-0">
          
          {/* Columna izquierda: Hero */}
          <div
            className="left-workspace flex flex-col h-auto md:h-full pr-0 md:pr-2 w-full md:w-[100%]"
          >
            {/* Terminal Hero */}
            <div
              className="hero-window flex items-center justify-center overflow-hidden w-full h-auto min-h-[60vh] md:min-h-0 md:w-[70%] md:h-[65%] md:mx-auto md:mt-[8vh] md:mb-auto relative md:static mb-8 md:mb-0"
            >
              <Hero onNavigate={handleNavigate} />
            </div>
          </div>

          {/* Columna derecha: Stack */}
          <div className="right-workspace h-auto min-h-[50vh] md:h-full overflow-hidden pl-0 md:pl-2 w-full md:w-auto relative md:static mb-8 md:mb-0">
            <Stack />
          </div>

          {/* Terminal Projects */}
          <div className="projects-window w-full min-h-[60vh] md:min-h-0 md:h-auto relative md:absolute md:z-40 flex flex-col shadow-2xl shadow-primary/20 mb-8 md:mb-0">
            <Projects />
          </div>

          {/* Terminal About Me */}
          <div className="about-window w-full relative md:absolute md:inset-0 md:m-auto md:w-[85%] lg:w-[70%] xl:w-[60%] min-h-[80vh] md:h-[85%] md:z-50 flex flex-col shadow-2xl shadow-primary/30 mb-8 md:mb-0">
            <About />
          </div>

          {/* Terminal Contacto */}
          <div className="contact-window w-full relative md:absolute md:inset-0 md:m-auto md:w-[85%] lg:w-[60%] xl:w-[50%] min-h-[70vh] md:h-[75%] md:z-50 flex flex-col shadow-2xl shadow-primary/30">
            <Contact />
          </div>
        </div>
      </section>
    </div>
  );
}
