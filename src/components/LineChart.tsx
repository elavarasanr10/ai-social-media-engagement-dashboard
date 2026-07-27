import { useMemo } from 'react';
import type { TimePoint } from '@/data/analyticsData';

interface LineChartProps {
  series: { data: TimePoint[]; color: string; fillId: string; label?: string }[];
  height?: number;
  ySuffix?: string;
  showAxis?: boolean;
  className?: string;
}

export default function LineChart({
  series,
  height = 240,
  ySuffix = '',
  showAxis = true,
  className = '',
}: LineChartProps) {
  const { points, min, max, width } = useMemo(() => {
    const all = series.flatMap((s) => s.data);
    const vals = all.map((d) => d.value);
    const lo = Math.min(...vals);
    const hi = Math.max(...vals);
    const pad = (hi - lo) * 0.15 || 1;
    const min = Math.max(0, lo - pad);
    const max = hi + pad;
    const width = 600;
    const range = max - min || 1;
    const points = series.map((s) => {
      const pts = s.data.map((d, i) => {
        const x = (i / (s.data.length - 1)) * width;
        const y = height - ((d.value - min) / range) * (height - 24) - 12;
        return [x, y] as const;
      });
      const line = pts.map((p) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
      const area = `0,${height} ${line} ${width},${height}`;
      return { ...s, pts, line, area };
    });
    return { points, min, max, width };
  }, [series, height]);

  const ticks = 4;
  const tickVals = Array.from({ length: ticks + 1 }, (_, i) => min + ((max - min) / ticks) * i);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      className={`w-full ${className}`}
      fill="none"
    >
      <defs>
        {points.map((s) => (
          <linearGradient key={s.fillId} id={s.fillId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={s.color} stopOpacity="0.28" />
            <stop offset="100%" stopColor={s.color} stopOpacity="0" />
          </linearGradient>
        ))}
      </defs>

      {showAxis && tickVals.map((v, i) => {
        const y = height - ((v - min) / (max - min || 1)) * (height - 24) - 12;
        return (
          <g key={i}>
            <line x1="0" y1={y} x2={width} y2={y} stroke="rgba(148,163,184,0.10)" strokeWidth="1" />
            <text x="4" y={y - 4} fill="rgba(148,163,184,0.5)" fontSize="10" fontFamily="Inter, sans-serif">
              {Math.round(v)}{ySuffix}
            </text>
          </g>
        );
      })}

      {points.map((s) => (
        <g key={s.fillId}>
          <polygon points={s.area} fill={`url(#${s.fillId})`} />
          <polyline
            points={s.line}
            stroke={s.color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          {s.pts.map((p, i) => (
            i === s.pts.length - 1 && (
              <circle key={i} cx={p[0]} cy={p[1]} r="4" fill={s.color} stroke="#0a0f1c" strokeWidth="2" />
            )
          ))}
        </g>
      ))}
    </svg>
  );
}
