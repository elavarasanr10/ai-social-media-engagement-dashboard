import {
  Instagram, Linkedin, Youtube, Twitter, Facebook,
  Radio, Activity, UserPlus, Smile, Brain,
  BookOpen, GraduationCap, MonitorPlay,
  ThumbsUp, Minus, ThumbsDown,
  TrendingUp, AlertTriangle, Clock, Rocket,
  type LucideIcon,
} from 'lucide-react';
import type { PlatformName, Sentiment } from '@/data/dashboardData';

const platformMap: Record<PlatformName, LucideIcon> = {
  Instagram,
  LinkedIn: Linkedin,
  YouTube: Youtube,
  X: Twitter,
  Facebook,
};

export function PlatformIcon({ name, className }: { name: PlatformName; className?: string }) {
  const Icon = platformMap[name];
  return <Icon className={className} />;
}

export const kpiIcons: Record<string, LucideIcon> = {
  reach: Radio,
  engagement: Activity,
  followers: UserPlus,
  sentiment: Smile,
  ai: Brain,
};

export const themeIcons: Record<string, LucideIcon> = {
  book: BookOpen,
  tutorial: GraduationCap,
  demo: MonitorPlay,
};

export const insightIcons: Record<string, LucideIcon> = {
  trend: TrendingUp,
  alert: AlertTriangle,
  clock: Clock,
  rocket: Rocket,
};

export function sentimentIcon(s: Sentiment): LucideIcon {
  if (s === 'Positive') return ThumbsUp;
  if (s === 'Negative') return ThumbsDown;
  return Minus;
}
