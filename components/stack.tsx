import {
  SiDocker,
  SiNextdotjs,
  SiReact,
  SiPostgresql,
  SiPrisma,
  SiFlutter,
  SiSupabase,
  SiPython,
  SiFastapi,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";
import WindowHeader from "./window-header";

export default function Stack() {
  return (
    <div className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl stack-window-panel w-full h-full overflow-y-auto relative flex flex-col font-mono text-sm">
      <WindowHeader
        title="~/luis-valverde/tech_stack"
        className="sticky top-0 z-10"
      />

      <div className="p-6 md:p-8 space-y-8">
        {/* DIRECTORIO: BACKEND SERVICES */}
        <div>
          <div className="mb-4">
            <span className="text-purple-500">&gt;</span>
            <span className="text-white ml-2">ls -la ./backend_services/</span>
          </div>
          <div className="text-muted grid grid-cols-[auto_auto_auto_1fr] gap-x-4 gap-y-3 md:gap-x-6 items-center">
            <span className="text-gray-500">drwxr-xr-x</span> <span>luis</span>{" "}
            <span>4096</span> <span className="text-white font-bold">.</span>
            <span className="text-gray-500">drwxr-xr-x</span> <span>luis</span>{" "}
            <span>4096</span> <span className="text-white font-bold">..</span>
            <span className="text-gray-500">-rw-r--r--</span> <span>luis</span>{" "}
            <span>2048</span>
            <span className="flex items-center gap-2 hover:text-green-400 transition-colors cursor-default">
              <SiNodedotjs className="text-green-500 w-5 h-5" />
              <SiExpress className="text-gray-300 w-5 h-5" />
              node_express_api.js
            </span>
            <span className="text-gray-500">-rw-r--r--</span> <span>luis</span>{" "}
            <span>1536</span>
            <span className="flex items-center gap-2 hover:text-yellow-400 transition-colors cursor-default">
              <SiPython className="text-yellow-500 w-5 h-5" />
              <SiFastapi className="text-teal-400 w-5 h-5" />
              python_fastapi_service.py
            </span>
          </div>
        </div>

        {/* DIRECTORIO: FRONTEND & MOBILE */}
        <div>
          <div className="mb-4">
            <span className="text-purple-500">&gt;</span>
            <span className="text-white ml-2">ls -la ./frontend_apps/</span>
          </div>
          <div className="text-muted grid grid-cols-[auto_auto_auto_1fr] gap-x-4 gap-y-3 md:gap-x-6 items-center">
            <span className="text-gray-500">drwxr-xr-x</span> <span>luis</span>{" "}
            <span>4096</span> <span className="text-white font-bold">.</span>
            <span className="text-gray-500">drwxr-xr-x</span> <span>luis</span>{" "}
            <span>4096</span> <span className="text-white font-bold">..</span>
            <span className="text-gray-500">-rw-r--r--</span> <span>luis</span>{" "}
            <span>3072</span>
            <span className="flex items-center gap-2 hover:text-cyan-300 transition-colors cursor-default">
              <SiNextdotjs className="text-white w-5 h-5 bg-black rounded-full" />
              <SiReact className="text-[#61DAFB] w-5 h-5" />
              nextjs_react_web.tsx
            </span>
            <span className="text-gray-500">-rw-r--r--</span> <span>luis</span>{" "}
            <span>1024</span>
            <span className="flex items-center gap-2 hover:text-cyan-400 transition-colors cursor-default">
              <SiFlutter className="text-[#02569B] w-5 h-5" />
              flutter_mobile_app.dart
            </span>
          </div>
        </div>

        {/* DIRECTORIO: DATA & INFRAESTRUCTURE */}
        <div>
          <div className="mb-4">
            <span className="text-purple-500">&gt;</span>
            <span className="text-white ml-2">ls -la ./data_and_infra/</span>
          </div>
          <div className="text-muted grid grid-cols-[auto_auto_auto_1fr] gap-x-4 gap-y-3 md:gap-x-6 items-center">
            <span className="text-gray-500">drwxr-xr-x</span> <span>luis</span>{" "}
            <span>4096</span> <span className="text-white font-bold">.</span>
            <span className="text-gray-500">drwxr-xr-x</span> <span>luis</span>{" "}
            <span>4096</span> <span className="text-white font-bold">..</span>
            <span className="text-gray-500">-rw-r--r--</span> <span>luis</span>{" "}
            <span>8192</span>
            <span className="flex items-center gap-2 hover:text-blue-400 transition-colors cursor-default">
              <SiPostgresql className="text-[#336791] w-5 h-5" />
              postgresql_core.db
            </span>
            <span className="text-gray-500">-rw-r--r--</span> <span>luis</span>{" "}
            <span>2048</span>
            <span className="flex items-center gap-2 hover:text-emerald-400 transition-colors cursor-default">
              <SiSupabase className="text-[#3ECF8E] w-5 h-5" />
              supabase_config.json
            </span>
            <span className="text-gray-500">-rw-r--r--</span> <span>luis</span>{" "}
            <span>1024</span>
            <span className="flex items-center gap-2 hover:text-indigo-400 transition-colors cursor-default">
              <SiPrisma className="text-white w-5 h-5" />
              schema.prisma
            </span>
            <span className="text-gray-500">-rwxr-xr-x</span> <span>luis</span>{" "}
            <span>4096</span>
            <span className="flex items-center gap-2 hover:text-blue-500 transition-colors cursor-default">
              <SiDocker className="text-[#2496ED] w-5 h-5" />
              docker-compose.yml
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
