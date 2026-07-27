import { useState } from 'react';
import { TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import PageHeading from '@/components/PageHeading';
import LineChart from '@/components/LineChart';
import {
  engagementOverTime,
  engagementPrevPeriod,
  reachByPlatform30d,
  periodComparison,
} from '@/data/analyticsData';
import type { ReachByPlatform, PeriodCompare } from '@/data/analyticsData';
import type { PlatformName } from '@/data/dashboardData';

const reachPlatforms: PlatformName[] = ['Instagram', 'LinkedIn', 'YouTube', 'X', 'Facebook'];
const reachColors: Record<PlatformName, string> = {
  Instagram: '#f43f5e',
  LinkedIn: '#38bdf8',
  YouTube: '#f97316',
  X: '#94a3b8',
  Facebook: '#3b82f6',
};

const stats = [
  { label: 'Peak engagement', value: '15.3%', sub: 'on Jul 30', up: true, delta: '+2.1 pts' },
  { label: 'Best day', value: 'Thu', sub: 'avg 13.4%', up: true, delta: '+1.8 pts' },
  { label: 'Avg. daily reach', value: '41.9K', sub: 'across platforms', up: true, delta: '+12.4%' },
  { label: 'Lowest period', value: 'Jul 18', sub: 'dip after pricing post', up: false, delta: '-2.6 pts' },
];

function delta(p: PeriodCompare) {
  const d = p.thisPeriod - p.lastPeriod;
  const pct = (d / p.lastPeriod) * 100;
  const good = p.higherIsBetter ? d >= 0 : d <= 0;
  return { d, pct, good };
}

export default function AnalyticsSection() {
  const [showPrev, setShowPrev] = useState(true);

  const reachMax = Math.max(
    ...reachByPlatform30d.flatMap((w) => reachPlatforms.map((p) => w[p]))
  );

  return (
    <div className="animate-fadeUp space-y-6">
      <PageHeading
        title="Analytics"
        highlight="Deep Dive"
        subtitle="Performance trends across all platforms · Jul 1–30, 2026"
      />

      {/* Quick stats strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="rounded-2xl border border-slate-800/80 glass p-4 animate-fadeUp"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <p className="text-[11px] text-slate-500">{s.label}</p>
            <div className="flex items-end justify-between mt-1">
              <span className="text-xl font-bold text-white">{s.value}</span>
              <span className={`flex items-center gap-0.5 text-[11px] font-semibold ${s.up ? 'text-emerald-400' : 'text-rose-400'}`}>
                {s.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {s.delta}
              </span>
            </div>
            <p className="text-[11px] text-slate-600 mt-0.5">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Engagement over time */}
      <div className="rounded-2xl border border-slate-800/80 glass p-5 sm:p-6 animate-fadeUp">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
          <div>
            <h3 className="text-base font-semibold text-white">Engagement Over Time</h3>
            <p className="text-xs text-slate-500 mt-0.5">Daily engagement rate · last 30 days</p>
          </div>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-xs text-slate-400 cursor-pointer select-none">
              <button
                onClick={() => setShowPrev((v) => !v)}
                className={`relative w-9 h-5 rounded-full transition ${showPrev ? 'bg-cyan-500/40' : 'bg-slate-700'}`}
                aria-pressed={showPrev}
              >
                <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all ${showPrev ? 'left-4' : 'left-0.5'}`} />
              </button>
              Compare last period
            </label>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-3">
          <span className="flex items-center gap-1.5 text-[11px] text-slate-400">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" /> This period
          </span>
          {showPrev && (
            <span className="flex items-center gap-1.5 text-[11px] text-slate-400">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-500" /> Last period
            </span>
          )}
        </div>

        <LineChart
          series={[
            { data: engagementOverTime, color: '#22d3ee', fillId: 'eng-this' },
            ...(showPrev ? [{ data: engagementPrevPeriod, color: '#64748b', fillId: 'eng-prev' }] : []),
          ]}
          ySuffix="%"
          height={260}
        />
      </div>

      {/* Reach by platform (grouped bars) */}
      <div className="rounded-2xl border border-slate-800/80 glass p-5 sm:p-6 animate-fadeUp">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="text-base font-semibold text-white">Reach by Platform</h3>
            <p className="text-xs text-slate-500 mt-0.5">Weekly reach · last 30 days (in thousands)</p>
          </div>
          <span className="text-[11px] text-slate-500">peak {reachMax}K</span>
        </div>

        <div className="flex flex-wrap items-center gap-4 mb-5">
          {reachPlatforms.map((p) => (
            <span key={p} className="flex items-center gap-1.5 text-[11px] text-slate-400">
              <span className="w-2.5 h-2.5 rounded-sm" style={{ background: reachColors[p] }} />
              {p}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-3 sm:gap-6 items-end h-56 pl-2">
          {reachByPlatform30d.map((w: ReachByPlatform, i) => (
            <div key={w.week} className="flex h-full items-end justify-center gap-1 sm:gap-2 group">
              {reachPlatforms.map((p) => {
                const h = (w[p] / reachMax) * 100;
                return (
                  <div key={p} className="relative flex-1 max-w-[26px] h-full flex items-end">
                    <div
                      className="w-full rounded-t-md animate-growBar origin-bottom transition-all duration-300 group-hover:brightness-125"
                      style={{
                        height: `${h}%`,
                        background: reachColors[p],
                        animationDelay: `${i * 80}ms`,
                      }}
                      title={`${p} · ${w[p]}K`}
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-3 sm:gap-6 mt-2">
          {reachByPlatform30d.map((w) => (
            <p key={w.week} className="text-center text-[11px] text-slate-500">{w.week}</p>
          ))}
        </div>
      </div>

      {/* This period vs last period */}
      <div className="rounded-2xl border border-slate-800/80 glass p-5 sm:p-6 animate-fadeUp">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="text-base font-semibold text-white">This Period vs Last Period</h3>
            <p className="text-xs text-slate-500 mt-0.5">Side-by-side metric comparison</p>
          </div>
          <span className="text-[11px] text-slate-500">Jul 2026 vs Jun 2026</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {periodComparison.map((p) => {
            const { d, pct, good } = delta(p);
            const maxV = Math.max(p.thisPeriod, p.lastPeriod);
            const thisH = (p.thisPeriod / maxV) * 100;
            const lastH = (p.lastPeriod / maxV) * 100;
            return (
              <div key={p.metric} className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-4">
                <p className="text-[11px] text-slate-500 mb-2">{p.metric}</p>
                <p className="text-xl font-bold text-white">
                  {p.thisPeriod.toLocaleString()}{p.unit}
                </p>
                <div className="flex items-end gap-2 h-16 mt-3">
                  <div className="flex-1 flex flex-col items-center">
                    <div className="w-full rounded-t bg-gradient-to-t from-cyan-600 to-cyan-400" style={{ height: `${thisH}%` }} />
                    <span className="text-[10px] text-slate-500 mt-1">This</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="w-full rounded-t bg-slate-700" style={{ height: `${lastH}%` }} />
                    <span className="text-[10px] text-slate-500 mt-1">Last</span>
                  </div>
                </div>
                <div className={`flex items-center gap-1 mt-3 text-[11px] font-semibold ${good ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {good ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                  {pct >= 0 ? '+' : ''}{pct.toFixed(1)}%
                  <span className="text-slate-600 font-normal ml-1">
                    ({d >= 0 ? '+' : ''}{d.toLocaleString()}{p.unit})
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
