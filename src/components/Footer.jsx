import React from "react";
import { portfolioData } from "../portfolioData";

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-900 py-8 px-4 font-mono text-xs text-slate-500 bg-slate-950/40 relative z-20" aria-label="Footer">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 select-none">
        
        {/* Left Footer: Credits */}
        <div className="text-slate-400 tracking-wider text-[11px]">
          Designed & Developed by <span className="text-cyber-blue font-bold">Prajjwal Kumar Singh</span>
        </div>

        {/* Right Footer: Copyright */}
        <div className="text-slate-500 tracking-wider text-[11px]">
          © 2026 All Rights Reserved
        </div>

      </div>
    </footer>
  );
}
