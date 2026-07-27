export type Sentiment = 'Positive' | 'Neutral' | 'Negative';
export type PlatformName = 'Instagram' | 'LinkedIn' | 'YouTube' | 'X' | 'Facebook';
export type AccentKey = 'cyan' | 'emerald' | 'blue' | 'teal' | 'amber';

export interface Kpi {
  id: string;
  label: string;
  value: string;
  unit?: string;
  sub: string;
  trend: number;
  trendUp: boolean;
  trendUnit?: '%' | 'pts';
  accent: AccentKey;
  icon: 'reach' | 'engagement' | 'followers' | 'sentiment' | 'ai';
  spark: number[];
  ring?: number;
  ringMax?: number;
  badge?: string;
}

export const kpis: Kpi[] = [
  { id: 'reach', label: 'Total Reach', value: '1.25M', sub: 'Impressions across 5 platforms', trend: 12.4, trendUp: true, trendUnit: '%', accent: 'cyan', icon: 'reach', spark: [62,70,66,78,74,88,92,100] },
  { id: 'engagement', label: 'Engagement Rate', value: '11.8', unit: '%', sub: 'Avg. interactions per impression', trend: 2.1, trendUp: true, trendUnit: '%', accent: 'emerald', icon: 'engagement', spark: [54,58,60,57,66,71,74,80] },
  { id: 'followers', label: 'Net Followers', value: '+4,280', sub: 'Gained this period', trend: 18.6, trendUp: true, trendUnit: '%', accent: 'blue', icon: 'followers', spark: [30,42,48,55,60,68,79,88] },
  { id: 'sentiment', label: 'Sentiment Score', value: '0.74', sub: 'Aggregated positive index', trend: 0.06, trendUp: true, trendUnit: 'pts', accent: 'teal', icon: 'sentiment', spark: [58,60,64,62,69,72,70,76], badge: 'Positive' },
  { id: 'ai', label: 'AI Content Score', value: '86', unit: '/100', sub: 'Predicted performance quality', trend: 4, trendUp: true, trendUnit: 'pts', accent: 'amber', icon: 'ai', ring: 86, ringMax: 100 },
];

export interface PlatformMetric {
  name: PlatformName;
  engagement: number;
  reach: string;
  followers: string;
  posts: number;
  barClass: string;
}

export const platforms: PlatformMetric[] = [
  { name: 'Instagram', engagement: 14.2, reach: '420K', followers: '128K', posts: 64, barClass: 'from-rose-500 to-pink-400' },
  { name: 'YouTube', engagement: 12.4, reach: '380K', followers: '96K', posts: 22, barClass: 'from-red-500 to-orange-400' },
  { name: 'LinkedIn', engagement: 9.6, reach: '310K', followers: '74K', posts: 38, barClass: 'from-sky-500 to-cyan-400' },
  { name: 'X', engagement: 8.1, reach: '240K', followers: '61K', posts: 91, barClass: 'from-slate-300 to-slate-500' },
  { name: 'Facebook', engagement: 6.3, reach: '190K', followers: '52K', posts: 29, barClass: 'from-blue-600 to-blue-400' },
];

export interface ContentTheme {
  name: string;
  share: number;
  posts: number;
  engagement: number;
  color: string;
  icon: 'book' | 'tutorial' | 'demo';
}

export const contentThemes: ContentTheme[] = [
  { name: 'Educational', share: 42, posts: 142, engagement: 13.4, color: 'from-cyan-500 to-sky-400', icon: 'book' },
  { name: 'Tutorials', share: 35, posts: 118, engagement: 12.1, color: 'from-emerald-500 to-teal-400', icon: 'tutorial' },
  { name: 'Product Demos', share: 23, posts: 78, engagement: 10.8, color: 'from-amber-500 to-orange-400', icon: 'demo' },
];

export interface Post {
  id: number;
  title: string;
  author: string;
  platform: PlatformName;
  reach: string;
  reachValue: number;
  engagement: number;
  sentiment: Sentiment;
  date: string;
}

export const topPosts: Post[] = [
  { id: 1, title: '10 AI Tools Reshaping Marketing in 2026', author: 'Maya Chen', platform: 'LinkedIn', reach: '184K', reachValue: 184000, engagement: 18.4, sentiment: 'Positive', date: 'Jul 24' },
  { id: 2, title: 'Behind the Scenes: Our Design Sprint', author: 'Leo Park', platform: 'Instagram', reach: '96K', reachValue: 96000, engagement: 15.2, sentiment: 'Positive', date: 'Jul 23' },
  { id: 3, title: 'Full Tutorial: Automating Your Content Pipeline', author: 'Aisha Rahman', platform: 'YouTube', reach: '312K', reachValue: 312000, engagement: 14.7, sentiment: 'Positive', date: 'Jul 22' },
  { id: 4, title: 'Product Demo: Smart Scheduler v2', author: 'Diego Alvarez', platform: 'YouTube', reach: '145K', reachValue: 145000, engagement: 13.9, sentiment: 'Neutral', date: 'Jul 21' },
  { id: 5, title: 'Why Engagement Beats Reach Every Time', author: 'Maya Chen', platform: 'X', reach: '78K', reachValue: 78000, engagement: 12.1, sentiment: 'Positive', date: 'Jul 20' },
  { id: 6, title: '5 Educational Carousel Templates', author: 'Leo Park', platform: 'Instagram', reach: '64K', reachValue: 64000, engagement: 11.8, sentiment: 'Positive', date: 'Jul 19' },
  { id: 7, title: 'We changed our pricing. Here is why.', author: 'Aisha Rahman', platform: 'X', reach: '41K', reachValue: 41000, engagement: 9.4, sentiment: 'Negative', date: 'Jul 18' },
  { id: 8, title: 'Live Q&A: Growth Tactics Recap', author: 'Diego Alvarez', platform: 'Facebook', reach: '52K', reachValue: 52000, engagement: 7.6, sentiment: 'Neutral', date: 'Jul 17' },
];

export interface AiInsight {
  id: number;
  text: string;
  tag: string;
  impact: 'high' | 'medium' | 'low';
  icon: 'trend' | 'alert' | 'clock' | 'rocket';
}

export const aiInsights: AiInsight[] = [
  { id: 1, text: 'Educational content drives 2.3x more saves than other themes — scale this format next week.', tag: 'Opportunity', impact: 'high', icon: 'trend' },
  { id: 2, text: 'Sentiment dipped 8% on X after the pricing post — publish a follow-up explainer to recover.', tag: 'Risk', impact: 'high', icon: 'alert' },
  { id: 3, text: 'Best posting window this week: Tue–Thu, 9–11 AM. Predicted +14% engagement.', tag: 'Timing', impact: 'medium', icon: 'clock' },
  { id: 4, text: 'Product Demo engagement is rising — convert top performers into paid ad creatives.', tag: 'Action', impact: 'medium', icon: 'rocket' },
];
