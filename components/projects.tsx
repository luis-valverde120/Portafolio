"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import WindowHeader from "./window-header";

interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  link?: string;
}

const projectsData: Project[] = [
  {
    id: "proj_01",
    name: "Wardrobe AI",
    description: "AI-powered application for clothing digitalization and smart outfit suggestions.",
    techStack: ["Flutter", "Riverpod", "Gemini API", "Supabase"],
  },
  {
    id: "proj_02",
    name: "Netlife Scraper",
    description: "Automated data extraction pipeline for ISP competitor analysis using Playwright and Colab.",
    techStack: ["Python", "Playwright", "Jupyter", "Pandas"],
  },
  {
    id: "proj_03",
    name: "Secure Backend Architecture",
    description: "Scalable backend system designed with modern security practices and high availability.",
    techStack: ["Node.js", "Express", "TypeScript", "PostgreSQL"],
  },
];

export default function Projects() {
  const [loadingStep, setLoadingStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const projectsListRef = useRef<HTMLDivElement>(null);

  // Simulación de carga (Fetching) más fluida
  useEffect(() => {
    const timers = [
      setTimeout(() => setLoadingStep(1), 800),   // Connecting
      setTimeout(() => setLoadingStep(2), 1800),  // Connected, waiting
      setTimeout(() => {
        setLoadingStep(3); // Fetching data
        // Animar la barra de progreso fluidamente
        let currentProgress = 0;
        const interval = setInterval(() => {
          currentProgress += Math.floor(Math.random() * 5) + 1;
          if (currentProgress > 99) {
            currentProgress = 100;
            clearInterval(interval);
            setTimeout(() => setLoadingStep(5), 500); // Done
          } else if (currentProgress > 60 && loadingStep < 4) {
             setLoadingStep(4); // Decrypting
          }
          setProgress(currentProgress);
        }, 50);
      }, 2500),
    ];

    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  // Animación de los proyectos cuando terminan de cargar
  useGSAP(
    () => {
      if (loadingStep === 5 && projectsListRef.current) {
        gsap.from(".project-item", {
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.15,
          ease: "power2.out",
        });
      }
    },
    { scope: containerRef, dependencies: [loadingStep] }
  );

  return (
    <div className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl projects-window-panel w-full h-full flex flex-col relative" ref={containerRef}>
      <WindowHeader title="~/luis-valverde/projects" />
      
      <div className="p-6 font-mono text-sm overflow-y-auto flex-1 flex flex-col">
        {/* Comando Inicial */}
        <div className="mb-4">
          <span className="text-[#a855f7]">&gt;</span>
          <span className="text-white ml-2">
            curl https://api.luisvalverde.com/featured
          </span>
        </div>

        {/* Pantalla de Carga Simulada */}
        {loadingStep < 5 && (
          <div className="flex-1 flex flex-col font-mono text-xs md:text-sm text-muted space-y-2 mt-4">
            {loadingStep >= 0 && <div><span className="text-[#a855f7]">[*]</span> Resolving host api.luisvalverde.com... 104.21.43.11</div>}
            {loadingStep >= 1 && <div><span className="text-[#a855f7]">[*]</span> Connecting to 104.21.43.11:443... connected.</div>}
            {loadingStep >= 2 && <div><span className="text-[#a855f7]">[*]</span> HTTP request sent, awaiting response... <span className="text-green-400">200 OK</span></div>}
            {loadingStep >= 3 && (
              <div>
                <span className="text-[#a855f7]">[+]</span> {loadingStep === 3 ? "Fetching architecture data..." : "Decrypting payloads..."}<br />
                <span className="text-white">
                  [{'='.repeat(Math.floor(progress / 5))}{progress < 100 ? '>' : ''}{'.'.repeat(20 - Math.floor(progress / 5))}] {progress}%
                </span>
              </div>
            )}
          </div>
        )}

        {/* Listado de Proyectos */}
        {loadingStep === 5 && (
          <div ref={projectsListRef} className="flex flex-col gap-6 w-full">
            <div className="text-green-400 mb-2">200 OK - Data retrieved successfully.</div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projectsData.map((project) => (
                <div 
                  key={project.id} 
                  className="project-item border border-white/10 p-4 hover:border-[#a855f7]/50 hover:bg-white/5 transition-all group flex flex-col"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-[#a855f7] font-bold text-base group-hover:text-white transition-colors">
                      {project.name}
                    </h3>
                    <span className="text-xs text-muted border border-white/20 px-2 py-0.5">
                      {project.id}
                    </span>
                  </div>
                  <p className="text-muted text-xs mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="text-[10px] bg-white/10 px-2 py-1 text-white">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.link || "#"} className="mt-auto text-[#a855f7] border border-[#a855f7]/30 hover:bg-[#a855f7]/10 px-4 py-2 text-center transition-colors text-xs font-bold tracking-widest uppercase">
                    [ View Details ]
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
