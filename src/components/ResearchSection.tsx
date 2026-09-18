import React, { useState } from 'react';
import { portfolioData, ResearchHighlight } from '../data/portfolioData';
import { BookOpen, ExternalLink, Code2, Copy, Check, Sparkles, Layers } from 'lucide-react';

interface ResearchSectionProps {
  accentColor: string;
}

export const ResearchSection: React.FC<ResearchSectionProps> = ({ accentColor }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyBibtex = (paper: ResearchHighlight) => {
    const bibtex = `@article{${paper.id}_${paper.year},
  title={${paper.title}},
  author={${paper.coAuthors?.join(' and ') || 'Rituraj'}},
  journal={${paper.venue || 'M.Tech CSE Technical Report'}},
  year={${paper.year}}
}`;
    navigator.clipboard.writeText(bibtex);
    setCopiedId(paper.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="research" className="py-16 border-t-4 border-black bg-[#FFFDF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono font-black text-xs px-2.5 py-1 bg-black text-white">
                SECTION // 01
              </span>
              <span className="font-mono font-bold text-xs uppercase text-neutral-600">
                GRADUATE RESEARCH
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-sans tracking-tight text-black flex items-center gap-3">
              M.TECH RESEARCH & THESIS
              <BookOpen className="w-8 h-8 hidden sm:inline" />
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm font-bold text-neutral-700 max-w-md">
            Bridging theoretical computer science and high-scale production systems. Investigating consensus, tail latency, and state replication.
          </p>
        </div>

        {/* Master's Thesis Spotlight Card */}
        <div className="neo-card p-6 sm:p-8 bg-white border-4 border-black shadow-neo-lg mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-neo-yellow border-b-3 border-l-3 border-black px-4 py-1.5 font-mono font-black text-xs uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>M.Tech Thesis Spotlight</span>
          </div>

          <div className="max-w-4xl">
            <div className="font-mono text-xs font-bold text-neutral-500 mb-1">
              CURRENT RESEARCH TOPIC
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-black font-sans mb-3">
              {portfolioData.researchFocus.title}
            </h3>
            
            <p className="font-mono text-sm sm:text-base font-bold text-neutral-800 leading-relaxed mb-6">
              {portfolioData.researchFocus.description}
            </p>

            <div className="bg-[#FFF9E6] border-3 border-black p-4 mb-6 shadow-neo-sm">
              <span className="font-mono font-black text-xs text-black uppercase block mb-1">
                Active Investigation:
              </span>
              <p className="font-mono text-xs sm:text-sm text-neutral-900 font-semibold">
                {portfolioData.researchFocus.currentWork}
              </p>
            </div>

            {/* Research Core Areas Pills */}
            <div className="space-y-2">
              <span className="font-mono font-black text-xs uppercase text-neutral-600">
                Key Research Vectors:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {portfolioData.researchFocus.coreAreas.map((area, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-2 font-mono text-xs font-bold p-2 bg-neutral-50 border-2 border-black"
                  >
                    <span className="w-5 h-5 bg-black text-white flex items-center justify-center text-[10px] shrink-0">
                      0{idx + 1}
                    </span>
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t-2 border-neutral-300 flex flex-wrap items-center justify-between gap-4 font-mono text-xs font-bold text-neutral-600">
              <div>
                ADVISOR: <span className="text-black">{portfolioData.researchFocus.advisor}</span>
              </div>
              <div>
                LAB: <span className="text-black">{portfolioData.researchFocus.labName}</span>
              </div>
            </div>

          </div>
        </div>

        {/* Papers & Preprints List */}
        <div>
          <h3 className="font-mono font-black text-lg sm:text-xl uppercase tracking-wider mb-6 flex items-center gap-2">
            <span className="w-3 h-3 bg-black inline-block"></span>
            <span>Publications & Manuscripts</span>
          </h3>

          <div className="space-y-6">
            {portfolioData.publications.map((pub) => (
              <div
                key={pub.id}
                className="neo-card p-6 border-3 border-black shadow-neo hover:shadow-neo-lg transition-all bg-white"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className={`neo-badge ${
                      pub.type === 'Conference Paper' 
                        ? 'bg-neo-cyan text-black' 
                        : 'bg-neo-pink text-white'
                    }`}>
                      {pub.type}
                    </span>
                    <span className="font-mono text-xs font-bold text-neutral-500">
                      [{pub.year}]
                    </span>
                  </div>

                  <span className="font-mono text-xs font-bold text-neutral-700 bg-neutral-100 px-2 py-1 border border-black">
                    {pub.venue}
                  </span>
                </div>

                <h4 className="text-xl sm:text-2xl font-black font-sans text-black mb-2">
                  {pub.title}
                </h4>

                {pub.coAuthors && (
                  <p className="font-mono text-xs font-bold text-neutral-600 mb-3">
                    Authors: {pub.coAuthors.join(', ')}
                  </p>
                )}

                <p className="font-mono text-xs sm:text-sm font-semibold text-neutral-800 mb-4 leading-relaxed">
                  {pub.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 mb-5 bg-[#F8F6F0] p-3 border-2 border-black">
                  <span className="font-mono font-black text-[11px] uppercase tracking-wider text-black block mb-1">
                    Key Findings / Contributions:
                  </span>
                  {pub.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="font-mono text-xs text-neutral-800 flex items-start gap-2">
                      <span className="font-bold text-black select-none">→</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tags and Action Buttons */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t-2 border-neutral-200">
                  <div className="flex flex-wrap gap-1.5">
                    {pub.tags.map((t) => (
                      <span 
                        key={t}
                        className="font-mono text-[11px] font-bold px-2 py-0.5 bg-neutral-100 border border-black"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopyBibtex(pub)}
                      className="neo-btn bg-white hover:bg-neutral-100 text-xs py-1.5 px-3 border-2 border-black shadow-neo-sm"
                      title="Copy citation BibTeX"
                    >
                      {copiedId === pub.id ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>BibTeX Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>BibTeX</span>
                        </>
                      )}
                    </button>

                    {pub.codeUrl && (
                      <a
                        href={pub.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="neo-btn bg-white hover:bg-neutral-100 text-xs py-1.5 px-3 border-2 border-black shadow-neo-sm"
                      >
                        <Code2 className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    )}

                    {pub.paperUrl && (
                      <a
                        href={pub.paperUrl}
                        className="neo-btn text-xs py-1.5 px-3 border-2 border-black shadow-neo-sm"
                        style={{ backgroundColor: accentColor }}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Preprint</span>
                      </a>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
