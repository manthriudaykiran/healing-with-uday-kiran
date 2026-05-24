import { Container, Eyebrow, Section } from "@/components/ui/container";
import { CourseCard } from "@/modules/courses/CourseCard";
import { COURSES } from "@/modules/courses/courses.data";
import { CTA } from "@/components/sections/CTA";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "Courses", path: "/courses" });

export default function CoursesPage() {
  return (
    <>
      <Section>
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Programs</Eyebrow>
            <h1 className="mt-3 font-display text-4xl text-brand-ink sm:text-6xl">
              Structured. Sequential. Sustainable.
            </h1>
            <p className="mt-5 text-brand-ink/70">
              All enrollments and course delivery are managed through our partner platform.
              You'll be redirected on enroll.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {COURSES.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>
        </Container>
      </Section>
      <CTA title="Not sure which to pick?" description="Book a call. We'll choose together." href="/contact" cta="Talk to us" />
    </>
  );
}
