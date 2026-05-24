"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { Container, Eyebrow, Section } from "@/components/ui/container";
import { TESTIMONIALS } from "@/modules/testimonials/testimonials.data";

export function TestimonialsCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 5500);
    return () => clearInterval(id);
  }, []);
  const t = TESTIMONIALS[i];

  return (
    <Section className="bg-gradient-to-b from-white to-brand-beige">
      <Container>
        <div className="text-center">
          <Eyebrow>Words from the room</Eyebrow>
          <h2 className="mt-3 font-display text-3xl text-brand-ink sm:text-5xl">
            Real shifts. Quietly verified.
          </h2>
        </div>

        <div className="relative mx-auto mt-14 max-w-3xl">
          <Quote className="absolute -left-2 -top-2 h-10 w-10 text-brand-gold/30" />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl bg-white/70 p-10 text-center shadow-soft backdrop-blur"
            >
              <p className="font-display text-xl leading-relaxed text-brand-ink sm:text-2xl">
                "{t.body}"
              </p>
              <footer className="mt-6 text-sm text-brand-ink/70">
                — <span className="font-medium text-brand-ink">{t.author}</span>
                {t.role && <span className="text-brand-ink/50">, {t.role}</span>}
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-6 flex justify-center gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Testimonial ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-8 bg-brand-gold" : "w-2 bg-brand-ink/20"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
