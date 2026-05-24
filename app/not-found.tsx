import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="grid min-h-[60vh] place-items-center text-center">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">404</p>
        <h1 className="mt-4 font-display text-5xl text-brand-ink">Off the path.</h1>
        <p className="mt-3 text-brand-ink/65">This page doesn't exist. Return to centre.</p>
        <Link href="/" className="mt-8 inline-block">
          <Button variant="primary">Back home</Button>
        </Link>
      </div>
    </section>
  );
}
