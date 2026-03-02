"use client";

import { motion } from "framer-motion";
import DoctorCard from "@/components/DoctorCard";
import doctorsData from "@/content/doctors.json";

export default function DoctorsPage() {
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
              Team
            </span>
            <h1 className="text-3xl md:text-5xl font-semibold text-foreground mb-3 md:mb-4 tracking-tight">
              Our Physicians
            </h1>
            <p className="text-muted max-w-lg mx-auto text-[15px] md:text-base">
              Meet our team of experienced ophthalmologists.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto">
            {doctorsData.map((doctor, i) => (
              <DoctorCard key={doctor.slug} doctor={doctor} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
