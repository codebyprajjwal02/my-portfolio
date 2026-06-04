import React from "react";
import { ArrowUpRight, Layers, ShieldAlert, Wrench, Sparkles } from "lucide-react";
import { portfolioData } from "../portfolioData";

// Import real project screenshots
import deogharKitabImg from "../assets/deoghar-kitab.png";
import bimaSetuImg from "../assets/bima-setu.png";
import netflixCloneImg from "../assets/netflix-clone.png";

const projectImages = {
  "deoghar-kitab": deogharKitabImg,
  "bima-setu": bimaSetuImg,
  "netflix-clone": netflixCloneImg,
};

export default function Projects() {
  // SVG brand icon
  const GithubIcon = () => (
    <svg
      className="w-4 h-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );

  const [featuredProject, ...secondaryProjects] = portfolioData.projects;

  return (
    <section id="projects" className="py-16 border-t border-slate-900 scroll-mt-16" aria-label="Featured Software Projects">
      <div className="space-y-12">
        
        {/* Section Header */}
        <div className="text-left space-y-3">
          <div className="font-mono text-xs text-cyber-blue tracking-widest uppercase flex items-center gap-1.5 select-none">
            <Layers className="w-4 h-4" /> [SYSTEM_MODULE: 03_ARCHIVE]
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-orbitron text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-400 font-sans text-sm sm:text-base max-w-2xl leading-relaxed">
            Real-world applications built using modern full-stack technologies and focused on solving practical problems.
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-cyber-blue to-transparent" />
        </div>

        {/* 1. Featured Project - Full-width Card */}
        {featuredProject && (
          <article className="glass-panel rounded-lg border border-cyber-blue/15 bg-slate-950/30 overflow-hidden hover:border-cyber-blue/35 hover:shadow-[0_0_35px_rgba(0,240,255,0.08)] transition-all duration-500 group cyber-corners relative p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Screenshot & Visual Section */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative rounded border border-slate-800 bg-slate-900 overflow-hidden aspect-video flex items-center justify-center group-hover:border-cyber-blue/30 transition-colors shadow-2xl">
                  {/* Glowing Overlay */}
                  <div className="absolute inset-0 bg-cyber-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
                  
                  {/* Category Badge overlay */}
                  <span className="absolute top-3 left-3 bg-cyber-blue/90 text-slate-950 font-mono text-[9px] font-bold px-2 py-0.5 uppercase tracking-wider rounded border border-cyber-blue/30 backdrop-blur z-20 shadow-[0_0_10px_rgba(0,240,255,0.3)] select-none">
                    {featuredProject.category}
                  </span>

                  <img
                    src={projectImages[featuredProject.id]}
                    alt={`${featuredProject.name} Project Interface Preview`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle JARVIS Scanline grid overlay */}
                  <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none z-10" />
                </div>

                {/* Stack and Badge highlights */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {featuredProject.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-slate-800 text-slate-400 group-hover:border-cyber-blue/20 group-hover:text-cyber-blue transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Details Section */}
              <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-5 text-left">
                <div className="space-y-4">
                  
                  {/* Header info */}
                  <div className="flex items-center justify-between border-b border-slate-900/60 pb-2 select-none">
                    <span className="font-mono text-[10px] text-cyber-blue tracking-widest uppercase flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-cyan-400 animate-pulse" /> [FEATURED_SYSTEM_CORE]
                    </span>
                    <span className="font-mono text-[9px] text-emerald-400 border border-emerald-500/20 bg-emerald-500/5 px-2 py-0.5 rounded">
                      DEPLOY_SUCCESSFUL
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-black font-orbitron text-white tracking-wide group-hover:text-cyber-blue transition-colors">
                    {featuredProject.name}
                  </h3>

                  {/* Problem Solved Panel */}
                  <div className="bg-rose-950/10 border border-rose-950/40 rounded-lg p-3.5 space-y-1.5 shadow-[inset_0_1px_3px_rgba(244,63,94,0.05)]">
                    <div className="font-mono text-[9px] text-rose-400 uppercase tracking-widest font-semibold flex items-center gap-1.5 select-none">
                      <ShieldAlert className="w-3.5 h-3.5 text-rose-400" /> [1. PROBLEM SOLVED]
                    </div>
                    <p className="text-slate-300 leading-relaxed font-sans text-xs sm:text-sm">
                      {featuredProject.problemSolved}
                    </p>
                  </div>

                  {/* Description & Achievement */}
                  <div className="space-y-3.5 bg-slate-900/10 border border-slate-900 rounded-lg p-3.5">
                    <div className="font-mono text-[9px] text-cyber-blue uppercase tracking-widest font-semibold flex items-center gap-1.5 select-none">
                      <Wrench className="w-3.5 h-3.5 text-cyber-blue" /> [2. WHAT I BUILT & DELIVERABLES]
                    </div>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                      {featuredProject.description}
                    </p>
                    <div className="text-xs text-slate-400 font-sans border-t border-slate-900/60 pt-2 flex items-start gap-2">
                      <span className="text-emerald-400 font-bold select-none">&gt;&gt; ACHIEVEMENT:</span>
                      <span>{featuredProject.achievementHighlight}</span>
                    </div>
                    
                    {/* Key features system checklist */}
                    <div className="pt-2">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-slate-300 pl-0.5">
                        {featuredProject.keyFeatures.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-cyber-blue font-bold font-mono select-none">&gt;</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>

                {/* Actions Footer */}
                <div className="flex flex-wrap items-center gap-4 pt-3 select-none">
                  <a
                    href={featuredProject.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-initial px-5 py-2.5 bg-slate-900 border border-slate-800 text-slate-300 hover:text-white rounded font-mono text-xs hover:bg-slate-850 hover:border-cyber-blue/30 transition-all flex items-center justify-center gap-2"
                    aria-label={`View ${featuredProject.name} repository on GitHub`}
                  >
                    <GithubIcon />
                    GITHUB_REPO
                  </a>
                  <a
                    href={featuredProject.liveDemoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-initial px-5 py-2.5 bg-cyber-blue/10 hover:bg-cyber-blue text-cyber-blue hover:text-slate-950 border border-cyber-blue/45 rounded font-mono text-xs hover:shadow-[0_0_20px_rgba(0,240,255,0.25)] transition-all duration-300 flex items-center justify-center gap-1.5 font-bold"
                    aria-label={`Launch ${featuredProject.name} Live Application`}
                  >
                    LIVE_DEMO <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

              </div>

            </div>
          </article>
        )}

        {/* 2. Secondary Projects - Two-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondaryProjects.map((project) => (
            <article
              key={project.id}
              className="glass-panel rounded-lg border border-cyber-blue/10 bg-slate-950/20 flex flex-col justify-between overflow-hidden hover:border-cyber-blue/30 hover:shadow-[0_0_25px_rgba(0,240,255,0.06)] transition-all duration-300 group cyber-corners relative"
            >
              <div className="space-y-4">
                
                {/* Image Section */}
                <div className="relative rounded-t border-b border-slate-900 bg-slate-900 overflow-hidden aspect-video flex items-center justify-center">
                  <div className="absolute inset-0 bg-cyber-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
                  
                  {/* Category Badge overlay */}
                  <span className="absolute top-3 left-3 bg-cyber-blue/90 text-slate-950 font-mono text-[9px] font-bold px-2 py-0.5 uppercase tracking-wider rounded border border-cyber-blue/30 backdrop-blur z-20 shadow-[0_0_10px_rgba(0,240,255,0.3)] select-none">
                    {project.category}
                  </span>

                  <img
                    src={projectImages[project.id]}
                    alt={`${project.name} Interface Preview`}
                    className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
                  />
                  
                  {/* HUD Grids overlay */}
                  <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none z-10" />
                </div>

                {/* Content Details */}
                <div className="p-5 space-y-4 text-left">
                  
                  {/* Header info */}
                  <div className="flex items-center justify-between font-mono text-[9px] text-slate-500 select-none">
                    <span className="text-cyber-blue/80 flex items-center gap-1.5 uppercase">
                      [MODULE: {project.id}]
                    </span>
                    <span className="text-emerald-500 bg-emerald-500/5 border border-emerald-500/10 px-1.5 py-0.5 rounded">
                      ACTIVE_DEPLOY
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-orbitron text-white tracking-wide group-hover:text-cyber-blue transition-colors">
                    {project.name}
                  </h3>

                  {/* Problem Solved Panel */}
                  <div className="bg-rose-950/10 border border-rose-950/30 rounded p-3 space-y-1 text-xs">
                    <div className="font-mono text-[9px] text-rose-400 uppercase tracking-widest font-semibold flex items-center gap-1.5 select-none">
                      <ShieldAlert className="w-3 h-3 text-rose-400" /> [1. PROBLEM SOLVED]
                    </div>
                    <p className="text-slate-300 leading-relaxed font-sans">{project.problemSolved}</p>
                  </div>

                  {/* Description & Achievement */}
                  <div className="space-y-3 bg-slate-900/20 border border-slate-900 rounded p-3 text-xs">
                    <div className="font-mono text-[9px] text-cyber-blue uppercase tracking-widest font-semibold flex items-center gap-1.5 select-none">
                      <Wrench className="w-3.5 h-3.5 text-cyber-blue" /> [2. WHAT I BUILT]
                    </div>
                    <p className="text-slate-300 leading-relaxed font-sans">
                      {project.description}
                    </p>
                    <div className="text-[11px] text-slate-400 font-sans border-t border-slate-900/60 pt-2 flex items-start gap-1.5">
                      <span className="text-emerald-400 font-bold select-none">ACHIEVEMENT:</span>
                      <span>{project.achievementHighlight}</span>
                    </div>

                    {/* Key features list */}
                    <ul className="space-y-1 text-xs text-slate-300 pl-0.5 pt-2">
                      {project.keyFeatures.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-cyber-blue font-bold font-mono select-none">&gt;</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1 select-none">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[9px] font-mono bg-slate-900 border border-slate-800 text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

              </div>

              {/* Action Links Footer */}
              <div className="border-t border-slate-900/80 px-5 py-3.5 bg-slate-950/40 flex items-center justify-between gap-4 font-mono text-xs select-none">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-all hover:translate-x-0.5 rounded px-2 py-1 bg-slate-900/50 border border-slate-850 hover:border-slate-700"
                  aria-label={`View ${project.name} code on GitHub`}
                >
                  <GithubIcon />
                  GITHUB
                </a>
                <a
                  href={project.liveDemoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-cyber-blue hover:text-slate-950 font-bold transition-all px-2.5 py-1 bg-cyber-blue/5 hover:bg-cyber-blue border border-cyber-blue/30 rounded shadow-[inset_0_1px_3px_rgba(0,240,255,0.05)] hover:shadow-[0_0_10px_rgba(0,240,255,0.2)]"
                  aria-label={`Visit ${project.name} live deployment`}
                >
                  LIVE DEMO <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
