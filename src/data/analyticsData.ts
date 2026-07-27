export interface TimePoint {
  label: string;
  value: number;
}

// Daily engagement rate over the last 30 days (Jul 1–30)
export const engagementOverTime: TimePoint[] = [
  { label: 'Jul 1', value: 8.2 }, { label: 'Jul 2', value: 9.1 }, { label: 'Jul 3', value: 8.7 },
  { label: 'Jul 4', value: 9.8 }, { label: 'Jul 5', value: 10.2 }, { label: 'Jul 6', value: 9.4 },
  { label: 'Jul 7', value: 10.6 }, { label: 'Jul 8', value: 11.1 }, { label: 'Jul 9', value: 10.3 },
  { label: 'Jul 10', value: 11.5 }, { label: 'Jul 11', value: 10.8 }, { label: 'Jul 12', value: 11.9 },
  { label: 'Jul 13', value: 11.2 }, { label: 'Jul 14', value: 12.3 }, { label: 'Jul 15', value: 11.6 },
  { label: 'Jul 16', value: 12.8 }, { label: 'Jul 17', value: 12.0 }, { label: 'Jul 18', value: 9.4 },
  { label: 'Jul 19', value: 11.8 }, { label: 'Jul 20', value: 12.1 }, { label: 'Jul 21', value: 13.9 },
  { label: 'Jul 22', value: 14.7 }, { label: 'Jul 23', value: 15.2 }, { label: 'Jul 24', value: 13.6 },
  { label: 'Jul 25', value: 12.9 }, { label: 'Jul 26', value: 13.4 }, { label: 'Jul 27', value: 14.1 },
  { label: 'Jul 28', value: 13.8 }, { label: 'Jul 29', value: 14.6 }, { label: 'Jul 30', value: 15.3 },
];

// Previous period engagement (for comparison overlay)
export const engagementPrevPeriod: TimePoint[] = [
  { label: 'Jul 1', value: 7.1 }, { label: 'Jul 2', value: 7.8 }, { label: 'Jul 3', value: 7.4 },
  { label: 'Jul 4', value: 8.2 }, { label: 'Jul 5', value: 8.6 }, { label: 'Jul 6', value: 7.9 },
  { label: 'Jul 7', value: 8.8 }, { label: 'Jul 8', value: 9.2 }, { label: 'Jul 9', value: 8.5 },
  { label: 'Jul 10', value: 9.4 }, { label: 'Jul 11', value: 8.9 }, { label: 'Jul 12', value: 9.8 },
  { label: 'Jul 13', value: 9.1 }, { label: 'Jul 14', value: 10.0 }, { label: 'Jul 15', value: 9.5 },
  { label: 'Jul 16', value: 10.4 }, { label: 'Jul 17', value: 9.7 }, { label: 'Jul 18', value: 8.1 },
  { label: 'Jul 19', value: 9.6 }, { label: 'Jul 20', value: 9.9 }, { label: 'Jul 21', value: 11.2 },
  { label: 'Jul 22', value: 11.8 }, { label: 'Jul 23', value: 12.1 }, { label: 'Jul 24', value: 10.9 },
  { label: 'Jul 25', value: 10.3 }, { label: 'Jul 26', value: 10.7 }, { label: 'Jul 27', value: 11.3 },
  { label: 'Jul 28', value: 11.0 }, { label: 'Jul 29', value: 11.7 }, { label: 'Jul 30', value: 12.2 },
];

export interface ReachByPlatform {
  week: string;
  Instagram: number;
  LinkedIn: number;
  YouTube: number;
  X: number;
  Facebook: number;
}

// Reach (in thousands) by platform, grouped by week over last 30 days
export const reachByPlatform30d: ReachByPlatform[] = [
  { week: 'Week 1', Instagram: 92, LinkedIn: 68, YouTube: 78, X: 52, Facebook: 41 },
  { week: 'Week 2', Instagram: 104, LinkedIn: 74, YouTube: 86, X: 58, Facebook: 44 },
  { week: 'Week 3', Instagram: 118, LinkedIn: 82, YouTube: 95, X: 61, Facebook: 48 },
  { week: 'Week 4', Instagram: 106, LinkedIn: 86, YouTube: 121, X: 69, Facebook: 57 },
];

export interface PeriodCompare {
  metric: string;
  thisPeriod: number;
  lastPeriod: number;
  unit: string;
  higherIsBetter: boolean;
}

export const periodComparison: PeriodCompare[] = [
  { metric: 'Total Reach', thisPeriod: 1250, lastPeriod: 1080, unit: 'K', higherIsBetter: true },
  { metric: 'Engagement Rate', thisPeriod: 11.8, lastPeriod: 9.6, unit: '%', higherIsBetter: true },
  { metric: 'Net Followers', thisPeriod: 4280, lastPeriod: 3610, unit: '', higherIsBetter: true },
  { metric: 'Avg. Post Saves', thisPeriod: 642, lastPeriod: 518, unit: '', higherIsBetter: true },
  { metric: 'Response Time', thisPeriod: 1.4, lastPeriod: 2.1, unit: 'h', higherIsBetter: false },
];
