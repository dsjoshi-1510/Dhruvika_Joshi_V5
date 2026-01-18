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
    <div className="min-h-screen pt-24 pb-20 bg-[#F5F0EB]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-[#4A3F37] mb-4">
            Resume
          </h1>
          <p className="text-lg text-[#6B5D52] mb-8">
            Experience, education, and leadership — presented clearly.
          </p>

          <Button size="lg" onClick={handleDownload}>
            <Download className="mr-2 h-5 w-5" />
            Download PDF Resume
          </Button>
        </div>

        {/* Ladder Timeline */}
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <Card key={index} className="bg-white rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <item.icon className="h-6 w-6 text-[#8B7566]" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 text-sm text-[#6B5D52] mb-1">
                      <Calendar className="h-4 w-4" />
                      <span>{item.date}</span>
                      {item.location && (
                        <>
                          <MapPin className="h-4 w-4 ml-2" />
                          <span>{item.location}</span>
                        </>
                      )}
                    </div>

                    <h3 className="text-xl font-semibold text-[#4A3F37]">
                      {item.title}
                    </h3>
                    <p className="text-[#6B5D52] font-medium">
                      {item.organization}
                    </p>

                    <p className="text-[#6B5D52] mt-2">
                      {item.description}
                    </p>

                    {item.highlights && (
                      <>
                        <Separator className="my-4" />
                        <ul className="space-y-2 text-sm text-[#4A3F37]">
                          {item.highlights.map((h, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="mt-1 text-[#8B7566]">•</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="bg-white rounded-2xl">
            <CardContent className="p-8">
              <h2 className="text-2xl text-[#4A3F37] mb-4">
                Prefer a traditional resume?
              </h2>
              <p className="text-[#6B5D52] mb-6">
                Download the full PDF version for easy sharing.
              </p>
              <Button size="lg" onClick={handleDownload}>
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
