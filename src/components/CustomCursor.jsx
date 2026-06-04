import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if the user is on a mobile device or touch screen
    const checkMobile = () => {
      const mobileQuery = window.matchMedia("(max-width: 1024px) or (pointer: coarse)");
      setIsMobile(mobileQuery.matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (isMobile) return;

    // Track cursor move coords
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (hidden) setHidden(false);
    };

    // Tracks hovering state on interactive nodes
    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.tagName === "INPUT" || 
        target.tagName === "TEXTAREA" || 
        target.closest("a") || 
        target.closest("button") ||
        target.classList.contains("cursor-crosshair");
      
      setHovered(!!isClickable);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isMobile, hidden]);

  if (isMobile || hidden) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 select-none hidden lg:block">
      {/* Precision Micro Dot (Instantly tracks pointer) */}
      <div
        className="fixed w-1.5 h-1.5 bg-cyber-blue rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />

      {/* Lagging Glowing Outer Ring (Smooth tracking with Framer Motion) */}
      <motion.div
        className="fixed rounded-full border border-cyber-blue pointer-events-none"
        animate={{
          x: position.x - (hovered ? 16 : 10),
          y: position.y - (hovered ? 16 : 10),
          width: hovered ? 32 : 20,
          height: hovered ? 32 : 20,
          borderColor: hovered ? "#00f0ff" : "rgba(0, 240, 255, 0.4)",
          backgroundColor: hovered ? "rgba(0, 240, 255, 0.05)" : "rgba(0, 240, 255, 0)",
          boxShadow: hovered 
            ? "0 0 10px rgba(0, 240, 255, 0.3)" 
            : "0 0 4px rgba(0, 240, 255, 0.1)",
          scale: clicked ? 0.85 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 24,
          mass: 0.2
        }}
      />
    </div>
  );
}
