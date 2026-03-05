'use client';

import Link from 'next/link';
import { Shield, ArrowLeft } from 'lucide-react';
import StarryBackground from '@/components/StarryBackground';
import MouseSpotlight from '@/components/MouseSpotlight';

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-emerald-500/30 selection:text-emerald-200 overflow-hidden bg-black text-zinc-400">
      <MouseSpotlight />
      <StarryBackground />
      <div className="absolute inset-0 z-[5] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <main className="relative z-10 w-full max-w-2xl px-6 py-24 mx-auto">
        <Link href="/" className="opacity-0 animate-fade-in-up inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Shadows
        </Link>

        <h1 className="opacity-0 animate-fade-in-up delay-100 text-4xl font-bold text-white mb-8">Privacy is Nothing</h1>
        
        <div className="opacity-0 animate-fade-in-up delay-200 glass-panel p-8 rounded-3xl space-y-6 border-white/5">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
              <Shield className="w-8 h-8 text-emerald-400" />
            </div>
          </div>

          <section>
            <h2 className="text-xl font-semibold text-emerald-400 mb-2">Zero Data Policy</h2>
            <p className="leading-relaxed">
              We take your privacy so seriously that we don't even have a database. We don't store your name, your email, or your favorite pizza topping. We literally have nowhere to put them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-emerald-400 mb-2">Cookies</h2>
            <p className="leading-relaxed">
              We don't use tracking cookies. We might use chocolate chip cookies occasionally during development, but those are kept strictly on our physical desks.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-emerald-400 mb-2">The "Nothing" Guarantee</h2>
            <p className="leading-relaxed">
              Since we store nothing, there is nothing to leak. Your data is perfectly safe because it doesn't exist on our end.
            </p>
          </section>
        </div>
      </main>

      <footer className="w-full mt-auto py-8 opacity-50">
        <div className="max-w-2xl mx-auto px-6 text-center text-xs">
          © {new Date().getFullYear()} Suratmu. Privacy through non-existence.
        </div>
      </footer>
    </div>
  );
}
