import { Container, Eyebrow, Section } from "@/components/ui/container";
import { CTA } from "@/components/sections/CTA";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  description: "Uday Kiran — emotional intelligence coach for founders and leaders.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Section>
        <Container className="max-w-3xl">
          <Eyebrow>About</Eyebrow>
          <h1 className="mt-3 font-display text-4xl text-brand-ink sm:text-6xl">
            I don't teach calm. I install it.
          </h1>
          <div className="prose prose-lg mt-10 max-w-none text-brand-ink/75">
            <p>
              I'm Uday Kiran. I work with founders, managers, and high-pressure operators who
              are tired of choosing between depth and execution.
            </p>
            <p>
              My work is built on one belief — emotional intelligence is not a soft skill. It is
              a performance system. Awareness without action is useless. Motivation collapses
              under stress. Systems hold.
            </p>
            <p>
              Over the last decade I've worked with thousands of professionals across India and
              abroad — through one-on-one programs, intensives, and live cohorts. The work is
              the same: rebuild your relationship with pressure, response, and recovery.
            </p>
            <h2>What you get from working with me</h2>
            <ul>
              <li>Frameworks you can apply the same day, not metaphors.</li>
              <li>Daily protocols that compound across weeks.</li>
              <li>An honest mirror — calibrated to leaders, not patients.</li>
            </ul>
          </div>
        </Container>
      </Section>
      <CTA />
    </>
  );
}
