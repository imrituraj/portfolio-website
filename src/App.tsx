import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeTicker } from './components/MarqueeTicker';
import { ResearchSection } from './components/ResearchSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TerminalWidget } from './components/TerminalWidget';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Settings2, X, Code2, CheckCircle2 } from 'lucide-react';

export const THEMES = [
  { id: 'yellow', name: 'Cyber Lemon', bg: 'bg-neo-yellow', border: 'border-black', preview: '#FFE600' },
  { id: 'cyan', name: 'Electric Cyan', bg: 'bg-neo-cyan', border: 'border-black', preview: '#00F0FF' },
  { id: 'green', name: 'Acid Lime', bg: 'bg-neo-green', border: 'border-black', preview: '#99FF33' },
  { id: 'pink', name: 'Bubblegum', bg: 'bg-neo-pink', border: 'border-black', preview: '#FF5E7E' },
];

export function App() {
  const [currentTheme, setCurrentTheme] = useState('yellow');
  const [guideOpen, setGuideOpen] = useState(false);

  const activeThemeObj = THEMES.find((t) => t.id === currentTheme) || THEMES[0];
  const accentColor = activeThemeObj.preview;

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-black font-sans selection:bg-black selection:text-white">
      
      {/* Navbar */}
      <Navbar
        currentTheme={currentTheme}
        setTheme={setCurrentTheme}
        themes={THEMES}
      />

      {/* Floating Customizer Helper Hint Button */}
      <aside aria-label="Portfolio Configuration Assistant" className="fixed bottom-5 right-5 z-40">
        <button
          onClick={() => setGuideOpen(true)}
          className="neo-btn bg-white hover:bg-neutral-100 text-xs py-2 px-3 border-3 border-black shadow-neo-lg flex items-center gap-2 group"
          title="How to update your information"
        >
          <Settings2 className="w-4 h-4 text-black group-hover:rotate-45 transition-transform" />
          <span className="font-mono font-bold">Edit Details Guide</span>
          <span className="w-2.5 h-2.5 rounded-full bg-neo-green inline-block animate-pulse"></span>
        </button>
      </aside>

      {/* Guide Drawer / Modal */}
      {guideOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white border-4 border-black shadow-neo-xl max-w-lg w-full p-6 relative">
            <div className="flex items-center justify-between border-b-3 border-black pb-3 mb-4 bg-neo-yellow -mx-6 -mt-6 p-4">
              <div className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-black" />
                <h3 className="font-mono font-black text-sm uppercase">
                  How to Update Your Details Later
                </h3>
              </div>
              <button
                onClick={() => setGuideOpen(false)}
                className="p-1 bg-white border-2 border-black hover:bg-neutral-100"
              >
                <X className="w-4 h-4 text-black" />
              </button>
            </div>

            <div className="font-mono text-xs space-y-3 text-neutral-800">
              <p className="font-bold">
                All your portfolio data is centrally organized in one typed configuration file:
              </p>
              
              <div className="bg-neutral-900 text-neo-green p-3 border-2 border-black">
                <code>src/data/portfolioData.ts</code>
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span><strong>Personal:</strong> Update your name, email, GitHub, LinkedIn, and resume link.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span><strong>Research & Thesis:</strong> Set your M.Tech thesis topic, advisor, and publications.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span><strong>Projects:</strong> Add or edit your engineering and research projects.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span><strong>Experience & TA:</strong> Add your graduate teaching assistantships or internships.</span>
                </div>
              </div>

              <button
                onClick={() => setGuideOpen(false)}
                className="neo-btn bg-neo-yellow w-full py-2.5 mt-4 border-2 border-black shadow-neo-sm font-bold justify-center"
              >
                Got it, continue exploring!
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero accentColor={accentColor} />

        {/* Marquee Ticker */}
        <MarqueeTicker accentColor={accentColor} />

        {/* Research & Thesis Section (Academic Priority for M.Tech CSE) */}
        <ResearchSection accentColor={accentColor} />

        {/* Engineering Projects */}
        <ProjectsSection accentColor={accentColor} />

        {/* Interactive Terminal Widget */}
        <TerminalWidget accentColor={accentColor} />

        {/* Skills Matrix */}
        <SkillsSection accentColor={accentColor} />

        {/* Experience & Education */}
        <ExperienceTimeline accentColor={accentColor} />

        {/* Contact Section */}
        <ContactSection accentColor={accentColor} />
      </main>

      {/* Footer */}
      <Footer accentColor={accentColor} />

    </div>
  );
}

export default App;
