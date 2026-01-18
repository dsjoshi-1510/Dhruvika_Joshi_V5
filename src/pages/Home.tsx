import { ArrowRight, Mail, Github, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { theme } from "@/config/theme";

const Home = () => {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create flowing gradient blobs
    let time = 0;

    function drawGradientBlobs() {
      const blob1X = canvas.width * 0.3 + Math.sin(time * 0.001) * 100;
      const blob1Y = canvas.height * 0.3 + Math.cos(time * 0.0015) * 100;

      const blob2X = canvas.width * 0.7 + Math.sin(time * 0.0012) * 120;
      const blob2Y = canvas.height * 0.6 + Math.cos(time * 0.001) * 80;

      const blob3X = canvas.width * 0.5 + Math.sin(time * 0.0008) * 90;
      const blob3Y = canvas.height * 0.7 + Math.cos(time * 0.0013) * 110;

      // Create gradients for each blob using theme colors
      const hexToRgba = (hex: string, alpha: number) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
      };

      const gradient1 = ctx.createRadialGradient(blob1X, blob1Y, 0, blob1X, blob1Y, 300);
      gradient1.addColorStop(0, hexToRgba(theme.colors.primary.lightest, 0.8));
      gradient1.addColorStop(0.5, hexToRgba(theme.colors.primary.light, 0.6));
      gradient1.addColorStop(1, hexToRgba(theme.colors.primary.medium, 0));

      const gradient2 = ctx.createRadialGradient(blob2X, blob2Y, 0, blob2X, blob2Y, 280);
      gradient2.addColorStop(0, hexToRgba(theme.colors.primary.medium, 0.7));
      gradient2.addColorStop(0.5, hexToRgba(theme.colors.primary.dark, 0.5));
      gradient2.addColorStop(1, hexToRgba(theme.colors.primary.darkest, 0));

      const gradient3 = ctx.createRadialGradient(blob3X, blob3Y, 0, blob3X, blob3Y, 320);
      gradient3.addColorStop(0, hexToRgba(theme.colors.primary.light, 0.7));
      gradient3.addColorStop(0.5, hexToRgba(theme.colors.primary.medium, 0.5));
      gradient3.addColorStop(1, hexToRgba(theme.colors.primary.dark, 0));

      // Draw blobs
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = 'screen';

      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = gradient3;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = 'source-over';
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawGradientBlobs();

      time++;
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="min-h-screen" onMouseMove={handleMouseMove}>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden grainy-texture texture-organic">
        {/* Animated Canvas Background with blur effect */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-0"
          style={{
            background: theme.components.hero.backgroundGradient,
            filter: `blur(${theme.components.hero.blur})`
          }}
        />

        {/* Gradient overlay with animated texture */}
        <div 
          className="absolute inset-0 z-[1] grainy-texture" 
          style={{
            background: `radial-gradient(circle at 20% 30%, ${theme.colors.palette.champagne}60 0%, transparent 50%),
                        radial-gradient(circle at 80% 70%, ${theme.colors.palette.whiskeySour}40 0%, transparent 50%),
                        radial-gradient(circle at 50% 50%, ${theme.colors.palette.honeyGarlic}30 0%, transparent 70%),
                        linear-gradient(135deg, ${theme.colors.palette.champagne}50 0%, ${theme.colors.palette.whiskeySour}35 50%, ${theme.colors.palette.honeyGarlic}25 100%)`,
            backdropFilter: `blur(${theme.effects.backdropBlur["2xl"]})`
          }}
        />

        {/* Content - Sequential flow */}
        <div className="relative z-10 text-center py-12 sm:py-16 md:py-20 max-w-6xl mx-auto px-4 sm:px-6">
          {/* Headshot with refined styling - sequential animation */}
          <div className="relative mx-auto mb-8 sm:mb-10 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 group fade-in-sequential">
            <div 
              className="absolute inset-0 rounded-full animate-spin-slow opacity-50 blur-xl group-hover:opacity-70 transition-opacity duration-500"
              style={{
                background: `linear-gradient(135deg, ${theme.colors.palette.champagne}, ${theme.colors.palette.whiskeySour}, ${theme.colors.palette.honeyGarlic})`
              }}
            />
            <div 
              className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-white/90 transition-all duration-500 group-hover:scale-105"
              style={{ boxShadow: theme.shadows["2xl"] }}
            >
              <img
                src="/headshot.JPG"
                alt="Dhruvika Joshi"
                className="w-full h-full object-cover object-[center_20%] scale-110"
              />
            </div>
          </div>

          {/* Skill strip - sequential */}
          <div 
            className="inline-block px-4 sm:px-6 py-2 backdrop-blur-sm rounded-full mb-6 sm:mb-8 fade-in-sequential"
            style={{
              backgroundColor: theme.colors.background.overlay,
              boxShadow: theme.shadows.lg,
              border: `1px solid ${theme.colors.palette.burntCoffee}20`,
            }}
          >
            <p 
              className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold leading-tight"
              style={{ color: theme.colors.text.primary }}
            >
              Brand Strategy • Consumer Insight • Storytelling
            </p>
          </div>

          {/* Heading - sequential */}
          <h1 className="mb-4 sm:mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight drop-shadow-lg fade-in-sequential px-2">
            Dhruvika Joshi
          </h1>

          {/* Tagline - sequential */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-white mb-10 sm:mb-12 md:mb-14 max-w-4xl mx-auto leading-relaxed font-semibold tracking-tight drop-shadow-md fade-in-sequential px-2">
            Turning insight into brand stories
            <span style={{ color: theme.colors.palette.champagne }}> people remember</span>.
          </p>

          {/* Refined CTA - sequential */}
          <div className="flex justify-center mb-12 sm:mb-14 md:mb-16 fade-in-sequential px-4">
            <Button
              size="lg"
              onClick={() => window.location.href = '/portfolio'}
              className="font-semibold transition-all duration-300 hover:scale-105 active:scale-95 border-0 px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 text-base sm:text-lg rounded-xl sm:rounded-2xl backdrop-blur-sm cursor-pointer w-full sm:w-auto min-h-[48px] touch-manipulation"
              style={{
                backgroundColor: theme.components.button.primary.background,
                color: theme.components.button.primary.text,
                boxShadow: theme.shadows.xl,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.components.button.primary.hoverBackground;
                e.currentTarget.style.boxShadow = theme.shadows["2xl"];
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = theme.components.button.primary.background;
                e.currentTarget.style.boxShadow = theme.shadows.xl;
              }}
            >
              <span className="flex items-center justify-center">
                Explore My Work
                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5" />
              </span>
            </Button>
          </div>

          {/* Contact Information - Sequential, better visual hierarchy */}
          <div className="mb-12 sm:mb-16 md:mb-20 fade-in-sequential px-2">
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href="mailto:dsjoshi@usc.edu"
                className="flex items-center justify-center gap-2 px-4 sm:px-5 py-3 sm:py-3 backdrop-blur-sm rounded-full transition-all duration-300 active:scale-95 touch-manipulation min-h-[44px] w-full sm:w-auto"
                style={{
                  backgroundColor: theme.colors.background.overlay,
                  boxShadow: theme.shadows.lg,
                  border: `1px solid ${theme.colors.palette.burntCoffee}20`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme.colors.palette.whiskeySour;
                  e.currentTarget.style.boxShadow = theme.shadows.xl;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = theme.colors.background.overlay;
                  e.currentTarget.style.boxShadow = theme.shadows.lg;
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="w-4 h-4 sm:w-4 sm:h-4 flex-shrink-0" style={{ color: theme.colors.text.secondary }} />
                <span className="text-xs sm:text-sm font-medium text-center" style={{ color: theme.colors.text.primary }}>dsjoshi@usc.edu</span>
              </a>

              <a
                href="https://www.linkedin.com/in/dhruvika-joshi/"
                className="flex items-center justify-center gap-2 px-4 sm:px-5 py-3 backdrop-blur-sm rounded-full transition-all duration-300 active:scale-95 touch-manipulation min-h-[44px] w-full sm:w-auto"
                style={{
                  backgroundColor: theme.colors.background.overlay,
                  boxShadow: theme.shadows.lg,
                  border: `1px solid ${theme.colors.palette.burntCoffee}20`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme.colors.palette.whiskeySour;
                  e.currentTarget.style.boxShadow = theme.shadows.xl;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = theme.colors.background.overlay;
                  e.currentTarget.style.boxShadow = theme.shadows.lg;
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4 flex-shrink-0" style={{ color: theme.colors.text.secondary }} />
                <span className="text-xs sm:text-sm font-medium" style={{ color: theme.colors.text.primary }}>LinkedIn</span>
              </a>

              <a
                href="https://github.com/dsjoshi-1510"
                className="flex items-center justify-center gap-2 px-4 sm:px-5 py-3 backdrop-blur-sm rounded-full transition-all duration-300 active:scale-95 touch-manipulation min-h-[44px] w-full sm:w-auto"
                style={{
                  backgroundColor: theme.colors.background.overlay,
                  boxShadow: theme.shadows.lg,
                  border: `1px solid ${theme.colors.palette.burntCoffee}20`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme.colors.palette.whiskeySour;
                  e.currentTarget.style.boxShadow = theme.shadows.xl;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = theme.colors.background.overlay;
                  e.currentTarget.style.boxShadow = theme.shadows.lg;
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 flex-shrink-0" style={{ color: theme.colors.text.secondary }} />
                <span className="text-xs sm:text-sm font-medium" style={{ color: theme.colors.text.primary }}>GitHub</span>
              </a>

              <div 
                className="flex items-center justify-center gap-2 px-4 sm:px-5 py-3 backdrop-blur-sm rounded-full min-h-[44px] w-full sm:w-auto"
                style={{
                  backgroundColor: theme.colors.background.overlay,
                  boxShadow: theme.shadows.lg,
                  border: `1px solid ${theme.colors.palette.burntCoffee}20`,
                }}
              >
                <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: theme.colors.text.secondary }} />
                <span className="text-xs sm:text-sm font-medium" style={{ color: theme.colors.text.primary }}>Los Angeles, CA</span>
              </div>
            </div>
          </div>

          {/* Logos with enhanced styling - sequential */}
          <div className="text-center fade-in-sequential px-2">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-white/80 mb-8 sm:mb-10 md:mb-12 font-semibold drop-shadow-sm">
              Selected Projects Through
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
              {[
                { src: "/marshall.png", alt: "USC Marshall", h: "h-8 sm:h-10" },
                { src: "/tawkify.png", alt: "Tawkify", h: "h-6 sm:h-8" },
                { src: "/ilem.png", alt: "ILEM", h: "h-6 sm:h-8" },
                { src: "/leaf.png", alt: "Leaf", h: "h-6 sm:h-8" },
                { src: "/aiesec_logo_black.svg", alt: "AIESEC", h: "h-6 sm:h-8" },
              ].map((logo, idx) => (
                <div
                  key={idx}
                  className="transform active:scale-95 transition-all duration-300 p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl touch-manipulation"
                  style={{
                    backgroundColor: theme.colors.background.card,
                    boxShadow: theme.shadows.xl,
                    border: `1px solid ${theme.colors.palette.burntCoffee}15`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = theme.colors.palette.whiskeySour;
                    e.currentTarget.style.boxShadow = theme.shadows["2xl"];
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = theme.colors.background.card;
                    e.currentTarget.style.boxShadow = theme.shadows.xl;
                  }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`${logo.h} w-auto`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Custom animations */}
        <style>{`
          @keyframes float-slow {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            33% { transform: translate(20px, -20px) rotate(5deg); }
            66% { transform: translate(-20px, 20px) rotate(-5deg); }
          }
          
          @keyframes float-medium {
            0%, 100% { transform: translate(0, 0) rotate(45deg); }
            50% { transform: translate(30px, -30px) rotate(55deg); }
          }
          
          @keyframes float-fast {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(-30px, 30px) scale(1.1); }
          }

          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-float-slow {
            animation: float-slow 8s ease-in-out infinite;
          }
          
          .animate-float-medium {
            animation: float-medium 6s ease-in-out infinite;
          }
          
          .animate-float-fast {
            animation: float-fast 4s ease-in-out infinite;
          }

          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }

          .animate-fade-in {
            animation: fade-in 0.4s ease-out;
          }
          
          /* Grainy texture overlay */
          .grainy-texture::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image: 
              radial-gradient(circle at 20% 50%, transparent 20%, rgba(255,255,255,0.05) 21%, rgba(255,255,255,0.05) 34%, transparent 35%, transparent),
              radial-gradient(circle at 60% 80%, transparent 20%, rgba(255,255,255,0.05) 21%, rgba(255,255,255,0.05) 34%, transparent 35%, transparent),
              radial-gradient(circle at 40% 20%, transparent 20%, rgba(255,255,255,0.05) 21%, rgba(255,255,255,0.05) 34%, transparent 35%, transparent);
            background-size: 200px 200px, 300px 300px, 250px 250px;
            opacity: 0.6;
            pointer-events: none;
            mix-blend-mode: overlay;
          }
          
          .grainy-texture::after {
            content: '';
            position: absolute;
            inset: 0;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E");
            opacity: 0.15;
            pointer-events: none;
            mix-blend-mode: multiply;
          }
        `}</style>
      </section>
    </div>
  );
};

export default Home;