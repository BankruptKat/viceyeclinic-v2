"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import patientInfo from "@/content/patient-info.json";

export default function PatientInfoPage() {
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
              Before Your Visit
            </span>
            <h1 className="text-3xl md:text-5xl font-semibold text-foreground mb-3 md:mb-4 tracking-tight">
              Patient Information
            </h1>
            <p className="text-muted max-w-lg mx-auto text-[15px] md:text-base">
              Everything you need to know before your appointment.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
            {/* ── First Visit ── */}
            <div className="glass-panel p-5 md:p-8 rounded-3xl">
              <h2 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                {patientInfo.firstVisit.title}
              </h2>
              <p className="text-[15px] text-muted leading-relaxed mb-5">
                {patientInfo.firstVisit.description}
              </p>

              <div className="flex items-center gap-2 mb-6">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="text-[15px] text-muted">
                  Duration: {patientInfo.firstVisit.duration}
                </span>
              </div>

              {/* Steps */}
              <div className="space-y-3 mb-8">
                {patientInfo.firstVisit.steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-xs font-medium text-blue-400 mt-0.5 w-5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[15px] text-foreground leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>

              {/* Notes */}
              <div className="border-t border-foreground/5 pt-6 mb-6">
                <h3 className="text-sm font-medium text-foreground mb-3">
                  Important Notes
                </h3>
                <ul className="space-y-2">
                  {patientInfo.firstVisit.notes.map((note, i) => (
                    <li
                      key={i}
                      className="text-[15px] text-muted flex items-start gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-blue-400 shrink-0 mt-2.5" />
                      {note}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What to Bring */}
              <div className="border-t border-foreground/5 pt-6">
                <h3 className="text-sm font-medium text-foreground mb-3">
                  What to Bring
                </h3>
                <ul className="space-y-2">
                  {patientInfo.firstVisit.whatToBring.map((item, i) => (
                    <li
                      key={i}
                      className="text-[15px] text-muted flex items-start gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-blue-400 shrink-0 mt-2.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── Consultation ── */}
            <div className="glass-panel p-5 md:p-8 rounded-3xl">
              <h2 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                {patientInfo.consultation.title}
              </h2>
              <p className="text-[15px] text-muted leading-relaxed mb-5">
                {patientInfo.consultation.description}
              </p>

              <div className="flex items-center gap-2 mb-6">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="text-[15px] text-muted">
                  Duration: {patientInfo.consultation.duration}
                </span>
              </div>

              {/* Steps */}
              <div className="space-y-3 mb-8">
                {patientInfo.consultation.steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-xs font-medium text-blue-400 mt-0.5 w-5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[15px] text-foreground leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>

              {/* Notes */}
              <div className="border-t border-foreground/5 pt-6">
                <h3 className="text-sm font-medium text-foreground mb-3">
                  Important Notes
                </h3>
                <ul className="space-y-2">
                  {patientInfo.consultation.notes.map((note, i) => (
                    <li
                      key={i}
                      className="text-[15px] text-muted flex items-start gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-blue-400 shrink-0 mt-2.5" />
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── Costs ── */}
            <div className="glass-panel p-5 md:p-8 rounded-3xl">
              <h2 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                {patientInfo.costs.title}
              </h2>
              <p className="text-[15px] text-muted leading-relaxed mb-6">
                {patientInfo.costs.description}
              </p>

              <h3 className="text-sm font-medium text-foreground mb-3">
                Uninsured Services
              </h3>
              <ul className="space-y-2">
                {patientInfo.costs.uninsuredExamples.map((example, i) => (
                  <li
                    key={i}
                    className="text-[15px] text-muted flex items-start gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-400 shrink-0 mt-2.5" />
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
