import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import GithubTelemetry from "./components/GithubTelemetry";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import CustomCursor from "./components/CustomCursor";

// A reusable Scroll-Reveal Wrapper that reveals sections with high-performance Framer Motion transitions
const SectionWrapper = ({ children, id }) => (
  <motion.div
    id={id}
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }} // Fast-out, smooth decelerate easing
  >
    {children}
  </motion.div>
);

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isLoading, setIsLoading] = useState(true);

  // Track scroll coordinates to highlight active Navbar coordinate links (Scroll-Spy)
  useEffect(() => {
    if (isLoading) return;

    const sections = ["hero", "about", "skills", "projects", "experience", "contact"];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220; // coordinate activation offset
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  return (
    <div className="tech-grid min-h-screen bg-cyber-dark text-slate-100 selection:bg-cyber-blue/20 selection:text-cyber-blue relative font-sans">
      <AnimatePresence mode="wait">
        {isLoading ? (
          // Tactical boot logger screen (under 2 seconds)
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          // Primary OS Dossier Terminal
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Custom Glowing Cyber Cursor */}
            <CustomCursor />

            {/* Scanning HUD scanning line */}
            <div className="scanline" aria-hidden="true" />

            {/* Ambient Background Glow Nodes */}
            <div className="fixed top-1/4 left-[10%] w-96 h-96 bg-cyber-blue/5 rounded-full filter blur-[100px] pointer-events-none z-0" aria-hidden="true" />
            <div className="fixed bottom-1/4 right-[10%] w-96 h-96 bg-cyber-neon/5 rounded-full filter blur-[100px] pointer-events-none z-0" aria-hidden="true" />

            {/* Navigation Header */}
            <Navbar activeSection={activeSection} />

            {/* Core Systems Body */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <SectionWrapper id="hero">
                <Hero />
              </SectionWrapper>
              
              <SectionWrapper id="about">
                <About />
              </SectionWrapper>
              
              <SectionWrapper id="skills">
                <Skills />
              </SectionWrapper>
              
              <SectionWrapper id="projects">
                <Projects />
              </SectionWrapper>
              
              <SectionWrapper id="experience">
                <Experience />
              </SectionWrapper>
              
              <SectionWrapper id="github">
                <GithubTelemetry />
              </SectionWrapper>
              
              <SectionWrapper id="contact">
                <Contact />
              </SectionWrapper>
            </main>

            {/* Telemetry Credit Footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
