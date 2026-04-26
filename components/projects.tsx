"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";
import WindowHeader from "./window-header";

interface Project {
  id: string;
  name: string;
  slug: string;
  description: string;
  techStack: string[];
}

const projectsData: Project[] = [
  {
    id: "proj_01",
    name: "Wardrobe AI",
    slug: "wardrobe-ai",
    description: "AI-powered application for clothing digitalization and smart outfit suggestions.",
    techStack: ["Flutter", "Riverpod", "Gemini API", "Supabase"],
  },
  {
    id: "proj_02",
    name: "T-World",
    slug: "t-world",
    description: "A comprehensive e-commerce platform and community hub for tech enthusiasts.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
  },
  {
    id: "proj_03",
    name: "Zyrex",
    slug: "zyrex",
    description: "High-performance data processing engine built to handle massive concurrent event streams.",
    techStack: ["Go", "Kafka", "PostgreSQL", "Redis"],
  },
  {
    id: "proj_04",
    name: "Organigrama",
    slug: "organigrama",
    description: "Interactive organizational chart generator and management tool for enterprise HR departments.",
    techStack: ["React", "D3.js", "Node.js", "MongoDB"],
  },
  {
    id: "proj_05",
    name: "Netlife Scraper",
    slug: "netlife-challenge",
    description: "Automated data extraction pipeline for ISP competitor analysis using Playwright and Colab.",
    techStack: ["Python", "Playwright", "Jupyter", "Pandas"],
  },
];

export default function Projects() {
  const router = useRouter();
  const [loadingStep, setLoadingStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const projectsListRef = useRef<HTMLDivElement>(null);
  const transitionRef = useRef<HTMLDivElement>(null);

  const [transitioning, setTransitioning] = useState<{ rect: DOMRect; slug: string } | null>(null);

  // Simulación de carga (curl fetching JSON payload)
  useEffect(() => {
    const timers = [
      setTimeout(() => setLoadingStep(1), 500),
      setTimeout(() => setLoadingStep(2), 1200),
      setTimeout(() => {
        setLoadingStep(3);
        let currentProgress = 0;
        const interval = setInterval(() => {
          currentProgress += Math.floor(Math.random() * 8) + 5;
          if (currentProgress > 99) {
            currentProgress = 100;
            clearInterval(interval);
            setTimeout(() => setLoadingStep(5), 400);
          } else if (currentProgress > 60 && loadingStep < 4) {
             setLoadingStep(4);
          }
          setProgress(currentProgress);
        }, 30);
      }, 1800),
    ];

    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  // Animaciones GSAP
  useGSAP(
    () => {
      // Aparecer cards de proyectos
      if (loadingStep === 5 && projectsListRef.current) {
        gsap.fromTo(".project-card", 
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
          }
        );
      }

      // Animación de expansión a pantalla completa (Monocle Mode)
      if (transitioning && transitionRef.current) {
        gsap.set(transitionRef.current, {
          top: transitioning.rect.top,
          left: transitioning.rect.left,
          width: transitioning.rect.width,
          height: transitioning.rect.height,
          opacity: 1,
        });

        gsap.to(transitionRef.current, {
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          duration: 0.8,
          ease: "power4.inOut",
          onComplete: () => {
            gsap.to('.transition-text', { opacity: 1, duration: 0.2 });
            router.push(`/${transitioning.slug}`);
          }
        });
      }
    },
    { scope: containerRef, dependencies: [loadingStep, transitioning] }
  );

  const handleProjectClick = (e: React.MouseEvent<HTMLButtonElement>, slug: string) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    setTransitioning({ rect, slug });
  };

  return (
    <div className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl projects-window-panel w-full h-full flex flex-col relative" ref={containerRef}>
      <WindowHeader title="~/luis-valverde/projects" />
      
      <div className="p-6 font-mono text-sm overflow-y-auto flex-1 flex flex-col">
        {/* Comando Inicial */}
        <div className="mb-4">
          <span className="text-[#a855f7]">&gt;</span>
          <span className="text-white ml-2">
            curl https://api.luisvalverde.com/featured --json
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
                <span className="text-[#a855f7]">[+]</span> {loadingStep === 3 ? "Fetching JSON payload..." : "Parsing architecture data..."}<br />
                <span className="text-white">
                  [{'='.repeat(Math.floor(progress / 5))}{progress < 100 ? '>' : ''}{'.'.repeat(20 - Math.floor(progress / 5))}] {progress}%
                </span>
              </div>
            )}
          </div>
        )}

        {/* Grid de Cards (Proyectos) */}
        {loadingStep === 5 && (
          <div ref={projectsListRef} className="flex flex-col gap-6 w-full mt-2">
            <div className="text-green-400 mb-2">200 OK - Payload retrieved successfully.</div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projectsData.map((project) => (
                <button 
                  key={project.id} 
                  onClick={(e) => handleProjectClick(e, project.slug)}
                  className="project-card border border-white/10 p-4 hover:border-[#a855f7]/50 hover:bg-white/5 transition-all group flex flex-col text-left rounded-md"
                >
                  <div className="flex justify-between items-start mb-2 w-full">
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
                  <div className="mt-auto text-[#a855f7] border border-[#a855f7]/30 group-hover:bg-[#a855f7]/10 px-4 py-2 text-center transition-colors text-xs font-bold tracking-widest uppercase w-full">
                    [ Execute ]
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Capa de Transición (Monocle Mode) */}
      {transitioning && (
        <div 
          ref={transitionRef}
          className="fixed z-[9999] bg-[#050505] border border-[#a855f7] flex items-center justify-center shadow-[0_0_50px_rgba(168,85,247,0.3)]"
          style={{ pointerEvents: 'auto' }}
        >
          <span className="transition-text opacity-0 text-white font-mono text-sm tracking-widest uppercase">
            Executing payload {transitioning.slug}...
          </span>
        </div>
      )}
    </div>
  );
}
