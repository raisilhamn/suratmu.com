'use client';

import { useRef, useState, useEffect } from 'react';
import { Shield, Zap, Globe, Github, Twitter, Code2 } from 'lucide-react';
import StarryBackground from '@/components/StarryBackground';
import { TeamMember } from '@/components/TeamMember';

export default function Home() {

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

        {/* Fake CTA */}
        <div className="opacity-0 animate-fade-in-up delay-300 w-full max-w-sm mx-auto mb-20 relative z-20 text-center">
          <button
            onClick={() => alert("We told you we haven't built it yet! But we appreciate the enthusiasm.")}
            className="w-full flex items-center justify-center gap-2 bg-emerald-500 text-black hover:bg-emerald-400 py-4 px-8 rounded-2xl font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(16,185,129,0.3)]"
          >
            Join the Non-Existent Waitlist
          </button>
          <p className="text-center text-sm text-zinc-500 mt-4 flex items-center justify-center gap-1.5">
            <Shield className="w-3.5 h-3.5" /> No spam. Because there is no database.
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

        {/* Humorous Team Section */}
        <div className="w-full max-w-5xl opacity-0 animate-fade-in-up delay-[600ms] mb-24 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">"Team"</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TeamMember 
              name="CEO & Founder" 
              role="Chief 'Ideas' Officer"
              joke="Currently Googling 'how to start a startup without coding'."
            />
            <TeamMember 
              name="CTO" 
              role="Lead Prompt Engineer"
              joke="Copy-pasting AI code until it compiles. It's honest work."
            />
            <TeamMember 
              name="CMO" 
              role="Head of Vibes"
              joke="Ensuring the color green is sufficiently green."
            />
            <TeamMember 
              name="The Intern" 
              role="Actually does the work"
              joke="Please send help. They locked me in the server room."
            />
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
