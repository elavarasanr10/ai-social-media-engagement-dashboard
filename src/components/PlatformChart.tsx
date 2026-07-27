import { useState } from 'react';
import { platforms } from '@/data/dashboardData';
import { PlatformIcon } from '@/components/icons';

const maxEng = Math.max(...platforms.map((p) => p.engagement));

export default function PlatformChart() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="rounded-2xl border border-slate-800/80 glass p-5 sm:p-6">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-base font-semibold text-white">Platform Engagement</h3>
          <p className="text-xs text-slate-500 mt-0.5">Average engagement rate by platform · last 30 days</p>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-slate-400 bg-slate-900/60 border border-slate-800 rounded-lg px-2.5 py-1">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulseGlow" /> Live
        </div>
      </div>

      <div className="space-y-5">
        {platforms.map((p, i) => {
          const isActive = active === i;
          const w = (p.engagement / maxEng) * 100;
          return (
            <div
              key={p.name}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className="group cursor-default"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <span className="grid place-items-center w-7 h-7 rounded-lg bg-slate-800/80 text-slate-300">
                    <PlatformIcon name={p.name} className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-sm font-medium text-slate-200">{p.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-sm font-bold transition-colors ${isActive ? 'text-white' : 'text-slate-300'}`}>
                    {p.engagement}%
                  </span>
                  <span className="hidden sm:inline text-[11px] text-slate-500 tabular-nums">{p.reach}</span>
                </div>
              </div>
              <div className="relative h-2.5 rounded-full bg-slate-800/80 overflow-hidden">
                <div
                  className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${p.barClass} transition-all duration-700 ease-out`}
                  style={{ width: `${w}%` }}
                />
                {isActive && (
                  <div className="absolute inset-y-0 left-0 rounded-full bg-white/10" style={{ width: `${w}%` }} />
                )}
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${isActive ? 'max-h-20 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}
              >
                <div className="flex items-center gap-4 text-[11px] text-slate-400 pl-9">
                  <span>Followers: <span className="text-slate-200 font-medium">{p.followers}</span></span>
                  <span>Posts: <span className="text-slate-200 font-medium">{p.posts}</span></span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-lg font-bold text-white tabular-nums">1.54M</p>
          <p className="text-[11px] text-slate-500 mt-0.5">Combined Reach</p>
        </div>
        <div>
          <p className="text-lg font-bold text-white tabular-nums">244</p>
          <p className="text-[11px] text-slate-500 mt-0.5">Total Posts</p>
        </div>
        <div>
          <p className="text-lg font-bold text-cyan-400 tabular-nums">10.1%</p>
          <p className="text-[11px] text-slate-500 mt-0.5">Avg. Engagement</p>
        </div>
      </div>
    </div>
  );
}
