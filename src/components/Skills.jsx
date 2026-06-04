import React from "react";
import { Cpu, Terminal, Layers, Database, Wrench, BrainCircuit, Code2, Sparkles, BookOpen, Compass } from "lucide-react";
import { portfolioData } from "../portfolioData";

export default function Skills() {
  const { categories, proficiencies } = portfolioData.skills;

  const getSkillIcon = (category) => {
    switch (category.toLowerCase()) {
      case "frontend":
        return <Layers className="w-5 h-5 text-cyber-blue" />;
      case "backend":
        return <Cpu className="w-5 h-5 text-cyber-blue" />;
      case "database":
        return <Database className="w-5 h-5 text-cyber-blue" />;
      case "programming languages":
        return <Code2 className="w-5 h-5 text-cyber-blue" />;
      case "tools":
        return <Wrench className="w-5 h-5 text-cyber-blue" />;
      case "ai & modern technologies":
        return <BrainCircuit className="w-5 h-5 text-cyber-blue" />;
      default:
        return <Terminal className="w-5 h-5 text-cyber-blue" />;
    }
  };

  return (
    <section id="skills" className="py-16 border-t border-slate-900 scroll-mt-16" aria-label="Skills & Capabilities Matrix">
      <div className="space-y-10">
        
        {/* Section Title */}
        <div className="text-left space-y-2">
          <div className="font-mono text-xs text-cyber-blue tracking-widest uppercase flex items-center gap-1.5 select-none">
            <Cpu className="w-4 h-4" /> [SECTION: 02_CAPABILITIES]
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-orbitron text-white tracking-tight">
            TECHNICAL SKILLS
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyber-blue to-transparent" />
        </div>

        {/* Categories Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Block: Technical Categories Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {categories.map((skillGroup, index) => (
              <div
                key={index}
                className="glass-panel p-5 rounded border border-cyber-blue/10 bg-slate-950/20 hover:border-cyber-blue/25 hover:shadow-[0_0_20px_rgba(0,240,255,0.04)] transition-all duration-300 group cyber-corners"
              >
                <div>
                  {/* Categorical Header (Cleaner, all artificial labels removed) */}
                  <div className="flex items-center justify-between border-b border-slate-900 pb-2.5 mb-3.5 select-none">
                    <h3 className="font-orbitron font-bold text-white tracking-wide text-xs flex items-center gap-2.5 uppercase">
                      {getSkillIcon(skillGroup.category)}
                      {skillGroup.category}
                    </h3>
                  </div>

                  {/* Clean Glowing Badges with Spacing & Hover Improvements */}
                  <div className="flex flex-wrap gap-2.5">
                    {skillGroup.items.map((skill, idx) => (
                      <div
                        key={idx}
                        className="px-2.5 py-1.5 rounded bg-slate-950 border border-slate-850 hover:border-cyber-blue/40 text-xs font-mono text-slate-300 hover:text-white hover:scale-[1.04] hover:bg-slate-900/50 hover:shadow-[0_0_12px_rgba(0,240,255,0.06)] active:scale-95 transition-all duration-200 flex items-center gap-2 shadow-[inset_0_1px_3px_rgba(0,240,255,0.02)] cursor-default select-none"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue animate-pulse" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Block: Proficiency Dashboard (Core, Learning, Exploring) */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <h3 className="font-mono text-xs text-cyan-400 font-bold tracking-widest uppercase flex items-center gap-2 select-none">
              <Sparkles className="w-4 h-4 text-cyan-400" /> [PROFICIENCY HUD]
            </h3>

            <div className="glass-panel p-5 rounded border border-cyber-blue/15 bg-slate-950/30 space-y-6 cyber-corners">
              
              {/* 1. Core Skills */}
              <div className="space-y-3">
                <h4 className="font-mono text-[10px] text-emerald-400 font-bold tracking-widest uppercase flex items-center gap-1.5 select-none border-b border-slate-900 pb-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> CORE SKILLS
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {proficiencies.core.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-emerald-500/5 border border-emerald-500/30 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.05)] hover:border-emerald-400 hover:scale-[1.04] active:scale-95 transition-all duration-200 cursor-default select-none"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* 2. Learning */}
              <div className="space-y-3">
                <h4 className="font-mono text-[10px] text-amber-500 font-bold tracking-widest uppercase flex items-center gap-1.5 select-none border-b border-slate-900 pb-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-amber-500" /> LEARNING
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {proficiencies.learning.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-amber-500/5 border border-amber-500/25 text-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.03)] hover:border-amber-400 hover:scale-[1.04] active:scale-95 transition-all duration-200 cursor-default select-none animate-pulse"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* 3. Exploring */}
              <div className="space-y-3">
                <h4 className="font-mono text-[10px] text-cyber-blue font-bold tracking-widest uppercase flex items-center gap-1.5 select-none border-b border-slate-900 pb-1.5">
                  <Compass className="w-3.5 h-3.5 text-cyber-blue" /> EXPLORING
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {proficiencies.exploring.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-cyber-blue/5 border border-cyber-blue/20 text-cyber-blue shadow-[0_0_8px_rgba(0,240,255,0.03)] hover:border-cyber-blue/40 hover:scale-[1.04] active:scale-95 transition-all duration-200 cursor-default select-none"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

// Simple React CheckCircle icon replacement helper
function CheckCircle2(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
