"use client";
import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost";
  asChild?: boolean;
};

export function Button({
  className = "",
  variant = "default",
  asChild = false,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";
  const sizes = "h-9 px-4 py-2";
  const variants: Record<string, string> = {
    default: "bg-primary text-primary-foreground hover:opacity-90",
    outline: "border bg-background hover:bg-accent",
    ghost: "hover:bg-accent",
  };

  const classes = `${base} ${sizes} ${variants[variant]} ${className}`.trim();

  if (asChild) {
    // Expect child to be an anchor or other element; clone to pass className
    const child = React.Children.only(props.children) as React.ReactElement;
    return React.cloneElement(child, {
      className: `${child.props.className ?? ""} ${classes}`.trim(),
    });
  }

  return <button className={classes} {...props} />;
}


