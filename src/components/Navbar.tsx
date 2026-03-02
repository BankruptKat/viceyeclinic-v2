"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Conditions", href: "/conditions" },
  { label: "Physicians", href: "/doctors" },
  { label: "Patient Info", href: "/patient-info" },
  { label: "FAQs", href: "/faqs" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pt-3 md:pt-6">
        <div className="container px-4">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`flex items-center justify-between px-4 md:px-6 py-2.5 md:py-3 rounded-full transition-all duration-500 ${
              isScrolled ? "glass-panel shadow-lg" : "glass-panel"
            }`}
          >
            {/* Logo */}
            <Link
              href="/"
              className="text-foreground font-semibold tracking-tight text-[15px] md:text-lg min-h-[44px] flex items-center"
            >
              Victoria Eye Care
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-300 py-2 ${
                    pathname === link.href
                      ? "text-foreground"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Theme Toggle + Mobile Toggle */}
            <div className="flex items-center gap-1 md:gap-2">
              <AnimatedThemeToggler className="hidden md:flex" />

              <Link
                href="/contact"
                className="hidden md:flex items-center justify-center px-5 py-2 rounded-full bg-foreground text-background text-sm font-semibold hover:scale-105 transition-transform"
              >
                Contact
              </Link>

              <AnimatedThemeToggler className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center" />

              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden text-foreground min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-expanded={mobileOpen}
                aria-label="Open navigation menu"
              >
                <Menu size={22} strokeWidth={1.5} />
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/60 backdrop-blur-xl flex flex-col items-center justify-center"
            style={{
              paddingTop: "env(safe-area-inset-top)",
              paddingBottom: "env(safe-area-inset-bottom)",
            }}
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-muted hover:text-foreground min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Close navigation menu"
            >
              <X size={28} strokeWidth={1.5} />
            </button>

            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-medium text-foreground tracking-tight min-h-[44px] flex items-center px-4"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 px-8 py-3.5 rounded-full bg-foreground text-background text-lg font-medium inline-block min-h-[48px] flex items-center justify-center"
                >
                  Contact Us
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
