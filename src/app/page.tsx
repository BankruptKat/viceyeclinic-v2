"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import { ConditionCard } from "@/components/ConditionCard";
import DoctorCard from "@/components/DoctorCard";
import FAQ from "@/components/FAQ";
import conditionsData from "@/content/conditions.json";
import doctorsData from "@/content/doctors.json";
import faqsData from "@/content/faqs.json";

export default function Home() {
  const featuredConditions = conditionsData.slice(0, 6);
  const featuredFAQs = faqsData.slice(0, 4);

  return (
    <div>
      <Hero />

      {/* ── Conditions ── */}
      <section className="py-16 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {/* Section Heading */}
            <div className="text-center mb-10 md:mb-16">
              <span className="text-blue-400 font-medium tracking-wide text-sm mb-2 block">
                Expertise
              </span>
              <h2 className="text-2xl md:text-4xl font-semibold text-foreground mb-3 md:mb-4 tracking-tight">
                Conditions We Treat
              </h2>
              <p className="text-muted max-w-lg mx-auto text-[15px] md:text-base">
                Comprehensive care across the full spectrum of ophthalmology.
              </p>
            </div>

            {/* Condition Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {featuredConditions.map((condition, i) => (
                <ConditionCard
                  key={condition.slug}
                  condition={condition}
                  index={i}
                />
              ))}
            </div>

            <div className="text-center mt-8 md:mt-10">
              <Link
                href="/conditions"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors group min-h-[44px] px-4"
              >
                View all conditions
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Physicians ── */}
      <section className="py-16 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-10 md:mb-16">
              <span className="text-blue-400 font-medium tracking-wide text-sm mb-2 block">
                Team
              </span>
              <h2 className="text-2xl md:text-4xl font-semibold text-foreground mb-3 md:mb-4 tracking-tight">
                Our Physicians
              </h2>
              <p className="text-muted max-w-lg mx-auto text-[15px] md:text-base">
                Meet our team of experienced ophthalmologists.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto">
              {doctorsData.map((doctor, i) => (
                <DoctorCard key={doctor.slug} doctor={doctor} index={i} />
              ))}
            </div>

            <div className="text-center mt-8 md:mt-10">
              <Link
                href="/doctors"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors group min-h-[44px] px-4"
              >
                View all physicians
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-16 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-10 md:mb-16">
              <span className="text-blue-400 font-medium tracking-wide text-sm mb-2 block">
                Support
              </span>
              <h2 className="text-2xl md:text-4xl font-semibold text-foreground mb-3 md:mb-4 tracking-tight">
                Common Questions
              </h2>
              <p className="text-muted max-w-lg mx-auto text-[15px] md:text-base">
                Answers to frequently asked questions about our services.
              </p>
            </div>

            <div className="max-w-2xl mx-auto space-y-3">
              {featuredFAQs.map((faq, i) => (
                <FAQ
                  key={i}
                  question={faq.question}
                  answer={faq.answer}
                  index={i}
                />
              ))}
            </div>

            <div className="text-center mt-8 md:mt-10">
              <Link
                href="/faqs"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors group min-h-[44px] px-4"
              >
                View all FAQs
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
