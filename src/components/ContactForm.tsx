"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-panel p-8 rounded-[2rem] text-center"
      >
        <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent</h3>
        <p className="text-sm text-muted">
          We&apos;ll get back to you as soon as possible.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="glass-panel rounded-2xl overflow-hidden">
        <div className="p-4 flex items-center gap-3 border-b border-foreground/5">
          <label htmlFor="contact-name" className="text-sm text-muted w-14 shrink-0">Name</label>
          <input
            id="contact-name"
            type="text"
            required
            autoComplete="name"
            placeholder="Full name"
            className="flex-1 bg-transparent text-foreground placeholder:text-foreground/20 outline-none text-base py-2 min-h-[44px]"
          />
        </div>
        <div className="p-4 flex items-center gap-3 border-b border-foreground/5">
          <label htmlFor="contact-email" className="text-sm text-muted w-14 shrink-0">Email</label>
          <input
            id="contact-email"
            type="email"
            required
            autoComplete="email"
            placeholder="email@example.com"
            className="flex-1 bg-transparent text-foreground placeholder:text-foreground/20 outline-none text-base py-2 min-h-[44px]"
          />
        </div>
        <div className="p-4 flex items-center gap-3">
          <label htmlFor="contact-phone" className="text-sm text-muted w-14 shrink-0">Phone</label>
          <input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            placeholder="250-000-0000"
            className="flex-1 bg-transparent text-foreground placeholder:text-foreground/20 outline-none text-base py-2 min-h-[44px]"
          />
        </div>
      </div>

      <div className="glass-panel rounded-2xl overflow-hidden">
        <div className="p-4">
          <label htmlFor="contact-message" className="sr-only">Message</label>
          <textarea
            id="contact-message"
            required
            rows={4}
            placeholder="How can we help you?"
            className="w-full bg-transparent text-foreground placeholder:text-foreground/20 outline-none resize-none text-base leading-relaxed"
          />
        </div>
      </div>

      <p className="text-sm text-muted leading-relaxed">
        As a specialist practice, you will need a referral from your family
        doctor or optometrist.
      </p>

      <button
        type="submit"
        className="group w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-foreground text-background font-semibold tracking-tight hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300 min-h-[48px] text-base"
      >
        Send Message
        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}
