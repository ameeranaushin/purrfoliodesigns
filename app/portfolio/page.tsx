import { ExternalLink } from "lucide-react";

export const metadata = {
  title: "Portfolio | Purrfolio",
  description: "Selected launches across SaaS, luxury retail, and B2B sectors.",
};

export default function Portfolio() {
  const projects = [
    {
      name: "100x Motors",
      niche: "SaaS Platform",
      services: "Product UX / Web Design / Build",
      brief: "Positioned a high-growth fleet operations platform with a new IA and faster onboarding flow.",
      features: "Conversion-focused IA, UX systems, performance tuning",
      outcome: "Sharper demo-to-signup flow and clearer pricing communication.",
      url: "https://100xmotors.app",
    },
    {
      name: "Ottis Perfumery",
      niche: "Perfume Brand",
      services: "Brand Story / Ecommerce UX",
      brief: "Elevated a luxury fragrance brand with editorial storytelling and refined product discovery.",
      features: "Luxury UI, product storytelling, ecommerce UX",
      outcome: "Improved product engagement and premium positioning.",
      url: "https://ottisperfumery.com",
    },
    {
      name: "Coolmade Co.",
      niche: "B2B Website",
      services: "Website Strategy / Lead UX",
      brief: "Built a confident enterprise-ready site with clean segmentation and lead-focused content paths.",
      features: "Lead capture paths, service architecture, CMS-ready",
      outcome: "Clearer enterprise messaging and improved inbound quality.",
      url: "https://coolmadeco.com",
    }
  ];

  return (
    <div className="container mx-auto px-6 py-20 sm:py-24 max-w-6xl">
      <div className="mb-10">
        <a href="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate hover:text-ink">
          Back to home
        </a>
      </div>
      <div className="mb-12 sm:mb-20">
        <p className="text-xs uppercase tracking-[0.3em] text-slate">Selected work</p>
        <h1 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl md:text-6xl">Three recent launches.</h1>
        <p className="mt-6 text-base text-slate max-w-2xl sm:text-lg">
          Built for entrepreneurs, social media influencers, and business owners ready to scale their digital presence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.name} className="group flex flex-col rounded-3xl border border-ink/10 bg-white/70 p-8">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate">
              <span>{project.niche}</span>
              <span className="h-9 w-9 rounded-full border border-ink/10 bg-sand" />
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-ink">{project.name}</h2>
              <p className="mt-2 text-sm text-slate">{project.brief}</p>
            </div>
            <div className="mt-6 text-sm text-slate">
              <p className="font-semibold text-ink">Scope</p>
              <p>{project.services}</p>
              <p className="mt-4 font-semibold text-ink">Key features</p>
              <p>{project.features}</p>
            </div>
            <div className="mt-6 border-t border-ink/10 pt-6 text-sm text-slate">
              <p className="font-semibold text-ink">Outcome</p>
              <p>{project.outcome}</p>
              <a href={project.url} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink hover:text-navy">
                Visit live site <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}