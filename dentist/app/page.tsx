import Image from "next/image";
import { ChevronRight, Phone, Clock, MapPin, Search, Star, MessageSquare, ArrowRight, ShieldCheck, Sparkles, Activity, Stethoscope, Droplet, HeartPulse } from "lucide-react";

const PineappleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2v4M8 3l2 3M16 3l-2 3" />
    <path d="M8 8.16A4 4 0 0 0 12 7a4 4 0 0 0 4 1.16C16 14 14 22 12 22s-4-8-4-13.84Z" />
    <path d="M8 12c1.33-1 2.67-1 4 0s2.67 1 4 0" />
    <path d="M8 16c1.33-1 2.67-1 4 0s2.67 1 4 0" />
  </svg>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800 font-sans selection:bg-[#F2C94C] selection:text-[#0A192F]">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="flex items-center gap-2 text-[#0A192F]">
          <PineappleIcon className="w-8 h-8 text-[#F2C94C]" />
          <span className="text-xl font-bold tracking-tight">Pineapple Dental</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-semibold text-[#0A192F]">
          <a href="#services" className="hover:text-[#F2C94C] transition-colors">Services</a>
          <a href="#story" className="hover:text-[#F2C94C] transition-colors">Our Story</a>
          <a href="#gallery" className="hover:text-[#F2C94C] transition-colors">Gallery</a>
        </div>
        <button className="bg-[#F2C94C] text-[#0A192F] px-6 py-2.5 rounded-full font-bold text-sm transition-transform hover:scale-105 shadow-sm">
          Book Appointment
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 py-20 md:py-32 w-full gap-12 bg-white overflow-hidden">
        {/* Subtle Pineapple Background in Header */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/pineappple1.jpeg" 
            alt="Pineapple Texture Background" 
            fill 
            className="object-cover opacity-[0.10] mix-blend-multiply"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between w-full gap-12 relative z-10">
          <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
            <p className="text-[#F2C94C] font-semibold uppercase tracking-wider text-sm flex items-center justify-center md:justify-start gap-2">
              <PineappleIcon className="w-4 h-4" /> A Fresh Approach to your Smile
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#0A192F] leading-tight tracking-tight">
              Experience The <br/> <span className="text-[#F2C94C]">Gold Standard</span> <br/> in Dental Care.
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Welcome to Pineapple Dental Clinic, where elite professional aesthetics meet gentle, state-of-the-art dentistry in the heart of Kolkata.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 justify-center md:justify-start">
              <button className="bg-[#0A192F] text-white px-8 py-3.5 rounded-full font-bold text-base transition-transform hover:scale-105 shadow-lg shadow-[#0A192F]/20 flex items-center gap-2">
                Book Your Appointment <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex-1 relative w-full max-w-lg mb-10 md:mb-0">
            {/* Using pineapple3.jpeg as an aesthetic golden accent frame */}
            <div className="absolute -inset-4 z-0 rounded-[2rem] overflow-hidden transform rotate-3 scale-105 hidden sm:block">
               <Image 
                  src="/pineapple3.jpeg" 
                  alt="Golden Accent" 
                  fill 
                  className="object-cover opacity-30 mix-blend-color-burn" 
               />
               <div className="absolute inset-0 bg-[#F2C94C]/40 backdrop-blur-sm"></div>
            </div>
            <div className="absolute -inset-2 z-0 rounded-[2rem] overflow-hidden transform rotate-2 sm:hidden">
               <div className="absolute inset-0 bg-[#F2C94C]/40 backdrop-blur-sm"></div>
            </div>
            
            {/* Professional shot */}
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative z-10 w-full h-[400px] md:h-[600px] border-4 border-white/50">
              <Image 
                src="/dental_pic2 copy.webp" 
                alt="Clinic Environment" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEO / Google Sim Section */}
      <section className="bg-slate-50 py-16 px-6 border-y border-gray-100 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-sm font-semibold text-gray-500 mb-8 uppercase tracking-widest">Kolkata's Top Rated Clinic</p>
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
              <Search className="text-gray-400 w-5 h-5" />
              <div className="flex-1 bg-gray-50 rounded-full py-2 px-4 text-sm text-gray-600 font-medium">
                Best Dentist in Kolkata
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm">
                <span className="font-bold text-[#0A192F]">Sponsored</span>
                <span className="text-gray-400">&middot;</span>
                <span className="text-gray-500">https://www.pineappledental.com</span>
              </div>
              <h3 className="text-2xl font-medium text-blue-700 hover:underline cursor-pointer">
                Pineapple Dental Clinic | Dr. Varun Bagaria
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Experience the gold standard in dental care. Specializing in Orthodontics, Smile Design, Braces, and Aligners. Book a consultation today.
              </p>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center text-[#F2C94C]">
                  <Star className="fill-current w-4 h-4" />
                  <Star className="fill-current w-4 h-4" />
                  <Star className="fill-current w-4 h-4" />
                  <Star className="fill-current w-4 h-4" />
                  <Star className="fill-current w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-gray-500">5.0 (248 Reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <p className="text-[#F2C94C] font-bold uppercase tracking-widest text-sm mb-4">Precision & Artistry</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A192F] tracking-tight">Our Premium Services</h2>
          </div>
          <p className="text-gray-600 text-lg max-w-md border-l-2 border-[#F2C94C] pl-6 py-2">
            Combining advanced medical technology with artistic precision to deliver a strong, beautiful, and lasting smile.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {[
            { title: "Aligner Center", desc: "Known for Smile Transformations via Phialigner. State-of-the-art clear aligners for perfectly straight, functional teeth.", icon: Sparkles },
            { title: "General Dentistry", desc: "Offers comprehensive, high-quality dental care including routine exams and preventative scaling.", icon: Stethoscope },
            { title: "Patient Focus", desc: "Specializes in personalized orthodontic treatment, delivering tailored care focusing on comfort and precision.", icon: HeartPulse },
            { title: "Implant Services", desc: "Permanent, natural-looking tooth replacement with precision-guided technology. Regain full function and confidence.", icon: ShieldCheck },
            { title: "Cosmetic Dentistry", desc: "Custom veneers, professional whitening, and comprehensive smile design for a flawless, radiant appearance.", icon: Droplet },
            { title: "Emergency Care", desc: "Prompt, empathetic, and effective treatment for sudden, unexpected, and painful dental complications.", icon: Activity }
          ].map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="group relative flex flex-col items-start p-8 rounded-none border-b border-gray-200 hover:bg-slate-50 transition-colors duration-300">
                <div className="w-12 h-12 flex items-center justify-center text-[#0A192F] mb-4 md:mb-6 group-hover:text-[#F2C94C] transition-colors">
                  <Icon strokeWidth={1.5} className="w-8 h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#0A192F] mb-4 tracking-tight">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-8 flex-grow hidden md:block">{service.desc}</p>
                <a href="#contact" className="text-sm font-bold text-[#0A192F] uppercase tracking-wider flex items-center gap-2 group-hover:text-[#F2C94C] transition-colors mt-auto">
                  Learn More <ArrowRight strokeWidth={2} className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* Our Story */}
      <section id="story" className="pt-24 pb-16 px-6 bg-[#0A192F] text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22currentColor%22 stroke-width=%221%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M12 2v4M8 3l2 3M16 3l-2 3 M8 8.16A4 4 0 0 0 12 7a4 4 0 0 0 4 1.16C16 14 14 22 12 22s-4-8-4-13.84Z%22 /%3E%3C/svg%3E")', backgroundSize: '80px' }}></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="lg:w-1/2 flex flex-col gap-6">
            <span className="text-[#F2C94C] font-semibold tracking-widest uppercase text-sm">About The Clinic</span>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Elevating Dental Care with Dr. Varun Bagaria</h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Dr. Bagaria's philosophy bridges the gap between meticulous medical science and compassionate patient care. We established Pineapple Dental to create an environment where anxiety is replaced by assurance and every treatment is a masterpiece.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Why the pineapple? Historically a symbol of warmth, welcome, and hospitality—our subtle signature represents our commitment to treating every patient like an honored guest in a pristine, state-of-the-art clinic.
            </p>
          </div>
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <div className="relative rounded-2xl overflow-hidden h-[300px] w-full shadow-lg">
              <Image src="/dental_pics.webp" alt="Clinical Precision" fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-3 sm:mt-12">
              <div className="relative rounded-2xl overflow-hidden h-[300px] w-full shadow-lg">
                <Image src="/dentist_img.jpg" alt="Dr. Varun Bagaria" fill className="object-cover object-top" />
              </div>
              <div className="text-center">
                <p className="font-bold text-[#F2C94C] tracking-wide">Dr. Varun Bagaria</p>
                <p className="text-xs text-slate-300">Key Dentist & Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Bromelain Advantage Section */}
      <section className="pt-16 pb-24 px-6 bg-slate-50 border-b border-gray-200 relative overflow-hidden">
        {/* Using pineapple2.jpeg as a subtle texture overlay instead of SVG */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/pineapple2.jpeg" 
            alt="Pineapple Pattern" 
            fill 
            className="object-cover opacity-[0.10] grayscale mix-blend-multiply"
          />
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="md:w-1/2 relative mb-12 md:mb-0">
            <div className="absolute -inset-4 z-0 rounded-[2rem] overflow-hidden transform -rotate-3 scale-100 hidden sm:block">
               <Image 
                  src="/pineapple3.jpeg" 
                  alt="Golden Accent Background" 
                  fill 
                  className="object-cover opacity-30 mix-blend-color-burn" 
               />
               <div className="absolute inset-0 bg-[#F2C94C]/30 backdrop-blur-[2px]"></div>
            </div>
            <div className="rounded-[2rem] shadow-xl w-full h-[300px] md:h-[400px] relative z-10 border-4 border-white/60 overflow-hidden">
               <Image src="https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&q=80&w=800&h=600" alt="Pineapple Extract" fill className="object-cover" />
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col gap-6 pl-0 md:pl-8">
            <span className="text-[#F2C94C] font-semibold tracking-widest uppercase text-sm flex items-center gap-2">
              <PineappleIcon className="w-5 h-5" /> Clinical Protocol
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A192F] leading-tight tracking-tight">The Bromelain Advantage</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Pineapple Dental Clinic, our commitment to your comfort extends beyond the chair. We utilize the scientifically-proven benefits of <strong className="text-[#0A192F]">Bromelain</strong>, a powerful natural enzyme extracted directly from pineapples.
            </p>
            <ul className="space-y-4 text-gray-600 mt-2">
              <li className="flex items-start gap-4">
                <div className="bg-[#E8F0FE] p-2 rounded-full text-[#0A192F] mt-1"><Activity className="w-5 h-5" /></div>
                <div>
                  <h4 className="text-[#0A192F] font-bold text-lg">Accelerated Healing</h4>
                  <p className="text-sm mt-1">Naturally speeds up post-surgery recovery times, getting you back to your life faster.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-[#E8F0FE] p-2 rounded-full text-[#0A192F] mt-1"><ShieldCheck className="w-5 h-5" /></div>
                <div>
                  <h4 className="text-[#0A192F] font-bold text-lg">Reduced Swelling</h4>
                  <p className="text-sm mt-1">Clinically proven to minimize inflammation and bruising after complex procedures like implants.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-[#E8F0FE] p-2 rounded-full text-[#0A192F] mt-1"><HeartPulse className="w-5 h-5" /></div>
                <div>
                  <h4 className="text-[#0A192F] font-bold text-lg">Natural Pain Relief</h4>
                  <p className="text-sm mt-1">Offers an organic supplement to standard pharmacology, improving patient comfort during healing.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section id="gallery" className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-[#0A192F] mb-4">Real Results. Refined Smiles.</h2>
          <p className="text-gray-600 text-lg">A showcase of our precision and artistry.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { before: "/firstpic_before.jpeg", after: "/firstpic_after.jpeg" },
            { before: "/secondpic_before.jpeg", after: "/secondpic_after.jpeg" }
          ].map((images, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100">
              <div className="absolute inset-0 flex">
                <div className="w-1/2 h-full border-r-2 border-white relative">
                  <Image src={images.before} alt="Before" fill className="object-cover" />
                  <span className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md">Before</span>
                </div>
                <div className="w-1/2 h-full relative">
                  <Image src={images.after} alt="After" fill className="object-cover" />
                  <span className="absolute bottom-4 right-4 bg-[#F2C94C] text-[#0A192F] px-3 py-1 rounded-full text-xs font-bold shadow-md">After</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A192F] text-slate-300 py-16 px-6 border-t border-slate-800 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22currentColor%22 stroke-width=%221%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M12 2v4M8 3l2 3M16 3l-2 3 M8 8.16A4 4 0 0 0 12 7a4 4 0 0 0 4 1.16C16 14 14 22 12 22s-4-8-4-13.84Z%22 /%3E%3C/svg%3E")', backgroundSize: '40px' }}></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 text-white mb-6">
              <PineappleIcon className="w-8 h-8 text-[#F2C94C]" />
              <span className="text-2xl font-bold tracking-tight">Pineapple Dental</span>
            </div>
            <p className="max-w-sm leading-relaxed mb-6">
              Delivering the gold standard in dental care through continuous innovation, pristine technical skill, and an unwavering commitment to our patients in Kolkata.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <div className="space-y-4">
              <p className="flex items-center gap-3"><Phone className="w-5 h-5 text-[#F2C94C]" /> +91 89104 16205</p>
              <a href="https://www.instagram.com/pineapple_clinic" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#F2C94C] transition-colors group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#F2C94C] group-hover:text-[#F2C94C] transition-colors">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                 @pineapple_clinic
              </a>
              <p className="flex items-start gap-3"><MapPin className="w-5 h-5 text-[#F2C94C] shrink-0" /> 11, Mayfair Road, Ballygunge<br/>Kolkata (WB)</p>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Clinic Hours</h4>
            <div className="space-y-4">
              <p className="flex justify-between border-b border-slate-700/50 pb-2"><span>Mon - Fri</span> <span className="text-white">9:00 AM - 7:00 PM</span></p>
              <p className="flex justify-between border-b border-slate-700/50 pb-2"><span>Saturday</span> <span className="text-white">9:00 AM - 4:00 PM</span></p>
              <p className="flex justify-between pb-2"><span>Sunday</span> <span className="text-[#F2C94C] font-semibold">Closed</span></p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 text-center text-sm">
           &copy; {new Date().getFullYear()} Pineapple Dental Clinic. Dr. Varun Bagaria. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
