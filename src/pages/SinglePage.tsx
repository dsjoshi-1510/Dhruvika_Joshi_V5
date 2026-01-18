import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  MapPin,
  ExternalLink,
  Code2,
  Palette,
  Zap,
  Trophy,
  Heart,
  Coffee,
  Phone,
  Download,
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { theme } from "@/config/theme";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import SectionDivider from "@/components/SectionDivider";
import SectionTracker from "@/components/SectionTracker";
import ScrollBackground from "@/components/ScrollBackground";
import GrainBackground from "@/components/GrainBackground";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Import project data
type ProjectCategory = "all" | "strategy" | "analytics" | "experience" | "personal";

interface Project {
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  image: string;
  pdfUrl?: string;
  repoUrl?: string;
}

const projects: Project[] = [
  {
    title: "Airbnb Integrated Strategic Marketing Plan (ISMP)",
    description:
      "Developed an end-to-end strategic marketing plan focused on trust, experience consistency, and host professionalization.",
    category: "strategy",
    tags: ["Platform Strategy", "Brand Experience", "Growth Strategy"],
    image: "/airbnb-cover.jpeg",
    pdfUrl: "/airbnb-ismp.pdf",
  },
  {
    title: "Patagonia Sustainability & Brand Strategy",
    description:
      "Analyzed Patagonia's sustainability-led brand strategy and long-term brand equity tradeoffs.",
    category: "strategy",
    tags: ["Brand Strategy", "Sustainability", "Long-Term Value"],
    image: "/Patagonia.jpeg",
    pdfUrl: "/patagonia-brand-strategy.pdf",
  },
  {
    title: "Oatly Growth Strategy & Financial Scenarios",
    description:
      "Built best-, base-, and worst-case growth scenarios to evaluate margin and pricing tradeoffs.",
    category: "strategy",
    tags: ["Growth Strategy", "Financial Modeling"],
    image: "/Oatly.jpeg",
    pdfUrl: "/oatly-growth-scenarios.pdf",
  },
  {
    title: "Stella McCartney Sustainable Luxury Strategy",
    description:
      "Evaluated how sustainability and ethical sourcing coexist with luxury positioning.",
    category: "strategy",
    tags: ["Luxury Strategy", "Sustainable Fashion"],
    image: "/Stellamccartnet.jpeg",
    pdfUrl: "/stella-mccartney-brand-strategy.pdf",
  },
  {
    title: "LEGO Marketing Action Plan",
    description:
      "Designed a structured marketing action plan translating brand strategy into execution.",
    category: "strategy",
    tags: ["Go-to-Market", "Activation Planning"],
    image:
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=600&fit=crop",
    pdfUrl: "/lego-marketing-action-plan.pdf",
  },
  {
    title: "Marketing Analytics: App Growth Drivers",
    description:
      "Identified key drivers of app adoption using regression and exploratory data analysis.",
    category: "analytics",
    tags: ["Regression", "EDA", "R"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    repoUrl: "https://github.com/dsjoshi-1510/Marketing-Analytics-Projects",
  },
  {
    title: "Machine Learning for Yelp Review Sentiment",
    description:
      "Built and compared ML models to predict sentiment from 95,000 Yelp reviews.",
    category: "analytics",
    tags: ["Machine Learning", "Text Analytics"],
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop",
    repoUrl: "https://github.com/dsjoshi-1510/Marketing-Analytics-Projects",
  },
  {
    title: "Partnerships Strategist — Tawkify",
    description:
      "Blended brand strategy and analytics to guide partnerships and influencer programs.",
    category: "experience",
    tags: ["Partnership Strategy", "Customer Journey"],
    image: "/Tawkify.jpeg",
  },
  {
    title: "AIESEC Global Exchange — Egypt",
    description:
      "Studied tourism through on-ground immersion, cultural research, and consumer observation.",
    category: "experience",
    tags: ["Consumer Insight", "Cultural Research"],
    image: "/Egypt.jpg",
  },
  {
    title: "Personal Project Placeholder",
    description:
      "This is a placeholder for personal projects. Add your creative work, side projects, or personal initiatives here.",
    category: "personal",
    tags: ["Personal", "Creative", "Work in Progress"],
    image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&h=600&fit=crop",
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "strategy", label: "Brand Strategy" },
  { id: "analytics", label: "Analytics" },
  { id: "experience", label: "Experience" },
  { id: "personal", label: "Personal" },
];

const skills = [
  "Brand Strategy",
  "Consumer Insight",
  "Excel",
  "Tableu",
  "RStudio",
  "Experiential Marketing",
  "Data Analysis",
  "Team Leadership",
  "SDG-Aligned Initiatives",
];

const highlights = [
  {
    icon: Code2,
    title: "Insight-Led Brand Strategy",
    description:
      "Turning consumer insight and data into clear positioning, strategic direction, and cohesive brand foundations.",
  },
  {
    icon: Palette,
    title: "Cohesive Storytelling & Experience",
    description:
      "Shaping unified brand narratives and experiences that connect meaningfully with consumers across touchpoints.",
  },
  {
    icon: Zap,
    title: "Strategic Momentum Builder",
    description:
      "Driving ideas forward by aligning people, priorities, and execution to turn strong concepts into real-world impact.",
  },
];

const achievements = [
  {
    icon: Trophy,
    text: "Drove 50% increase in ROAS through insight-led brand and campaign strategy",
  },
  {
    icon: Heart,
    text: "Built high-conversion brand experiences achieving up to 70% customer conversion at premium events and partnerships",
  },
  {
    icon: Coffee,
    text: "Expanded brand reach to 70–80% of addressable market through data-backed positioning and growth initiatives",
  },
];

interface TimelineItem {
  icon: React.ElementType;
  date: string;
  title: string;
  organization: string;
  location?: string;
  description: string;
  highlights?: string[];
}

const RESUME_PDF_PATH = "/Dhruvika_Joshi_Resume.pdf";

const timeline: TimelineItem[] = [
  {
    icon: GraduationCap,
    date: "Aug 2025 – Present",
    title: "M.S. Marketing Analytics (STEM) — GPA 3.67/4.0",
    organization: "University of Southern California, Marshall School of Business",
    location: "Los Angeles, CA",
    description:
      "Graduate training in marketing analytics, data-driven decision-making, and applied strategy.",
  },
  {
    icon: Briefcase,
    date: "Nov 2025 – Present",
    title: "Partnerships Strategist",
    organization: "Tawkify, Inc. (Matchmaking)",
    location: "Los Angeles, CA",
    description:
      "Blend brand strategy and analytics to guide partnerships and influencer decisions across the customer journey.",
    highlights: [
      "Conduct brand-level analysis to evaluate audience behavior and inform content and partner selection.",
      "Lead partnerships and ambassador programs shaping perception across the dating journey.",
    ],
  },
  {
    icon: Briefcase,
    date: "Nov 2025 – Present",
    title: "Audience Insights & Growth Strategy Intern",
    organization: "Leaf (Audio Memory App)",
    location: "Los Angeles, CA",
    description:
      "Drive market expansion through segmentation, storytelling, and insight-to-strategy execution.",
    highlights: [
      "Built a Use Case & Opportunity Map comparing segments by market potential and adoption ease.",
      "Translated consumer insight into growth recommendations supporting expansion goals.",
    ],
  },
  {
    icon: Briefcase,
    date: "Jun 2024 – Jun 2025",
    title: "Junior Brand Strategist",
    organization: "ILEM Japan (Luxury Wellness Brand)",
    location: "Gandhinagar, India",
    description:
      "Owned brand and partnership initiatives spanning campaigns, community activations, and PR.",
    highlights: [
      "Curated celebrity campaigns and improved ROAS by 50%.",
      "Partnered with 10+ cafés for sampling and pop-ups.",
      "Managed 3+ agencies for PR and marketing placements.",
    ],
  },
  {
    icon: GraduationCap,
    date: "Jun 2020 – May 2024",
    title: "B.B.A. — GPA 3.7/4.0",
    organization: "Pandit Deendayal Energy University",
    location: "Gujarat, India",
    description:
      "Undergraduate business foundation with hands-on marketing and growth initiatives.",
  },
  {
    icon: Briefcase,
    date: "May 2023 – May 2025",
    title: "Founder",
    organization: "Tiny. J Thrifts",
    location: "Gujarat, India",
    description:
      "Built a sustainability-led thrift community and drove growth through partnerships.",
    highlights: [
      "Built a community of 700+ students across India.",
      "Collaborated with 7+ cafés and hosted reuse-focused pop-ups.",
    ],
  },
  {
    icon: Briefcase,
    date: "May 2022 – May 2024",
    title: "Vice President of Marketing",
    organization: "AIESEC",
    location: "Gujarat, India",
    description:
      "Led marketing strategy and execution for global exchange programs and youth leadership initiatives.",
    highlights: [
      "Grew program awareness by 40% through strategic campaigns.",
      "Managed a team of 15+ marketing volunteers.",
    ],
  },
];

export default function SinglePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const portfolioScrollRef = useRef<HTMLDivElement>(null);
  
  // Scroll animations for sections
  const aboutRef = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
  const portfolioRef = useScrollAnimation({ threshold: 0.1, triggerOnce: true });
  const resumeRef = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
  
  // Canvas animation for hero section
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let time = 0;

    function drawGradientBlobs() {
      const blob1X = canvas.width * 0.3 + Math.sin(time * 0.001) * 100;
      const blob1Y = canvas.height * 0.3 + Math.cos(time * 0.0015) * 100;

      const blob2X = canvas.width * 0.7 + Math.sin(time * 0.0012) * 120;
      const blob2Y = canvas.height * 0.6 + Math.cos(time * 0.001) * 80;

      const blob3X = canvas.width * 0.5 + Math.sin(time * 0.0008) * 90;
      const blob3Y = canvas.height * 0.7 + Math.cos(time * 0.0013) * 110;

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

      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = "screen";

      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = gradient3;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = "source-over";
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

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const handleDownload = () => {
    window.open(RESUME_PDF_PATH, "_blank", "noopener,noreferrer");
  };

  // Horizontal scroll handlers
  const scrollPortfolio = (direction: "left" | "right") => {
    if (portfolioScrollRef.current) {
      const scrollAmount = 400;
      portfolioScrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen" onMouseMove={handleMouseMove}>
      {/* Textured Spotlight Background - Primary Background Effect */}
      <GrainBackground />
      
      {/* Dynamic Scroll Background Effects - Commented out to prioritize GrainBackground */}
      {/* <ScrollBackground /> */}
      
      {/* Section Tracker - Persistent Visual Element */}
      <SectionTracker />

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        // className="relative min-h-screen flex items-center justify-center overflow-hidden grainy-texture texture-organic" // Previous textures commented out
      >
        {/* Canvas gradient background commented out to show GrainBackground */}
        {/* <canvas
          ref={canvasRef}
          className="absolute inset-0 z-0"
          style={{
            background: theme.components.hero.backgroundGradient,
            filter: `blur(${theme.components.hero.blur})`,
          }}
        /> */}

        {/* Brown gradient overlay commented out to show GrainBackground */}
        {/* <div
          className="absolute inset-0 z-[1]"
          style={{
            background: `radial-gradient(circle at 20% 30%, ${theme.colors.palette.champagne}50 0%, transparent 50%),
                        radial-gradient(circle at 80% 70%, ${theme.colors.palette.whiskeySour}45 0%, transparent 50%),
                        radial-gradient(circle at 50% 50%, ${theme.colors.palette.honeyGarlic}40 0%, transparent 70%),
                        radial-gradient(circle at 10% 80%, ${theme.colors.palette.champagne}35 0%, transparent 60%),
                        linear-gradient(135deg, ${theme.colors.palette.champagne}40 0%, ${theme.colors.palette.whiskeySour}35 25%, ${theme.colors.palette.honeyGarlic}30 50%, ${theme.colors.palette.champagne}25 75%, ${theme.colors.palette.champagne}20 100%)`,
            backdropFilter: `blur(${theme.effects.backdropBlur["2xl"]})`,
          }}
        /> */}

        <div className="relative z-10 text-center py-12 sm:py-16 md:py-20 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative mx-auto mb-8 sm:mb-10 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 group fade-in-sequential">
            <div
              className="absolute inset-0 rounded-full animate-spin-slow opacity-50 blur-xl group-hover:opacity-70 transition-opacity duration-500"
              style={{
                background: `linear-gradient(135deg, ${theme.colors.palette.champagne}, ${theme.colors.palette.whiskeySour}, ${theme.colors.palette.honeyGarlic})`,
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

          <h1 className="mb-4 sm:mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight drop-shadow-lg fade-in-sequential px-2">
            Dhruvika Joshi
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-white mb-10 sm:mb-12 md:mb-14 max-w-4xl mx-auto leading-relaxed font-semibold tracking-tight drop-shadow-md fade-in-sequential px-2">
            Turning insight into brand stories
            <span style={{ color: theme.colors.palette.champagne }}> people remember</span>.
          </p>

          <div className="flex justify-center mb-12 sm:mb-14 md:mb-16 fade-in-sequential px-4">
            <Button
              size="lg"
              onClick={() => {
                const portfolioSection = document.getElementById("portfolio");
                portfolioSection?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
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

          <div className="mb-12 sm:mb-16 md:mb-20 fade-in-sequential px-2">
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href="mailto:dsjoshi@usc.edu"
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
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: theme.colors.text.secondary }} />
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
                  <img src={logo.src} alt={logo.alt} className={`${logo.h} w-auto`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider - Hero to About - Removed brown dividers */}
      {/* <SectionDivider variant="wave" height="md" /> */}

      {/* ============================================
          ABOUT SECTION
          ============================================ */}
      <section
        id="about"
        ref={aboutRef.ref as React.RefObject<HTMLElement>}
        className={`min-h-screen pt-12 sm:pt-16 pb-12 sm:pb-16 md:pb-20 section-transition ${
          // grainy-subtle texture-paper // Previous textures commented out
          aboutRef.isVisible ? "scroll-fade-in visible" : "scroll-fade-in"
        }`}
        style={{ backgroundColor: "transparent", zIndex: 1, position: "relative" }}
        // backgroundColor: theme.colors.background.main // Removed brown background to show GrainBackground
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 fade-in-sequential">
            <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl" style={{ color: theme.colors.text.primary }}>
              About Me
            </h1>
          </div>

          <section className="mb-12 sm:mb-16 md:mb-20">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:grid md:grid-cols-12 gap-6 sm:gap-8 items-start">
                <div className="w-full md:col-span-8 fade-in-sequential order-2 md:order-1">
                  <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none space-y-4 sm:space-y-5 md:space-y-6" style={{ color: theme.colors.text.secondary }}>
                    <p className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight mb-4 sm:mb-5 md:mb-6" style={{ color: theme.colors.text.primary }}>
                      I turn ideas into momentum.
                    </p>

                    <p className="text-base sm:text-lg leading-relaxed">
                      Whether I am scaling partnerships, shaping brand narratives, or
                      solving complex problems through data and creativity, I am drawn
                      to work that feels alive. I enjoy building things that move with
                      purpose, resonate deeply, and create real impact. My approach to
                      brand strategy is rooted in cohesion. I focus on how a brand
                      thinks, speaks, and shows up across every touchpoint,
                      translating insight and analytics into clear positioning,
                      resonant storytelling, and meaningful consumer experiences.
                    </p>

                    <p className="text-base sm:text-lg leading-relaxed">
                      I do my best work in collaborative environments with sharp,
                      curious thinkers, pushing projects from interesting to
                      unforgettable. When I am offline, I slow down to make space for
                      new ideas. I spend time creative writing, experimenting with
                      paint, exploring new places, and hiking my way into fresh
                      perspective, usually with a book nearby and coffee close at
                      hand. Curiosity, creativity, and intention guide how I work and
                      how I move through the world.
                    </p>
                  </div>
                </div>

                <div className="w-full md:col-span-4 fade-in-sequential order-1 md:order-2 flex justify-center md:justify-end">
                  <div className="md:sticky md:top-24 w-32 h-32 sm:w-40 sm:h-40 md:w-full max-w-[200px]">
                    <div className="relative group">
                      <div
                        className="absolute inset-0 rounded-xl sm:rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(135deg, ${theme.colors.palette.champagne}, ${theme.colors.palette.whiskeySour})`,
                        }}
                      />
                      <img
                        src="/Childhood.jpg"
                        alt="A childhood photo of Dhruvika"
                        className="relative w-full aspect-square object-cover rounded-xl sm:rounded-2xl shadow-xl ring-2 ring-white/50"
                        style={{
                          display: "block",
                        }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (target.src.includes("Childhood.jpg")) {
                            target.src = "/childhood.jpg";
                          } else if (target.src.includes("childhood.jpg")) {
                            target.src = "/Childhood.JPG";
                          }
                        }}
                        loading="eager"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12 sm:mb-16 md:mb-20">
            <h2 className="mb-8 sm:mb-10 md:mb-12 text-center fade-in-sequential text-2xl sm:text-3xl md:text-4xl" style={{ color: theme.colors.text.primary }}>
              What I Bring To The Table
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {highlights.map((highlight, index) => (
                <Card
                  key={index}
                  className="border-2 smooth-transition fade-in-sequential hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  // grainy-subtle // Previous texture commented out
                  style={{
                    borderColor: `${theme.colors.palette.burntCoffee}20`,
                    backgroundColor: theme.colors.background.card,
                    boxShadow: theme.shadows.lg,
                  }}
                >
                  <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                    <div
                      className="mb-3 sm:mb-4 inline-flex p-3 sm:p-4 rounded-full transition-all duration-300 active:scale-95 touch-manipulation"
                      style={{ backgroundColor: `${theme.colors.palette.champagne}40` }}
                    >
                      <highlight.icon
                        className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
                        style={{ color: theme.colors.text.primary }}
                      />
                    </div>

                    <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-semibold" style={{ color: theme.colors.text.primary }}>
                      {highlight.title}
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed" style={{ color: theme.colors.text.secondary }}>
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-12 sm:mb-16 md:mb-20">
            <h2 className="mb-8 sm:mb-10 md:mb-12 text-center fade-in-sequential text-2xl sm:text-3xl md:text-4xl" style={{ color: theme.colors.text.primary }}>
              Skills & Expertise
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-xs sm:text-sm md:text-base py-2 sm:py-2.5 px-3 sm:px-4 smooth-transition cursor-default transition-all duration-300 active:scale-95 touch-manipulation fade-in-sequential min-h-[36px] sm:min-h-[40px] flex items-center"
                    style={{
                      backgroundColor: `${theme.colors.palette.champagne}40`,
                      color: theme.colors.text.primary,
                      border: `1px solid ${theme.colors.palette.burntCoffee}20`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = theme.colors.palette.whiskeySour;
                      e.currentTarget.style.color = theme.colors.text.white;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = `${theme.colors.palette.champagne}40`;
                      e.currentTarget.style.color = theme.colors.text.primary;
                    }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-12 sm:mb-16 md:mb-20">
            <h2 className="mb-8 sm:mb-10 md:mb-12 text-center fade-in-sequential text-2xl sm:text-3xl md:text-4xl" style={{ color: theme.colors.text.primary }}>
              Achievements
            </h2>

            <div className="max-w-3xl mx-auto space-y-4 sm:space-y-5 md:space-y-6">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="fade-in-sequential hover:shadow-xl transition-all duration-300 active:scale-[0.98]"
                  // grainy-subtle // Previous texture commented out
                  style={{
                    backgroundColor: theme.colors.background.card,
                    boxShadow: theme.shadows.md,
                    border: `1px solid ${theme.colors.palette.burntCoffee}15`,
                  }}
                >
                  <CardContent className="p-4 sm:p-5 md:p-6 flex items-start sm:items-center gap-3 sm:gap-4">
                    <div
                      className="p-2.5 sm:p-3 rounded-full flex-shrink-0 transition-all duration-300 active:scale-95 touch-manipulation"
                      style={{ backgroundColor: `${theme.colors.palette.champagne}40` }}
                    >
                      <achievement.icon
                        className="h-5 w-5 sm:h-6 sm:w-6"
                        style={{ color: theme.colors.text.primary }}
                      />
                    </div>

                    <p className="text-sm sm:text-base md:text-lg leading-relaxed" style={{ color: theme.colors.text.primary }}>
                      {achievement.text}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </section>

      {/* Section Divider - About to Portfolio - Removed brown dividers */}
      {/* <SectionDivider variant="curve" flip height="lg" /> */}

      {/* ============================================
          PORTFOLIO SECTION - HORIZONTAL SCROLL
          ============================================ */}
      <section
        id="portfolio"
        ref={portfolioRef.ref as React.RefObject<HTMLElement>}
        className={`min-h-screen pt-12 sm:pt-16 pb-12 sm:pb-16 md:pb-20 section-transition ${
          // grainy-subtle texture-canvas // Previous textures commented out
          portfolioRef.isVisible ? "scroll-fade-in visible" : "scroll-fade-in"
        }`}
        style={{ backgroundColor: "transparent", zIndex: 1, position: "relative" }}
        // backgroundColor: theme.colors.background.main // Removed brown background to show GrainBackground
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 fade-in-sequential" style={{ color: theme.colors.text.primary }}>
              Portfolio
            </h1>
            <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2 fade-in-sequential" style={{ color: theme.colors.text.secondary }}>
              Selected work across brand strategy, analytics, and experience design
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-8 sm:mb-10 md:mb-12 px-2">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as ProjectCategory)}
                className="transition-all duration-300 active:scale-95 touch-manipulation text-xs sm:text-sm md:text-base px-3 sm:px-4 py-2 sm:py-2.5 min-h-[40px] sm:min-h-[44px]"
                style={{
                  backgroundColor: activeCategory === cat.id
                    ? theme.components.button.primary.background
                    : theme.colors.background.card,
                  color: activeCategory === cat.id
                    ? theme.colors.text.white
                    : theme.colors.text.primary,
                  borderColor: activeCategory === cat.id
                    ? theme.components.button.primary.background
                    : `${theme.colors.palette.burntCoffee}20`,
                  boxShadow: activeCategory === cat.id ? theme.shadows.md : theme.shadows.sm,
                }}
                onMouseEnter={(e) => {
                  if (activeCategory !== cat.id) {
                    e.currentTarget.style.backgroundColor = theme.colors.palette.whiskeySour;
                    e.currentTarget.style.color = theme.colors.text.white;
                    e.currentTarget.style.boxShadow = theme.shadows.md;
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== cat.id) {
                    e.currentTarget.style.backgroundColor = theme.colors.background.card;
                    e.currentTarget.style.color = theme.colors.text.primary;
                    e.currentTarget.style.boxShadow = theme.shadows.sm;
                  }
                }}
              >
                {cat.label}
              </Button>
            ))}
          </div>

          {/* Horizontal Scroll Container */}
          <div className="relative">
            {/* Scroll Buttons - Desktop */}
            <button
              onClick={() => scrollPortfolio("left")}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 touch-manipulation group shadow-lg"
              style={{
                backgroundColor: theme.colors.palette.whiskeySour,
                boxShadow: `0 8px 24px ${theme.colors.palette.whiskeySour}40, 0 0 0 3px ${theme.colors.palette.whiskeySour}20`,
                border: `3px solid ${theme.colors.palette.whiskeySour}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.palette.honeyGarlic;
                e.currentTarget.style.boxShadow = `0 12px 32px ${theme.colors.palette.honeyGarlic}50, 0 0 0 4px ${theme.colors.palette.honeyGarlic}30`;
                e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.palette.whiskeySour;
                e.currentTarget.style.boxShadow = `0 8px 24px ${theme.colors.palette.whiskeySour}40, 0 0 0 3px ${theme.colors.palette.whiskeySour}20`;
                e.currentTarget.style.transform = "translateY(-50%) scale(1)";
              }}
              aria-label="Scroll left"
            >
              <ArrowRight className="w-7 h-7 rotate-180 animate-pulse group-hover:animate-none" style={{ color: theme.colors.text.white }} />
              {/* Subtle pulse animation */}
              <div
                className="absolute inset-0 rounded-full animate-ping opacity-20"
                style={{ backgroundColor: theme.colors.palette.whiskeySour }}
              />
            </button>

            <button
              onClick={() => scrollPortfolio("right")}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 touch-manipulation group shadow-lg"
              style={{
                backgroundColor: theme.colors.palette.whiskeySour,
                boxShadow: `0 8px 24px ${theme.colors.palette.whiskeySour}40, 0 0 0 3px ${theme.colors.palette.whiskeySour}20`,
                border: `3px solid ${theme.colors.palette.whiskeySour}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.palette.honeyGarlic;
                e.currentTarget.style.boxShadow = `0 12px 32px ${theme.colors.palette.honeyGarlic}50, 0 0 0 4px ${theme.colors.palette.honeyGarlic}30`;
                e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.palette.whiskeySour;
                e.currentTarget.style.boxShadow = `0 8px 24px ${theme.colors.palette.whiskeySour}40, 0 0 0 3px ${theme.colors.palette.whiskeySour}20`;
                e.currentTarget.style.transform = "translateY(-50%) scale(1)";
              }}
              aria-label="Scroll right"
            >
              <ArrowRight className="w-7 h-7 animate-pulse group-hover:animate-none" style={{ color: theme.colors.text.white }} />
              {/* Subtle pulse animation */}
              <div
                className="absolute inset-0 rounded-full animate-ping opacity-20"
                style={{ backgroundColor: theme.colors.palette.whiskeySour }}
              />
            </button>

            {/* Hint Text for Mobile */}
            <div className="md:hidden text-center mb-4 px-4">
              <p className="text-xs sm:text-sm" style={{ color: theme.colors.text.muted }}>
                ← Swipe to explore projects →
              </p>
            </div>

            {/* Horizontal Scroll Wrapper */}
            <div
              ref={portfolioScrollRef}
              className="flex gap-6 sm:gap-8 overflow-x-auto overflow-y-hidden scrollbar-hide pb-6 sm:pb-8 snap-x snap-mandatory px-2 md:px-0"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {filteredProjects.map((project, i) => (
                <Card
                  key={i}
                  className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[500px] lg:w-[550px] overflow-hidden rounded-xl sm:rounded-2xl transition-all duration-300 hover:shadow-2xl fade-in-sequential snap-start"
                  // grainy-subtle // Previous texture commented out
                  style={{
                    backgroundColor: theme.colors.background.card,
                    borderColor: `${theme.colors.palette.burntCoffee}15`,
                    boxShadow: theme.shadows.lg,
                  }}
                >
                  <div className="h-48 sm:h-56 overflow-hidden relative group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-lg sm:text-xl md:text-2xl" style={{ color: theme.colors.text.primary }}>
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-4 sm:p-6 pt-0">
                    <p className="mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed" style={{ color: theme.colors.text.secondary }}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                      {project.tags.map((tag, idx) => (
                        <Badge
                          key={idx}
                          className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1"
                          style={{
                            backgroundColor: `${theme.colors.palette.champagne}40`,
                            color: theme.colors.text.primary,
                            border: `1px solid ${theme.colors.palette.burntCoffee}20`,
                          }}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2">
                      {project.pdfUrl && (
                        <Button
                          size="sm"
                          asChild
                          className="transition-all duration-300 active:scale-95 touch-manipulation w-full sm:w-auto min-h-[40px] sm:min-h-[36px] text-xs sm:text-sm"
                          style={{
                            backgroundColor: theme.components.button.primary.background,
                            color: theme.colors.text.white,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = theme.components.button.primary.hoverBackground;
                            e.currentTarget.style.boxShadow = theme.shadows.lg;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = theme.components.button.primary.background;
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        >
                          <a href={project.pdfUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                            <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
                            View PDF
                          </a>
                        </Button>
                      )}

                      {project.repoUrl && (
                        <Button
                          size="sm"
                          variant="secondary"
                          asChild
                          className="transition-all duration-300 active:scale-95 touch-manipulation w-full sm:w-auto min-h-[40px] sm:min-h-[36px] text-xs sm:text-sm"
                          style={{
                            backgroundColor: theme.components.button.secondary.background,
                            color: theme.components.button.secondary.text,
                            border: `1px solid ${theme.colors.palette.burntCoffee}20`,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = theme.components.button.secondary.hoverBackground;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = theme.components.button.secondary.background;
                          }}
                        >
                          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                            <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
                            View Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Scroll Indicator - Mobile */}
            <div className="md:hidden flex justify-center mt-4 gap-2">
              <div className="text-xs" style={{ color: theme.colors.text.muted }}>
                ← Swipe to explore →
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider - Portfolio to Resume - Removed brown dividers */}
      {/* <SectionDivider variant="gradient" height="md" /> */}

      {/* ============================================
          RESUME SECTION
          ============================================ */}
      <section
        id="resume"
        ref={resumeRef.ref as React.RefObject<HTMLElement>}
        className={`min-h-screen pt-12 sm:pt-16 pb-12 sm:pb-16 md:pb-20 section-transition ${
          // grainy-subtle texture-fabric // Previous textures commented out
          resumeRef.isVisible ? "scroll-fade-in visible" : "scroll-fade-in"
        }`}
        style={{ backgroundColor: "transparent", zIndex: 1, position: "relative" }}
        // backgroundColor: theme.colors.background.main // Removed brown background to show GrainBackground
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 fade-in-sequential" style={{ color: theme.colors.text.primary }}>
              Resume
            </h1>
            <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-7 md:mb-8 px-2 leading-relaxed fade-in-sequential" style={{ color: theme.colors.text.secondary }}>
              Experience, education, and leadership — presented clearly.
            </p>

            <Button
              size="lg"
              onClick={handleDownload}
              className="transition-all duration-300 active:scale-95 touch-manipulation w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base min-h-[48px]"
              style={{
                backgroundColor: theme.components.button.primary.background,
                color: theme.colors.text.white,
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
              <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Download PDF Resume
            </Button>
          </div>

          <div className="relative">
            <div
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2"
              style={{ backgroundColor: theme.colors.palette.whiskeySour }}
            />

            <div
              className="md:hidden absolute left-4 sm:left-6 md:left-8 top-0 bottom-0 w-0.5"
              style={{ backgroundColor: theme.colors.palette.whiskeySour }}
            />

            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              {timeline.map((item, index) => {
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`relative flex items-start md:items-center fade-in-sequential ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                      <div
                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center transition-all duration-300 active:scale-95 touch-manipulation"
                        style={{
                          backgroundColor: theme.colors.background.card,
                          border: `3px solid ${theme.colors.palette.whiskeySour}`,
                          boxShadow: theme.shadows.lg,
                        }}
                      >
                        <item.icon
                          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10"
                          style={{ color: theme.colors.palette.whiskeySour }}
                        />
                      </div>
                    </div>

                    <div
                      className={`flex-1 ml-4 sm:ml-5 md:ml-0 transition-all duration-300 active:scale-[0.98] ${
                        isEven
                          ? "md:pr-8 lg:pr-12 md:mr-auto md:max-w-[calc(50%-60px)]"
                          : "md:pl-8 lg:pl-12 md:ml-auto md:max-w-[calc(50%-60px)]"
                      }`}
                    >
                      <Card
                        className="rounded-xl sm:rounded-2xl border-2 hover:shadow-xl transition-all duration-300"
                        // grainy-subtle // Previous texture commented out
                        style={{
                          backgroundColor: theme.colors.background.card,
                          borderColor: `${theme.colors.palette.burntCoffee}20`,
                          boxShadow: theme.shadows.lg,
                        }}
                      >
                        <CardContent className="p-4 sm:p-5 md:p-6">
                          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                            <div
                              className="px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold inline-flex items-center"
                              style={{
                                backgroundColor: `${theme.colors.palette.champagne}40`,
                                color: theme.colors.text.primary,
                                border: `1px solid ${theme.colors.palette.burntCoffee}20`,
                              }}
                            >
                              <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
                              {item.date}
                            </div>
                            {item.location && (
                              <div
                                className="px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs inline-flex items-center"
                                style={{
                                  backgroundColor: `${theme.colors.palette.champagne}30`,
                                  color: theme.colors.text.secondary,
                                  border: `1px solid ${theme.colors.palette.burntCoffee}20`,
                                }}
                              >
                                <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
                                {item.location}
                              </div>
                            )}
                          </div>

                          <h3 className="text-lg sm:text-xl font-semibold mb-1.5 sm:mb-2 leading-tight" style={{ color: theme.colors.text.primary }}>
                            {item.title}
                          </h3>

                          <p className="font-medium mb-2 sm:mb-3 text-sm sm:text-base" style={{ color: theme.colors.text.secondary }}>
                            {item.organization}
                          </p>

                          <p className="mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed" style={{ color: theme.colors.text.secondary }}>
                            {item.description}
                          </p>

                          {item.highlights && (
                            <>
                              <Separator className="my-3 sm:my-4" style={{ backgroundColor: `${theme.colors.palette.burntCoffee}15` }} />
                              <ul className="space-y-1.5 sm:space-y-2">
                                {item.highlights.map((h, i) => (
                                  <li key={i} className="flex gap-2 sm:gap-3 text-xs sm:text-sm leading-relaxed" style={{ color: theme.colors.text.primary }}>
                                    <span
                                      className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                                      style={{ backgroundColor: theme.colors.palette.whiskeySour }}
                                    />
                                    <span>{h}</span>
                                  </li>
                                ))}
                              </ul>
                            </>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
