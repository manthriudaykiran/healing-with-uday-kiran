import { Container, Eyebrow, Section } from "@/components/ui/container";
import { ContactForm } from "@/modules/contact/ContactForm";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "Contact", path: "/contact" });

export default function ContactPage() {
  return (
    <Section>
      <Container className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-3 font-display text-4xl text-brand-ink sm:text-5xl">
            Send a clear signal. We'll respond with a clear next step.
          </h1>
          <p className="mt-5 text-brand-ink/70">
            For program enquiries, private coaching, or workshops.
          </p>
          <div className="mt-8 space-y-2 text-sm text-brand-ink/70">
            <p>Email — {siteConfig.contact.email}</p>
            <p>Phone — {siteConfig.contact.phone}</p>
          </div>
        </div>
        <ContactForm />
      </Container>
    </Section>
  );
}
