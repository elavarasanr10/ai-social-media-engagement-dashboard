import { Calendar, Download, Sparkles } from 'lucide-react';
import type { ReactNode } from 'react';

interface PageHeadingProps {
  title: string;
  highlight: string;
  subtitle: string;
  badge?: ReactNode;
  aiBadge?: boolean;
}

export default function PageHeading({ title, highlight, subtitle, badge, aiBadge }: PageHeadingProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          {aiBadge && (
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-full">
              <Sparkles className="w-3 h-3" /> AI-optimized
            </span>
          )}
          {badge}
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          {title} <span className="text-gradient">{highlight}</span>
        </h1>
        <p className="text-sm text-slate-400 mt-1">{subtitle}</p>
      </div>
      <div className="flex items-center gap-2.5">
        <button className="inline-flex items-center gap-2 text-sm font-medium px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition">
          <Calendar className="w-4 h-4" /> Last 30 days
        </button>
        <button className="inline-flex items-center gap-2 text-sm font-semibold px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-ink-950 hover:from-cyan-400 hover:to-teal-400 transition shadow-lg shadow-cyan-500/20">
          <Download className="w-4 h-4" /> Export
        </button>
      </div>
    </div>
  );
}
