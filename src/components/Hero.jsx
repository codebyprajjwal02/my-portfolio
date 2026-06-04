import React from "react";
import { Terminal, Shield, Mail, Sparkles, Layers, BookOpen, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "../portfolioData";
import prajjwalPortrait from "../assets/prajjwal.jpg";

export default function Hero() {
  // SVG brand icon components
  const GithubIcon = ({ className }) => (
    <svg
      className={className}
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

  const LinkedinIcon = ({ className }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );

  const LeetcodeIcon = ({ className }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.8 9.8a1.375 1.375 0 0 0 0 1.956l11.3 11.3a1.379 1.379 0 0 0 1.951 0l9.8-9.8a1.376 1.376 0 0 0 0-1.956L14.444.414A1.365 1.365 0 0 0 13.483 0zm.012 3.414L21.4 11.3l-7.9 7.9-7.9-7.9 7.9-7.886zM9.54 13.47a.9.9 0 0 0-.64.26l-1.9 1.9a.9.9 0 1 0 1.28 1.28l1.9-1.9a.9.9 0 0 0-.64-1.54z" />
    </svg>
  );

  // Generate 12 slow floating background particles
  const floatingParticles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 25 + 20,
    delay: Math.random() * -20
  }));

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center py-12 md:py-20 relative overflow-hidden"
      aria-label="Developer Introduction Section"
    >
      {/* Background Grid & Slow Floating Particles */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {floatingParticles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute bg-cyber-blue/20 rounded-full blur-[0.5px]"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.7, 0.2]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay
            }}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10 w-full">
        
        {/* LEFT COLUMN - TEXT & ACCENTS */}
        <div className="lg:col-span-7 space-y-8 text-left">
          
          {/* Glowing Status Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue font-mono text-[10px] uppercase font-bold tracking-widest select-none shadow-[0_0_12px_rgba(0,240,255,0.12)]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue animate-ping" />
            <span>● OPEN TO INTERNSHIPS</span>
          </div>

          {/* Heading block */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-orbitron text-white tracking-tight leading-none">
              Prajjwal Kumar <span className="text-cyber-blue text-neon-glow">Singh</span>
            </h1>
            <p className="text-cyber-blue font-mono text-xs sm:text-sm font-semibold tracking-widest uppercase">
              FULL STACK DEVELOPER | MERN STACK | JAVA
            </p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-sans text-slate-100 leading-tight">
              Building Full-Stack Applications That Solve Real Problems
            </h2>
          </div>

          {/* Description */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans max-w-2xl">
            Full Stack Developer focused on building scalable web applications using React, Node.js, MongoDB, and Java. Passionate about solving real-world problems through technology and creating products that deliver meaningful user experiences.
          </p>

          {/* CTA Buttons & Social Group */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-2 select-none">
            
            {/* CTA Links */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="px-5 py-3 rounded-full font-mono text-xs tracking-widest font-bold bg-cyber-blue text-cyber-dark hover:bg-white hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,240,255,0.15)]"
              >
                <Terminal className="w-4 h-4" />
                VIEW PROJECTS
              </a>
              <a
                href={portfolioData.personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-full font-mono text-xs tracking-widest font-semibold border border-cyber-blue/40 text-cyber-blue hover:bg-cyber-blue/10 hover:border-cyber-blue hover:text-white transition-all duration-300 flex items-center gap-1.5"
              >
                <Shield className="w-4 h-4" />
                DOWNLOAD RESUME
              </a>
              <a
                href="#contact"
                className="px-5 py-3 rounded-full font-mono text-xs tracking-widest font-semibold border border-slate-700 text-slate-300 hover:border-slate-400 hover:text-white transition-all duration-300 flex items-center gap-1.5"
              >
                <Mail className="w-4 h-4" />
                CONTACT ME
              </a>
            </div>

            {/* Social Grid */}
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/codebyprajjwal02"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded border border-cyber-blue/20 bg-cyber-blue/5 text-slate-400 hover:text-cyber-blue hover:border-cyber-blue hover:shadow-[0_0_12px_rgba(0,240,255,0.2)] flex items-center justify-center transition-all duration-300"
                title="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={portfolioData.personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded border border-cyber-blue/20 bg-cyber-blue/5 text-slate-400 hover:text-cyber-blue hover:border-cyber-blue hover:shadow-[0_0_12px_rgba(0,240,255,0.2)] flex items-center justify-center transition-all duration-300"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${portfolioData.personalInfo.email}`}
                className="w-10 h-10 rounded border border-cyber-blue/20 bg-cyber-blue/5 text-slate-400 hover:text-cyber-blue hover:border-cyber-blue hover:shadow-[0_0_12px_rgba(0,240,255,0.2)] flex items-center justify-center transition-all duration-300"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://leetcode.com/u/prajjwal02/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded border border-cyber-blue/20 bg-cyber-blue/5 text-slate-400 hover:text-cyber-blue hover:border-cyber-blue hover:shadow-[0_0_12px_rgba(0,240,255,0.2)] flex items-center justify-center transition-all duration-300"
                title="LeetCode Profile"
              >
                <LeetcodeIcon className="w-5 h-5" />
              </a>
            </div>

          </div>

        </div>

        {/* RIGHT COLUMN - HUD PROFILE PORTRAIT */}
        <div className="lg:col-span-5 flex justify-center items-center relative select-none mt-6 lg:mt-0">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
            
            {/* Hologram backplate glow */}
            <div className="absolute w-full h-full bg-gradient-to-t from-cyber-blue/5 to-transparent rounded-full filter blur-3xl opacity-30 animate-hud-pulse" />

            {/* Concentric Rotating Outer HUD Circles */}
            <motion.svg
              viewBox="0 0 200 200"
              className="w-full h-full absolute text-cyber-blue/30 drop-shadow-[0_0_15px_rgba(0,240,255,0.2)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <circle cx="100" cy="100" r="96" stroke="currentColor" strokeWidth="0.5" fill="none" strokeDasharray="30 40 15 25" />
              <circle cx="100" cy="100" r="89" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="40 10 20 15" className="text-cyan-400/80" />
              <circle cx="100" cy="100" r="82" stroke="currentColor" strokeWidth="0.5" fill="none" strokeDasharray="4 8" />
            </motion.svg>

            {/* Counter-Rotating Inner HUD Ring */}
            <motion.svg
              viewBox="0 0 200 200"
              className="w-[88%] h-[88%] absolute text-cyan-400/25"
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <circle cx="100" cy="100" r="74" stroke="currentColor" strokeWidth="0.75" fill="none" strokeDasharray="60 20 15 15" />
              <circle cx="100" cy="100" r="66" stroke="currentColor" strokeWidth="1.25" fill="none" strokeDasharray="3 6" className="text-cyber-blue/60" />
            </motion.svg>

            {/* Animated Orbiting Particles (Dots) */}
            <motion.div
              className="absolute w-full h-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-[6%] left-1/2 w-2 h-2 rounded-full bg-cyber-blue shadow-[0_0_8px_#00f0ff]" />
              <div className="absolute bottom-[6%] left-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
            </motion.div>

            <motion.div
              className="absolute w-full h-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute left-[6%] top-1/2 w-1.5 h-1.5 rounded-full bg-cyber-blue shadow-[0_0_6px_#00f0ff]" />
              <div className="absolute right-[6%] top-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]" />
            </motion.div>

            {/* Profile circular frame */}
            <div className="absolute w-[72%] h-[72%] rounded-full overflow-hidden border-2 border-cyber-blue/45 bg-slate-900 group hover:border-cyber-blue hover:shadow-[0_0_35px_rgba(0,240,255,0.35)] transition-all duration-500 z-20">
              {/* Subtle visual scan grid */}
              <div className="absolute inset-0 bg-cyber-blue/5 opacity-30 group-hover:opacity-0 transition-opacity z-10 pointer-events-none" />
              <div className="absolute inset-0 tech-grid opacity-20 z-10 pointer-events-none" />
              
              <img
                src={prajjwalPortrait}
                alt="Prajjwal Kumar Singh Portrait"
                className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700 contrast-[1.04] saturate-[1.04]"
              />
            </div>

            {/* Floating Coordinate Status Box */}
            <div className="absolute bottom-3 right-3 glass-panel py-1 px-2.5 rounded border border-cyber-blue/30 font-mono text-[9px] text-cyber-blue flex items-center gap-1.5 bg-slate-950/95 shadow-[0_0_10px_rgba(0,240,255,0.1)] z-30 animate-hud-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue animate-ping" />
              PKS_LOCK_V1
            </div>

          </div>
        </div>

      </div>

      {/* HORIZONTAL GRID OF 4 STATS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full pt-12 select-none relative z-10">
        
        {/* Card 1: 4+ Projects */}
        <div className="glass-panel cyber-corners p-5 rounded border border-cyber-blue/20 bg-cyber-dark/40 backdrop-blur-md hover:border-cyber-blue/40 hover:shadow-[0_0_15px_rgba(0,240,255,0.08)] transition-all duration-300 text-left flex flex-col justify-between min-h-[110px]">
          <div className="text-3xl font-black font-orbitron text-cyber-blue leading-none">4+</div>
          <div className="mt-2">
            <div className="text-xs font-bold text-white tracking-wide">Projects Built</div>
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mt-0.5">Real-world Applications</div>
          </div>
        </div>

        {/* Card 2: Leetcode Profile */}
        <a
          href="https://leetcode.com/u/prajjwal02/"
          target="_blank"
          rel="noreferrer"
          className="glass-panel cyber-corners p-5 rounded border border-cyber-blue/20 bg-cyber-dark/40 backdrop-blur-md hover:border-cyber-blue/40 hover:shadow-[0_0_15px_rgba(0,240,255,0.08)] transition-all duration-300 text-left flex flex-col justify-between min-h-[110px] group cursor-pointer"
        >
          <div className="text-lg font-black font-orbitron text-white leading-none group-hover:text-cyber-blue transition-colors">LeetCode</div>
          <div className="mt-2">
            <div className="text-xs font-bold text-slate-300 group-hover:text-white transition-colors">Problem Solver</div>
            <div className="text-[10px] font-mono text-cyber-blue uppercase tracking-widest mt-0.5">@prajjwal02</div>
          </div>
        </a>

        {/* Card 3: Education */}
        <div className="glass-panel cyber-corners p-5 rounded border border-cyber-blue/20 bg-cyber-dark/40 backdrop-blur-md hover:border-cyber-blue/40 hover:shadow-[0_0_15px_rgba(0,240,255,0.08)] transition-all duration-300 text-left flex flex-col justify-between min-h-[110px]">
          <div className="flex items-center space-x-1.5 text-white">
            <BookOpen className="w-4 h-4 text-cyber-blue" />
            <span className="text-xs font-black font-orbitron uppercase tracking-widest">Education</span>
          </div>
          <div className="mt-2">
            <div className="text-xs font-bold text-white tracking-wide">B.Tech in Computer Science</div>
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mt-0.5">Focus: Full Stack Development</div>
          </div>
        </div>

        {/* Card 4: MERN Capabilities */}
        <div className="glass-panel cyber-corners p-5 rounded border border-cyber-blue/20 bg-cyber-dark/40 backdrop-blur-md hover:border-cyber-blue/40 hover:shadow-[0_0_15px_rgba(0,240,255,0.08)] transition-all duration-300 text-left flex flex-col justify-between min-h-[110px]">
          <div className="flex items-center space-x-1.5 text-white">
            <Cpu className="w-4 h-4 text-cyber-blue animate-pulse" />
            <span className="text-xs font-black font-orbitron uppercase tracking-widest">MERN</span>
          </div>
          <div className="mt-2">
            <div className="text-xs font-bold text-white tracking-wide">Stack Developer</div>
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mt-0.5">Full-Stack Capability</div>
          </div>
        </div>

      </div>

      {/* BOTTOM INFO PANEL: CORE TECH & FEATURED PROJECTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full pt-8 mt-8 border-t border-cyber-blue/10 select-none relative z-10">
        
        {/* Left Side: Core Tech Badges */}
        <div className="space-y-3 text-left">
          <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest font-bold flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-cyber-blue" />
            <span>CORE TECHNOLOGIES</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {["React.js", "Node.js", "Express.js", "MongoDB", "Java", "JavaScript", "Git & GitHub"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-mono bg-slate-900/60 border border-cyber-blue/15 text-slate-300 hover:border-cyber-blue hover:text-cyber-blue hover:bg-cyber-blue/5 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side: Featured Projects Preview pills */}
        <div className="space-y-3 text-left">
          <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest font-bold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>FEATURED PROJECTS</span>
          </div>
          <div className="flex flex-wrap gap-2.5 items-center">
            {["Deoghar Kitab", "BimaSetu"].map((proj) => (
              <span
                key={proj}
                className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-cyber-blue/5 border border-cyber-blue/20 text-cyber-blue shadow-[0_0_8px_rgba(0,240,255,0.03)] cursor-default"
              >
                • {proj}
              </span>
            ))}
            <a
              href="#projects"
              className="text-xs font-mono font-bold text-slate-400 hover:text-cyber-blue flex items-center gap-1 transition-colors duration-300 cursor-pointer pl-1.5"
            >
              View All Projects →
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}
