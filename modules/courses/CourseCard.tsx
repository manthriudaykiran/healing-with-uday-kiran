import { ArrowUpRight, Check } from "lucide-react";
import type { Course } from "@/types";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CourseCard({ course }: { course: Course }) {
  return (
    <Card className={cn("flex flex-col", course.featured && "ring-1 ring-brand-gold/40")}>
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.2em] text-brand-gold">{course.duration}</span>
        {course.featured && (
          <span className="rounded-full bg-brand-gold/15 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-brand-gold">
            Flagship
          </span>
        )}
      </div>
      <CardTitle className="mt-4">{course.title}</CardTitle>
      <CardDescription>{course.summary}</CardDescription>

      <ul className="mt-6 space-y-2">
        {course.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-sm text-brand-ink/75">
            <Check className="mt-0.5 h-4 w-4 text-brand-emerald" />
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-center justify-between">
        <span className="font-display text-2xl text-brand-ink">{course.price}</span>
        <a href={course.externalUrl} target="_blank" rel="noreferrer">
          <Button variant="primary" size="sm">
            Enroll <ArrowUpRight className="h-4 w-4" />
          </Button>
        </a>
      </div>
    </Card>
  );
}
