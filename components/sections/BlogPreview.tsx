import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, Eyebrow, Section } from "@/components/ui/container";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import type { BlogPost } from "@/types";

const POSTS: BlogPost[] = [
  {
    slug: "calm-is-a-skill",
    title: "Calm is a skill, not a personality trait",
    excerpt: "Why nervous system regulation outperforms motivation in every long-term game.",
    date: "Apr 2026",
    readTime: "5 min",
    tag: "Frameworks",
  },
  {
    slug: "reaction-vs-response",
    title: "The 4-second gap between reaction and response",
    excerpt: "A protocol for founders who keep regretting hard conversations.",
    date: "Mar 2026",
    readTime: "7 min",
    tag: "Leadership",
  },
  {
    slug: "emotional-debt",
    title: "Emotional debt: the silent tax on your decisions",
    excerpt: "How unprocessed emotions compound into bad strategy, slowly.",
    date: "Feb 2026",
    readTime: "6 min",
    tag: "Mindset",
  },
];

export function BlogPreview() {
  return (
    <Section>
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <Eyebrow>Journal</Eyebrow>
            <h2 className="mt-3 font-display text-3xl text-brand-ink sm:text-5xl">
              Notes on practice.
            </h2>
          </div>
          <Link href="/blog" className="text-sm text-brand-ink/70 hover:text-brand-gold">
            All articles →
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {POSTS.map((p) => (
            <Link key={p.slug} href={`/blog`}>
              <Card>
                <span className="text-xs uppercase tracking-[0.2em] text-brand-gold">{p.tag}</span>
                <CardTitle className="mt-3">{p.title}</CardTitle>
                <CardDescription>{p.excerpt}</CardDescription>
                <div className="mt-6 flex items-center justify-between text-xs text-brand-ink/55">
                  <span>
                    {p.date} · {p.readTime}
                  </span>
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
