import { Badge } from "@/components/ui/badge";

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  badges?: string[];
  icon?: React.ReactNode;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  className?: string;
}

export function MetricCard({
  title,
  value,
  subtitle,
  badges = [],
  icon,
  trend,
  className = "",
}: MetricCardProps) {
  return (
    <div className={`bg-card p-6 rounded-lg border ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
          {subtitle && (
            <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
          )}
          {badges.length > 0 && (
            <div className="flex items-center gap-2 mt-2">
              {badges.map((badge, index) => (
                <Badge key={index} variant="secondary">
                  {badge}
                </Badge>
              ))}
            </div>
          )}
          {trend && (
            <div className="flex items-center gap-1 mt-2">
              <span
                className={`text-sm font-medium ${
                  trend.isPositive ? "text-green-600" : "text-red-600"
                }`}
              >
                {trend.isPositive ? "+" : ""}{trend.value}
              </span>
              <span className="text-xs text-muted-foreground">vs last period</span>
            </div>
          )}
        </div>
        {icon && (
          <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
