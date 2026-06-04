import { Star, GitFork, Layers } from "lucide-react";
import { portfolioData } from "../portfolioData";

const Github = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function GithubTelemetry() {
  // Generate GitHub contribution grid nodes
  const renderGithubGrid = () => {
    const seed = [0, 1, 2, 4, 1, 0, 3, 2, 0, 4, 2, 1, 3, 0, 1, 2, 4, 0, 1, 3, 2, 4, 0, 1, 2, 0, 3, 4, 1, 2, 0, 1, 3, 2, 4, 0, 1, 2, 3, 0, 4, 1, 2, 3, 0, 1, 4, 2, 0, 3, 1, 2, 4, 0, 1, 2, 3, 4, 0, 1, 2, 0, 3, 4, 1, 2, 0, 1, 3, 2, 4, 0, 1, 2, 3, 0, 4, 1, 2, 3, 0, 1, 4, 2, 0, 3, 1, 2, 4, 0];
    
    const getColorClass = (value) => {
      switch(value) {
        case 1: return "bg-sky-950/40 border border-sky-900/30";
        case 2: return "bg-cyan-900/60 border border-cyan-800/40";
        case 3: return "bg-cyan-600/80 border border-cyan-500/50";
        case 4: return "bg-cyber-blue shadow-[0_0_8px_rgba(0,240,255,0.4)] border border-cyber-blue";
        default: return "bg-slate-950/80 border border-slate-900/50";
      }
    };

    return (
      <div className="grid grid-flow-col grid-rows-7 gap-1.5 overflow-x-auto pb-2 select-none justify-start md:justify-center" aria-label="Simulated Contributions Grid">
        {seed.map((val, idx) => (
          <div
            key={idx}
            className={`w-3.5 h-3.5 rounded-[1px] transition-all duration-300 hover:scale-135 cursor-crosshair ${getColorClass(val)}`}
            title={`Commits: ${val === 0 ? "None" : val * 3 + idx % 4}`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="github" className="py-16 border-t border-slate-900 scroll-mt-16" aria-label="GitHub Telemetry & Open Source Contributions">
      <div className="space-y-10">
        
        {/* Section Header */}
        <div className="text-left space-y-2">
          <div className="font-mono text-xs text-cyber-blue tracking-widest uppercase flex items-center gap-1.5 select-none">
            <Github className="w-4 h-4" /> [SECTION: 05_CONTRIBUTIONS]
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-orbitron text-white tracking-tight">GITHUB TELEMETRY</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyber-blue to-transparent" />
        </div>

        {/* Telemetry Core Card */}
        <div className="glass-panel p-6 rounded-lg border border-cyber-blue/10 bg-slate-950/20 text-left space-y-6 cyber-corners">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-900 pb-4 gap-4 font-mono text-xs select-none">
            <div className="flex items-center space-x-3.5">
              <div className="w-8 h-8 rounded-full border border-cyber-blue/30 bg-slate-950 flex items-center justify-center">
                <Github className="w-4 h-4 text-cyber-blue" />
              </div>
              <div>
                <div className="text-white font-bold">@{portfolioData.github.username}</div>
                <div className="text-slate-500 text-[9px] uppercase tracking-wider">GITHUB TELEMETRY STATUS: CONNECTED</div>
              </div>
            </div>
            <div className="text-cyber-blue bg-cyber-blue/5 border border-cyber-blue/20 px-3 py-1 rounded">
              {portfolioData.github.totalContributions}
            </div>
          </div>

          {/* Interactive Commit Grid Map */}
          <div className="space-y-2.5">
            <div className="flex justify-between items-center text-[9px] font-mono text-slate-500 uppercase tracking-widest select-none">
              <span>&gt; INTERACTION_MAP_FEEDER</span>
              <span>STATE: STABLE</span>
            </div>
            <div className="p-4 rounded bg-slate-950 border border-slate-900/60 overflow-hidden">
              {renderGithubGrid()}
              <div className="flex justify-between items-center text-[8px] font-mono text-slate-500 pt-2 border-t border-slate-900/60 mt-1 select-none">
                <span>Less Contributions</span>
                <div className="flex items-center space-x-1">
                  <span className="w-2 h-2 rounded bg-slate-950 border border-slate-900" />
                  <span className="w-2 h-2 rounded bg-sky-950/40 border border-sky-900/30" />
                  <span className="w-2 h-2 rounded bg-cyan-900/60 border border-cyan-800/40" />
                  <span className="w-2 h-2 rounded bg-cyan-600/80 border border-cyan-500/50" />
                  <span className="w-2 h-2 rounded bg-cyber-blue" />
                </div>
                <span>More Contributions</span>
              </div>
            </div>
          </div>

          {/* Pinned Repos list */}
          <div className="space-y-3">
            <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest select-none block">&gt; PINNED_MODULES.TXT</span>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {portfolioData.github.pinnedRepositories.map((repo, idx) => (
                <a
                  key={idx}
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-panel p-4 rounded border border-slate-900 bg-slate-950/40 hover:border-cyber-blue/30 transition-all font-mono text-xs flex flex-col justify-between"
                  aria-label={`Open repository ${repo.name} on GitHub`}
                >
                  <div className="space-y-2">
                    <div className="text-white font-bold hover:text-cyber-blue flex items-center gap-1.5 select-none">
                      <Layers className="w-3.5 h-3.5 text-cyber-blue" />
                      {repo.name}
                    </div>
                    <p className="text-[10px] text-slate-400 font-sans line-clamp-2 leading-relaxed">
                      {repo.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[9px] text-slate-500 pt-4 border-t border-slate-900/40 mt-3 select-none">
                    <span className="text-cyan-400 font-semibold">{repo.language}</span>
                    <div className="flex items-center space-x-2">
                      <span className="flex items-center gap-0.5"><Star className="w-3 h-3 text-amber-500" /> {repo.stars}</span>
                      <span className="flex items-center gap-0.5"><GitFork className="w-3 h-3 text-cyan-400" /> {repo.forks}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
