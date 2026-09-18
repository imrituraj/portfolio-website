import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Wrench, Search, CheckCircle } from 'lucide-react';

interface SkillsSectionProps {
  accentColor: string;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ accentColor }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = portfolioData.skills.map((category) => {
    return {
      ...category,
      skills: category.skills.filter((skill) =>
        skill.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    };
  }).filter((cat) => cat.skills.length > 0);

  const getLevelBadgeClass = (level: string) => {
    switch (level) {
      case 'Advanced':
        return 'bg-neo-yellow text-black';
      case 'Proficient':
        return 'bg-neo-cyan text-black';
      case 'Familiar':
      default:
        return 'bg-neutral-200 text-neutral-800';
    }
  };

  return (
    <section id="skills" className="py-16 border-t-4 border-black bg-[#FFFDF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono font-black text-xs px-2.5 py-1 bg-black text-white">
                SECTION // 04
              </span>
              <span className="font-mono font-bold text-xs uppercase text-neutral-600">
                TECHNICAL ARSENAL
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-sans tracking-tight text-black flex items-center gap-3">
              SKILLS & EXPERTISE
              <Wrench className="w-8 h-8 hidden sm:inline" />
            </h2>
          </div>

          {/* Skill search filter */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. Go, Raft, eBPF)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full font-mono text-xs pl-9 pr-3 py-2.5 bg-white border-3 border-black shadow-neo-sm focus:outline-none focus:shadow-neo placeholder:text-neutral-500"
            />
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-3 mb-8 font-mono text-xs font-bold">
          <span className="text-neutral-500 uppercase">Proficiency Levels:</span>
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 border-2 border-black bg-neo-yellow text-black shadow-neo-sm">
            ★ ADVANCED (Daily Driver)
          </span>
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 border-2 border-black bg-neo-cyan text-black shadow-neo-sm">
            ✦ PROFICIENT (Production & Research)
          </span>
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 border-2 border-black bg-neutral-200 text-neutral-800 shadow-neo-sm">
            ● FAMILIAR (Working Knowledge)
          </span>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="neo-card bg-white border-4 border-black shadow-neo hover:shadow-neo-lg transition-all p-6"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3 border-b-3 border-black mb-4">
                <h3 className="font-mono font-black text-lg sm:text-xl text-black flex items-center gap-2">
                  <span 
                    className="w-4 h-4 border-2 border-black inline-block"
                    style={{ backgroundColor: category.accent || accentColor }}
                  />
                  <span>{category.title}</span>
                </h3>
                <span className="font-mono text-xs font-bold bg-neutral-100 px-2 py-0.5 border border-black">
                  {category.skills.length} skills
                </span>
              </div>

              {/* Skills Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-2.5 bg-[#FFFDF5] border-2 border-black shadow-neo-sm hover:bg-neutral-50 transition-colors"
                  >
                    <span className="font-mono text-xs font-bold text-neutral-900 truncate mr-2">
                      {skill.name}
                    </span>
                    <span 
                      className={`font-mono text-[10px] font-black px-1.5 py-0.5 border border-black shrink-0 ${getLevelBadgeClass(skill.level)}`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="neo-card p-8 text-center bg-white border-3 border-black shadow-neo">
            <p className="font-mono text-sm font-bold text-neutral-600">
              No skills found matching "{searchTerm}". Try another search term!
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
