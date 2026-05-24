import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-soft backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-brand-goldSoft/40 hover:shadow-glow",
        className,
      )}
      {...props}
    />
  );
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn("font-display text-xl text-brand-ink", className)} {...props} />
  );
}

export function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("mt-2 text-sm leading-relaxed text-brand-ink/65", className)} {...props} />;
}
