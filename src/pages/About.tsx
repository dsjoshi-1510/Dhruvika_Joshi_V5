import {
  Code2,
  Palette,
  Zap,
  Trophy,
  Heart,
  Coffee,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { theme } from "@/config/theme";

// ----------------------
// Data
// ----------------------

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

// ----------------------
// Component
// ----------------------

const About = () => {
  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16 md:pb-20 grainy-subtle texture-paper" style={{ backgroundColor: theme.colors.background.main }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Section - Sequential */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 fade-in-sequential">
          <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl" style={{ color: theme.colors.text.primary }}>
            About Me
          </h1>
        </div>

        {/* ---------------------- Bio Section with Photo - Sequential ---------------------- */}
        <section className="mb-12 sm:mb-16 md:mb-20">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:grid md:grid-cols-12 gap-6 sm:gap-8 items-start">
              {/* Text Content - Primary Focus */}
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

              {/* Photo - Supporting Element, Smaller */}
              <div className="w-full md:col-span-4 fade-in-sequential order-1 md:order-2 flex justify-center md:justify-end">
                <div className="md:sticky md:top-24 w-32 h-32 sm:w-40 sm:h-40 md:w-full max-w-[200px]">
                  <div className="relative group">
                    <div 
                      className="absolute inset-0 rounded-xl sm:rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                      style={{ 
                        background: `linear-gradient(135deg, ${theme.colors.palette.champagne}, ${theme.colors.palette.whiskeySour})` 
                      }}
                    />
                    <img
                      src="/Childhood.jpg"
                      alt="A childhood photo of Dhruvika"
                      className="relative w-full aspect-square object-cover rounded-xl sm:rounded-2xl shadow-xl ring-2 ring-white/50"
                      style={{
                        display: 'block',
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (target.src.includes('Childhood.jpg')) {
                          target.src = '/childhood.jpg';
                        } else if (target.src.includes('childhood.jpg')) {
                          target.src = '/Childhood.JPG';
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

        {/* ---------------------- Highlights Section - Sequential ---------------------- */}
        <section className="mb-12 sm:mb-16 md:mb-20">
          <h2 className="mb-8 sm:mb-10 md:mb-12 text-center fade-in-sequential text-2xl sm:text-3xl md:text-4xl" style={{ color: theme.colors.text.primary }}>
            What I Bring To The Table
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {highlights.map((highlight, index) => {
              return (
              <Card
                key={index}
                className="border-2 smooth-transition fade-in-sequential hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 grainy-subtle"
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
              );
            })}
          </div>
        </section>

        {/* ---------------------- Skills Section - Sequential ---------------------- */}
        <section className="mb-12 sm:mb-16 md:mb-20">
          <h2 className="mb-8 sm:mb-10 md:mb-12 text-center fade-in-sequential text-2xl sm:text-3xl md:text-4xl" style={{ color: theme.colors.text.primary }}>
            Skills & Expertise
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              {skills.map((skill, index) => {
                return (
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
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------------------- Achievements Section - Sequential ---------------------- */}
        <section className="mb-12 sm:mb-16 md:mb-20">
          <h2 className="mb-8 sm:mb-10 md:mb-12 text-center fade-in-sequential text-2xl sm:text-3xl md:text-4xl" style={{ color: theme.colors.text.primary }}>
            Achievements
          </h2>

          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-5 md:space-y-6">
            {achievements.map((achievement, index) => {
              return (
              <Card 
                key={index} 
                className="fade-in-sequential hover:shadow-xl transition-all duration-300 active:scale-[0.98] grainy-subtle"
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
              );
            })}
          </div>
        </section>

        {/* ---------------------- Contact Section - Sequential ---------------------- */}
        <section id="contact" className="mb-12 sm:mb-16 md:mb-20">
          <h2 className="mb-8 sm:mb-10 md:mb-12 text-center fade-in-sequential text-2xl sm:text-3xl md:text-4xl" style={{ color: theme.colors.text.primary }}>
            Get In Touch
          </h2>

          <div className="max-w-2xl mx-auto">
            <Card 
              className="border-2 hover:shadow-2xl transition-all duration-300 fade-in-sequential grainy-subtle"
              style={{
                borderColor: `${theme.colors.palette.burntCoffee}20`,
                backgroundColor: theme.colors.background.card,
                boxShadow: theme.shadows.lg,
              }}
            >
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  {/* Email */}
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                    <div 
                      className="p-2.5 sm:p-3 rounded-full flex-shrink-0 transition-all duration-300 active:scale-95 touch-manipulation"
                      style={{ backgroundColor: `${theme.colors.palette.champagne}40` }}
                    >
                      <Mail 
                        className="h-4 w-4 sm:h-5 sm:w-5" 
                        style={{ color: theme.colors.text.primary }}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm sm:text-base mb-1" style={{ color: theme.colors.text.primary }}>
                        Email
                      </p>
                      <a
                        href="mailto:dsjoshi@usc.edu"
                        className="smooth-transition hover:underline text-sm sm:text-base break-all"
                        style={{ color: theme.colors.text.secondary }}
                        onMouseEnter={(e) => e.currentTarget.style.color = theme.colors.palette.whiskeySour}
                        onMouseLeave={(e) => e.currentTarget.style.color = theme.colors.text.secondary}
                      >
                        dsjoshi@usc.edu
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                    <div 
                      className="p-2.5 sm:p-3 rounded-full flex-shrink-0 transition-all duration-300 active:scale-95 touch-manipulation"
                      style={{ backgroundColor: `${theme.colors.palette.champagne}40` }}
                    >
                      <Phone 
                        className="h-4 w-4 sm:h-5 sm:w-5" 
                        style={{ color: theme.colors.text.primary }}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm sm:text-base mb-1" style={{ color: theme.colors.text.primary }}>
                        Phone
                      </p>
                      <a
                        href="tel:+14259002409"
                        className="smooth-transition hover:underline text-sm sm:text-base"
                        style={{ color: theme.colors.text.secondary }}
                        onMouseEnter={(e) => e.currentTarget.style.color = theme.colors.palette.whiskeySour}
                        onMouseLeave={(e) => e.currentTarget.style.color = theme.colors.text.secondary}
                      >
                        +1 (425) 900-2409
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                    <div 
                      className="p-2.5 sm:p-3 rounded-full flex-shrink-0 transition-all duration-300 active:scale-95 touch-manipulation"
                      style={{ backgroundColor: `${theme.colors.palette.champagne}40` }}
                    >
                      <MapPin 
                        className="h-4 w-4 sm:h-5 sm:w-5" 
                        style={{ color: theme.colors.text.primary }}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm sm:text-base mb-1" style={{ color: theme.colors.text.primary }}>
                        Location
                      </p>
                      <p className="text-sm sm:text-base" style={{ color: theme.colors.text.secondary }}>
                        Los Angeles, California
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
