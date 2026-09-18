import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Heart } from 'lucide-react';

interface FooterProps {
  accentColor: string;
}

export const Footer: React.FC<FooterProps> = ({ accentColor }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t-4 border-black bg-white text-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b-3 border-black">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 bg-neo-yellow border-2 border-black font-mono font-black text-lg flex items-center justify-center shadow-neo-sm">
                ⚡
              </span>
              <span className="font-mono font-black text-xl text-black">
                {portfolioData.personal.name.toUpperCase()}
              </span>
            </div>
            <p className="font-mono text-xs text-neutral-600 max-w-sm">
              M.Tech Computer Science & Engineering • Systems & Distributed Consensus Researcher.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-4 font-mono text-xs font-bold">
            <a href="#research" className="hover:underline">Research</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#terminal" className="hover:underline">Terminal</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="neo-btn text-xs py-2 px-3 border-2 border-black shadow-neo-sm hover:shadow-neo active:translate-x-0.5 active:translate-y-0.5"
            style={{ backgroundColor: accentColor }}
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
            <span>TOP</span>
          </button>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-600">
          <div>
            © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1 font-bold text-neutral-800">
            <span>Built with</span>
            <span className="px-1.5 py-0.5 bg-neo-pink text-white border border-black font-mono text-[10px]">
              NEO-BRUTALISM
            </span>
            <span>+ React & Tailwind</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
