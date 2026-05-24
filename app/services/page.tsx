import { Container, Eyebrow, Section } from "@/components/ui/container";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { CTA } from "@/components/sections/CTA";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "Healing Services", path: "/services" });

const SERVICES = [
  {
    title: "1:1 Transformation",
    body: "Private deep work over 12 weeks. Diagnostic-led. Founder-tier focus.",
  },
  {
    title: "Emotional Reset Intensive",
    body: "A 3-day immersive to break compounding patterns of overwhelm and reactivity.",
  },
  {
    title: "Leadership Coaching",
    body: "Quarterly engagement for senior operators navigating scale and conflict.",
  },
  {
    title: "Group Cohorts",
    body: "Small-group programs that combine structure, peer pressure, and accountability.",
  },
  {
    title: "Corporate Workshops",
    body: "Tailored sessions for founding teams. Practical frameworks, not lectures.",
  },
  {
    title: "Private Retreats",
    body: "Curated, invitation-only retreats for full nervous-system reset.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Section>
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Services</Eyebrow>
            <h1 className="mt-3 font-display text-4xl text-brand-ink sm:text-6xl">
              Choose your container.
            </h1>
            <p className="mt-5 text-brand-ink/70">
              Different operators need different structures. Pick the one matched to your
              current pressure load.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Card key={s.title}>
                <CardTitle>{s.title}</CardTitle>
                <CardDescription>{s.body}</CardDescription>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
      <CTA />
    </>
  );
}
