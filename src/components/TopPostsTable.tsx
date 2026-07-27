import { useState, useMemo, Fragment } from 'react';
import { topPosts } from '@/data/dashboardData';
import type { Sentiment, PlatformName, Post } from '@/data/dashboardData';
import { PlatformIcon, sentimentIcon } from '@/components/icons';
import { ArrowUpDown, ChevronDown, ExternalLink } from 'lucide-react';

type SortKey = 'reachValue' | 'engagement' | 'date';
type SortDir = 'asc' | 'desc';

const sentimentStyle: Record<Sentiment, string> = {
  Positive: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Neutral: 'bg-slate-500/10 text-slate-300 border-slate-500/20',
  Negative: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
};

const platformFilter: (PlatformName | 'All')[] = ['All', 'Instagram', 'LinkedIn', 'YouTube', 'X', 'Facebook'];

export default function TopPostsTable() {
  const [sortKey, setSortKey] = useState<SortKey>('engagement');
  const [sortDir, setSortDir] = useState<SortDir>('desc');
  const [filter, setFilter] = useState<PlatformName | 'All'>('All');
  const [expanded, setExpanded] = useState<number | null>(null);

  const sorted = useMemo(() => {
    const rows = filter === 'All' ? [...topPosts] : topPosts.filter((p) => p.platform === filter);
    rows.sort((a, b) => {
      let cmp: number;
      if (sortKey === 'date') cmp = a.id - b.id;
      else cmp = a[sortKey] - b[sortKey];
      return sortDir === 'asc' ? cmp : -cmp;
    });
    return rows;
  }, [sortKey, sortDir, filter]);

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    else { setSortKey(key); setSortDir('desc'); }
  };

  const arrow = (key: SortKey) => sortKey === key && <ChevronDown className={`inline w-3.5 h-3.5 transition-transform ${sortDir === 'asc' ? 'rotate-180' : ''}`} />;

  const topEng = Math.max(...topPosts.map((p) => p.engagement));

  return (
    <div className="rounded-2xl border border-slate-800/80 glass overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5 sm:p-6 border-b border-slate-800/80">
        <div>
          <h3 className="text-base font-semibold text-white">Top Performing Posts</h3>
          <p className="text-xs text-slate-500 mt-0.5">Sortable · filter by platform · click a row for details</p>
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          {platformFilter.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`text-xs font-medium px-2.5 py-1.5 rounded-lg border transition ${
                filter === f
                  ? 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30'
                  : 'text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left">
          <thead>
            <tr className="text-[11px] uppercase tracking-wider text-slate-500 border-b border-slate-800/80">
              <th className="px-5 sm:px-6 py-3 font-semibold">Post</th>
              <th className="px-3 py-3 font-semibold">Platform</th>
              <th className="px-3 py-3 font-semibold cursor-pointer select-none hover:text-slate-300" onClick={() => toggleSort('reachValue')}>
                Reach <ArrowUpDown className="inline w-3 h-3 ml-0.5 -mt-0.5" />{arrow('reachValue')}
              </th>
              <th className="px-3 py-3 font-semibold cursor-pointer select-none hover:text-slate-300" onClick={() => toggleSort('engagement')}>
                Eng. Rate <ArrowUpDown className="inline w-3 h-3 ml-0.5 -mt-0.5" />{arrow('engagement')}
              </th>
              <th className="px-3 py-3 font-semibold">Sentiment</th>
              <th className="px-3 py-3 font-semibold cursor-pointer select-none hover:text-slate-300 hidden sm:table-cell" onClick={() => toggleSort('date')}>
                Date {arrow('date')}
              </th>
              <th className="px-5 sm:px-6 py-3" />
            </tr>
          </thead>
          <tbody>
            {sorted.map((post: Post) => {
              const SentIcon = sentimentIcon(post.sentiment);
              const isExp = expanded === post.id;
              return (
                <Fragment key={post.id}>
                  <tr
                    onClick={() => setExpanded(isExp ? null : post.id)}
                    className="group cursor-pointer border-b border-slate-800/50 hover:bg-slate-800/30 transition"
                  >
                    <td className="px-5 sm:px-6 py-3.5">
                      <p className="text-sm font-medium text-slate-100 line-clamp-1 group-hover:text-white">{post.title}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">by {post.author}</p>
                    </td>
                    <td className="px-3 py-3.5">
                      <span className="inline-grid place-items-center w-7 h-7 rounded-lg bg-slate-800/80 text-slate-300">
                        <PlatformIcon name={post.platform} className="w-3.5 h-3.5" />
                      </span>
                    </td>
                    <td className="px-3 py-3.5 text-sm text-slate-300 tabular-nums">{post.reach}</td>
                    <td className="px-3 py-3.5">
                      <div className="flex items-center gap-2">
                        <div className="hidden md:block w-16 h-1.5 rounded-full bg-slate-800 overflow-hidden">
                          <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-teal-400" style={{ width: `${(post.engagement / topEng) * 100}%` }} />
                        </div>
                        <span className="text-sm font-semibold text-white tabular-nums">{post.engagement}%</span>
                      </div>
                    </td>
                    <td className="px-3 py-3.5">
                      <span className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-1 rounded-full border ${sentimentStyle[post.sentiment]}`}>
                        <SentIcon className="w-3 h-3" /> {post.sentiment}
                      </span>
                    </td>
                    <td className="px-3 py-3.5 text-sm text-slate-400 tabular-nums hidden sm:table-cell">{post.date}</td>
                    <td className="px-5 sm:px-6 py-3.5">
                      <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isExp ? 'rotate-180 text-cyan-400' : 'group-hover:text-slate-300'}`} />
                    </td>
                  </tr>
                  {isExp && (
                    <tr className="bg-slate-900/40">
                      <td colSpan={7} className="px-5 sm:px-6 py-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-6 gap-y-2 text-sm">
                            <div>
                              <p className="text-[11px] text-slate-500">Reach</p>
                              <p className="text-slate-200 font-semibold">{post.reach}</p>
                            </div>
                            <div>
                              <p className="text-[11px] text-slate-500">Engagement</p>
                              <p className="text-slate-200 font-semibold">{post.engagement}%</p>
                            </div>
                            <div>
                              <p className="text-[11px] text-slate-500">Author</p>
                              <p className="text-slate-200 font-semibold">{post.author}</p>
                            </div>
                            <div>
                              <p className="text-[11px] text-slate-500">Published</p>
                              <p className="text-slate-200 font-semibold">{post.date}</p>
                            </div>
                          </div>
                          <button className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition self-start sm:self-auto">
                            View full post <ExternalLink className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )}
                </Fragment>
              );
            })}
          </tbody>
        </table>
        {sorted.length === 0 && (
          <div className="py-10 text-center text-sm text-slate-500">No posts on this platform.</div>
        )}
      </div>
    </div>
  );
}
