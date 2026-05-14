import Link from "next/link";

export const metadata = {
  title: "Thank You | Purrfolio",
  description: "Thanks for reaching out to Purrfolio.",
};

export default function ThankYou() {
  return (
    <div className="container mx-auto px-6 py-24 max-w-3xl text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-slate">Message received</p>
      <h1 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">Thank you for reaching out.</h1>
      <p className="mt-4 text-base text-slate sm:text-lg">
        We have your details and will get back to you within 24 hours.
      </p>
      <Link href="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-xs uppercase tracking-[0.2em] text-sand hover:bg-navy transition-colors">
        Back to home
      </Link>
    </div>
  );
}
