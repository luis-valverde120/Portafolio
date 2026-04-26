import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 pt-3 pointer-events-none">
      <nav className="max-w-5xl mx-auto flex justify-between items-center pointer-events-auto">
        {/* IZQUIERDA: Simulación de Workspaces (Links de Navegación) */}
        <div className="flex gap-1">
          <div className="waybar-module rounded-l-md border-primary/40 text-primary font-bold">
            1:HOME
          </div>
          <Link
            href="#stack"
            className="waybar-module hover:bg-white/10 transition-colors"
          >
            2:STACK
          </Link>
          <Link
            href="#projects"
            className="waybar-module hover:bg-white/10 transition-colors"
          >
            3:PROJECTS
          </Link>
          <Link
            href="#about"
            className="waybar-module rounded-r-md hover:bg-white/10 transition-colors"
          >
            4:WHOAMI
          </Link>
        </div>

        <div className="hidden md:flex">
          <div className="waybar-module rounded-md border-white/10 tracking-widest uppercase">
            <span className="text-muted">guest@upec:</span>
            <span className="text-white">~/portfolio</span>
          </div>
        </div>

        <div className="flex gap-1">
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
