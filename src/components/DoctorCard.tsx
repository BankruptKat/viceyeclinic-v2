"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Doctor {
  slug: string;
  name: string;
  title: string;
  role: string;
  image: string;
  specializations: string[];
}

interface DoctorCardProps {
  doctor: Doctor;
  index?: number;
}

export default function DoctorCard({ doctor, index = 0 }: DoctorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link href={`/doctors/${doctor.slug}`} className="block group">
        <div className="glass-panel rounded-3xl overflow-hidden hover:bg-foreground/5 transition-colors duration-300">
          {/* Portrait */}
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={doctor.image}
              alt={doctor.name}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 320px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>

          {/* Info */}
          <div className="p-4 md:p-5">
            <h3 className="text-base font-medium text-foreground mb-1">
              {doctor.name}
            </h3>
            <p className="text-sm text-muted mb-3">{doctor.role}</p>
            <div className="flex flex-wrap gap-1.5">
              {doctor.specializations.slice(0, 2).map((spec) => (
                <span
                  key={spec}
                  className="px-2.5 py-0.5 rounded-full bg-foreground/5 text-xs text-muted border border-foreground/10"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
