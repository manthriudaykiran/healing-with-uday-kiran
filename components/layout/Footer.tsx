import Link from "next/link";
import { Container } from "@/components/ui/container";
import { FOOTER_COLUMNS } from "@/modules/footer/footer.config";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-brand-beige">
      <Container className="grid grid-cols-1 gap-12 py-16 md:grid-cols-4">
        <div>
          <h3 className="font-display text-xl text-brand-ink">{siteConfig.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-brand-ink/65">
            Emotional intelligence as a performance system. Calm under pressure. Clarity in chaos.
          </p>
          <p className="mt-4 text-xs text-brand-ink/50">{siteConfig.contact.email}</p>
        </div>

        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              {col.title}
            </h4>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-ink/70 hover:text-brand-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <div className="border-t border-white/5">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-brand-ink/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Crafted with intention.</p>
        </Container>
      </div>
    </footer>
  );
}
