import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { theme } from "@/config/theme";

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
      "Analyzed Patagonia’s sustainability-led brand strategy and long-term brand equity tradeoffs.",
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
  { id: "all", label: "Selected Work" },
  { id: "strategy", label: "Brand Strategy" },
  { id: "analytics", label: "Analytics & Insights" },
  { id: "experience", label: "Professional Experience" },
  { id: "personal", label: "Personal" },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory>("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16 md:pb-20 grainy-subtle texture-canvas" style={{ backgroundColor: theme.colors.background.main }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-center fade-in-sequential" style={{ color: theme.colors.text.primary }}>
          Portfolio
        </h1>

        {/* Filters */}
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

        {/* Grid - Sequential */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {filteredProjects.map((project, i) => {
            return (
            <Card 
              key={i} 
              className="overflow-hidden rounded-xl sm:rounded-2xl transition-all duration-300 active:scale-[0.98] hover:-translate-y-2 hover:shadow-2xl fade-in-sequential grainy-subtle"
              style={{
                backgroundColor: theme.colors.background.card,
                borderColor: `${theme.colors.palette.burntCoffee}15`,
                boxShadow: theme.shadows.lg,
              }}
            >
              <div className="h-40 sm:h-48 overflow-hidden relative group">
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
                        e.currentTarget.style.boxShadow = 'none';
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
            );
          })}
        </div>
      </div>
    </div>
  );
}
