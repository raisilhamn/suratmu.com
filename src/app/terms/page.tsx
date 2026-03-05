'use client';

import Link from 'next/link';
import { Send, ArrowLeft } from 'lucide-react';
import StarryBackground from '@/components/StarryBackground';
import MouseSpotlight from '@/components/MouseSpotlight';

export default function TermsPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-emerald-500/30 selection:text-emerald-200 overflow-hidden bg-black text-zinc-400">
      <MouseSpotlight />
      <StarryBackground />
      <div className="absolute inset-0 z-[5] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <main className="relative z-10 w-full max-w-2xl px-6 py-24 mx-auto">
        <Link href="/" className="opacity-0 animate-fade-in-up inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Safety
        </Link>

        <h1 className="opacity-0 animate-fade-in-up delay-100 text-4xl font-bold text-white mb-8">Basic Terms</h1>
        
        <div className="opacity-0 animate-fade-in-up delay-200 glass-panel p-8 rounded-3xl space-y-6 border-white/5">
          <section>
            <h2 className="text-xl font-semibold text-emerald-400 mb-2">1. Acceptance of Color</h2>
            <p className="leading-relaxed">
              By accessing this website, you agree that the primary color is #10b981 (Emerald) and that it looks significantly better than whatever color scheme you were previously used to.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-emerald-400 mb-2">2. No Real Terms</h2>
            <p className="leading-relaxed">
              We haven't actually written any terms yet. Mostly because we spend our time tweaking the glow effects on the landing page. By reading this, you agree that tweaking glow effects is a valid use of time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-emerald-400 mb-2">3. Limitation of Liability</h2>
            <p className="leading-relaxed">
              We are not liable if you start seeing green spots after staring at this page for too long. That's just the Matrix calling.
            </p>
          </section>
        </div>
      </main>

      <footer className="w-full mt-auto py-8 opacity-50">
        <div className="max-w-2xl mx-auto px-6 text-center text-xs">
          © {new Date().getFullYear()} Suratmu. All jokes intended.
        </div>
      </footer>
    </div>
  );
}
