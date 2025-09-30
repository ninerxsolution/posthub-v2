"use client";
import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost" | "destructive";
  size?: "sm" | "default" | "lg";
  asChild?: boolean;
};

export function Button({
  className = "",
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";
  const sizes: Record<string, string> = {
    sm: "h-8 px-3 text-xs",
    default: "h-9 px-4 py-2",
    lg: "h-10 px-8",
  };
  const variants: Record<string, string> = {
    default: "bg-primary text-primary-foreground hover:opacity-90",
    outline: "border bg-background hover:bg-accent",
    ghost: "hover:bg-accent",
    destructive: "bg-destructive text-destructive-foreground hover:opacity-90",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`.trim();

  if (asChild) {
    // Expect child to be an anchor or other element; clone to pass className
    const child = React.Children.only(props.children) as React.ReactElement;
    return React.cloneElement(child, {
      className: `${child.props.className ?? ""} ${classes}`.trim(),
    });
  }

  return <button className={classes} {...props} />;
}


