import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import type { SectionId } from '@/components/Sidebar';
import Header from '@/components/Header';
import DashboardSection from '@/components/DashboardSection';
import AnalyticsSection from '@/components/AnalyticsSection';

export default function App() {
  const [section, setSection] = useState<SectionId>('Dashboard');

  return (
    <div className="min-h-screen bg-ink-950 text-slate-200">
      <Sidebar active={section} onSelect={setSection} />
      <div className="lg:pl-64">
        <Header />
        <main className="relative px-4 sm:px-6 py-6">
          <div className="absolute inset-0 grid-bg pointer-events-none opacity-40" />
          <div className="absolute inset-0 ambient pointer-events-none" />
          <div className="relative">
            {section === 'Dashboard' && <DashboardSection />}
            {section === 'Analytics' && <AnalyticsSection />}
            <footer className="pt-6 pb-2 text-center text-[11px] text-slate-600">
              Pulse AI · Engagement Suite — analytics updated 4 min ago
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
