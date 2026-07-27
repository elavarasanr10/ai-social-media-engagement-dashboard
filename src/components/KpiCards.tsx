import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { kpis } from '@/data/dashboardData';
import type { AccentKey } from '@/data/dashboardData';
import { kpiIcons } from '@/components/icons';
import Sparkline from '@/components/Sparkline';
import CircularProgress from '@/components/CircularProgress';

const accentMap: Record<AccentKey, { text: string; chip: string }> = {
  cyan: { text: 'text-cyan-400', chip: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' },
  emerald: { text: 'text-emerald-400', chip: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
  blue: { text: 'text-blue-400', chip: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
  teal: { text: 'text-teal-400', chip: 'bg-teal-500/10 text-teal-400 border-teal-500/20' },
  amber: { text: 'text-amber-400', chip: 'bg-amber-500/10 text-amber-400 border-amber-500/20' },
};

export default function KpiCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      {kpis.map((kpi, i) => {
        const a = accentMap[kpi.accent];
        const Icon = kpiIcons[kpi.icon];
        return (
          <div
            key={kpi.id}
            className="group relative animate-fadeUp rounded-2xl border border-slate-800/80 glass p-5 hover:border-slate-700 transition-all duration-300 hover:-translate-y-0.5"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <div className="flex items-start justify-between">
              <div className={`grid place-items-center w-10 h-10 rounded-xl border ${a.chip}`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className={`flex items-center gap-0.5 text-xs font-semibold ${kpi.trendUp ? 'text-emerald-400' : 'text-rose-400'}`}>
                {kpi.trendUp ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
                {kpi.trend}{kpi.trendUnit === '%' ? '%' : kpi.trendUnit === 'pts' ? ' pts' : ''}
              </span>
            </div>

            <p className="mt-4 text-[13px] font-medium text-slate-400">{kpi.label}</p>
            <div className="mt-1 flex items-end gap-1 flex-wrap">
              <span className="text-3xl font-bold tracking-tight text-white">{kpi.value}</span>
              {kpi.unit && <span className="text-sm font-semibold text-slate-500 mb-1">{kpi.unit}</span>}
              {kpi.badge && (
                <span className={`ml-2 mb-1 text-[11px] font-semibold px-2 py-0.5 rounded-full border ${a.chip}`}>{kpi.badge}</span>
              )}
            </div>
            <p className="mt-1 text-[11px] text-slate-600">{kpi.sub}</p>

            <div className="mt-3">
              {kpi.ring != null ? (
                <div className="flex items-center gap-3">
                  <div className={`relative ${a.text}`}>
                    <CircularProgress value={kpi.ring} max={kpi.ringMax} size={48} stroke={5} />
                    <span className="absolute inset-0 grid place-items-center text-[11px] font-bold text-white">{kpi.ring}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span>Quality index</span>
                      <span className="text-emerald-400 font-semibold">+{kpi.trend} pts</span>
                    </div>
                    <div className="h-1.5 mt-1 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-400 transition-all duration-700" style={{ width: `${kpi.ring}%` }} />
                    </div>
                  </div>
                </div>
              ) : (
                <div className={`h-8 ${a.text}`}>
                  <Sparkline data={kpi.spark} />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
