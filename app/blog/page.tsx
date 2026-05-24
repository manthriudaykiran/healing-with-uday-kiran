import { Container, Eyebrow, Section } from "@/components/ui/container";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "Blog", path: "/blog" });

const POSTS = [
  { title: "Calm is a skill, not a personality trait", excerpt: "Why regulation outperforms motivation.", tag: "Frameworks", date: "Apr 2026" },
  { title: "The 4-second gap", excerpt: "A protocol for hard conversations.", tag: "Leadership", date: "Mar 2026" },
  { title: "Emotional debt", excerpt: "The silent tax on your strategy.", tag: "Mindset", date: "Feb 2026" },
  { title: "When breathwork is a cop-out", excerpt: "Tools are not substitutes for confrontation.", tag: "Contrarian", date: "Jan 2026" },
];

export default function BlogPage() {
  return (
    <Section>
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Journal</Eyebrow>
          <h1 className="mt-3 font-display text-4xl text-brand-ink sm:text-6xl">
            Field notes from the practice.
          </h1>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {POSTS.map((p) => (
            <Card key={p.title}>
              <span className="text-xs uppercase tracking-[0.2em] text-brand-gold">{p.tag} · {p.date}</span>
              <CardTitle className="mt-3">{p.title}</CardTitle>
              <CardDescription>{p.excerpt}</CardDescription>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
