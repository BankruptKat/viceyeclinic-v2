"use client";

import { useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ConditionSection {
  heading: string;
  content: string;
}

interface ConditionDetailPanelProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  shortDescription: string;
  sections: ConditionSection[];
}

export function ConditionDetailPanel({
  isOpen,
  onClose,
  title,
  shortDescription,
  sections,
}: ConditionDetailPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleEscape]);

  useEffect(() => {
    if (isOpen && panelRef.current) {
      panelRef.current.focus();
    }
  }, [isOpen]);

  const panel = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.aside
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={`${title} details`}
            tabIndex={-1}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="
              fixed z-[101]
              inset-x-3 bottom-3 top-auto max-h-[85vh]
              md:inset-x-auto md:bottom-3 md:right-3 md:top-3 md:max-h-none md:w-full md:max-w-md
              overflow-y-auto rounded-3xl
              glass-panel
              shadow-[0_24px_50px_rgba(0,0,0,0.2)]
            "
            style={{ paddingBottom: "calc(1.5rem + env(safe-area-inset-bottom))" }}
          >
            <div className="flex h-full flex-col gap-4 p-5 md:p-6">
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-blue-400 font-medium">
                    Eye Condition
                  </p>
                  <h3 className="mt-2 text-xl md:text-2xl font-semibold text-foreground leading-snug">
                    {title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close panel"
                  className="glass-pill rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center text-muted hover:text-foreground transition-colors cursor-pointer shrink-0"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Short description */}
              <p className="text-[15px] leading-relaxed text-muted">
                {shortDescription}
              </p>

              {/* Sections */}
              {sections.map((section, i) => (
                <div key={i} className="mt-1">
                  <p className="text-[13px] uppercase tracking-[0.14em] text-muted/65 mb-2 font-medium">
                    {section.heading}
                  </p>
                  <p className="text-[15px] leading-relaxed text-muted">
                    {section.content}
                  </p>
                </div>
              ))}

              {/* Bottom note */}
              <div className="mt-2 shrink-0 rounded-2xl glass-pill p-4">
                <p className="text-[13px] uppercase tracking-[0.14em] text-muted/65 font-medium">
                  Need More Information?
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  Book a consultation with our ophthalmologists for a
                  personalized assessment and treatment plan.
                </p>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );

  if (typeof window === "undefined") return null;
  return createPortal(panel, document.body);
}
