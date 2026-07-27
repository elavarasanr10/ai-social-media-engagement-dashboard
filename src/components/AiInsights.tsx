import { aiInsights } from '@/data/dashboardData';
import { insightIcons } from '@/components/icons';
import { Sparkles } from 'lucide-react';

const impactStyle: Record<string, string> = {
  high: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  medium: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  low: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
};

export default function AiInsights() {
  return (
    <div className="rounded-2xl border border-slate-800/80 glass p-5 sm:p-6">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2.5">
          <span className="grid place-items-center w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-orange-400 text-ink-950">
            <Sparkles className="w-4 h-4" strokeWidth={2.4} />
          </span>
          <div>
            <h3 className="text-base font-semibold text-white">AI Insights</h3>
            <p className="text-[11px] text-slate-500">Auto-generated recommendations</p>
          </div>
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-400/80 bg-amber-500/10 border border-amber-500/20 px-2 py-1 rounded-md">
          {aiInsights.length} new
        </span>
      </div>

      <div className="space-y-3">
        {aiInsights.map((ins) => {
          const Icon = insightIcons[ins.icon];
          return (
            <div
              key={ins.id}
              className="group flex gap-3 rounded-xl border border-slate-800/60 bg-slate-900/40 p-3.5 hover:border-slate-700 transition"
            >
              <span className="grid place-items-center w-8 h-8 rounded-lg bg-slate-800/80 text-slate-300 shrink-0 group-hover:text-white transition">
                <Icon className="w-4 h-4" />
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">{ins.tag}</span>
                  <span className={`text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded border ${impactStyle[ins.impact]}`}>
                    {ins.impact}
                  </span>
                </div>
                <p className="text-[13px] text-slate-300 leading-relaxed">{ins.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
