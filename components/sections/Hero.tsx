"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { TAGMANGO_URL } from "@/modules/tagmango/redirect";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-calm-gradient pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="absolute inset-0 bg-emerald-glow opacity-70" aria-hidden />
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <Eyebrow className="mb-6 inline-flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5" /> Emotional Mastery for High Performers
          </Eyebrow>
          <h1 className="font-display text-4xl leading-[1.1] text-brand-ink sm:text-6xl">
            Healing is not soft.
            <br />
            <span className="text-brand-gold">It is the system that holds your performance.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-brand-ink/70 sm:text-lg">
            Frameworks, programs, and personal practices for founders, managers, and leaders
            who refuse to choose between depth and execution.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/courses">
              <Button size="lg" variant="primary">
                Explore Programs <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href={TAGMANGO_URL} target="_blank" rel="noreferrer">
              <Button size="lg" variant="outline">
                Access Member Area
              </Button>
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
