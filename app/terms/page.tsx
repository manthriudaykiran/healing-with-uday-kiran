import { Container, Eyebrow, Section } from "@/components/ui/container";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "Terms & Conditions", path: "/terms" });

export default function TermsPage() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="mt-3 font-display text-4xl text-brand-ink sm:text-5xl">
          Terms & Conditions
        </h1>
        <div className="prose mt-8 max-w-none text-brand-ink/75">
          <p>By using this website and enrolling in our programs, you agree to the terms below.</p>
          <h2>Use of the site</h2>
          <p>This site provides information about programs and services. Content is for educational purposes and is not a substitute for medical advice.</p>
          <h2>Course delivery</h2>
          <p>Courses are delivered via our partner platform. Refunds, access, and billing follow that platform's policies in addition to these terms.</p>
          <h2>Liability</h2>
          <p>We make no guarantees of specific outcomes. Your transformation depends on your engagement with the practices.</p>
          <p className="text-sm text-brand-ink/50">Last updated: 2026</p>
        </div>
      </Container>
    </Section>
  );
}
