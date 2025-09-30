import * as React from "react";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "secondary" | "destructive" | "outline";
};

export function Badge({ className = "", variant = "default", ...props }: BadgeProps) {
  const variants: Record<string, string> = {
    default: "rounded-md bg-primary text-primary-foreground px-2 py-1 text-xs",
    secondary: "rounded-md bg-secondary text-secondary-foreground px-2 py-1 text-xs",
    destructive: "rounded-md bg-destructive text-destructive-foreground px-2 py-1 text-xs",
    outline: "rounded-md border border-input bg-background px-2 py-1 text-xs",
  };
  return <span className={`${variants[variant]} ${className}`.trim()} {...props} />;
}


