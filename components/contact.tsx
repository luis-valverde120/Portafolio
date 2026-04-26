"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import WindowHeader from "./window-header";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showOutput, setShowOutput] = useState(false);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.5 });
      
      // finger command typing
      tl.to(".finger-command", {
        duration: 1,
        text: "finger luis-valverde",
        ease: "none",
        onComplete: () => setShowOutput(true),
      });

      // Show finger output instantly
      tl.fromTo(".finger-output", { opacity: 0 }, { opacity: 1, duration: 0.1 });

      // Call to action text animation
      tl.from(".contact-cta", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.4,
      });

      // Social links stagger
      tl.from(".social-link", {
        x: -20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.15,
        ease: "power2.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <div className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl contact-window-panel w-full h-full flex flex-col relative" ref={containerRef}>
      <WindowHeader title="~/luis-valverde/contact" />
      
      <div className="p-6 md:p-10 font-mono text-sm overflow-y-auto flex-1 flex flex-col justify-center max-w-3xl mx-auto w-full">
        
        {/* Command Line */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-[#a855f7] font-bold">&gt;</span>
          <span className="text-white">luis@valverde:~$</span>
          <span className="text-[#4ade80] finger-command"></span>
          {!showOutput && <span className="w-2 h-4 bg-white animate-pulse"></span>}
        </div>

        {/* Output Section */}
        <div className={`transition-opacity ${showOutput ? 'opacity-100' : 'opacity-0 invisible'}`}>
          
          {/* Finger Output */}
          <div className="finger-output text-gray-300 font-mono bg-white/5 p-6 rounded-lg border border-white/10 mb-8 whitespace-pre overflow-x-auto text-xs sm:text-sm">
            <span className="text-white font-bold">Login:</span> luis             <span className="text-white font-bold">Name:</span> Luis Valverde<br/>
            <span className="text-white font-bold">Directory:</span> /home/luis   <span className="text-white font-bold">Shell:</span> /usr/bin/zsh<br/>
            <span className="text-white font-bold">Office:</span> Remote, Ecuador
          </div>

          {/* CTA */}
          <h2 className="contact-cta text-2xl sm:text-3xl font-sans font-bold text-white mb-8 tracking-tight">
            Let's engineer your <span className="text-[#a855f7]">next solution.</span>
          </h2>

          {/* Social Links */}
          <div className="flex flex-col gap-4 font-sans">
            
            <a href="mailto:luis.valverde120@gmail.com" className="social-link group flex items-center gap-4 text-gray-400 hover:text-white transition-colors w-fit">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#a855f7]/50 group-hover:bg-[#a855f7]/10 transition-all">
                <svg className="w-5 h-5 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-sm sm:text-base border-b border-transparent group-hover:border-white/30 pb-0.5">luis.valverde120@gmail.com</span>
            </a>

            <a href="https://www.linkedin.com/in/luis-valverde-102653216" target="_blank" rel="noopener noreferrer" className="social-link group flex items-center gap-4 text-gray-400 hover:text-white transition-colors w-fit">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#a855f7]/50 group-hover:bg-[#a855f7]/10 transition-all">
                <svg className="w-5 h-5 text-[#a855f7]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <span className="text-sm sm:text-base border-b border-transparent group-hover:border-white/30 pb-0.5">linkedin.com/in/luis-valverde-102653216</span>
            </a>

            <a href="https://github.com/luis-valverde120/" target="_blank" rel="noopener noreferrer" className="social-link group flex items-center gap-4 text-gray-400 hover:text-white transition-colors w-fit">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#a855f7]/50 group-hover:bg-[#a855f7]/10 transition-all">
                <svg className="w-5 h-5 text-[#a855f7]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <span className="text-sm sm:text-base border-b border-transparent group-hover:border-white/30 pb-0.5">github.com/luis-valverde120</span>
            </a>

          </div>
          
          <div className="mt-8 font-mono text-xs text-muted flex items-center gap-2">
            <span className="text-[#4ade80]">&gt;</span>
            <span className="animate-pulse">_</span>
          </div>

        </div>
      </div>
    </div>
  );
}
