"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Future: POST to /api/contact (Resend / CRM). For now simulate.
    await new Promise((r) => setTimeout(r, 700));
    setStatus("sent");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <Field label="Your name" name="name" />
      <Field label="Email" name="email" type="email" />
      <Field label="What would you like to work on?" name="message" textarea />
      <Button type="submit" variant="primary" size="lg" disabled={status !== "idle"}>
        {status === "idle" && "Send message"}
        {status === "sending" && "Sending..."}
        {status === "sent" && "Received. We'll be in touch."}
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
}) {
  const cls =
    "w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-brand-ink placeholder:text-brand-ink/40 outline-none backdrop-blur-md transition focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30";
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-brand-ink/60">
        {label}
      </span>
      {textarea ? (
        <textarea name={name} rows={5} required className={cls} />
      ) : (
        <input name={name} type={type} required className={cls} />
      )}
    </label>
  );
}
