"use client";

import Link from "next/link";
import { Mail, Clock } from "lucide-react";
import { useState } from "react";

const Instagram = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      form.reset();
      window.location.href = "/thank-you";
      return;
    }

    setStatus("error");
  };

  return (
    <div className="container mx-auto px-4 py-20 sm:py-24 max-w-6xl">
      <div className="mb-10">
        <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate hover:text-ink">
          Back to home
        </Link>
      </div>
      <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16">
        <div>
          <h1 className="text-3xl font-bold mb-6 leading-tight sm:text-4xl md:text-5xl">Let's build something worth <span className="text-brand-purple">bookmarking</span>.</h1>
          <p className="text-base text-soft-lavender/80 mb-10 sm:text-lg sm:mb-12">
            Fill out the form to tell us a bit about what you're looking for, or shoot over an email directly.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                <Mail className="w-5 h-5 text-cat-pink" />
              </div>
              <div>
                <p className="text-sm text-soft-lavender/60">Email Us</p>
                <a href="mailto:purrfoliodesigns@gmail.com" className="text-lg font-bold hover:text-brand-purple transition-colors">purrfoliodesigns@gmail.com</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                <Instagram className="w-5 h-5 text-cat-pink" />
              </div>
              <div>
                <p className="text-sm text-soft-lavender/60">Follow</p>
                <a href="https://instagram.com/purrfoliodesigns" className="text-lg font-bold hover:text-brand-purple transition-colors">@purrfoliodesigns</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                <Clock className="w-5 h-5 text-cat-pink" />
              </div>
              <div>
                <p className="text-sm text-soft-lavender/60">Response Time</p>
                <p className="text-lg font-bold">Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/70 border border-ink/10 rounded-3xl p-8 md:p-12">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate">Name</label>
                <input required type="text" id="name" name="name" className="w-full bg-white/90 border border-ink/10 rounded-xl px-4 py-3 focus:outline-none focus:border-ink/40 transition-colors text-ink placeholder:text-slate/60" placeholder="Jane Doe" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate">Email</label>
                <input required type="email" id="email" name="email" className="w-full bg-white/90 border border-ink/10 rounded-xl px-4 py-3 focus:outline-none focus:border-ink/40 transition-colors text-ink placeholder:text-slate/60" placeholder="jane@example.com" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="project" className="text-sm font-medium text-slate">Project Type</label>
                <select id="project" name="project" className="w-full bg-white/90 border border-ink/10 rounded-xl px-4 py-3 focus:outline-none focus:border-ink/40 transition-colors text-ink appearance-none">
                  <option>Website Design & Dev</option>
                  <option>Brand Identity</option>
                  <option>Website Audit</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="budget" className="text-sm font-medium text-slate">Budget Range (Optional)</label>
                <select id="budget" name="budget" className="w-full bg-white/90 border border-ink/10 rounded-xl px-4 py-3 focus:outline-none focus:border-ink/40 transition-colors text-ink appearance-none">
                  <option>Under INR 25,000</option>
                  <option>INR 25,000 - 45,000</option>
                  <option>INR 45,000 - 95,000</option>
                  <option>INR 1,20,000+</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate">Message</label>
              <textarea required id="message" name="message" rows={5} className="w-full bg-white/90 border border-ink/10 rounded-xl px-4 py-3 focus:outline-none focus:border-ink/40 transition-colors text-ink placeholder:text-slate/60 resize-none" placeholder="Tell us about what you're working on..."></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-ink text-sand font-bold rounded-xl px-8 py-4 hover:bg-navy transition-colors disabled:opacity-60"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            <p className="text-xs text-center text-slate/70 mt-4">
              Your message will land safely. We'll get back to you within 24 hours.
            </p>
            {status === "error" && (
              <p className="text-xs text-center text-red-600">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>

      <div className="mt-32 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">We know you have questions. So do cats.<br/>But we actually answer ours.</h2>
        <div className="space-y-4">
          {[
            {
              q: "How long does a typical website project take?",
              a: "Most custom builds take 3-5 weeks from kickoff to launch. Landing pages can be delivered in just a few days."
            },
            {
              q: "Do you only work with creators?",
              a: "Nope! We also love helping small businesses, agencies, and ecommerce stores level up their digital presence."
            },
            {
              q: "What platforms do you build on?",
              a: "Depending on your needs, we use Next.js/React, Framer, Webflow, or Shopify. We pick the tool that best fits your goals."
            }
          ].map((faq, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">{faq.q}</h3>
              <p className="text-soft-lavender/70">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}