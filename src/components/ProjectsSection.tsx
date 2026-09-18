import React, { useState } from 'react';
import { portfolioData, Project } from '../data/portfolioData';
import { FolderGit2, ExternalLink, Code2, ArrowUpRight, Cpu } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

interface ProjectsSectionProps {
  accentColor: string;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ accentColor }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Systems', 'AI / ML', 'Full-Stack', 'Cloud & DevOps'];

  const filteredProjects = activeCategory === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-16 border-t-4 border-black bg-[#FFFDF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono font-black text-xs px-2.5 py-1 bg-black text-white">
                SECTION // 02
              </span>
              <span className="font-mono font-bold text-xs uppercase text-neutral-600">
                SYSTEMS & CODE
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-sans tracking-tight text-black flex items-center gap-3">
              FEATURED ENGINEERING PROJECTS
              <FolderGit2 className="w-8 h-8 hidden sm:inline" />
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm font-bold text-neutral-700 max-w-md">
            Production-grade systems, distributed consensus prototypes, eBPF probes, and accelerated machine learning runtimes.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-xs sm:text-sm font-black px-4 py-2 border-3 border-black transition-all ${
                  isActive
                    ? 'shadow-neo text-black translate-x-[-2px] translate-y-[-2px]'
                    : 'bg-white hover:bg-neutral-100 text-neutral-800'
                }`}
                style={{ backgroundColor: isActive ? accentColor : undefined }}
              >
                {cat.toUpperCase()}
                <span className="ml-1.5 text-[11px] opacity-75 font-normal">
                  ({cat === 'All' 
                    ? portfolioData.projects.length 
                    : portfolioData.projects.filter(p => p.category === cat).length})
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="neo-card bg-white border-4 border-black shadow-neo hover:shadow-neo-lg hover:-translate-y-1 hover:-translate-x-1 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Card Top Accent Bar */}
                <div 
                  className="p-3 border-b-3 border-black flex items-center justify-between"
                  style={{ backgroundColor: project.accentColor || accentColor }}
                >
                  <span className="font-mono font-black text-xs uppercase px-2 py-0.5 bg-black text-white">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="font-mono font-black text-[11px] bg-white text-black px-2 py-0.5 border border-black shadow-neo-sm">
                      FEATURED
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <h3 
                    onClick={() => setSelectedProject(project)}
                    className="text-xl sm:text-2xl font-black font-sans text-black mb-2 group-hover:underline cursor-pointer flex items-center justify-between"
                  >
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>

                  <p className="font-mono text-xs sm:text-sm font-semibold text-neutral-700 mb-4 line-clamp-3">
                    {project.tagline}
                  </p>

                  {/* Benchmark / Metric pill if available */}
                  {project.metrics && (
                    <div className="mb-4 bg-[#F8F6F0] border-2 border-black p-2 flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-black shrink-0" />
                      <span className="font-mono text-[11px] font-bold text-neutral-900 truncate">
                        {project.metrics}
                      </span>
                    </div>
                  )}

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] font-bold px-2 py-0.5 bg-neutral-100 border border-black"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="font-mono text-[11px] font-bold px-1.5 py-0.5 bg-neutral-200 border border-black text-neutral-700">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 pt-0 mt-2 flex items-center gap-2 border-t-2 border-neutral-100 pt-4">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="neo-btn bg-white hover:bg-neutral-100 text-xs py-1.5 px-3 border-2 border-black shadow-neo-sm flex-1 justify-center"
                >
                  <span>Details</span>
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn bg-black text-white hover:bg-neutral-800 text-xs py-1.5 px-3 border-2 border-black shadow-neo-sm"
                  title="View GitHub Repository"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Code</span>
                </a>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-btn text-xs py-1.5 px-2.5 border-2 border-black shadow-neo-sm"
                    style={{ backgroundColor: project.accentColor || accentColor }}
                    title="Live Demo or Project Link"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        accentColor={accentColor}
      />
    </section>
  );
};
