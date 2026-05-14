import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "About | Purrfolio Designs",
  description: "The story behind Purrfolio Designs. We build fast, beautiful websites with a bit of feline flair.",
};

export default function About() {
  return (
    <div className="container mx-auto px-4 py-20 sm:py-24 max-w-4xl">
      <div className="mb-10">
        <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate hover:text-ink">
          Back to home
        </Link>
      </div>
      <div className="grid md:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-center mb-16 sm:mb-24">
        <div className="aspect-square bg-white/70 rounded-full flex items-center justify-center border border-ink/10">
          <Image src="/logo.jpeg" alt="Purrfolio" width={180} height={180} className="rounded-full" />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-6 sm:text-4xl md:text-5xl">We're the team behind the cat.</h1>
          <div className="space-y-4 text-slate text-base leading-relaxed sm:text-lg">
            <p>
              We are a focused design and development company built to serve entrepreneurs, social media influencers, and business owners who need results, not fluff.
            </p>
            <p>
              Our team blends clear strategy, sharp creative direction, and high-performance builds so every project ships on time, on brand, and ready to scale.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16 sm:mb-24">
        <h2 className="text-3xl font-bold mb-8">Why "Purrfolio"?</h2>
        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl text-lg text-soft-lavender/80 leading-relaxed italic">
          <p>
            Cats are decisive, intentional, and have incredibly high standards. I think good design should be the same. 
            Plus, "Portfolio" is boring. We take design very seriously. Unlike cats, who take everything seriously only when food is involved.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-12 mb-16 sm:mb-24">
        <div>
          <h3 className="text-2xl font-bold mb-6">Core Values</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-cat-pink font-bold">•</span>
              <div>
                <strong className="text-white block">Precision</strong>
                <span className="text-soft-lavender/70">Every pixel earns its place.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cat-pink font-bold">•</span>
              <div>
                <strong className="text-white block">Personality</strong>
                <span className="text-soft-lavender/70">Design that reflects the real you, not a template.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cat-pink font-bold">•</span>
              <div>
                <strong className="text-white block">Speed</strong>
                <span className="text-soft-lavender/70">Like a cat knocking something off a shelf. Decisive. Swift.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cat-pink font-bold">•</span>
              <div>
                <strong className="text-white block">Transparency</strong>
                <span className="text-soft-lavender/70">Clear timelines, honest pricing, no hidden surprises.</span>
              </div>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-6">The Toolkit</h3>
          <div className="flex flex-wrap gap-3">
            {['Figma', 'Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Webflow', 'Shopify'].map(tool => (
              <span key={tool} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8 sm:text-4xl">Let's craft something amazing.</h2>
        <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-deep-dark px-10 py-5 rounded-full font-bold text-lg hover:bg-soft-lavender transition-all">
          Work With Me <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}