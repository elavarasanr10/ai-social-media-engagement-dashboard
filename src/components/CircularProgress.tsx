interface CircularProgressProps {
  value: number;
  max?: number;
  size?: number;
  stroke?: number;
  className?: string;
}

export default function CircularProgress({
  value, max = 100, size = 52, stroke = 5, className = '',
}: CircularProgressProps) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = Math.min(value / max, 1);
  const offset = c * (1 - pct);

  return (
    <svg width={size} height={size} className={className}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="currentColor" strokeWidth={stroke} opacity="0.15" />
      <circle
        cx={size / 2} cy={size / 2} r={r} fill="none" stroke="currentColor" strokeWidth={stroke}
        strokeLinecap="round" strokeDasharray={c} strokeDashoffset={offset}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{ transition: 'stroke-dashoffset 1s cubic-bezier(.22,1,.36,1)' }}
      />
    </svg>
  );
}
