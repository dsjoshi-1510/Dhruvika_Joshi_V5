import { useScroll, useTransform, motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { theme } from "@/config/theme";

export default function GrainBackground() {
  const { scrollYProgress } = useScroll();

  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring animation for mouse following
  const springConfig = { damping: 50, stiffness: 100 };
  const blobXSpring = useSpring(mouseX, springConfig);
  const blobYSpring = useSpring(mouseY, springConfig);
  
  // Convert to percentage strings for positioning
  const blobX = useTransform(blobXSpring, (x) => `${x}%`);
  const blobY = useTransform(blobYSpring, (y) => `${y}%`);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Convert mouse position to percentage of viewport
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Map scroll progress to color interpolation
  // From Blue (#3b82f6) to Pink (#ec4899)
  const blobColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#3b82f6", "#ec4899"]
  );

  // Alternative: Use your theme colors instead
  // Uncomment these lines and comment out the above blobColor if you prefer theme colors
  // const blobColor = useTransform(
  //   scrollYProgress,
  //   [0, 1],
  //   [theme.colors.palette.champagne, theme.colors.palette.honeyGarlic]
  // );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -10 }}>
      {/* Spotlight Layer (Bottom) - Blurred Blob */}
      {/* This should be behind the noise layer for proper layering */}
      {/* Blob now follows mouse pointer */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "600px",
          height: "600px",
          backgroundColor: blobColor,
          opacity: 0.5,
          filter: "blur(100px)",
          zIndex: 1, // Behind noise but visible
          left: blobX,
          top: blobY,
          x: "-50%",
          y: "-50%",
        }}
      />

      {/* Noise Layer (Top) - Frosted Glass Effect */}
      {/* This sits on top of the blob to create the textured spotlight effect */}
      <div
        className="fixed inset-0"
        style={{
          zIndex: 2, // On top of blob
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
          mixBlendMode: "overlay",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
