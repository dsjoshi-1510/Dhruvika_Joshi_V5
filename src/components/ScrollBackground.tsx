import { useEffect, useState } from "react";
import { theme } from "@/config/theme";

export default function ScrollBackground() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      // Calculate scroll progress (0 to 1)
      const progress = Math.min(
        scrollTop / (documentHeight - windowHeight),
        1
      );
      
      setScrollProgress(progress);
      setScrollY(scrollTop);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper function to convert hex to rgba
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  // Calculate gradient colors based on scroll position
  const getGradientColors = () => {
    // Interpolate between sections
    const sections = 4; // home, about, portfolio, resume
    const sectionProgress = (scrollProgress * sections) % 1;
    const currentSection = Math.floor(scrollProgress * sections);

    // Color transitions between sections
    const colors = [
      theme.colors.palette.champagne,      // Home
      theme.colors.palette.whiskeySour,   // About
      theme.colors.palette.honeyGarlic,    // Portfolio
      theme.colors.palette.burntCoffee,    // Resume
    ];

    const nextColor = colors[(currentSection + 1) % colors.length];
    const currentColor = colors[currentSection % colors.length];

    // Blend between current and next color
    return { currentColor, nextColor, blend: sectionProgress };
  };

  const { currentColor, nextColor, blend } = getGradientColors();

  // Calculate opacity based on scroll (more visible as you scroll)
  const opacity = Math.min(0.15 + scrollProgress * 0.25, 0.4);
  
  // Calculate blended color
  const blendedColor = hexToRgba(currentColor, opacity * (1 - blend));
  const blendedNextColor = hexToRgba(nextColor, opacity * blend);

  return (
    <>
      {/* Dynamic Background Gradient Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-all duration-300 ease-out"
        style={{
          background: `radial-gradient(
            ellipse 120% 100% at 50% ${50 + scrollProgress * 20}%,
            ${blendedColor} 0%,
            ${blendedNextColor} 40%,
            transparent 70%
          )`,
          mixBlendMode: "multiply",
        }}
      />

      {/* Animated Wave/Line Element */}
      <div
        className="fixed top-0 left-0 right-0 h-1 z-40 pointer-events-none transition-all duration-300"
        style={{
          background: `linear-gradient(
            90deg,
            transparent 0%,
            ${hexToRgba(theme.colors.palette.whiskeySour, opacity)} ${Math.floor(scrollProgress * 50)}%,
            ${hexToRgba(theme.colors.palette.honeyGarlic, opacity)} 50%,
            ${hexToRgba(theme.colors.palette.whiskeySour, opacity)} ${50 + Math.floor(scrollProgress * 50)}%,
            transparent 100%
          )`,
          transform: `translateY(${scrollProgress * 100}px)`,
          boxShadow: `0 0 20px ${hexToRgba(theme.colors.palette.whiskeySour, opacity * 0.5)}`,
        }}
      />

      {/* Floating Orbs that track scroll */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Orb 1 - Top Left */}
        <div
          className="absolute rounded-full blur-3xl transition-all duration-500 ease-out"
          style={{
            width: "400px",
            height: "400px",
            left: `${-100 + scrollProgress * 30}%`,
            top: `${-50 + scrollProgress * 20}%`,
            backgroundColor: currentColor,
            opacity: opacity * 0.3,
            transform: `translate(${Math.sin(scrollY * 0.001) * 50}px, ${Math.cos(scrollY * 0.001) * 30}px)`,
            filter: "blur(60px)",
          }}
        />

        {/* Orb 2 - Top Right */}
        <div
          className="absolute rounded-full blur-3xl transition-all duration-500 ease-out"
          style={{
            width: "300px",
            height: "300px",
            right: `${-50 + scrollProgress * 25}%`,
            top: `${-30 + scrollProgress * 40}%`,
            backgroundColor: nextColor,
            opacity: opacity * 0.25,
            transform: `translate(${Math.cos(scrollY * 0.0015) * 40}px, ${Math.sin(scrollY * 0.0015) * 25}px)`,
            filter: "blur(60px)",
          }}
        />

        {/* Orb 3 - Bottom Center */}
        <div
          className="absolute rounded-full blur-3xl transition-all duration-500 ease-out"
          style={{
            width: "350px",
            height: "350px",
            left: "50%",
            bottom: `${-100 + (1 - scrollProgress) * 50}%`,
            backgroundColor: theme.colors.palette.champagne,
            opacity: opacity * 0.2,
            transform: `translate(-50%, ${Math.sin(scrollY * 0.002) * 60}px)`,
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* Progress Bar at Top */}
      <div
        className="fixed top-0 left-0 h-0.5 z-50 transition-all duration-150 ease-out"
        style={{
          width: `${scrollProgress * 100}%`,
          backgroundColor: theme.colors.palette.whiskeySour,
          boxShadow: `0 0 10px ${theme.colors.palette.whiskeySour}80`,
        }}
      />
    </>
  );
}
