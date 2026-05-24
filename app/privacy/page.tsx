import { Container, Eyebrow, Section } from "@/components/ui/container";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "Privacy Policy", path: "/privacy" });

export default function PrivacyPage() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="mt-3 font-display text-4xl text-brand-ink sm:text-5xl">Privacy Policy</h1>
        <div className="prose mt-8 max-w-none text-brand-ink/75">
          <p>
            We respect your privacy. This page outlines what data we collect, how it is used,
            and your rights regarding it.
          </p>
          <h2>Data we collect</h2>
          <p>Contact form submissions, enrollment information via our partner platform, and basic analytics.</p>
          <h2>How we use it</h2>
          <p>To respond to enquiries, deliver programs, and improve the experience of this site.</p>
          <h2>Your rights</h2>
          <p>You can request access, correction, or deletion of your data at any time by writing to us.</p>
          <p className="text-sm text-brand-ink/50">Last updated: 2026</p>
        </div>
      </Container>
    </Section>
  );
}
