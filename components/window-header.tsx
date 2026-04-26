interface WindowHeaderProps {
  title: string;
  className?: string;
}

export default function WindowHeader({
  title,
  className = "",
}: WindowHeaderProps) {
  return (
    <div
      className={`border-b border-white/20 px-6 py-3 flex items-center gap-3 bg-white/5 shrink-0 ${className}`}
    >
      <div className="w-3 h-3 rounded-full border border-white/50 transition-colors hover:bg-red-500/50"></div>
      <div className="w-3 h-3 rounded-full border border-white/50 transition-colors hover:bg-yellow-500/50"></div>
      <div className="w-3 h-3 rounded-full border border-white/50 transition-colors hover:bg-green-500/50"></div>

      <span className="ml-4 text-xs text-muted font-mono tracking-wider window-title transition-colors">
        {title}
      </span>
    </div>
  );
}
