import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import KpiCards from '@/components/KpiCards';
import PlatformChart from '@/components/PlatformChart';
import ContentThemes from '@/components/ContentThemes';
import TopPostsTable from '@/components/TopPostsTable';
import AiInsights from '@/components/AiInsights';
import { Calendar, Download, Sparkles } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950 text-slate-200">
      <Sidebar />
      <div className="lg:pl-64">
        <Header />
        <main className="relative px-4 sm:px-6 py-6 space-y-6">
          <div className="absolute inset-0 grid-bg pointer-events-none opacity-40" />
          <div className="absolute inset-0 ambient pointer-events-none" />

          <div className="relative">
            {/* Page heading */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-full">
                    <Sparkles className="w-3 h-3" /> AI-optimized
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Engagement <span className="text-gradient">Dashboard</span>
                </h1>
                <p className="text-sm text-slate-400 mt-1">Performance across all social platforms · Jul 1–24, 2026</p>
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

            {/* KPI cards */}
            <KpiCards />

            {/* Charts row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-6">
              <div className="lg:col-span-2 animate-fadeUp">
                <PlatformChart />
              </div>
              <div className="animate-fadeUp" style={{ animationDelay: '90ms' }}>
                <ContentThemes />
              </div>
            </div>

            {/* Insights + table */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-6">
              <div className="animate-fadeUp order-2 lg:order-1">
                <AiInsights />
              </div>
              <div className="lg:col-span-2 animate-fadeUp order-1 lg:order-2" style={{ animationDelay: '90ms' }}>
                <TopPostsTable />
              </div>
            </div>

            <footer className="pt-6 pb-2 text-center text-[11px] text-slate-600">
              Pulse AI · Engagement Suite — analytics updated 4 min ago
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
