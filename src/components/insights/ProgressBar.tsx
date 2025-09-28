interface ProgressBarProps {
  label: string;
  value: number;
  max?: number;
  color?: string;
  showPercentage?: boolean;
  className?: string;
}

export function ProgressBar({
  label,
  value,
  max = 100,
  color = "bg-primary",
  showPercentage = true,
  className = "",
}: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className={`flex items-center justify-between ${className}`}>
      <span className="text-sm">{label}</span>
      <div className="flex items-center gap-2">
        <div className="w-24 bg-muted rounded-full h-2">
          <div
            className={`${color} h-2 rounded-full transition-all duration-300`}
            style={{ width: `${percentage}%` }}
          />
        </div>
        {showPercentage && (
          <span className="text-sm font-medium w-8">{Math.round(percentage)}%</span>
        )}
      </div>
    </div>
  );
}
