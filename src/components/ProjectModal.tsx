import React, { useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { X, ExternalLink, Code2, Cpu, CheckCircle2 } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  accentColor: string;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, accentColor }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-xs"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white border-4 border-black shadow-neo-xl z-10">
        
        {/* Modal Top Bar */}
        <div 
          className="flex items-center justify-between p-4 border-b-4 border-black"
          style={{ backgroundColor: project.accentColor || accentColor }}
        >
          <div className="flex items-center gap-2">
            <span className="font-mono font-black text-xs uppercase px-2.5 py-1 bg-black text-white border border-black">
              {project.category}
            </span>
            {project.featured && (
              <span className="font-mono font-bold text-xs bg-white px-2 py-0.5 border border-black">
                ★ FEATURED
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 bg-white border-2 border-black shadow-neo-sm hover:bg-neutral-100 active:translate-x-0.5 active:translate-y-0.5"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-black stroke-[3]" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          <div>
            <h3 className="text-2xl sm:text-4xl font-black font-sans text-black mb-2">
              {project.title}
            </h3>
            <p className="font-mono text-sm sm:text-base font-bold text-neutral-700">
              {project.tagline}
            </p>
          </div>

          {/* Metrics Callout */}
          {project.metrics && (
            <div className="bg-[#FFF9E6] border-3 border-black p-3.5 shadow-neo-sm flex items-center gap-3">
              <Cpu className="w-6 h-6 text-black shrink-0" />
              <div>
                <span className="font-mono font-black text-[11px] uppercase tracking-wider text-neutral-600 block">
                  Measured Performance & Impact:
                </span>
                <span className="font-mono text-sm sm:text-base font-black text-black">
                  {project.metrics}
                </span>
              </div>
            </div>
          )}

          {/* Full Description */}
          <div>
            <h4 className="font-mono font-black text-xs uppercase tracking-wider text-neutral-600 mb-2">
              Project Overview:
            </h4>
            <p className="font-mono text-sm font-semibold text-neutral-800 leading-relaxed bg-[#FDFBF7] p-4 border-2 border-black">
              {project.description}
            </p>
          </div>

          {/* Architecture Details */}
          {project.architectureDetails && project.architectureDetails.length > 0 && (
            <div>
              <h4 className="font-mono font-black text-xs uppercase tracking-wider text-neutral-600 mb-3">
                Architectural Highlights & Engineering Decisions:
              </h4>
              <div className="space-y-2">
                {project.architectureDetails.map((detail, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-2.5 font-mono text-xs sm:text-sm font-semibold text-neutral-800 bg-neutral-50 p-2.5 border border-black"
                  >
                    <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Badges */}
          <div>
            <h4 className="font-mono font-black text-xs uppercase tracking-wider text-neutral-600 mb-2">
              Technologies & Frameworks:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs font-bold px-3 py-1 bg-white border-2 border-black shadow-neo-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Actions */}
          <div className="pt-4 border-t-3 border-black flex flex-wrap gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn bg-black text-white hover:bg-neutral-800 text-sm py-2.5 px-4"
            >
              <Code2 className="w-4 h-4" />
              <span>VIEW SOURCE ON GITHUB</span>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn text-sm py-2.5 px-4"
                style={{ backgroundColor: project.accentColor || accentColor }}
              >
                <ExternalLink className="w-4 h-4" />
                <span>LIVE DEMO / REPO</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="neo-btn bg-white hover:bg-neutral-100 text-sm py-2.5 px-4 ml-auto"
            >
              CLOSE
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
