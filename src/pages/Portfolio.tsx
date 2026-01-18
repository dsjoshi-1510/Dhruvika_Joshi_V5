import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type ProjectCategory = "all" | "strategy" | "analytics" | "experience";

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
];

const categories = [
  { id: "all", label: "Selected Work" },
  { id: "strategy", label: "Brand Strategy" },
  { id: "analytics", label: "Analytics & Insights" },
  { id: "experience", label: "Professional Experience" },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory>("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#F5F0EB]">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-[#4A3F37] mb-12 text-center">
          Portfolio
        </h1>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as ProjectCategory)}
              variant={activeCategory === cat.id ? "default" : "outline"}
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <Card key={i} className="overflow-hidden bg-white rounded-2xl">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-[#6B5D52] mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx}>{tag}</Badge>
                  ))}
                </div>

                {project.pdfUrl && (
                  <Button size="sm" asChild>
                    <a href={project.pdfUrl} target="_blank">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View PDF
                    </a>
                  </Button>
                )}

                {project.repoUrl && (
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.repoUrl} target="_blank">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
