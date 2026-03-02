"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import siteData from "@/content/site.json";

export default function ContactPage() {
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
              Get in Touch
            </span>
            <h1 className="text-3xl md:text-5xl font-semibold text-foreground mb-3 md:mb-4 tracking-tight">
              Contact
            </h1>
            <p className="text-muted max-w-lg mx-auto text-[15px] md:text-base">
              We look forward to hearing from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 max-w-4xl mx-auto">
            {/* Left: Contact Info */}
            <div className="space-y-4 md:space-y-6">
              {/* Phone & Fax */}
              <div className="glass-panel p-5 md:p-6 rounded-3xl">
                <h3 className="text-sm font-medium text-foreground mb-4">Phone</h3>
                <a
                  href={`tel:${siteData.phone}`}
                  className="flex items-center gap-3 text-[15px] text-muted hover:text-foreground transition-colors mb-3 min-h-[44px]"
                >
                  <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                  {siteData.phone}
                </a>
                <div className="flex items-center gap-3 text-[15px] text-muted">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Fax: {siteData.fax}</span>
                </div>
              </div>

              {/* Address */}
              <div className="glass-panel p-5 md:p-6 rounded-3xl">
                <h3 className="text-sm font-medium text-foreground mb-4">
                  Location
                </h3>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-foreground">
                      Suite {siteData.address.suite},{" "}
                      {siteData.address.street}
                    </p>
                    <p className="text-sm text-muted">
                      {siteData.address.city}, {siteData.address.province}{" "}
                      {siteData.address.postalCode}
                    </p>
                    <p className="text-xs text-muted mt-1">
                      {siteData.address.landmark}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="glass-panel p-5 md:p-6 rounded-3xl">
                <h3 className="text-sm font-medium text-foreground mb-4">Hours</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-sm text-muted">
                    <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                    {siteData.officeHours.weekdays}
                  </div>
                  <p className="text-sm text-muted pl-7">
                    {siteData.officeHours.friday}
                  </p>
                  <p className="text-xs text-muted pl-7">
                    {siteData.officeHours.holidays}
                  </p>
                </div>
                <p className="text-xs text-muted mt-4 border-t border-foreground/5 pt-4">
                  Phone hours: {siteData.phoneHours.weekdays}.{" "}
                  {siteData.phoneHours.friday}.
                </p>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-6">
                Send a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
