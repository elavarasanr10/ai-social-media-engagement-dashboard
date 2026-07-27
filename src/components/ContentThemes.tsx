import { contentThemes } from '@/data/dashboardData';
import { themeIcons } from '@/components/icons';

export default function ContentThemes() {
  return (
    <div className="rounded-2xl border border-slate-800/80 glass p-5 sm:p-6">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-base font-semibold text-white">Content Themes</h3>
          <p className="text-xs text-slate-500 mt-0.5">Share of total content output</p>
        </div>
        <span className="text-[11px] text-slate-500">338 posts</span>
      </div>

      {/* Stacked share bar */}
      <div className="flex h-3 w-full rounded-full overflow-hidden bg-slate-800 mb-6">
        {contentThemes.map((t) => (
          <div
            key={t.name}
            className={`bg-gradient-to-r ${t.color} transition-all duration-700 hover:brightness-110`}
            style={{ width: `${t.share}%` }}
            title={`${t.name} · ${t.share}%`}
          />
        ))}
      </div>

      <div className="grid gap-3">
        {contentThemes.map((t, i) => {
          const Icon = themeIcons[t.icon];
          return (
            <div
              key={t.name}
              className="group flex items-center gap-4 rounded-xl border border-slate-800/60 bg-slate-900/40 p-3.5 hover:border-slate-700 transition animate-fadeUp"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span className={`grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br ${t.color} text-ink-950 shrink-0`}>
                <Icon className="w-5 h-5" strokeWidth={2.2} />
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-white truncate">{t.name}</p>
                  <p className="text-sm font-bold text-slate-200">{t.share}%</p>
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-slate-800 overflow-hidden">
                  <div className={`h-full rounded-full bg-gradient-to-r ${t.color} transition-all duration-700`} style={{ width: `${t.share}%` }} />
                </div>
                <div className="mt-2 flex items-center gap-4 text-[11px] text-slate-500">
                  <span>{t.posts} posts</span>
                  <span className="text-slate-600">·</span>
                  <span><span className="text-emerald-400 font-semibold">{t.engagement}%</span> avg engagement</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
