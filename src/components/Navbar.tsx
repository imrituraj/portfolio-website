import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Terminal, Menu, X, FileText, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentTheme: string;
  setTheme: (theme: string) => void;
  themes: { id: string; name: string; bg: string; border: string; preview: string }[];
}

export const Navbar: React.FC<NavbarProps> = ({ currentTheme, setTheme, themes }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [paletteDropdownOpen, setPaletteDropdownOpen] = useState(false);

  const navLinks = [
    { name: 'Research', href: '#research' },
    { name: 'Projects', href: '#projects' },
    { name: 'Terminal', href: '#terminal' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FFFDF5] border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand */}
          <a 
            href="#" 
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-12 h-12 bg-neo-yellow border-3 border-black shadow-neo-sm group-hover:shadow-neo transition-all flex items-center justify-center font-mono font-black text-2xl group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
              ⚡
            </div>
            <div>
              <span className="font-mono font-extrabold text-xl tracking-tight text-black flex items-center gap-2">
                {portfolioData.personal.name.toUpperCase()}
                <span className="hidden sm:inline-block text-[11px] font-mono bg-neo-cyan px-2 py-0.5 border-2 border-black font-bold">
                  M.TECH CSE
                </span>
              </span>
              <span className="text-xs font-mono font-semibold text-neutral-600 block">
                Systems & AI Researcher
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 font-mono font-bold text-sm text-black hover:bg-neo-yellow hover:border-2 hover:border-black border-2 border-transparent transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Area */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Palette Switcher */}
            <div className="relative">
              <button
                onClick={() => setPaletteDropdownOpen(!paletteDropdownOpen)}
                className="neo-btn bg-white px-3 py-2 text-xs flex items-center gap-1.5 hover:bg-neutral-100"
                title="Change Color Accent"
              >
                <Sparkles className="w-4 h-4 text-black" />
                <span className="hidden lg:inline">Theme</span>
                <span 
                  className="w-3.5 h-3.5 rounded-full border-2 border-black inline-block ml-1"
                  style={{ backgroundColor: themes.find(t => t.id === currentTheme)?.preview || '#FFE600' }}
                />
              </button>

              {paletteDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-48 bg-white border-3 border-black shadow-neo p-2 z-50"
                  onMouseLeave={() => setPaletteDropdownOpen(false)}
                >
                  <p className="font-mono text-[10px] uppercase font-bold text-neutral-500 mb-2 px-1">
                    Select Accent Palette:
                  </p>
                  {themes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        setTheme(t.id);
                        setPaletteDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-2.5 px-2.5 py-1.5 text-xs font-mono font-bold border-2 mb-1.5 text-left transition-all ${
                        currentTheme === t.id 
                          ? 'border-black bg-neutral-100 shadow-neo-sm font-black' 
                          : 'border-transparent hover:border-black hover:bg-neutral-50'
                      }`}
                    >
                      <span 
                        className="w-4 h-4 border-2 border-black inline-block"
                        style={{ backgroundColor: t.preview }}
                      />
                      <span>{t.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Resume Button */}
            <a
              href={portfolioData.personal.resumeUrl}
              className="neo-btn-primary text-xs py-2 px-3.5"
            >
              <FileText className="w-4 h-4" />
              <span>RESUME</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setPaletteDropdownOpen(!paletteDropdownOpen)}
              className="p-2 border-2 border-black bg-white shadow-neo-sm"
              title="Theme Switcher"
            >
              <Sparkles className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border-3 border-black bg-neo-yellow shadow-neo-sm hover:shadow-neo active:translate-x-0.5 active:translate-y-0.5"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Palette Dropdown */}
      {paletteDropdownOpen && (
        <div className="md:hidden border-t-3 border-black bg-white p-3 shadow-neo">
          <div className="grid grid-cols-2 gap-2">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id);
                  setPaletteDropdownOpen(false);
                }}
                className="flex items-center gap-2 p-2 border-2 border-black text-xs font-mono font-bold"
                style={{ backgroundColor: currentTheme === t.id ? t.preview : '#FFF' }}
              >
                <span className="w-3 h-3 border border-black" style={{ backgroundColor: t.preview }} />
                <span>{t.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-4 border-black bg-[#FFFDF5] px-4 pt-4 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 font-mono font-bold text-sm bg-white border-2 border-black shadow-neo-sm hover:bg-neo-yellow text-center block"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={portfolioData.personal.resumeUrl}
              className="neo-btn-primary w-full justify-center py-2.5 text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FileText className="w-4 h-4" />
              <span>DOWNLOAD RESUME (CV)</span>
            </a>
            <a
              href="#terminal"
              className="neo-btn bg-white w-full justify-center py-2.5 text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Terminal className="w-4 h-4" />
              <span>OPEN DEV TERMINAL</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
