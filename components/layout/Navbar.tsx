"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PRIMARY_NAV } from "@/modules/navigation/nav.config";
import { TAGMANGO_URL, TAGMANGO_LABELS } from "@/modules/tagmango/redirect";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { useScrollY } from "@/hooks/useScrollY";
import { cn } from "@/lib/utils";

export function Navbar() {
  const scrolled = useScrollY(20);
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-brand-ivory/85 backdrop-blur-xl border-b border-white/5 shadow-soft"
          : "bg-transparent",
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-lg text-brand-ink">Healing with Uday Kiran</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {PRIMARY_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-brand-ink/75 transition-colors hover:text-brand-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href={TAGMANGO_URL} target="_blank" rel="noreferrer">
            <Button variant="gold" size="md">
              {TAGMANGO_LABELS.login}
            </Button>
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden text-brand-ink"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-brand-ivory border-t border-white/5"
          >
            <Container className="flex flex-col gap-4 py-6">
              {PRIMARY_NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-brand-ink/80 hover:text-brand-gold"
                >
                  {item.label}
                </Link>
              ))}
              <a href={TAGMANGO_URL} target="_blank" rel="noreferrer" className="mt-2">
                <Button variant="gold" className="w-full">
                  {TAGMANGO_LABELS.login}
                </Button>
              </a>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
