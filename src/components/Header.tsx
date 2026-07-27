import { Search, Bell } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 flex items-center gap-3 h-16 px-4 sm:px-6 border-b border-slate-800/80 bg-ink-950/70 backdrop-blur-xl">
      <div className="flex-1 max-w-md relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
        <input
          type="text"
          placeholder="Search posts, campaigns, keywords..."
          className="w-full h-10 pl-10 pr-4 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/10 transition"
        />
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <button className="relative grid place-items-center w-10 h-10 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition">
          <Bell className="w-[18px] h-[18px]" />
          <span className="absolute top-2 right-2.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-ink-950" />
        </button>
        <button className="flex items-center gap-2.5 pl-1 pr-2 sm:pr-3 py-1 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition">
          <div className="grid place-items-center w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 text-ink-950 text-xs font-bold">AQ</div>
          <div className="hidden sm:block text-left">
            <p className="text-xs font-semibold text-white leading-tight">Avery Quinn</p>
            <p className="text-[11px] text-slate-500 leading-tight">Marketing Lead</p>
          </div>
        </button>
      </div>
    </header>
  );
}
