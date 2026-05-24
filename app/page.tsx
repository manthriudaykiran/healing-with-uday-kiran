import { Hero } from "@/components/sections/Hero";
import { CoursesPreview } from "@/components/sections/CoursesPreview";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CoursesPreview />
      <TestimonialsCarousel />
      <BlogPreview />
      <CTA />
    </>
  );
}
