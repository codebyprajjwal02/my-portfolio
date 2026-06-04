import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Cpu } from "lucide-react";

export default function LoadingScreen({ onComplete }) {
  const [logs, setLogs] = useState([]);
  const logSequence = [
    "&gt; INITIALIZING SECURE SHELL OS v4.2...",
    "&gt; HOST CONNECTIVITY: SECURED",
    "&gt; LOAD COGNITIVE REPOSITORY... OK",
    "&gt; MAP CAPABILITIES ENGINE... OK",
    "&gt; DECRYPTING DOSSIER MODULES...",
    "&gt; STATUS: ALL CORE RIGS STABLE // COMPLETE"
  ];

  useEffect(() => {
    let currentLogIndex = 0;
    const interval = setInterval(() => {
      if (currentLogIndex < logSequence.length) {
        const nextLog = logSequence[currentLogIndex];
        setLogs((prev) => [...prev, nextLog]);
        currentLogIndex++;
      } else {
        clearInterval(interval);
        // Complete loading sequence at 1.6 seconds
        setTimeout(() => {
          onComplete();
        }, 300);
      }
    }, 220); // Fast log typing

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 bg-cyber-dark z-50 flex flex-col items-center justify-center font-mono text-xs px-4"
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      aria-live="polite"
      aria-label="Initializing Portfolio Interface"
    >
      {/* Background Cyber Tech Grid */}
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

      <div className="space-y-8 max-w-sm w-full relative z-10">
        {/* Animated Hologram Core Reactor */}
        <div className="flex justify-center items-center">
          <div className="relative w-28 h-28 flex items-center justify-center">
            
            {/* Hologram Glow */}
            <div className="absolute inset-0 bg-cyber-blue/15 rounded-full filter blur-md animate-hud-pulse" />
            
            {/* Spinning Outer SVG Ring */}
            <motion.svg
              viewBox="0 0 100 100"
              className="w-full h-full text-cyber-blue/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="10 15 30 10" />
              <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="5 10" className="text-cyan-400" />
            </motion.svg>

            {/* Counter Rotating Inner Tech Ring */}
            <motion.svg
              viewBox="0 0 100 100"
              className="absolute w-5/6 h-5/6 text-cyan-400/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="20 10 15 5" className="text-cyber-blue" />
            </motion.svg>

            {/* Glowing System Icon Core */}
            <div className="absolute">
              <Cpu className="w-5 h-5 text-cyber-blue animate-glow-pulse" />
            </div>
          </div>
        </div>

        {/* HUD Typewriter Terminal logs */}
        <div className="glass-panel p-4 rounded border border-cyber-blue/15 bg-slate-950/70 h-40 flex flex-col justify-start text-left space-y-1.5 shadow-2xl relative cyber-corners">
          <div className="flex justify-between items-center border-b border-slate-900 pb-2 mb-1.5 text-[9px] text-slate-500 uppercase tracking-widest">
            <span className="flex items-center gap-1"><Terminal className="w-3 h-3 text-cyber-blue" /> SYSTEM_BOOT.EXE</span>
            <span className="animate-pulse text-cyber-blue">● BOOTING</span>
          </div>

          <div className="space-y-1 h-28 overflow-y-auto font-mono text-[10px] text-slate-300 leading-normal select-none">
            {logs.filter(Boolean).map((log, idx) => (
              <div key={idx} className="flex items-start gap-1 font-bold">
                <span className="text-cyber-blue">&gt;</span>
                <span dangerouslySetInnerHTML={{ __html: log.replace("&gt; ", "") }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
