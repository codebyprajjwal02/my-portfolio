import React from "react";
import { Briefcase, Calendar, Award, Shield, Terminal, ArrowUpRight, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import { portfolioData } from "../portfolioData";

// Import real certificate images
import generativeAiCert from "../assets/cert-generative-ai.png";
import hardwareOsCert from "../assets/cert-hardware-os.png";
import azureDevopsCert from "../assets/cert-azure-devops.png";

export default function Experience() {
  const exp = portfolioData.experienceAchievements.experience[0];
  const certifications = portfolioData.experienceAchievements.certifications;
  const achievements = portfolioData.experienceAchievements.achievements;

  // Custom inline SVG icons
  const LeetcodeIcon = () => (
    <svg className="w-5 h-5 text-cyber-blue" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.8 9.8a1.375 1.375 0 0 0 0 1.956l11.3 11.3a1.379 1.379 0 0 0 1.951 0l9.8-9.8a1.376 1.376 0 0 0 0-1.956L14.444.414A1.365 1.365 0 0 0 13.483 0zm.012 3.414L21.4 11.3l-7.9 7.9-7.9-7.9 7.9-7.886zM9.54 13.47a.9.9 0 0 0-.64.26l-1.9 1.9a.9.9 0 1 0 1.28 1.28l1.9-1.9a.9.9 0 0 0-.64-1.54z" />
    </svg>
  );

  const GeeksforGeeksIcon = () => (
    <svg className="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3a9 9 0 0 0-9 9c0 3.5 2 6.5 5 8l1.5-2.5C7.5 16.5 6.5 14.5 6.5 12a5.5 5.5 0 1 1 5.5 5.5c-1.2 0-2.3-.4-3.2-1.1l-2 2a8.5 8.5 0 1 0 5.2-15.4z" />
    </svg>
  );

  const HackerrankIcon = () => (
    <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 2v20M20 2v20M4 12h16" />
    </svg>
  );

  return (
    <section id="experience" className="py-16 border-t border-slate-900 scroll-mt-16" aria-label="Professional Experience & Achievements">
      <div className="space-y-12">
        
        {/* Section Header */}
        <div className="text-left space-y-2">
          <div className="font-mono text-xs text-cyber-blue tracking-widest uppercase flex items-center gap-1.5 select-none">
            <Briefcase className="w-4 h-4" /> [SECTION: 04_CHRONICLES]
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-orbitron text-white tracking-tight">
            EXPERIENCE & ACHIEVEMENTS
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyber-blue to-transparent" />
        </div>

        {/* Chronological Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Timeline-based Experience */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="font-mono text-xs text-cyan-400 font-bold tracking-widest uppercase flex items-center gap-2 select-none">
              <Terminal className="w-4 h-4" /> [WORK HISTORY]
            </h3>

            <div className="relative border-l border-slate-900 ml-3.5 pl-6 space-y-8 select-text">
              {/* Event Circle Anchor */}
              <div className="absolute w-3.5 h-3.5 bg-slate-950 border-2 border-cyber-blue rounded-full -left-[8px] top-1.5 shadow-[0_0_8px_rgba(0,240,255,0.4)]" />
              
              <div className="space-y-3">
                {/* Header Metadata */}
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono text-slate-500 select-none">
                    <span className="text-cyber-blue font-bold uppercase tracking-wider">
                      [{exp.organization}]
                    </span>
                    <span className="text-slate-700">|</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.date}
                    </span>
                  </div>
                  
                  <h4 className="text-base sm:text-lg font-bold text-white font-mono uppercase tracking-wide">
                    {exp.title}
                  </h4>
                </div>

                {/* Body Details */}
                <div className="space-y-4">
                  <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed">
                    {exp.description}
                  </p>
                  
                  {/* exposure list */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    {/* exposure */}
                    <div className="bg-slate-900/20 border border-slate-900 rounded p-3 text-xs space-y-2">
                      <div className="font-mono text-[9px] text-cyber-blue uppercase font-bold tracking-widest select-none">
                        &gt; PRACTICAL_EXPOSURE
                      </div>
                      <ul className="space-y-1.5 text-slate-300 pl-0.5">
                        {exp.exposure.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-cyber-blue select-none font-bold font-mono">&gt;</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* participation */}
                    <div className="bg-slate-900/20 border border-slate-900 rounded p-3 text-xs space-y-2">
                      <div className="font-mono text-[9px] text-cyan-400 uppercase font-bold tracking-widest select-none">
                        &gt; ENGAGEMENTS
                      </div>
                      <ul className="space-y-1.5 text-slate-300 pl-0.5">
                        {exp.participation.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-cyan-400 select-none font-bold font-mono">&gt;</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* highlight */}
                  <div className="bg-emerald-950/5 border border-emerald-950/20 rounded p-3 text-xs flex items-start gap-2.5 shadow-[inset_0_1px_3px_rgba(16,185,129,0.03)]">
                    <span className="text-emerald-400 font-bold select-none font-mono mt-0.5">HIGHLIGHT //</span>
                    <p className="text-slate-300 font-sans leading-relaxed">
                      {exp.highlight}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 select-none flex flex-wrap gap-3">
                    {exp.certificateLink && (
                      <a
                        href={exp.certificateLink}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 bg-cyber-blue/10 hover:bg-cyber-blue text-cyber-blue hover:text-slate-950 border border-cyber-blue/30 rounded font-mono text-xs hover:shadow-[0_0_12px_rgba(0,240,255,0.2)] transition-all flex items-center justify-center gap-1.5 font-bold"
                      >
                        Certificate <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {exp.wrpReportLink && (
                      <a
                        href={exp.wrpReportLink}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 border border-cyber-blue/30 text-cyber-blue bg-cyber-blue/5 hover:bg-cyber-blue hover:text-slate-950 rounded font-mono text-xs hover:shadow-[0_0_12px_rgba(0,240,255,0.2)] transition-all flex items-center justify-center gap-1.5 font-bold"
                      >
                        WRP Report <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h3 className="font-mono text-xs text-cyan-400 font-bold tracking-widest uppercase flex items-center gap-2 select-none">
              <Shield className="w-4 h-4" /> [CERTIFICATIONS]
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <article
                  key={index}
                  className="glass-panel p-4 rounded border border-cyber-blue/10 bg-slate-950/20 hover:border-cyber-blue/25 hover:shadow-[0_0_15px_rgba(0,240,255,0.04)] transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    {/* Header */}
                    <div className="flex items-center justify-between text-[9px] font-mono text-slate-500 select-none pb-1 border-b border-slate-900/40">
                      <span className="text-cyber-blue font-bold uppercase tracking-wider">
                        [{cert.organization} // {cert.platform}]
                      </span>
                      <span>{cert.date.toUpperCase()}</span>
                    </div>

                    {/* Title */}
                    <h4 className="text-sm font-bold text-white font-mono group-hover:text-cyber-blue transition-colors mt-1.5">
                      {cert.title}
                    </h4>

                    {/* Description */}
                    <p className="text-xs text-slate-400 leading-relaxed font-sans pt-1">
                      {cert.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-slate-900/60 mt-3 flex items-center gap-3 select-none text-[10px]">
                    {cert.credentialLink && (
                      <a
                        href={cert.credentialLink}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 bg-cyber-blue/10 hover:bg-cyber-blue text-cyber-blue hover:text-slate-950 border border-cyber-blue/30 rounded font-mono hover:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all flex items-center gap-1.5 font-bold"
                      >
                        {index === 2 ? "Certificate" : "Credential"} <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    
                    <a
                      href={
                        index === 0
                          ? generativeAiCert
                          : index === 1
                          ? hardwareOsCert
                          : azureDevopsCert
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 border border-slate-800 text-slate-400 hover:text-white rounded font-mono hover:border-slate-700 transition-all flex items-center gap-1"
                    >
                      PREVIEW_IMAGE
                    </a>
                  </div>

                </article>
              ))}
            </div>

          </div>

        </div>

        {/* Separator / Bottom Sub-Grid: Achievements & Coding Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-slate-900/80 pt-10">
          
          {/* Subsection: ACHIEVEMENTS */}
          <div className="md:col-span-7 space-y-5 text-left">
            <h3 className="font-mono text-xs text-cyan-400 font-bold tracking-widest uppercase flex items-center gap-2 select-none">
              <Award className="w-4 h-4" /> [ACHIEVEMENTS]
            </h3>
            
            <div className="glass-panel p-5 rounded border border-slate-900 bg-slate-950/30 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {achievements.map((ach, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-2.5 p-2 bg-slate-900/10 border border-slate-900 hover:border-cyber-blue/10 rounded transition-all group"
                  >
                    <CheckCircle2 className="w-4.5 h-4.5 text-cyber-blue shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-xs sm:text-sm text-slate-300 font-sans">{ach}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Subsection: CODING PROFILES */}
          <div className="md:col-span-5 space-y-5 text-left">
            <h3 className="font-mono text-xs text-cyan-400 font-bold tracking-widest uppercase flex items-center gap-2 select-none">
              <Sparkles className="w-4 h-4" /> [CODING PROFILES]
            </h3>

            <div className="grid grid-cols-1 gap-3.5">
              
              {/* LeetCode */}
              <a
                href="https://leetcode.com/u/prajjwal02/"
                target="_blank"
                rel="noreferrer"
                className="glass-panel p-4 rounded border border-slate-900 bg-slate-950/40 hover:border-cyber-blue/30 hover:shadow-[0_0_15px_rgba(0,240,255,0.05)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-slate-950 border border-slate-850 flex items-center justify-center group-hover:border-cyber-blue/20 shrink-0">
                    <LeetcodeIcon />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider group-hover:text-cyber-blue transition-colors">LeetCode</h4>
                    <p className="text-[10px] font-mono text-slate-400">@prajjwal02</p>
                    <p className="text-[10px] font-sans text-slate-500 mt-0.5">Data Structures & Algorithms | Problem Solving</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4.5 h-4.5 text-slate-500 group-hover:text-cyber-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
              </a>

              {/* GeeksforGeeks */}
              <a
                href="https://www.geeksforgeeks.org/profile/sprajjwalr4ay?tab=activity"
                target="_blank"
                rel="noreferrer"
                className="glass-panel p-4 rounded border border-slate-900 bg-slate-950/40 hover:border-cyber-blue/30 hover:shadow-[0_0_15px_rgba(0,240,255,0.05)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-slate-950 border border-slate-850 flex items-center justify-center group-hover:border-cyber-blue/20 shrink-0">
                    <GeeksforGeeksIcon />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider group-hover:text-cyber-blue transition-colors">GeeksforGeeks</h4>
                    <p className="text-[10px] font-mono text-slate-400">@sprajjwalr4ay</p>
                    <p className="text-[10px] font-sans text-slate-500 mt-0.5">DSA Practice | Technical Learning</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4.5 h-4.5 text-slate-500 group-hover:text-cyber-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
              </a>

              {/* HackerRank */}
              <a
                href="https://www.hackerrank.com/profile/4PS23CS194"
                target="_blank"
                rel="noreferrer"
                className="glass-panel p-4 rounded border border-slate-900 bg-slate-950/40 hover:border-cyber-blue/30 hover:shadow-[0_0_15px_rgba(0,240,255,0.05)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-slate-950 border border-slate-850 flex items-center justify-center group-hover:border-cyber-blue/20 shrink-0">
                    <HackerrankIcon />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider group-hover:text-cyber-blue transition-colors">HackerRank</h4>
                    <p className="text-[10px] font-mono text-slate-400">@4PS23CS194</p>
                    <p className="text-[10px] font-sans text-slate-500 mt-0.5">Programming Challenges | Problem Solving</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4.5 h-4.5 text-slate-500 group-hover:text-cyber-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
