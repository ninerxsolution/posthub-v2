"use client";

interface ChartData {
  label: string;
  value: number;
  color?: string;
}

interface ChartProps {
  data: ChartData[];
  type?: "bar" | "line";
  height?: number;
  className?: string;
}

export function Chart({ data, type = "bar", height = 200, className = "" }: ChartProps) {
  const maxValue = Math.max(...data.map(d => d.value));
  
  if (type === "line") {
    return (
      <div className={`w-full ${className}`} style={{ height: `${height}px` }}>
        <svg width="100%" height="100%" viewBox={`0 0 400 ${height}`}>
          <polyline
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            points={data.map((d, i) => 
              `${(i / (data.length - 1)) * 400},${height - (d.value / maxValue) * (height - 40)}`
            ).join(" ")}
          />
          {data.map((d, i) => (
            <circle
              key={i}
              cx={(i / (data.length - 1)) * 400}
              cy={height - (d.value / maxValue) * (height - 40)}
              r="4"
              fill="hsl(var(--primary))"
            />
          ))}
        </svg>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`} style={{ height: `${height}px` }}>
      <div className="h-full flex items-end justify-between gap-2">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2 flex-1">
            <div
              className={`w-full rounded-t transition-all duration-300 hover:opacity-80 ${
                item.color || "bg-primary"
              }`}
              style={{ height: `${(item.value / maxValue) * (height - 40)}px` }}
            />
            <span className="text-xs text-muted-foreground">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
