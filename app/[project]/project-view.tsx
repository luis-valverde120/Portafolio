"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import WindowHeader from "@/components/window-header";

interface ProjectViewProps {
  project: string;
  data: any;
}

export default function ProjectView({ project, data }: ProjectViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [exiting, setExiting] = useState(false);

  useGSAP(() => {
    // Cascada de comandos
    const tl = gsap.timeline();

    tl.fromTo(".cmd-block", 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.6, ease: "power2.out", delay: 0.2 }
    );
  }, { scope: containerRef });

  const handleExit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (exiting) return;
    setExiting(true);
    
    gsap.to(containerRef.current, {
      scale: 0.95,
      opacity: 0,
      duration: 0.4,
      ease: "power3.in",
      onComplete: () => {
        router.push('/');
      }
    });
  };

  const highlightLog = (log: string) => {
    if (log.startsWith("[INFO]")) return <><span className="text-blue-400 font-bold">[INFO]</span>{log.slice(6)}</>;
    if (log.startsWith("[ OK ]")) return <><span className="text-green-400 font-bold">[ OK ]</span>{log.slice(6)}</>;
    if (log.startsWith("[WARN]")) return <><span className="text-yellow-400 font-bold">[WARN]</span>{log.slice(6)}</>;
    if (log.startsWith("[ ✓ ]")) return <><span className="text-green-400 font-bold">[ ✓ ]</span>{log.slice(5)}</>;
    return log;
  };

  const renderJson = (jsonObj: any) => {
    const str = JSON.stringify(jsonObj, null, 2);
    const htmlStr = str.replace(/"([^"]+)":/g, '<span class="text-[#a855f7]">"$1"</span>:');
    return <code dangerouslySetInnerHTML={{ __html: htmlStr }} />;
  };

  return (
    <div className="w-screen h-screen text-white flex flex-col font-mono overflow-hidden relative">
      <Navbar activeSection={2} onNavigate={() => router.push('/')} />

      {/* Espacio para la ventana debajo del Navbar */}
      <div className="flex-1 w-full pt-20 pb-4 px-4 flex flex-col relative z-10 h-full">
        
        {/* Ventana de Terminal */}
        <div 
          ref={containerRef} 
          className="flex-1 bg-black/60 backdrop-blur-2xl border border-[#a855f7]/30 rounded-2xl shadow-[0_0_50px_rgba(168,85,247,0.1)] flex flex-col overflow-hidden relative w-full h-full"
        >
          <WindowHeader title={`~/projects/${project}`} />

          <div className="flex-1 overflow-y-auto p-6 md:p-12 relative z-10">
            <div className="max-w-4xl mx-auto space-y-12 pb-16">
              
              {/* Comando 1: Descripción */}
              <div className="cmd-block opacity-0">
                <div className="mb-4 font-mono text-sm">
                  <span className="text-[#a855f7] font-bold">&gt;</span> <span className="text-white">cat README.md</span>
                </div>
                <p className="text-white/80 md:text-lg leading-relaxed border-l-2 border-white/20 pl-4">
                  {data.description}
                </p>
              </div>

              {/* Comando 2: Stack JSON */}
              <div className="cmd-block opacity-0">
                <div className="mb-4 font-mono text-sm">
                  <span className="text-[#a855f7] font-bold">&gt;</span> <span className="text-white">cat stack.json</span>
                </div>
                <pre className="bg-[#050505] border border-white/10 p-4 rounded-md overflow-x-auto text-sm font-mono text-white/90 shadow-inner">
                  {renderJson(data.stackJson)}
                </pre>
              </div>

              {/* Comando 3: Logs */}
              <div className="cmd-block opacity-0">
                <div className="mb-4 font-mono text-sm">
                  <span className="text-[#a855f7] font-bold">&gt;</span> <span className="text-white">tail -f /var/log/{data.logFile}</span>
                </div>
                <div className="bg-black/50 border border-white/5 p-4 rounded-md space-y-2 text-xs md:text-sm font-mono text-white/70">
                  {data.logs.map((log: string, idx: number) => (
                    <div key={idx}>{highlightLog(log)}</div>
                  ))}
                </div>
              </div>

              {/* Comando 4: Enlaces */}
              <div className="cmd-block opacity-0">
                <div className="mb-4 font-mono text-sm">
                  <span className="text-[#a855f7] font-bold">&gt;</span> <span className="text-white">./execute_links.sh</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={data.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#a855f7]/50 hover:border-[#a855f7] hover:bg-[#a855f7]/10 text-white px-4 py-3 transition-all text-xs font-bold tracking-widest uppercase text-left group"
                  >
                    <span className="text-[#a855f7] mr-2 group-hover:animate-pulse">[ ✓ ]</span> View Source Code on GitHub
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Vim Status Bar (Pegado al fondo de la terminal) */}
          <div className="h-10 bg-[#a855f7] text-black font-bold text-xs flex items-center justify-between px-4 shrink-0 shadow-[0_-5px_20px_rgba(168,85,247,0.1)] relative z-20">
            <div className="flex items-center space-x-4">
              <span className="bg-black text-[#a855f7] px-3 py-1 uppercase tracking-widest">NORMAL</span>
              <span className="hidden sm:inline-block opacity-80">{project}</span>
              <span className="hidden md:inline-block font-normal opacity-50">|</span>
              <span className="hidden md:inline-block font-normal opacity-90">{Object.values(data.stackJson).slice(0,3).join(" | ")}</span>
            </div>
            
            <button onClick={handleExit} disabled={exiting} className="hover:bg-black hover:text-[#a855f7] px-3 py-1 transition-colors cursor-pointer flex items-center gap-2 border border-black/20 focus:outline-none">
              <span>[ :q ]</span>
              <span className="hidden sm:inline uppercase">quit</span>
            </button>
          </div>
        </div>
      </div>

      {/* Background Pattern general de la página */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    </div>
  );
}
