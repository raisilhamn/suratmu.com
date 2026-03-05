export function TeamMember({ name, role, joke }: { name: string, role: string, joke: string }) {
  return (
    <div className="glass-panel p-6 rounded-2xl text-center group hover:bg-white/[0.03] transition-colors border border-emerald-500/10 hover:border-emerald-500/30">
      <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-emerald-900 to-teal-900 border-2 border-emerald-500/50 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <span className="text-2xl">😎</span>
      </div>
      <h3 className="text-lg font-bold text-white mb-1">{name}</h3>
      <p className="text-emerald-400 text-sm font-medium mb-3">{role}</p>
      <p className="text-zinc-500 text-xs italic">
        "{joke}"
      </p>
    </div>
  );
}
