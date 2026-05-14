import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-20 sm:gap-24 sm:pb-24">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="absolute -top-40 right-0 h-72 w-72 rounded-full bg-accent/25 blur-3xl" />
        <div className="absolute -bottom-32 left-0 h-64 w-64 rounded-full bg-navy/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{ backgroundImage: "url('/paw-bg.jpeg')", backgroundSize: "240px" }}
        />

        <div className="container mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate">Digital experience company</p>
            <h1 className="mt-6 text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-6xl">
              Premium web experiences built to <span className="font-display text-navy">grow modern brands</span>.
            </h1>
            <p className="mt-6 max-w-xl text-base text-slate sm:text-lg">
              We work with entrepreneurs, social media influencers, and business owners to provide digitalized solutions that feel elevated and convert with clarity.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-xs uppercase tracking-[0.2em] text-sand hover:bg-navy transition-colors">
                Start a project
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#work" className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-xs uppercase tracking-[0.2em] text-ink hover:border-ink/40 transition-colors">
                View selected work
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6 text-sm text-slate sm:grid-cols-3">
              <div className="rounded-2xl border border-ink/10 bg-white/70 p-4">
                <p className="text-xl font-semibold text-ink">7+ yrs</p>
                <p>Digital delivery</p>
              </div>
              <div className="rounded-2xl border border-ink/10 bg-white/70 p-4">
                <p className="text-xl font-semibold text-ink">18 launches</p>
                <p>Across SaaS and ecommerce</p>
              </div>
              <div className="rounded-2xl border border-ink/10 bg-white/70 p-4">
                <p className="text-xl font-semibold text-ink">On-time</p>
                <p>Delivery track record</p>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-ink/10 bg-white/70 p-8 shadow-[0_40px_80px_-60px_rgba(18,24,33,0.7)]">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate">
              <span>Current focus</span>
              <span>2026</span>
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-ink">
              Full-stack brand systems
            </h3>
            <p className="mt-3 text-sm text-slate sm:text-base">
              We align product, design, and engineering to ship cohesive experiences across landing pages, onboarding, and conversion flows.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              {[
                "Positioning and UX strategy",
                "Premium visual identity systems",
                "Performance-first engineering",
                "Conversion-driven copy and motion",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  <span className="text-slate">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate">Service tiers</p>
            <h2 className="mt-4 text-2xl font-semibold text-ink sm:text-3xl">Clear packages for every growth stage.</h2>
          </div>
          <p className="max-w-md text-sm text-slate">
            Choose the tier that fits your launch and scale pace. Every plan is designed to look premium and perform.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {[
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
          ].map((tier) => (
            <div key={tier.name} className="rounded-3xl border border-ink/10 bg-white/70 p-8">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate">
                <span>{tier.name}</span>
                <span>{tier.cadence}</span>
              </div>
              <p className="mt-6 text-2xl font-semibold text-ink">{tier.price}</p>
              <div className="mt-6 border-t border-ink/10 pt-6">
                <ul className="space-y-3 text-sm text-slate">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate">Selected work</p>
            <h2 className="mt-4 text-2xl font-semibold text-ink sm:text-3xl">Recent launches across three industries.</h2>
          </div>
          <p className="max-w-md text-sm text-slate">A mix of SaaS, luxury retail, and B2B manufacturing experiences.</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {[
            {
              name: "100x Motors",
              url: "https://100xmotors.app",
              label: "SaaS Platform",
              summary: "Positioned a high-growth fleet operations tool with crisp onboarding and conversion-focused IA.",
              tags: ["SaaS", "Product UX", "Growth"],
            },
            {
              name: "Ottis Perfumery",
              url: "https://ottisperfumery.com",
              label: "Perfume Brand",
              summary: "Elevated a luxury fragrance brand with cinematic storytelling and refined ecommerce UX.",
              tags: ["Luxury", "Ecommerce", "Brand"],
            },
            {
              name: "Coolmade Co.",
              url: "https://coolmadeco.com",
              label: "B2B Website",
              summary: "Built a confident, enterprise-ready site with clear product segmentation and lead paths.",
              tags: ["B2B", "Sales Enablement", "Content"],
            },
          ].map((project) => (
            <div key={project.name} className="group rounded-3xl border border-ink/10 bg-white/70 p-6 transition-transform hover:-translate-y-2">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate">
                <span>{project.label}</span>
                <span className="h-8 w-8 rounded-full border border-ink/10 bg-sand" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-ink">{project.name}</h3>
              <p className="mt-3 text-sm text-slate">{project.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-ink/10 px-3 py-1 text-xs text-slate">
                    {tag}
                  </span>
                ))}
              </div>
              <a href={project.url} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink hover:text-navy">
                Visit live site <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="container mx-auto px-6 max-w-6xl">
        <div className="rounded-[36px] border border-ink/10 bg-navy px-8 py-12 text-sand md:px-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-sand/70">How we work</p>
              <h2 className="mt-4 text-2xl font-semibold text-sand sm:text-3xl">A tight, senior-led process.</h2>
            </div>
            <p className="max-w-md text-sm text-sand/70">
              You get a clear roadmap, weekly updates, and a polished launch without bloated timelines.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { step: "01", title: "Discovery", desc: "We align on strategy, audience, and success metrics." },
              { step: "02", title: "Design", desc: "We prototype, refine, and build the final UI system." },
              { step: "03", title: "Build", desc: "We ship a production-ready experience with QA support." },
            ].map((item) => (
              <div key={item.step} className="rounded-3xl border border-sand/10 bg-sand/5 p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-sand/70">{item.step}</p>
                <h3 className="mt-4 text-xl font-semibold text-sand">{item.title}</h3>
                <p className="mt-2 text-sm text-sand/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 max-w-4xl text-center">
        <div className="rounded-[36px] border border-ink/10 bg-white/80 px-8 py-14">
          <p className="text-xs uppercase tracking-[0.3em] text-slate">Ready when you are</p>
          <h2 className="mt-4 text-2xl font-semibold text-ink sm:text-3xl">Let's build a presence that feels unmistakably yours.</h2>
          <p className="mt-4 text-sm text-slate">
            Tell us about your goals and we'll map out the fastest path to launch.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-xs uppercase tracking-[0.2em] text-sand hover:bg-navy transition-colors">
            Contact the studio
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
