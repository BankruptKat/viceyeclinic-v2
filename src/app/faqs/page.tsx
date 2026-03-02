"use client";

import { motion } from "framer-motion";
import FAQ from "@/components/FAQ";
import faqsData from "@/content/faqs.json";

export default function FAQsPage() {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-10 md:mb-16">
            <span className="text-blue-400 font-medium tracking-wide text-sm mb-2 block">
              Support
            </span>
            <h1 className="text-3xl md:text-5xl font-semibold text-foreground mb-3 md:mb-4 tracking-tight">
              Frequently Asked
            </h1>
            <p className="text-muted max-w-lg mx-auto text-[15px] md:text-base">
              Answers to common questions about your visit and our services.
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-3">
            {faqsData.map((faq, i) => (
              <FAQ
                key={i}
                question={faq.question}
                answer={faq.answer}
                index={i}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
