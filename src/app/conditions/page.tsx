"use client";

import { motion } from "framer-motion";
import { ConditionCard } from "@/components/ConditionCard";
import conditionsData from "@/content/conditions.json";

export default function ConditionsPage() {
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
              Expertise
            </span>
            <h1 className="text-3xl md:text-5xl font-semibold text-foreground mb-3 md:mb-4 tracking-tight">
              Conditions
            </h1>
            <p className="text-muted max-w-lg mx-auto text-[15px] md:text-base">
              Learn about common eye conditions we diagnose and treat.
            </p>
          </div>

          {/* Condition Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {conditionsData.map((condition, i) => (
              <ConditionCard
                key={condition.slug}
                condition={condition}
                index={i}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
