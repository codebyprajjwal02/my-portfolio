import React from "react";
import { BookOpen } from "lucide-react";
import { portfolioData } from "../portfolioData";

export default function About() {
  return (
    <section id="about" className="py-16 border-t border-slate-900 scroll-mt-16" aria-label="Developer Dossier Section">
      <div className="space-y-10">
        
        {/* Dossier Header */}
        <div className="text-left space-y-2">
          <div className="font-mono text-xs text-cyber-blue tracking-widest uppercase flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" /> [SECTION: 01_OVERVIEW]
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-orbitron text-white tracking-tight">DEVELOPER DOSSIER</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyber-blue to-transparent" />
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Mission Log Statements */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="glass-panel p-6 rounded border border-cyber-blue/10 bg-slate-950/20 relative cyber-corners">
              <h3 className="font-mono text-xs text-cyan-400 font-bold tracking-widest uppercase mb-3 flex items-center gap-1.5">
                <span>// PROFESSIONAL OVERVIEW</span>
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed font-sans">
                {portfolioData.aboutMe.summary}
              </p>
            </div>

            <div className="glass-panel p-6 rounded border border-cyber-blue/10 bg-slate-950/20 relative cyber-corners">
              <h3 className="font-mono text-xs text-cyan-400 font-bold tracking-widest uppercase mb-3 flex items-center gap-1.5">
                <span>// SYSTEM MISSION CAPABILITIES</span>
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed font-mono italic">
                &quot;{portfolioData.aboutMe.careerObjective}&quot;
              </p>
            </div>
          </div>

          {/* Right Column: Educational Transcripts */}
          <div className="lg:col-span-5 text-left">
            <div className="glass-panel p-6 rounded border border-cyber-blue/10 bg-slate-950/40 relative shadow-xl">
              <div className="flex justify-between items-center border-b border-slate-900 pb-3 mb-4 font-mono text-xs select-none">
                <span className="text-cyber-blue font-bold tracking-wider">ACADEMIC_RECORD.DAT</span>
              </div>

              {portfolioData.aboutMe.education.map((edu, index) => (
                <div key={index} className="space-y-4 font-mono text-xs">
                  <div>
                    <h4 className="text-slate-300 font-bold text-sm tracking-tight font-sans">{edu.institution}</h4>
                    <div className="text-cyber-blue text-xs font-semibold mt-0.5">{edu.degree}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 bg-slate-950/60 p-3 rounded border border-slate-900">
                    <div>
                      <span className="text-slate-500 block text-[9px] uppercase tracking-wider select-none">Ingress - Egress</span>
                      <span className="text-slate-300 font-bold font-mono">{edu.duration}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[9px] uppercase tracking-wider select-none">CGPA</span>
                      <span className="text-emerald-400 font-bold font-orbitron">{edu.gpa}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-slate-500 block text-[9px] uppercase tracking-wider select-none">// RELEVANT COURSEWORK</span>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded text-[10px] bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyber-blue hover:border-cyber-blue/20 transition-all font-mono"
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

        </div>
      </div>
    </section>
  );
}
