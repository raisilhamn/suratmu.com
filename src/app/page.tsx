'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import Link from 'next/link';
import { Shield, Zap, Globe, Github, Twitter, Code2, Send } from 'lucide-react';
import StarryBackground from '@/components/StarryBackground';
import MouseSpotlight from '@/components/MouseSpotlight';
import { toast } from "sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Mouse parallax for hero text
  const heroX = useTransform(smoothX, [0, 1920], [5, -5]);
  const heroY = useTransform(smoothY, [0, 1080], [5, -5]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-emerald-500/30 selection:text-emerald-200 overflow-hidden bg-black">
      
      {/* Background Ambient Glows */}
      <MouseSpotlight />
      <StarryBackground />
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-600/20 blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-teal-600/20 blur-[120px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[40%] left-[50%] translate-x-[-50%] w-[60%] h-[30%] rounded-full bg-green-600/10 blur-[100px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/dz209s6jk/image/upload/v1691404172/grid_yv4p4s.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.05] pointer-events-none" />

      {/* Grain Overlay for premium texture */}
      <div className="absolute inset-0 z-[5] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <main className="relative z-10 flex flex-col items-center w-full max-w-5xl px-6 py-24 mx-auto isolate">
        
        {/* Header Badge */}
        <div className="opacity-0 animate-fade-in-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-sm font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500/50"></span>
          </span>
          Early Access Closed
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
          <motion.div
            style={{ x: heroX, y: heroY }}
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                }
              }
            }}
          >
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
            >
              Your emails. <br className="hidden md:block" />
              <span className="text-emerald-400">Perfectly forwarded.</span>
            </motion.h1>

            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
            >
              <span className="text-emerald-400 font-medium">Suratmu</span> (English: <span className="text-zinc-300 italic">"Your Letter"</span>) is a premium, privacy-first email forwarding service. Protect your personal inbox and maintain your professional identity with effortless custom domains.
            </motion.p>
          </motion.div>
        </div>

        {/* Professional CTA - Closed State with Surprise Hover */}
        <div className="opacity-0 animate-fade-in-up delay-300 w-full max-w-sm mx-auto mb-20 relative z-20 text-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="group relative"
          >
            {/* Surprise Glow Background */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-emerald-500/0 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <button
              onClick={() => {
                toast("Initial Beta Period Closed", {
                  description: "Thank you for your interest. Early access requests for our private beta are currently at capacity.",
                  duration: 5000,
                });
              }}
              className="relative w-full overflow-hidden flex items-center justify-center gap-2 bg-zinc-900/80 backdrop-blur-xl text-white/40 border border-white/10 py-4 px-8 rounded-2xl font-bold text-lg cursor-not-allowed group"
            >
              {/* Shifting Text Surprise */}
              <span className="inline-block transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
                Private Beta Full
              </span>
              <span className="absolute inset-0 flex items-center justify-center translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 text-emerald-500/80">
                Kebanyakan yang daftar  
              </span>
            </button>
          </motion.div>
          <p className="text-center text-sm text-zinc-500 mt-4 flex items-center justify-center gap-1.5">
            <Shield className="w-3.5 h-3.5" /> Registration is temporarily paused.
          </p>
        </div>

        {/* Features Grid */}
        <div className="relative z-10 opacity-0 animate-fade-in-up delay-400 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-24">
          <FeatureCard 
            icon={<Globe className="w-6 h-6 text-emerald-400" />}
            title="Custom Domains"
            description="Connect unlimited custom domains. Maintain consistent branding across all your professional communications."
          />
          <FeatureCard 
            icon={<Shield className="w-6 h-6 text-teal-400" />}
            title="Privacy First"
            description="Keep your real email address private. We employ a zero-storage policy and strip tracking pixels automatically."
          />
          <FeatureCard 
            icon={<Zap className="w-6 h-6 text-green-400" />}
            title="Lightning Fast"
            description="Experience near-zero latency delivery. Our global edge network routes your emails instantly to their destination."
          />
        </div>

        {/* Professional FAQ Section */}
        <div className="w-full max-w-3xl opacity-0 animate-fade-in-up delay-500 mb-24">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Project Details</h2>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="glass-panel px-6 rounded-2xl border-none">
              <AccordionTrigger className="text-lg font-semibold text-emerald-400 hover:no-underline py-6">
                When will Suratmu be available?
              </AccordionTrigger>
              <AccordionContent className="text-zinc-400 text-sm leading-relaxed pb-6">
                We are currently in a state of perpetual refinement. While our roadmap technically lists a 2026 launch, we prefer to think of Suratmu as a fine wine—it will ship precisely when it is ready, which is often 'next quarter'.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="glass-panel px-6 rounded-2xl border-none">
              <AccordionTrigger className="text-lg font-semibold text-emerald-400 hover:no-underline py-6">
                How does the forwarding work?
              </AccordionTrigger>
              <AccordionContent className="text-zinc-400 text-sm leading-relaxed pb-6">
                Our network uses proprietary edge routing technology. When an email is received, it is processed through our privacy layer and instantly pushed to your destination inbox via secure SMTP.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="glass-panel px-6 rounded-2xl border-none">
              <AccordionTrigger className="text-lg font-semibold text-emerald-400 hover:no-underline py-6">
                Is my privacy guaranteed?
              </AccordionTrigger>
              <AccordionContent className="text-zinc-400 text-sm leading-relaxed pb-6">
                Security is our core mission. We operate with a strict zero-storage policy, meaning your email contents never touch our disks. Trackers are neutralized at the edge before delivery.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="glass-panel px-6 rounded-2xl border-none">
              <AccordionTrigger className="text-lg font-semibold text-emerald-400 hover:no-underline py-6">
                Can I use my own custom domains?
              </AccordionTrigger>
              <AccordionContent className="text-zinc-400 text-sm leading-relaxed pb-6">
                Absolutely. Suratmu is designed for professional use. You can link unlimited custom domains by adding a simple MX record to your DNS configuration.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 mt-auto py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white tracking-wider flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-md bg-gradient-to-br from-emerald-500/20 to-teal-500/20 text-emerald-400 border border-emerald-500/30">
                <Send className="w-3.5 h-3.5 -ml-0.5 mt-0.5" />
              </span>
              SURATMU
            </span>
            <span className="ml-2 text-zinc-600">|</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
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
