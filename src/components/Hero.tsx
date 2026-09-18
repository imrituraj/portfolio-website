import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowDownRight, Sparkles, Terminal, Copy, Check, ExternalLink, Code2, Cpu } from 'lucide-react';
import confetti from 'canvas-confetti';

interface HeroProps {
  accentColor: string;
}

export const Hero: React.FC<HeroProps> = ({ accentColor }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    
    // Confetti effect on email copy
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#FFE600', '#00F0FF', '#99FF33', '#FF5E7E', '#000000']
      });
    } catch {
      // ignore in environments where canvas is restricted
    }

    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative pt-8 sm:pt-12 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Status Pill Banner */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="neo-badge bg-neo-green text-black shadow-neo-sm animate-pulse-subtle">
            <span className="w-2.5 h-2.5 bg-black rounded-full inline-block animate-ping mr-1"></span>
            {portfolioData.personal.statusBadge}
          </div>
          <div className="neo-badge bg-white shadow-neo-sm">
            <Cpu className="w-3.5 h-3.5" />
            <span>M.TECH COMPUTER SCIENCE & ENGINEERING</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Headline & Intro */}
          <div className="lg:col-span-8 space-y-6">
            <div className="relative">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-sans tracking-tight text-black leading-[1.05]">
                HI, I'M <span className="inline-block px-3 py-1 border-4 border-black shadow-neo-lg rotate-[-1deg]" style={{ backgroundColor: accentColor }}>{portfolioData.personal.name.toUpperCase()}</span>.
                <br />
                <span className="text-neutral-900 block mt-2">
                  SYSTEMS & AI RESEARCHER.
                </span>
              </h1>

              {/* Quirky sticker */}
              <div className="hidden sm:block absolute -top-4 right-8 rotate-12 bg-neo-pink text-white font-mono font-black text-xs px-3 py-1.5 border-3 border-black shadow-neo transform hover:rotate-0 transition-transform">
                ★ 100% BUG CRAFTED ★
              </div>
            </div>

            <p className="font-mono text-base sm:text-xl font-bold text-neutral-800 leading-relaxed max-w-2xl bg-white/70 p-4 border-3 border-black shadow-neo">
              {portfolioData.personal.shortBio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="neo-btn font-bold text-base px-6 py-3 border-4 border-black text-black shadow-neo-lg hover:shadow-neo active:translate-x-1 active:translate-y-1 transition-all"
                style={{ backgroundColor: accentColor }}
              >
                <span>EXPLORE PROJECTS</span>
                <ArrowDownRight className="w-5 h-5 stroke-[3]" />
              </a>

              <a
                href="#research"
                className="neo-btn bg-white hover:bg-neutral-100 font-bold text-base px-6 py-3 border-4 border-black shadow-neo-lg hover:shadow-neo active:translate-x-1 active:translate-y-1 transition-all"
              >
                <span>M.TECH RESEARCH</span>
                <Sparkles className="w-5 h-5 text-black" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="neo-btn bg-neo-cyan hover:bg-cyan-300 font-mono font-bold text-sm px-4 py-3 border-3 border-black shadow-neo hover:shadow-neo-lg active:translate-x-1 active:translate-y-1 transition-all"
                title="Click to copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-black" />
                    <span>COPIED!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-black" />
                    <span>COPY EMAIL</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Tech Badges */}
            <div className="pt-2">
              <span className="font-mono font-bold text-xs uppercase text-neutral-600 block mb-2">
                Core Toolchain & Focus Areas:
              </span>
              <div className="flex flex-wrap gap-2">
                {['Go (Golang)', 'C++20', 'Distributed Consensus (Raft)', 'eBPF', 'PyTorch / LLMs', 'Linux Internals', 'Kubernetes'].map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs font-bold px-2.5 py-1 bg-white border-2 border-black shadow-neo-sm hover:bg-yellow-100 transition-colors"
                  >
                    #{tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Profile Info Card */}
          <div className="lg:col-span-4">
            <div className="neo-card p-6 bg-[#FFF9E6] border-4 border-black shadow-neo-xl relative">
              
              {/* Card Header Sticker */}
              <div className="flex items-center justify-between border-b-3 border-black pb-3 mb-4">
                <span className="font-mono font-black text-xs tracking-wider uppercase bg-black text-white px-2 py-0.5">
                  DEV PROFILE / CARD
                </span>
                <span className="font-mono text-xs font-black">
                  STATUS: ACTIVE
                </span>
              </div>

              {/* Avatar / Icon Representation */}
              <div className="w-full h-44 bg-neo-yellow border-3 border-black shadow-neo mb-4 flex flex-col items-center justify-center relative overflow-hidden group">
                <div className="text-6xl mb-1 transform group-hover:scale-110 transition-transform">
                  👨‍💻
                </div>
                <div className="font-mono font-black text-sm tracking-tight text-black bg-white px-3 py-1 border-2 border-black shadow-neo-sm">
                  {portfolioData.personal.role}
                </div>
                {/* Background grid lines decoration */}
                <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:12px_12px]" />
              </div>

              {/* Details List */}
              <div className="space-y-2.5 font-mono text-xs font-bold">
                <div className="flex justify-between border-b-2 border-neutral-300 pb-1.5">
                  <span className="text-neutral-600">PROGRAM:</span>
                  <span className="text-right">{portfolioData.personal.degree}</span>
                </div>
                <div className="flex justify-between border-b-2 border-neutral-300 pb-1.5">
                  <span className="text-neutral-600">RESEARCH LAB:</span>
                  <span className="text-right">{portfolioData.researchFocus.labName}</span>
                </div>
                <div className="flex justify-between border-b-2 border-neutral-300 pb-1.5">
                  <span className="text-neutral-600">LOCATION:</span>
                  <span>{portfolioData.personal.location}</span>
                </div>
                <div className="flex justify-between pb-1">
                  <span className="text-neutral-600">GRADUATION:</span>
                  <span className="bg-neo-cyan px-1.5 border border-black font-extrabold">2026</span>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-5 pt-4 border-t-3 border-black flex gap-2">
                <a
                  href="#terminal"
                  className="neo-btn bg-white w-full text-xs py-2 border-2 border-black shadow-neo-sm hover:shadow-neo justify-center"
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Launch CLI</span>
                </a>
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn bg-black text-white w-full text-xs py-2 border-2 border-black shadow-neo-sm hover:shadow-neo justify-center"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          
          <div className="neo-card p-4 border-3 border-black shadow-neo bg-white hover:-translate-y-1 transition-transform">
            <span className="font-mono text-3xl sm:text-4xl font-black text-black block mb-1">
              18.5k
            </span>
            <span className="font-mono font-bold text-xs uppercase text-neutral-600">
              OPS/SEC RAFT BENCHMARK
            </span>
          </div>

          <div className="neo-card p-4 border-3 border-black shadow-neo bg-neo-yellow hover:-translate-y-1 transition-transform">
            <span className="font-mono text-3xl sm:text-4xl font-black text-black block mb-1">
              99.1%
            </span>
            <span className="font-mono font-bold text-xs uppercase text-black">
              GATE CSE EXAM PERCENTILE
            </span>
          </div>

          <div className="neo-card p-4 border-3 border-black shadow-neo bg-white hover:-translate-y-1 transition-transform">
            <span className="font-mono text-3xl sm:text-4xl font-black text-black block mb-1">
              2+
            </span>
            <span className="font-mono font-bold text-xs uppercase text-neutral-600">
              RESEARCH PREPRINTS & PAPERS
            </span>
          </div>

          <div className="neo-card p-4 border-3 border-black shadow-neo bg-neo-cyan hover:-translate-y-1 transition-transform">
            <span className="font-mono text-3xl sm:text-4xl font-black text-black block mb-1">
              140+
            </span>
            <span className="font-mono font-bold text-xs uppercase text-black">
              STUDENTS MENTORED (GTA)
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
