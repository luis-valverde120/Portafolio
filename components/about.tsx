"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import WindowHeader from "./window-header";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showNeofetchOutput, setShowNeofetchOutput] = useState(false);

  useGSAP(
    () => {
      // Timeline for the Left Side (Neofetch)
      const tlLeft = gsap.timeline({ delay: 0.5 });
      tlLeft.to(".neofetch-command", {
        duration: 0.8,
        text: "neofetch",
        ease: "none",
        onComplete: () => setShowNeofetchOutput(true), // Muestra el output de golpe como una terminal real
      });
      tlLeft.fromTo(".neofetch-output", { opacity: 0 }, { opacity: 1, duration: 0.1 });

      // Timeline for the Right Side (Whoami)
      const tlRight = gsap.timeline({ delay: 1.8 }); // Espera a que termine neofetch
      tlRight.to(".whoami-command", {
        duration: 0.6,
        text: "whoami",
        ease: "none",
      });
      tlRight.from(".about-text-p", {
        y: 10,
        opacity: 0,
        duration: 0.4,
        stagger: 0.2,
        ease: "power2.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <div className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl about-window-panel w-full h-full flex flex-col relative" ref={containerRef}>
      <WindowHeader title="~/luis-valverde/about_me" />
      
      <div className="p-6 md:p-8 font-mono text-sm overflow-y-auto flex-1 flex flex-col lg:flex-row gap-8 lg:gap-12">
        
        {/* Neofetch Section (Left Side) */}
        <div className="w-full lg:w-[45%] flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[#a855f7] font-bold">&gt;</span>
            <span className="text-white">luis@valverde:~$</span>
            <span className="text-[#4ade80] neofetch-command"></span>
            {!showNeofetchOutput && <span className="w-2 h-4 bg-white animate-pulse"></span>}
          </div>

          <div className={`neofetch-output flex flex-col xl:flex-row gap-6 mt-2 transition-opacity ${showNeofetchOutput ? 'opacity-100' : 'opacity-0 invisible'}`}>
            {/* Image Placeholder */}
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl border border-[#a855f7]/40 bg-white/5 overflow-hidden flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.2)] shrink-0">
              <div className="text-center">
                <span className="text-muted text-xs block mb-1">[ Image ]</span>
                <span className="text-white/20 text-[10px]">400x400</span>
              </div>
              {/* Aquí colocarás tu imagen real: */}
              {/* <img src="/images/luis.jpg" alt="Luis Valverde" className="w-full h-full object-cover" /> */}
            </div>
            
            {/* Neofetch Stats */}
            <div className="flex flex-col gap-1 w-full text-xs sm:text-sm text-gray-300">
              <div className="mb-2">
                <span className="text-[#a855f7] font-bold">luis</span><span className="text-white">@</span><span className="text-[#a855f7] font-bold">valverde</span>
                <div className="text-white">-------------</div>
              </div>
              <div><span className="text-[#a855f7] font-bold">OS</span>: Software Engineer</div>
              <div><span className="text-[#a855f7] font-bold">Host</span>: UPEC CS 7th Sem</div>
              <div><span className="text-[#a855f7] font-bold">Kernel</span>: Backend Architecture</div>
              <div><span className="text-[#a855f7] font-bold">Uptime</span>: 24/7/365</div>
              <div><span className="text-[#a855f7] font-bold">Packages</span>: Node, FastAPI, Next</div>
              <div><span className="text-[#a855f7] font-bold">Shell</span>: bash</div>
              <div><span className="text-[#a855f7] font-bold">Theme</span>: Cyber-Architect</div>
              
              <div className="mt-4 flex gap-1">
                <div className="w-4 h-4 bg-black border border-white/20"></div>
                <div className="w-4 h-4 bg-red-500"></div>
                <div className="w-4 h-4 bg-green-500"></div>
                <div className="w-4 h-4 bg-yellow-500"></div>
                <div className="w-4 h-4 bg-blue-500"></div>
                <div className="w-4 h-4 bg-[#a855f7]"></div>
                <div className="w-4 h-4 bg-cyan-500"></div>
                <div className="w-4 h-4 bg-white"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Text Section (Right Side) */}
        <div className="w-full lg:w-[55%] flex flex-col gap-6 lg:pl-8 lg:border-l lg:border-white/10 pt-6 lg:pt-0 border-t border-white/10 lg:border-t-0">
          
          <div className="flex items-center gap-2">
            <span className="text-[#a855f7] font-bold">&gt;</span>
            <span className="text-white">luis@valverde:~$</span>
            <span className="text-[#4ade80] whoami-command"></span>
            {showNeofetchOutput && <span className="w-2 h-4 bg-white animate-pulse"></span>}
          </div>

          <div className="space-y-4 text-sm text-gray-300 font-sans leading-relaxed">
            <p className="about-text-p">
              I’m a Software Engineer and a 7th-semester Computer Science student at UPEC, focused on designing secure and scalable backend systems.
            </p>
            <p className="about-text-p">
              Beyond writing code, I build tech communities. I’m a founding member of the IEEE UPEC branch and have contributed to organizing AI events and hackathons. I’ve also been involved in university-level decision-making spaces, strengthening my ability to think critically, communicate technical ideas, and evaluate complex systems.
            </p>
            <p className="about-text-p">
              I approach software architecture the same way I approach competitive chess and heavy strength training: with pure strategy, consistency, and a focus on <span className="text-[#a855f7] font-bold">long-term scalability</span>.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
