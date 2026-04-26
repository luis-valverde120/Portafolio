import WindowHeader from "./window-header";

export default function Stack() {
  return (
    <div className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl stack-window-panel w-full h-full overflow-y-auto relative flex flex-col font-mono text-sm">
      <WindowHeader
        title="~/luis-valverde/tech_stack"
        className="sticky top-0 z-10"
      />

      <div className="p-6 md:p-8 space-y-8">
        <div>
          <div className="mb-4">
            <span className="text-primary">&gt;</span>
            <span className="text-white ml-2">ls -la ./core_backend/</span>
          </div>
          <div className="text-muted grid grid-cols-[auto_auto_auto_1fr] gap-x-4 gap-y-2 md:gap-x-6">
            <span className="text-gray-500">drwxr-xr-x</span> <span>luis</span>{" "}
            <span>4096</span> <span className="text-white font-bold">.</span>
            <span className="text-gray-500">drwxr-xr-x</span> <span>luis</span>{" "}
            <span>4096</span> <span className="text-white font-bold">..</span>
            <span className="text-gray-500">-rw-r--r--</span> <span>luis</span>{" "}
            <span>1024</span>
            <span className="flex items-center gap-2">
              <span className="text-[#a855f7] w-5 text-center">[N]</span>{" "}
              {/* Reemplazar con <Image src="/node.svg"/> */}
              node_express.js
            </span>
            <span className="text-gray-500">-rw-r--r--</span> <span>luis</span>{" "}
            <span>2048</span>
            <span className="flex items-center gap-2">
              <span className="text-[#a855f7] w-5 text-center">[T]</span>{" "}
              {/* Reemplazar con <Image src="/ts.svg"/> */}
              typescript.ts
            </span>
            <span className="text-gray-500">-rw-r--r--</span> <span>luis</span>{" "}
            <span>1536</span>
            <span className="flex items-center gap-2">
              <span className="text-[#a855f7] w-5 text-center">[P]</span>{" "}
              {/* Reemplazar con <Image src="/python.svg"/> */}
              python_fastapi.py
            </span>
          </div>
        </div>

        <div>
          <div className="mb-4">
            <span className="text-primary">&gt;</span>
            <span className="text-white ml-2">ls -la ./data_and_infra/</span>
          </div>
          <div className="text-muted grid grid-cols-[auto_auto_auto_1fr] gap-x-4 gap-y-2 md:gap-x-6">
            <span className="text-gray-500">drwxr-xr-x</span> <span>luis</span>{" "}
            <span>4096</span> <span className="text-white font-bold">.</span>
            <span className="text-gray-500">drwxr-xr-x</span> <span>luis</span>{" "}
            <span>4096</span> <span className="text-white font-bold">..</span>
            <span className="text-gray-500">-rw-r--r--</span> <span>luis</span>{" "}
            <span>8192</span>
            <span className="flex items-center gap-2">
              <span className="text-[#a855f7] w-5 text-center">[D]</span>
              postgresql.db
            </span>
            <span className="text-gray-500">-rwxr-xr-x</span> <span>luis</span>{" "}
            <span>4096</span>
            <span className="flex items-center gap-2">
              <span className="text-[#a855f7] w-5 text-center">[$]</span>
              linux_bash.sh
            </span>
          </div>
        </div>

        <div>
          <div className="mb-4">
            <span className="text-primary">&gt;</span>
            <span className="text-white ml-2">
              ls -la ./frontend_and_tools/
            </span>
          </div>
          <div className="text-muted grid grid-cols-[auto_auto_auto_1fr] gap-x-4 gap-y-2 md:gap-x-6">
            <span className="text-gray-500">-rw-r--r--</span> <span>luis</span>{" "}
            <span>3072</span>
            <span className="flex items-center gap-2">
              <span className="text-[#a855f7] w-5 text-center">[R]</span>
              nextjs_react.tsx
            </span>
            <span className="text-gray-500">-rw-r--r--</span> <span>luis</span>{" "}
            <span>1024</span>
            <span className="flex items-center gap-2">
              <span className="text-[#a855f7] w-5 text-center">[F]</span>
              flutter_app.dart
            </span>
            <span className="text-gray-500">-rwx------</span> <span>root</span>{" "}
            <span>9999</span>
            <span className="flex items-center gap-2 text-red-400">
              <span className="text-red-500 w-5 text-center">[#]</span>
              cyber_pentesting.exe
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
