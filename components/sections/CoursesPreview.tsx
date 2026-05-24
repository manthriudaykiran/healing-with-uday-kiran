import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Eyebrow, Section } from "@/components/ui/container";
import { CourseCard } from "@/modules/courses/CourseCard";
import { COURSES } from "@/modules/courses/courses.data";
import { Button } from "@/components/ui/button";

export function CoursesPreview() {
  return (
    <Section className="bg-brand-beige/40">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Eyebrow>Programs</Eyebrow>
            <h2 className="mt-3 font-display text-3xl text-brand-ink sm:text-5xl">
              Structured paths. Not motivation.
            </h2>
            <p className="mt-4 text-brand-ink/70">
              Each program is a system — daily practices, frameworks, and feedback loops that
              compound over weeks.
            </p>
          </div>
          <Link href="/courses">
            <Button variant="outline">
              View all <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((c) => (
            <CourseCard key={c.slug} course={c} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
