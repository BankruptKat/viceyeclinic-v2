"use client";

import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import doctorsData from "@/content/doctors.json";

export default function DoctorDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const doctor = doctorsData.find((d) => d.slug === slug);

  if (!doctor) return notFound();

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-20">
      <div className="container">
        <Link
          href="/doctors"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-8 min-h-[44px]"
        >
          <ChevronLeft className="w-4 h-4" />
          Physicians
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Profile Header */}
          <div className="mb-16 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Portrait */}
              <div className="glass-panel rounded-3xl overflow-hidden shrink-0 w-48 md:w-56">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover object-top"
                    sizes="240px"
                    priority
                  />
                </div>
              </div>

              {/* Info */}
              <div className="text-center md:text-left">
                <span className="text-blue-400 font-medium tracking-wide text-sm mb-2 block">
                  {doctor.role}
                </span>
                <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 tracking-tight">
                  {doctor.name}
                </h1>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {doctor.specializations.map((spec) => (
                    <span
                      key={spec}
                      className="px-3 py-1 rounded-full bg-foreground/5 text-xs text-muted border border-foreground/10"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="glass-panel p-5 md:p-8 rounded-3xl">
              <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">About</h2>
              <div className="space-y-4">
                {doctor.bio.map((paragraph, i) => (
                  <p key={i} className="text-[15px] md:text-base text-muted leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Credentials & Affiliations */}
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {doctor.credentials.length > 0 && (
              <div className="glass-panel p-5 md:p-8 rounded-3xl">
                <h2 className="text-base md:text-lg font-semibold text-foreground mb-4">
                  Credentials
                </h2>
                <ul className="space-y-3">
                  {doctor.credentials.map((cred, i) => (
                    <li key={i} className="text-[15px] text-muted flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-blue-400 shrink-0 mt-2" />
                      {cred}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {doctor.affiliations.length > 0 && (
              <div className="glass-panel p-5 md:p-8 rounded-3xl">
                <h2 className="text-base md:text-lg font-semibold text-foreground mb-4">
                  Affiliations
                </h2>
                <ul className="space-y-3">
                  {doctor.affiliations.map((aff, i) => (
                    <li key={i} className="text-[15px] text-muted flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-blue-400 shrink-0 mt-2" />
                      {aff}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
