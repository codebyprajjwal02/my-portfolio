import React, { useState } from "react";
import { Terminal, Menu, X } from "lucide-react";

export default function Navbar({ activeSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "hero", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "skills", label: "SKILLS" },
    { id: "projects", label: "PROJECTS" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "contact", label: "CONTACT" }
  ];

  return (
    <header className="sticky top-4 z-50 w-full max-w-7xl mx-auto px-4 select-none" aria-label="System Navigation Hub">
      <div className="glass-panel border border-cyber-blue/20 rounded-full px-6 py-3 shadow-[0_0_15px_rgba(0,240,255,0.1)] backdrop-blur-xl flex items-center justify-between">
        
        {/* Top left System Label Logo */}
        <div className="flex items-center space-x-2">
          <Terminal className="w-4.5 h-4.5 text-cyber-blue animate-pulse" />
          <div className="text-left">
            <div className="font-mono text-xs tracking-widest text-cyber-blue font-bold leading-none">
              Prajjwal Portfolio //
            </div>
            <p className="text-[8px] font-mono text-slate-400 uppercase tracking-widest mt-0.5 leading-none">
              SECURED SYSTEM INTERFACE
            </p>
          </div>
        </div>

        {/* Desktop Navigation Link Anchors */}
        <nav className="hidden md:flex items-center space-x-1.5 font-mono text-xs tracking-wider" aria-label="Primary Navigation">
          {navLinks.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              id={`nav-link-${tab.id}`}
              className={`px-4 py-1.5 rounded-full transition-all duration-300 relative border text-[11px] font-semibold tracking-widest ${
                activeSection === tab.id
                  ? "text-cyber-blue border-cyber-blue/60 bg-cyber-blue/10 shadow-[0_0_12px_rgba(0,240,255,0.2)]"
                  : "text-slate-400 border-transparent hover:text-slate-200 hover:bg-slate-900/40"
              }`}
            >
              {tab.label}
            </a>
          ))}
        </nav>

        {/* Mobile Navigation Drawer Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 text-slate-400 hover:text-cyber-blue hover:bg-slate-900/50 rounded-full transition-all focus:outline-none focus:ring-1 focus:ring-cyber-blue/30"
          aria-label="Toggle Navigation Terminal"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer Panel */}
      {mobileMenuOpen && (
        <nav className="absolute left-4 right-4 top-full mt-2 bg-cyber-dark/95 border border-cyber-blue/20 rounded-2xl backdrop-blur-xl px-4 py-4 md:hidden flex flex-col space-y-1.5 font-mono text-xs z-50 shadow-2xl" aria-label="Mobile Navigation">
          {navLinks.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 rounded-xl border text-left transition-all ${
                activeSection === tab.id
                  ? "text-cyber-blue border-cyber-blue/40 bg-cyber-blue/5 font-bold"
                  : "text-slate-300 border-transparent hover:bg-slate-900/50 hover:border-slate-800"
              }`}
            >
              &gt; {tab.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
