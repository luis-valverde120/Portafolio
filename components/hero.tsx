"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import WindowHeader from "./window-header";

interface HeroProps {
  onNavigate?: (index: number) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(
    () => {
      // Escritura automática
      gsap.to(titleRef.current, {
        duration: 2.2,
        text: "Engineering Scalable <br/> Backend Systems.",
        ease: "none",
        delay: 0.5,
      });

      // Elementos secundarios
      gsap.from(".hero-element", {
        y: 20,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        delay: 2.8,
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex items-center justify-center"
    >
      <div className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl hero-window-panel w-full h-full overflow-hidden relative flex flex-col group">
        <WindowHeader title="~/luis-valverde/system" />

        <div className="p-6 md:p-10 flex-1 overflow-y-auto flex flex-col justify-center">
          <div className="mb-4 font-mono text-xs md:text-sm hero-element">
            <span className="text-[#a855f7]">&gt;</span>
            <span className="text-muted ml-2">./execute_intro.sh</span>
          </div>

          <h1
            ref={titleRef}
            suppressHydrationWarning
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tighter leading-tight font-sans min-h-[80px]"
          >
            _
          </h1>

          <p className="text-muted text-sm md:text-lg font-sans mb-8 leading-relaxed max-w-2xl hero-element">
            I’m a Software Engineer and a 7th-semester Computer Science student
            at UPEC, focused on designing secure and scalable backend systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 font-mono text-xs uppercase tracking-widest mt-auto hero-element">
            <button
              onClick={() => onNavigate?.(2)}
              className="border border-[#a855f7] text-[#a855f7] hover:bg-[#a855f7]/10 px-6 py-3 font-bold transition-all text-center cursor-pointer"
            >
              [ Execute Projects ]
            </button>
            <button
              onClick={() => onNavigate?.(4)}
              className="border border-white/30 hover:border-white text-white px-6 py-3 transition-all text-center cursor-pointer"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
