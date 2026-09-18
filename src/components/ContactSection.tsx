import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Github, Linkedin, Send, Copy, Check, Sparkles, MessageSquare, Twitter } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  accentColor: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ accentColor }) => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Opportunity',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#FFE600', '#00F0FF', '#99FF33', '#FF5E7E']
      });
    } catch {
      // ignore
    }
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    setSubmitted(true);
    try {
      confetti({
        particleCount: 100,
        spread: 90,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: 'Opportunity', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 border-t-4 border-black bg-[#FFFDF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono font-black text-xs px-2.5 py-1 bg-black text-white">
                SECTION // 06
              </span>
              <span className="font-mono font-bold text-xs uppercase text-neutral-600">
                GET IN TOUCH
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-sans tracking-tight text-black flex items-center gap-3">
              LET'S COLLABORATE
              <MessageSquare className="w-8 h-8 hidden sm:inline" />
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm font-bold text-neutral-700 max-w-md">
            Interested in discussing distributed systems, research ideas, or full-time opportunities? Feel free to drop a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="neo-card p-6 sm:p-8 bg-[#FFF9E6] border-4 border-black shadow-neo-lg">
              <span className="font-mono font-black text-xs uppercase px-2 py-0.5 bg-neo-yellow border-2 border-black inline-block mb-3">
                DIRECT INBOX
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-sans text-black mb-3">
                HAVE A QUESTION OR ROLE?
              </h3>
              <p className="font-mono text-xs sm:text-sm font-semibold text-neutral-700 leading-relaxed mb-6">
                I am actively seeking Systems Engineering, Backend Architecture, and R&D opportunities. My inbox is always open.
              </p>

              {/* Email Copier Card */}
              <div className="bg-white border-3 border-black p-4 mb-6 shadow-neo-sm">
                <span className="font-mono font-bold text-[11px] text-neutral-500 block mb-1 uppercase">
                  Primary Contact:
                </span>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono font-black text-xs sm:text-sm text-black truncate">
                    {portfolioData.personal.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="neo-btn bg-neo-yellow text-xs py-1.5 px-2.5 border-2 border-black shrink-0"
                    title="Copy email to clipboard"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <span className="font-mono font-black text-xs uppercase text-neutral-600 block mb-2">
                  Connect Across Platforms:
                </span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={portfolioData.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-btn bg-white hover:bg-neutral-100 text-xs py-2 px-3 border-2 border-black shadow-neo-sm"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={portfolioData.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-btn bg-white hover:bg-neutral-100 text-xs py-2 px-3 border-2 border-black shadow-neo-sm"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  {portfolioData.personal.twitter && (
                    <a
                      href={portfolioData.personal.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neo-btn bg-white hover:bg-neutral-100 text-xs py-2 px-3 border-2 border-black shadow-neo-sm"
                    >
                      <Twitter className="w-4 h-4" />
                      <span>Twitter</span>
                    </a>
                  )}
                </div>
              </div>

            </div>

            {/* Quick Note Badge */}
            <div className="p-4 bg-neo-cyan border-3 border-black shadow-neo font-mono text-xs font-bold text-black flex items-center gap-3">
              <Sparkles className="w-6 h-6 shrink-0" />
              <span>Available for 2025/2026 Graduating Batches & Summer Internships.</span>
            </div>

          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="neo-card p-6 sm:p-8 bg-white border-4 border-black shadow-neo-xl">
              <div className="flex items-center justify-between border-b-3 border-black pb-3 mb-6">
                <h3 className="font-mono font-black text-lg uppercase tracking-tight">
                  SEND A DIRECT MESSAGE
                </h3>
                <span className="font-mono text-xs font-bold text-neutral-500">
                  FORM ID #0492
                </span>
              </div>

              {submitted ? (
                <div className="p-8 bg-[#FFF9E6] border-3 border-black text-center space-y-3 shadow-neo">
                  <div className="text-4xl">🎉</div>
                  <h4 className="font-mono font-black text-xl text-black">
                    MESSAGE SENT SUCCESSFULLY!
                  </h4>
                  <p className="font-mono text-xs sm:text-sm font-semibold text-neutral-700">
                    Thank you for reaching out! I will get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono font-bold text-xs uppercase block mb-1.5">
                        Your Name:
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ada Lovelace"
                        className="w-full neo-input text-xs sm:text-sm"
                      />
                    </div>

                    <div>
                      <label className="font-mono font-bold text-xs uppercase block mb-1.5">
                        Your Email:
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ada@domain.com"
                        className="w-full neo-input text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-mono font-bold text-xs uppercase block mb-1.5">
                      Subject / Intent:
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full neo-input text-xs sm:text-sm font-mono cursor-pointer"
                    >
                      <option value="Opportunity">Full-Time / Internship Role</option>
                      <option value="Research">Research Collaboration / Paper Discussion</option>
                      <option value="Mentorship">Student / Open-Source Mentorship</option>
                      <option value="Other">General Hello</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-mono font-bold text-xs uppercase block mb-1.5">
                      Message:
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Rituraj, I saw your RaftKV and eBPF projects..."
                      className="w-full neo-input text-xs sm:text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="neo-btn w-full py-3.5 text-sm sm:text-base font-bold border-3 border-black shadow-neo hover:shadow-neo-lg active:translate-x-1 active:translate-y-1 transition-all"
                    style={{ backgroundColor: accentColor }}
                  >
                    <Send className="w-4 h-4" />
                    <span>DISPATCH MESSAGE</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
