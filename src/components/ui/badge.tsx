import * as React from "react";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "secondary";
};

export function Badge({ className = "", variant = "default", ...props }: BadgeProps) {
  const variants: Record<string, string> = {
    default: "rounded-md bg-muted px-2 py-1 text-xs",
    secondary: "rounded-md bg-accent px-2 py-1 text-xs",
  };
  return <span className={`${variants[variant]} ${className}`.trim()} {...props} />;
}


