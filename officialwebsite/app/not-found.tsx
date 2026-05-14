import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-32 text-center min-h-[70vh] flex flex-col items-center justify-center">
      <h1 className="text-9xl font-bold text-brand-purple mb-6">404</h1>
      <h2 className="text-3xl lg:text-5xl font-bold mb-6">Page Not Found</h2>
      <p className="text-xl text-soft-lavender/70 max-w-md mx-auto mb-10 italic">
        This page has gone to find itself. Like a cat at 3am. Let's get you home.
      </p>
      <Link href="/" className="inline-flex items-center gap-2 bg-white text-deep-dark px-8 py-4 rounded-full font-bold hover:bg-soft-lavender transition-all">
        <MoveLeft className="w-5 h-5" /> Back to Home
      </Link>
    </div>
  );
}