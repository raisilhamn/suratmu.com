'use client';

import { useState, useRef, useEffect } from 'react';
import { Mail, Shield, Zap, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';
import StarryBackground from '@/components/StarryBackground';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      // Here you would typically send the email to your backend/service like Resend or Mailchimp
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-emerald-500/30 selection:text-emerald-200 overflow-hidden bg-black">
      
      {/* Background Ambient Glows */}
      <StarryBackground />
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-600/20 blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-teal-600/20 blur-[120px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[40%] left-[50%] translate-x-[-50%] w-[60%] h-[30%] rounded-full bg-green-600/10 blur-[100px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/dz209s6jk/image/upload/v1691404172/grid_yv4p4s.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.05] pointer-events-none" />

      <main className="relative z-10 flex flex-col items-center w-full max-w-5xl px-6 py-24 mx-auto isolate">
        
        {/* Header Badge */}
        <div className="opacity-0 animate-fade-in-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-sm font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Coming Soon
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
          <h1 className="opacity-0 animate-fade-in-up delay-100 text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-500 glow-text mb-6">
            Your emails. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Perfectly forwarded.</span>
          </h1>
          <p className="opacity-0 animate-fade-in-up delay-200 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Suratmu is the premium, privacy-first email forwarding service for individuals and businesses. Bring your custom domains and protect your real inbox.
          </p>
        </div>

        {/* Email Capture Form */}
        <div className="opacity-0 animate-fade-in-up delay-300 w-full max-w-md mx-auto mb-20 relative z-20">
          <div className="relative glass-panel rounded-2xl p-2 flex flex-col sm:flex-row items-center gap-2">
            {submitted ? (
              <div className="flex items-center justify-center gap-3 w-full py-3 px-4 text-emerald-400 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-medium">You're on the list! We'll notify you soon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex w-full flex-col sm:flex-row gap-2">
                <div className="relative flex-grow">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all font-medium relative z-10"
                  />
                </div>
                <button
                  type="submit"
                  className="whitespace-nowrap flex items-center justify-center gap-2 bg-white text-black hover:bg-zinc-200 py-3 px-6 rounded-xl font-semibold transition-all group"
                >
                  Join Waitlist
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
          <p className="text-center text-sm text-zinc-500 mt-4 flex items-center justify-center gap-1.5">
            <Shield className="w-3.5 h-3.5" /> No spam. Unsubscribe anytime.
          </p>
        </div>

        {/* Features Grid */}
        <div className="relative z-10 opacity-0 animate-fade-in-up delay-400 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-24">
          <FeatureCard 
            icon={<Globe className="w-6 h-6 text-emerald-400" />}
            title="Custom Domains"
            description="Connect unlimited custom domains. Look professional and maintain your brand identity effortlessly."
          />
          <FeatureCard 
            icon={<Shield className="w-6 h-6 text-teal-400" />}
            title="Privacy First"
            description="Hide your real email address. We strip trackers and never read or store the contents of your emails."
          />
          <FeatureCard 
            icon={<Zap className="w-6 h-6 text-green-400" />}
            title="Lightning Fast"
            description="Emails are routed instantly through our global edge network. Zero noticeable delay in delivery."
          />
        </div>

        {/* Humorous FAQ Section */}
        <div className="w-full max-w-3xl opacity-0 animate-fade-in-up delay-500 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Frequently Astounding Questions</h2>
          <div className="space-y-4">
            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-emerald-400 mb-2">Are you actually building this?</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Yes, but right now we are mostly staring at this glowing green landing page because it looks extremely cool. The backend is powered by hopes, dreams, and copious amounts of coffee.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-emerald-400 mb-2">Will you actually forward my emails?</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Eventually! Once we figure out how SMTP works without breaking the space-time continuum. For now, putting your email in the box just makes us feel validated.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-emerald-400 mb-2">Why green?</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Because it is the color of money, nature, and the Matrix. Mostly the Matrix though. Our founder insisted on it.
              </p>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 mt-auto py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white tracking-wider flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-[4px] bg-gradient-to-br from-emerald-500 to-teal-500 inline-block"></span>
              SURATMU
            </span>
            <span>© {new Date().getFullYear()}</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative glass-panel rounded-2xl overflow-hidden transition-colors group cursor-default"
    >
      {/* Mouse interaction glow effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.08), transparent 40%)`,
        }}
      />
      
      <div className="relative p-6 z-10 w-full h-full">
        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-zinc-400 leading-relaxed text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}
