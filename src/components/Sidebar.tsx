import { LayoutDashboard, BarChart3, FileText, Users, Megaphone, Sparkles, Settings, Zap } from 'lucide-react';

const nav = [
  { label: 'Dashboard', icon: LayoutDashboard, active: true },
  { label: 'Analytics', icon: BarChart3 },
  { label: 'Content', icon: FileText },
  { label: 'Audience', icon: Users },
  { label: 'Campaigns', icon: Megaphone },
  { label: 'AI Assistant', icon: Sparkles, badge: 'New' },
];

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col fixed inset-y-0 left-0 w-64 border-r border-slate-800/80 bg-ink-950/80 backdrop-blur-xl z-30">
      <div className="flex items-center gap-3 px-6 h-16 border-b border-slate-800/80">
        <div className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-teal-400 text-ink-950 shadow-lg shadow-cyan-500/20">
          <Zap className="w-5 h-5" strokeWidth={2.5} />
        </div>
        <div>
          <p className="text-sm font-bold tracking-tight text-white">Pulse AI</p>
          <p className="text-[11px] text-slate-500 -mt-0.5">Engagement Suite</p>
        </div>
      </div>

      <nav className="flex-1 px-3 py-5 space-y-1">
        <p className="px-3 mb-2 text-[10px] font-semibold uppercase tracking-widest text-slate-600">Menu</p>
        {nav.map((item) => (
          <button
            key={item.label}
            className={`group flex items-center w-full gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all border ${
              item.active
                ? 'bg-gradient-to-r from-cyan-500/15 to-transparent text-white border-cyan-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50 border-transparent'
            }`}
          >
            <item.icon className={`w-[18px] h-[18px] ${item.active ? 'text-cyan-400' : 'text-slate-500 group-hover:text-slate-300'}`} />
            <span className="flex-1 text-left">{item.label}</span>
            {item.badge && (
              <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300">{item.badge}</span>
            )}
            {item.active && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow shadow-cyan-400/50" />}
          </button>
        ))}
      </nav>

      <div className="px-3 pb-5">
        <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 transition">
          <Settings className="w-[18px] h-[18px]" /> Settings
        </button>
      </div>
    </aside>
  );
}
