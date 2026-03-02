"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ConditionDetailPanel } from "./ConditionDetailPanel";

interface ConditionSection {
  heading: string;
  content: string;
}

interface Condition {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  sections: ConditionSection[];
}

interface ConditionCardProps {
  condition: Condition;
  index?: number;
}

export function ConditionCard({
  condition,
  index = 0,
}: ConditionCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08 }}
      >
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-expanded={isOpen}
          className="glass-panel p-5 sm:p-8 rounded-3xl block w-full text-left hover:bg-foreground/5 transition-colors duration-300 group cursor-pointer min-h-[48px]"
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-medium text-base sm:text-lg text-foreground leading-snug pr-2">
              {condition.title}
            </h3>
            <ArrowRight
              size={16}
              className="text-muted group-hover:text-foreground transition-colors shrink-0 mt-1"
            />
          </div>
          <p className="text-muted text-sm sm:text-[15px] leading-relaxed">
            {condition.shortDescription}
          </p>
        </button>
      </motion.div>

      <ConditionDetailPanel
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={condition.title}
        shortDescription={condition.shortDescription}
        sections={condition.sections}
      />
    </>
  );
}
