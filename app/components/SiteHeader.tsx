"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-ink/10 bg-sand/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full border border-ink/15 bg-white/80 flex items-center justify-center overflow-hidden">
            <video src="/animated-logo.mp4" autoPlay loop muted playsInline className="h-10 w-10 object-cover" />
          </div>
          <div className="leading-tight">
            <span className="block text-xs uppercase tracking-[0.2em] text-slate">Company</span>
            <span className="block text-lg font-semibold">Purrfolio</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate">
          <Link href="/portfolio" className="hover:text-ink transition-colors">Work</Link>
          <Link href="/services" className="hover:text-ink transition-colors">Services</Link>
          <Link href="/about" className="hover:text-ink transition-colors">About</Link>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs uppercase tracking-[0.2em] text-sand hover:bg-navy transition-colors">
            Contact
            <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 bg-white/80 text-ink"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-ink/10 bg-sand">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4 text-sm font-medium text-ink">
            <Link href="/portfolio" className="py-1" onClick={() => setOpen(false)}>Work</Link>
            <Link href="/services" className="py-1" onClick={() => setOpen(false)}>Services</Link>
            <Link href="/about" className="py-1" onClick={() => setOpen(false)}>About</Link>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs uppercase tracking-[0.2em] text-sand hover:bg-navy transition-colors" onClick={() => setOpen(false)}>
              Contact
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
