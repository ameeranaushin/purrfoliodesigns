import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Services | Purrfolio",
  description: "Tiered website packages for entrepreneurs, influencers, and business owners.",
};

export default function Services() {
  const tiers = [
    {
      name: "Starter",
      price: "INR 25,000 - 45,000",
      cadence: "One-time",
      features: [
        "5-page website",
        "Mobile responsive",
        "Contact form",
        "Basic SEO setup",
        "1 revision round",
        "WhatsApp enquiry button",
      ],
    },
    {
      name: "Growth",
      price: "INR 55,000 - 95,000",
      cadence: "One-time",
      features: [
        "Everything in Starter",
        "E-commerce / booking",
        "Instagram feed embed",
        "Lead capture to WhatsApp",
        "Google Analytics",
        "2 revision rounds",
      ],
    },
    {
      name: "Premium",
      price: "INR 1,20,000+",
      cadence: "One-time + retainer option",
      features: [
        "Everything in Growth",
        "Custom CRM / pipeline",
        "Automated lead flow",
        "Speed & SEO optimisation",
        "1 month free management",
        "Priority support",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-6 py-20 sm:py-24 max-w-6xl">
      <div className="mb-10">
        <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate hover:text-ink">
          Back to home
        </Link>
      </div>
      <div className="text-center mb-12 sm:mb-20">
        <p className="text-xs uppercase tracking-[0.3em] text-slate">Service tiers</p>
        <h1 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl md:text-6xl">Pricing built for modern brands.</h1>
        <p className="mt-6 text-base text-slate max-w-2xl mx-auto sm:text-lg">
          We work with entrepreneurs, social media influencers, and business owners to provide digitalized solutions that are clean, scalable, and conversion-ready.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {tiers.map((tier) => (
          <div key={tier.name} className="rounded-3xl border border-ink/10 bg-white/70 p-8">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate">
              <span>{tier.name}</span>
              <span>{tier.cadence}</span>
            </div>
            <p className="mt-6 text-2xl font-semibold text-ink">{tier.price}</p>
            <ul className="mt-6 space-y-3 text-sm text-slate border-t border-ink/10 pt-6">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-[32px] border border-ink/10 bg-navy px-8 py-12 text-sand text-center">
        <h2 className="text-2xl font-semibold sm:text-3xl">Not sure which tier fits?</h2>
        <p className="mt-4 text-sm text-sand/70 max-w-xl mx-auto sm:text-base">
          Share your goals and timeline, and we will map the right package before we start.
        </p>
        <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-sand px-6 py-3 text-xs uppercase tracking-[0.2em] text-ink hover:bg-white transition-colors">
          Start the conversation <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}