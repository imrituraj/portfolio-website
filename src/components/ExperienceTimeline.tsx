import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

interface ExperienceTimelineProps {
  accentColor: string;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ accentColor }) => {
  return (
    <section id="experience" className="py-16 border-t-4 border-black bg-[#FFFDF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono font-black text-xs px-2.5 py-1 bg-black text-white">
                SECTION // 05
              </span>
              <span className="font-mono font-bold text-xs uppercase text-neutral-600">
                TIMELINE & PEDIGREE
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-sans tracking-tight text-black flex items-center gap-3">
              EXPERIENCE & EDUCATION
              <GraduationCap className="w-8 h-8 hidden sm:inline" />
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm font-bold text-neutral-700 max-w-md">
            Academic teaching assistantships, distributed systems research, software engineering internships, and degrees.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Experience Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-mono font-black text-xl uppercase tracking-wider mb-6 flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              <span>Work & Academic Appointments</span>
            </h3>

            <div className="space-y-6">
              {portfolioData.experience.map((exp) => (
                <div
                  key={exp.id}
                  className="neo-card p-6 bg-white border-4 border-black shadow-neo hover:shadow-neo-lg transition-all"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className={`neo-badge ${
                      exp.type === 'Teaching Assistant' 
                        ? 'bg-neo-yellow text-black' 
                        : exp.type === 'Research' 
                        ? 'bg-neo-cyan text-black' 
                        : 'bg-neo-green text-black'
                    }`}>
                      {exp.type}
                    </span>
                    <span className="font-mono text-xs font-bold text-neutral-600 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-black font-sans text-black">
                    {exp.role}
                  </h4>
                  <div className="font-mono text-xs sm:text-sm font-bold text-neutral-700 mb-3 flex items-center gap-2">
                    <span>{exp.organization}</span>
                    {exp.department && <span>• {exp.department}</span>}
                  </div>

                  <div className="space-y-2 mb-4">
                    {exp.responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex items-start gap-2 font-mono text-xs text-neutral-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  {exp.techStack && (
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t-2 border-neutral-200">
                      {exp.techStack.map((tech) => (
                        <span key={tech} className="font-mono text-[11px] font-bold px-2 py-0.5 bg-neutral-100 border border-black">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education & Achievements Column */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Education Sub-Section */}
            <div>
              <h3 className="font-mono font-black text-xl uppercase tracking-wider mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                <span>Education</span>
              </h3>

              <div className="space-y-6">
                {portfolioData.education.map((edu) => (
                  <div
                    key={edu.id}
                    className="neo-card p-6 bg-[#FFF9E6] border-3 border-black shadow-neo"
                  >
                    <div className="flex items-center justify-between font-mono text-xs font-bold mb-1">
                      <span className="bg-black text-white px-2 py-0.5 uppercase">
                        {edu.duration}
                      </span>
                      {edu.grade && (
                        <span className="bg-neo-cyan px-2 py-0.5 border border-black font-black">
                          {edu.grade}
                        </span>
                      )}
                    </div>

                    <h4 className="text-xl font-black font-sans text-black mt-2">
                      {edu.degree}
                    </h4>
                    <p className="font-mono text-xs font-bold text-neutral-800 mb-1">
                      {edu.field}
                    </p>
                    <p className="font-mono text-xs text-neutral-600 mb-3">
                      {edu.institution}, {edu.location}
                    </p>

                    {edu.thesisOrCapstone && (
                      <div className="bg-white p-2.5 border-2 border-black mb-3 font-mono text-xs font-semibold text-neutral-800">
                        {edu.thesisOrCapstone}
                      </div>
                    )}

                    <div className="space-y-1">
                      <span className="font-mono font-bold text-[11px] uppercase text-neutral-500 block">
                        Advanced Coursework:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {edu.coursework.map((course) => (
                          <span
                            key={course}
                            className="font-mono text-[10px] font-bold px-1.5 py-0.5 bg-white border border-black"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Honors & Achievements */}
            <div>
              <h3 className="font-mono font-black text-xl uppercase tracking-wider mb-4 flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>Honors & Milestones</span>
              </h3>

              <div className="space-y-3">
                {portfolioData.achievements.map((ach, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-white border-2 border-black shadow-neo-sm hover:shadow-neo transition-all"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-xs font-black text-black">
                        {ach.title}
                      </span>
                      <span className="neo-badge bg-neo-yellow text-[10px] py-0.5 px-1.5">
                        {ach.badge}
                      </span>
                    </div>
                    <p className="font-mono text-xs text-neutral-700 leading-snug">
                      {ach.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
