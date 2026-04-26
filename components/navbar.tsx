import Link from "next/link";

export default function Navbar({ 
  activeSection = 0, 
  onNavigate 
}: { 
  activeSection?: number; 
  onNavigate?: (index: number) => void 
}) {
  const tabs = ["HOME", "STACK", "PROJECTS", "WHOAMI", "CONTACT"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-2 sm:px-4 pt-3 pointer-events-none">
      <nav className="max-w-5xl mx-auto flex justify-between items-center pointer-events-auto overflow-x-auto hide-scrollbar gap-4">
        <div className="flex gap-1 shrink-0">
          {tabs.map((tab, idx) => {
            const isActive = idx === activeSection;
            const isFirst = idx === 0;
            const isLast = idx === tabs.length - 1;
            
            return (
              <button
                key={tab}
                onClick={() => onNavigate?.(idx)}
                className={`waybar-module transition-all duration-300 ${
                  isActive 
                    ? 'border-[#a855f7]/50 text-[#a855f7] font-bold bg-[#a855f7]/10' 
                    : 'hover:bg-white/10 text-gray-400'
                } ${isFirst ? 'rounded-l-md' : ''} ${isLast ? 'rounded-r-md' : ''}`}
              >
                {idx + 1}:{tab}
              </button>
            );
          })}
        </div>

        <div className="hidden md:flex">
          <div className="waybar-module rounded-md border-white/10 tracking-widest uppercase">
            <span className="text-muted">guest@upec:</span>
            <span className="text-white">~/portfolio</span>
          </div>
        </div>

        <div className="flex gap-1 shrink-0 ml-auto">
          <div className="waybar-module rounded-l-md border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="hidden sm:inline">OPEN_TO_WORK</span>
          </div>

          <div className="waybar-module">
            <svg
              className="w-3 h-3 text-muted"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="font-mono">18:01</span>
          </div>

          <button className="waybar-module rounded-r-md bg-white text-black font-bold hover:bg-primary hover:text-white transition-all">
            EXEC
          </button>
        </div>
      </nav>
    </header>
  );
}
