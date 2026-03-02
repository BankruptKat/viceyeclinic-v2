"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-10 md:py-12 border-t border-foreground/5 relative z-10" style={{ paddingBottom: "calc(2.5rem + env(safe-area-inset-bottom))" }}>
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-foreground tracking-tight">
              Victoria Eye Care
            </h3>
            <p className="text-sm text-muted">
              &copy; {new Date().getFullYear()} Ophthalmology Clinic.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted">
            <Link href="/conditions" className="hover:text-foreground transition-colors min-h-[44px] flex items-center">
              Conditions
            </Link>
            <Link href="/doctors" className="hover:text-foreground transition-colors min-h-[44px] flex items-center">
              Physicians
            </Link>
            <Link href="/faqs" className="hover:text-foreground transition-colors min-h-[44px] flex items-center">
              FAQs
            </Link>
            <Link href="/contact" className="hover:text-foreground transition-colors min-h-[44px] flex items-center">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
