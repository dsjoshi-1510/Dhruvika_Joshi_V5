import { ArrowRight, Mail, Github, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

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

      // Create gradients for each blob
      const gradient1 = ctx.createRadialGradient(blob1X, blob1Y, 0, blob1X, blob1Y, 300);
      gradient1.addColorStop(0, 'rgba(212, 196, 176, 0.8)');
      gradient1.addColorStop(0.5, 'rgba(181, 169, 154, 0.6)');
      gradient1.addColorStop(1, 'rgba(139, 117, 102, 0)');

      const gradient2 = ctx.createRadialGradient(blob2X, blob2Y, 0, blob2X, blob2Y, 280);
      gradient2.addColorStop(0, 'rgba(139, 117, 102, 0.7)');
      gradient2.addColorStop(0.5, 'rgba(107, 93, 82, 0.5)');
      gradient2.addColorStop(1, 'rgba(74, 63, 55, 0)');

      const gradient3 = ctx.createRadialGradient(blob3X, blob3Y, 0, blob3X, blob3Y, 320);
      gradient3.addColorStop(0, 'rgba(181, 169, 154, 0.7)');
      gradient3.addColorStop(0.5, 'rgba(139, 117, 102, 0.5)');
      gradient3.addColorStop(1, 'rgba(107, 93, 82, 0)');

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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Canvas Background with blur effect */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(135deg, #D4C4B0 0%, #B5A99A 25%, #8B7566 50%, #6B5D52 75%, #4A3F37 100%)',
            filter: 'blur(80px)'
          }}
        />

        {/* Overlay for extra blur and color wash */}
        <div className="absolute inset-0 z-[1]" style={{
          background: 'linear-gradient(135deg, rgba(212, 196, 176, 0.3) 0%, rgba(181, 169, 154, 0.2) 25%, rgba(139, 117, 102, 0.3) 50%, rgba(107, 93, 82, 0.2) 75%, rgba(74, 63, 55, 0.3) 100%)',
          backdropFilter: 'blur(60px)'
        }} />

        {/* Content */}
        <div className="relative z-10 text-center py-20 max-w-6xl mx-auto px-6">
          {/* Headshot with refined styling - slightly smaller */}
          <div className="relative mx-auto mb-10 w-40 h-40 md:w-48 md:h-48 group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4C4B0] via-[#B5A99A] to-[#8B7566] rounded-full animate-spin-slow opacity-40 blur-xl group-hover:opacity-60 transition-opacity duration-500" />
            <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-white/90 shadow-2xl shadow-neutral-900/10 transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl">
              <img
                src="/headshot.JPG"
                alt="Dhruvika Joshi"
                className="w-full h-full object-cover object-[center_20%] scale-110"
              />
            </div>
          </div>

          {/* Skill strip */}
          <div className="inline-block px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-8 shadow-lg">
            <p className="text-xs uppercase tracking-[0.25em] text-[#4A3F37] font-semibold">
              Brand Strategy • Consumer Insight • Storytelling
            </p>
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-6xl md:text-7xl font-black text-white tracking-tight drop-shadow-lg">
            Dhruvika Joshi
          </h1>

          {/* Tagline */}
          <p className="text-2xl md:text-4xl text-white mb-14 max-w-4xl mx-auto leading-relaxed font-semibold tracking-tight drop-shadow-md">
            Turning insight into brand stories
            <span className="text-[#F5F0EB]"> people remember</span>.
          </p>

          {/* Refined CTA */}
          <div className="flex justify-center mb-16">
            <Button
              size="lg"
              onClick={() => window.location.href = '/portfolio'}
              className="bg-white/90 hover:bg-white text-[#4A3F37] font-semibold shadow-xl shadow-black/20 transition-all duration-300 hover:shadow-2xl hover:scale-105 border-0 px-10 py-7 text-lg rounded-2xl backdrop-blur-sm cursor-pointer"
            >
              <span className="flex items-center">
                Explore My Work
                <ArrowRight className="ml-3 h-5 w-5" />
              </span>
            </Button>
          </div>

          {/* Contact Information - Better visual hierarchy */}
          <div className="mb-20">
            <div className="flex flex-wrap justify-center items-center gap-4 px-4">
              <a
                href="mailto:dsjoshi@usc.edu"
                className="flex items-center gap-2 px-5 py-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="w-4 h-4 text-[#6B5D52]" />
                <span className="text-sm text-[#4A3F37] font-medium">dsjoshi@usc.edu</span>
              </a>

              <a
                href="https://www.linkedin.com/in/dhruvika-joshi/"
                className="flex items-center gap-2 px-5 py-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4 text-[#6B5D52]" />
                <span className="text-sm text-[#4A3F37] font-medium">LinkedIn</span>
              </a>

              <a
                href="https://github.com/dsjoshi-1510"
                className="flex items-center gap-2 px-5 py-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 text-[#6B5D52]" />
                <span className="text-sm text-[#4A3F37] font-medium">GitHub</span>
              </a>

              <div className="flex items-center gap-2 px-5 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                <MapPin className="w-4 h-4 text-[#6B5D52]" />
                <span className="text-sm text-[#4A3F37] font-medium">Los Angeles, CA</span>
              </div>
            </div>
          </div>

          {/* Logos with enhanced styling */}
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-white/80 mb-12 font-semibold drop-shadow-sm">
              Selected Projects Through
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 px-4">
              <div className="transform hover:scale-110 transition-all duration-300 bg-white p-5 rounded-2xl shadow-xl hover:shadow-2xl">
                <img
                  src="/marshall.png"
                  alt="USC Marshall"
                  className="h-10 w-auto"
                />
              </div>
              <div className="transform hover:scale-110 transition-all duration-300 bg-white p-5 rounded-2xl shadow-xl hover:shadow-2xl">
                <img
                  src="/tawkify.png"
                  alt="Tawkify"
                  className="h-8 w-auto"
                />
              </div>
              <div className="transform hover:scale-110 transition-all duration-300 bg-white p-5 rounded-2xl shadow-xl hover:shadow-2xl">
                <img
                  src="/ilem.png"
                  alt="ILEM"
                  className="h-8 w-auto"
                />
              </div>
              <div className="transform hover:scale-110 transition-all duration-300 bg-white p-5 rounded-2xl shadow-xl hover:shadow-2xl">
                <img
                  src="/leaf.png"
                  alt="Leaf"
                  className="h-8 w-auto"
                />
              </div>
              <div className="transform hover:scale-110 transition-all duration-300 bg-white p-5 rounded-2xl shadow-xl hover:shadow-2xl">
                <img
                  src="/aiesec_logo_black.svg"
                  alt="AIESEC"
                  className="h-8 w-auto"
                />
              </div>
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
            animation: fade-in 1s ease-out;
          }
        `}</style>
      </section>
    </div>
  );
};

export default Home;