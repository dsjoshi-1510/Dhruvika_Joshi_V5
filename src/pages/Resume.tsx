import React from "react";
import {
  Download,
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { theme } from "@/config/theme";

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
    date: "Jun 2023 – Jul 2023",
    title: "Senior Manager, Social Sector",
    organization: "AIESEC Cairo (Global Exchange)",
    location: "Cairo, Egypt",
    description:
      "Led NGO acquisition and retention while completing an international exchange.",
    highlights: [
      "Led a team of 4; acquired 4 NGO partners and retained 85% of members.",
      "Studied tourism culture, consumer behavior, and local economic context.",
    ],
  },
  {
    icon: Award,
    date: "2025",
    title: "2nd Place — USC Marshall MSMKT Case Competition",
    organization: "Team Mosaic Consulting",
    description:
      "Placed 2nd for a data-driven marketing strategy addressing institutional communication challenges.",
  },
];

export default function Resume() {
  const handleDownload = () => {
    window.open(RESUME_PDF_PATH, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16 md:pb-20 grainy-subtle texture-fabric" style={{ backgroundColor: theme.colors.background.main }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header - Sequential */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 fade-in-sequential">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4" style={{ color: theme.colors.text.primary }}>
            Resume
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-7 md:mb-8 px-2 leading-relaxed" style={{ color: theme.colors.text.secondary }}>
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

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div 
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2"
            style={{ backgroundColor: theme.colors.palette.whiskeySour }}
          />
          
          {/* Mobile Timeline Line */}
          <div 
            className="md:hidden absolute left-4 sm:left-6 md:left-8 top-0 bottom-0 w-0.5"
            style={{ backgroundColor: theme.colors.palette.whiskeySour }}
          />

          {/* Timeline Items - Sequential */}
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
                  {/* Timeline Node */}
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

                  {/* Content Card */}
                  <div 
                    className={`flex-1 ml-4 sm:ml-5 md:ml-0 transition-all duration-300 active:scale-[0.98] ${
                      isEven 
                        ? "md:pr-8 lg:pr-12 md:mr-auto md:max-w-[calc(50%-60px)]" 
                        : "md:pl-8 lg:pl-12 md:ml-auto md:max-w-[calc(50%-60px)]"
                    }`}
                  >
                    <Card 
                      className="rounded-xl sm:rounded-2xl border-2 hover:shadow-xl transition-all duration-300 grainy-subtle"
                      style={{
                        backgroundColor: theme.colors.background.card,
                        borderColor: `${theme.colors.palette.burntCoffee}20`,
                        boxShadow: theme.shadows.lg,
                      }}
                    >
                      <CardContent className="p-4 sm:p-5 md:p-6">
                        {/* Date Badge */}
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

                        {/* Title */}
                        <h3 className="text-lg sm:text-xl font-semibold mb-1.5 sm:mb-2 leading-tight" style={{ color: theme.colors.text.primary }}>
                          {item.title}
                        </h3>

                        {/* Organization */}
                        <p className="font-medium mb-2 sm:mb-3 text-sm sm:text-base" style={{ color: theme.colors.text.secondary }}>
                          {item.organization}
                        </p>

                        {/* Description */}
                        <p className="mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed" style={{ color: theme.colors.text.secondary }}>
                          {item.description}
                        </p>

                        {/* Highlights */}
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

        {/* Bottom CTA - Sequential */}
        <div className="text-center mt-20 fade-in-sequential">
          <Card 
            className="rounded-2xl grainy-subtle"
            style={{
              backgroundColor: theme.colors.background.card,
              boxShadow: theme.shadows.lg,
              border: `2px solid ${theme.colors.palette.burntCoffee}20`,
            }}
          >
            <CardContent className="p-8">
              <h2 className="text-2xl mb-4" style={{ color: theme.colors.text.primary }}>
                Prefer a traditional resume?
              </h2>
              <p className="mb-6" style={{ color: theme.colors.text.secondary }}>
                Download the full PDF version for easy sharing.
              </p>
              <Button 
                size="lg" 
                onClick={handleDownload}
                className="transition-all duration-300 hover:scale-105"
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
                <Download className="mr-2 h-5 w-5" />
                Download PDF Resume
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

    </div>
  );
}
