import type { Metadata } from "next";
import { Fraunces, Sora } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import SiteHeader from "./components/SiteHeader";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Purrfolio",
  description: "Design and development studio for modern digital brands.",
  metadataBase: new URL("https://justpurrfolio.com"),
  icons: {
    icon: "/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${fraunces.variable} antialiased selection:bg-accent selection:text-ink`}>
      <body className="min-h-screen bg-sand text-ink font-sans flex flex-col">
        <SiteHeader />

        <main className="flex-1">
          {children}
        </main>

        <footer className="border-t border-ink/10 py-10 text-sm text-slate">
          <div className="container mx-auto px-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <Image src="/logo.jpeg" alt="Purrfolio" width={44} height={44} className="rounded-full border border-ink/10" />
              <div>
                <p className="font-medium text-ink">Purrfolio</p>
                <p className="text-slate">Digital design and development company.</p>
              </div>
            </div>
            <p>© {new Date().getFullYear()} Purrfolio. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
