import KpiCards from '@/components/KpiCards';
import PlatformChart from '@/components/PlatformChart';
import ContentThemes from '@/components/ContentThemes';
import TopPostsTable from '@/components/TopPostsTable';
import AiInsights from '@/components/AiInsights';
import PageHeading from '@/components/PageHeading';

export default function DashboardSection() {
  return (
    <div className="animate-fadeUp">
      <PageHeading
        title="Engagement"
        highlight="Dashboard"
        subtitle="Performance across all social platforms · Jul 1–24, 2026"
        aiBadge
      />

      <KpiCards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-6">
        <div className="lg:col-span-2 animate-fadeUp">
          <PlatformChart />
        </div>
        <div className="animate-fadeUp" style={{ animationDelay: '90ms' }}>
          <ContentThemes />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-6">
        <div className="animate-fadeUp order-2 lg:order-1">
          <AiInsights />
        </div>
        <div className="lg:col-span-2 animate-fadeUp order-1 lg:order-2" style={{ animationDelay: '90ms' }}>
          <TopPostsTable />
        </div>
      </div>
    </div>
  );
}
