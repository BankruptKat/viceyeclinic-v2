"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-20">
      <div className="container relative z-10 flex flex-col items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-[2.75rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6rem] leading-[0.95] font-semibold tracking-tight text-foreground mb-6 md:mb-8">
            Precision. <br className="md:hidden" />
            <span className="text-muted">Clarity.</span> <br className="md:hidden" />
            Care.
          </h1>

          <p className="text-base md:text-xl text-muted font-medium max-w-xl mx-auto mb-8 md:mb-12 leading-relaxed">
            Expert ophthalmology in Victoria, BC.
            <br className="hidden md:block" /> Advanced diagnostics. Trusted specialists.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-foreground text-background font-semibold tracking-tight hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300 min-h-[48px] text-base"
            >
              Book Consultation
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/conditions"
              className="text-muted hover:text-foreground transition-colors text-base font-medium px-6 py-3 min-h-[48px] flex items-center"
            >
              View Conditions
            </Link>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mt-16 md:mt-32"
        >
          {[
            { value: "25+", label: "Years Experience" },
            { value: "15k+", label: "Patients Treated" },
            { value: "99%", label: "Satisfaction" },
            { value: "04", label: "Specialists" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-semibold text-foreground mb-1 md:mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
