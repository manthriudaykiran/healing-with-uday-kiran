import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function CTA({
  eyebrow = "Begin",
  title = "Stop reacting. Start leading.",
  description = "Join the next cohort and install an emotional operating system that holds under pressure.",
  href = "/courses",
  cta = "Browse Programs",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  href?: string;
  cta?: string;
}) {
  return (
    <section className="py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-brand-ink px-8 py-16 text-center text-brand-ivory sm:px-16 sm:py-24">
          <div className="absolute inset-0 bg-emerald-glow opacity-30" aria-hidden />
          <Eyebrow className="relative">{eyebrow}</Eyebrow>
          <h2 className="relative mt-4 font-display text-3xl sm:text-5xl">{title}</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-brand-ivory/70">{description}</p>
          <div className="relative mt-8 flex justify-center">
            <Link href={href}>
              <Button variant="gold" size="lg">
                {cta} <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
