import { Container, Eyebrow, Section } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { TESTIMONIALS } from "@/modules/testimonials/testimonials.data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "Testimonials", path: "/testimonials" });

export default function TestimonialsPage() {
  return (
    <Section>
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Voices</Eyebrow>
          <h1 className="mt-3 font-display text-4xl text-brand-ink sm:text-6xl">
            What the work actually does.
          </h1>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <Card key={t.id}>
              <p className="font-display text-lg leading-relaxed text-brand-ink">"{t.body}"</p>
              <p className="mt-6 text-sm text-brand-ink/60">
                — <span className="font-medium text-brand-ink">{t.author}</span>
                {t.role && `, ${t.role}`}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
