import React, { useState, useRef, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Terminal as TerminalIcon, CornerDownLeft, Maximize2, Minimize2 } from 'lucide-react';

interface TerminalWidgetProps {
  accentColor: string;
}

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export const TerminalWidget: React.FC<TerminalWidgetProps> = ({ accentColor }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1.5 text-neutral-300">
          <p className="text-neo-yellow font-bold">
            ⚡ Welcome to {portfolioData.personal.name}'s Interactive M.Tech CSE Terminal v2.4
          </p>
          <p className="text-neutral-400">
            Type <span className="text-neo-cyan font-bold bg-neutral-900 px-1">help</span> to view available commands or try <span className="text-neo-cyan font-bold bg-neutral-900 px-1">research</span>, <span className="text-neo-cyan font-bold bg-neutral-900 px-1">skills</span>, or <span className="text-neo-cyan font-bold bg-neutral-900 px-1">projects</span>.
          </p>
        </div>
      ),
    },
  ]);

  const [isExpanded, setIsExpanded] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let output: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        output = (
          <div className="space-y-1 text-neutral-300">
            <p className="text-neo-yellow font-bold mb-1">AVAILABLE COMMANDS:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 font-mono text-xs">
              <div><span className="text-neo-cyan font-bold">bio</span> : Student profile & background</div>
              <div><span className="text-neo-cyan font-bold">research</span> : M.Tech thesis & publications</div>
              <div><span className="text-neo-cyan font-bold">projects</span> : List featured engineering works</div>
              <div><span className="text-neo-cyan font-bold">skills</span> : Core languages & frameworks</div>
              <div><span className="text-neo-cyan font-bold">education</span> : Degrees & institutions</div>
              <div><span className="text-neo-cyan font-bold">contact</span> : Email & social profiles</div>
              <div><span className="text-neo-cyan font-bold">clear</span> : Clear terminal console</div>
            </div>
          </div>
        );
        break;

      case 'bio':
        output = (
          <div className="space-y-1 text-neutral-300">
            <p className="text-white font-bold">{portfolioData.personal.name} — {portfolioData.personal.role}</p>
            <p className="text-neutral-400">{portfolioData.personal.shortBio}</p>
            <p className="text-neo-green text-xs font-bold">Degree: {portfolioData.personal.degree}</p>
          </div>
        );
        break;

      case 'research':
        output = (
          <div className="space-y-2 text-neutral-300">
            <p className="text-neo-yellow font-bold">M.TECH CSE THESIS & RESEARCH FOCUS:</p>
            <p className="text-white font-semibold">{portfolioData.researchFocus.title}</p>
            <p className="text-neutral-400 text-xs">{portfolioData.researchFocus.description}</p>
            <div className="mt-1">
              <span className="text-neo-cyan text-xs font-bold block">PUBLICATIONS:</span>
              {portfolioData.publications.map((p) => (
                <div key={p.id} className="text-xs text-neutral-300 pl-2 border-l-2 border-neo-yellow mt-1">
                  • {p.title} ({p.year}) - {p.venue}
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-1.5 text-neutral-300">
            <p className="text-neo-yellow font-bold">FEATURED PROJECTS:</p>
            {portfolioData.projects.map((proj, idx) => (
              <div key={proj.id} className="text-xs pl-2 border-l border-neutral-700">
                <span className="text-neo-cyan font-bold">[{idx + 1}] {proj.title}</span> ({proj.category})
                <p className="text-neutral-400">{proj.tagline}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2 text-neutral-300">
            <p className="text-neo-yellow font-bold">CORE TECHNICAL ARSENAL:</p>
            {portfolioData.skills.map((cat) => (
              <div key={cat.title} className="text-xs">
                <span className="text-neo-green font-bold uppercase">{cat.title}:</span>{' '}
                <span className="text-neutral-300">{cat.skills.map(s => s.name).join(', ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'education':
        output = (
          <div className="space-y-2 text-neutral-300">
            <p className="text-neo-yellow font-bold">ACADEMIC BACKGROUND:</p>
            {portfolioData.education.map((edu) => (
              <div key={edu.id} className="text-xs pl-2 border-l border-neutral-700">
                <p className="text-white font-bold">{edu.degree} in {edu.field}</p>
                <p className="text-neutral-400">{edu.institution} | {edu.duration} | {edu.grade}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-neutral-300 text-xs">
            <p className="text-neo-yellow font-bold">GET IN TOUCH:</p>
            <p>Email: <span className="text-neo-cyan">{portfolioData.personal.email}</span></p>
            <p>GitHub: <span className="text-neutral-400">{portfolioData.personal.github}</span></p>
            <p>LinkedIn: <span className="text-neutral-400">{portfolioData.personal.linkedin}</span></p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'sudo':
        output = (
          <p className="text-neo-pink font-bold">
            Nice try! You are already in visitor root mode with read permissions :)
          </p>
        );
        break;

      case '':
        output = null;
        break;

      default:
        output = (
          <p className="text-red-400 text-xs">
            command not found: {trimmed}. Type <span className="text-neo-yellow underline">help</span> for a list of valid commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(inputVal);
    setInputVal('');
  };

  return (
    <section id="terminal" className="py-16 border-t-4 border-black bg-[#FFFDF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono font-black text-xs px-2.5 py-1 bg-black text-white">
                SECTION // 03
              </span>
              <span className="font-mono font-bold text-xs uppercase text-neutral-600">
                INTERACTIVE SHELL
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-sans tracking-tight text-black flex items-center gap-3">
              DEVELOPER TERMINAL
              <TerminalIcon className="w-8 h-8 hidden sm:inline" />
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm font-bold text-neutral-700 max-w-md">
            Prefer the command line? Run interactive shell queries to inspect research papers, skills, education, and credentials.
          </p>
        </div>

        {/* Terminal Window */}
        <div className={`neo-card bg-[#181818] border-4 border-black shadow-neo-xl transition-all duration-300 ${
          isExpanded ? 'max-w-5xl' : 'max-w-4xl'
        } mx-auto`}>
          
          {/* Terminal Window Bar */}
          <div className="bg-[#2D2D2D] px-4 py-3 border-b-3 border-black flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] border-2 border-black inline-block" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] border-2 border-black inline-block" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#27C93F] border-2 border-black inline-block" />
              <span className="font-mono text-xs font-bold text-neutral-300 ml-2 select-none">
                rituraj@mtech-cse:~ (zsh)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-neutral-400 hover:text-white p-1"
                title={isExpanded ? "Collapse" : "Expand"}
              >
                {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Terminal Content Area */}
          <div 
            className="p-4 sm:p-6 font-mono text-xs sm:text-sm min-h-[320px] max-h-[460px] overflow-y-auto space-y-3 cursor-text text-neutral-200"
            onClick={() => inputRef.current?.focus()}
          >
            {/* History items */}
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-neutral-400">
                  <span className="text-neo-green font-bold">rituraj@mtech:~$</span>
                  <span className="text-white font-semibold">{item.command}</span>
                </div>
                {item.output && <div className="pl-4 border-l-2 border-neutral-800">{item.output}</div>}
              </div>
            ))}

            {/* Current Input Line */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-1">
              <span className="text-neo-green font-bold shrink-0">rituraj@mtech:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type 'help' or command..."
                className="w-full bg-transparent text-white font-mono text-xs sm:text-sm focus:outline-none placeholder:text-neutral-600 caret-neo-yellow"
                autoComplete="off"
                spellCheck="false"
              />
              <button type="submit" className="text-neutral-500 hover:text-white shrink-0">
                <CornerDownLeft className="w-4 h-4" />
              </button>
            </form>

            <div ref={bottomRef} />
          </div>

          {/* Terminal Quick Button Bar */}
          <div className="bg-[#222222] border-t-2 border-neutral-800 p-2.5 px-4 flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] uppercase font-bold text-neutral-400 mr-1">
              Quick Exec:
            </span>
            {['help', 'research', 'skills', 'projects', 'education', 'contact', 'clear'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="font-mono text-[11px] font-bold px-2 py-1 bg-[#333333] hover:bg-black text-neutral-200 hover:text-neo-yellow border border-neutral-700 transition-colors"
              >
                ${cmd}
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
