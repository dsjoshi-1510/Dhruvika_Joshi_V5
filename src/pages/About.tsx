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
    <div className="min-h-screen pt-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="mb-12 animate-fade-in">About Me</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start animate-fade-in">

          {/* Childhood Photo */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/childhood.jpg"
              alt="A childhood photo of Dhruvika"
              className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-2xl shadow-md ring-2 ring-primary/20"
            />
          </div>


          {/* ---------------------- Bio Section ---------------------- */}
          <section className="py-16 md:py-24 bg-background">
            <div className="section-container">
              <div className="max-w-4xl mx-auto">
                <h1 className="mb-8 animate-fade-in">About Me</h1>

                <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground animate-fade-in">
                  <p>I turn ideas into momentum.</p>

                  <p>
                    Whether I am scaling partnerships, shaping brand narratives, or
                    solving complex problems through data and creativity, I am drawn
                    to work that feels alive. I enjoy building things that move with
                    purpose, resonate deeply, and create real impact. My approach to
                    brand strategy is rooted in cohesion. I focus on how a brand
                    thinks, speaks, and shows up across every touchpoint,
                    translating insight and analytics into clear positioning,
                    resonant storytelling, and meaningful consumer experiences.
                  </p>

                  <p>
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
            </div>
          </section>

          {/* ---------------------- Highlights Section ---------------------- */}
          <section className="py-16 md:py-24 bg-muted/30">
            <div className="section-container">
              <h2 className="mb-12 text-center">What I Bring To The Table</h2>

              <div className="grid md:grid-cols-3 gap-8">
                {highlights.map((highlight, index) => (
                  <Card
                    key={index}
                    className="border-2 hover:border-primary smooth-transition animate-fade-in"
                  >
                    <CardContent className="p-8 text-center">
                      <div className="mb-4 inline-flex p-4 rounded-full bg-primary/10">
                        <highlight.icon className="h-8 w-8 text-primary" />
                      </div>

                      <h3 className="mb-3 text-xl">{highlight.title}</h3>
                      <p className="text-muted-foreground">
                        {highlight.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* ---------------------- Skills Section ---------------------- */}
          <section className="py-16 md:py-24 bg-background">
            <div className="section-container">
              <h2 className="mb-12 text-center">Skills & Expertise</h2>

              <div className="max-w-4xl mx-auto">
                <div className="flex flex-wrap gap-3 justify-center">
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-base py-2 px-4 hover:bg-primary hover:text-primary-foreground smooth-transition cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ---------------------- Achievements Section ---------------------- */}
          <section className="py-16 md:py-24 bg-muted/30">
            <div className="section-container">
              <h2 className="mb-12 text-center">Achievements</h2>

              <div className="max-w-3xl mx-auto space-y-6">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="animate-fade-in">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <achievement.icon className="h-6 w-6 text-primary" />
                      </div>

                      <p className="text-lg">{achievement.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* ---------------------- Contact Section ---------------------- */}
          <section id="contact" className="py-16 md:py-24 bg-background">
            <div className="section-container">
              <h2 className="mb-12 text-center">Get In Touch</h2>

              <div className="max-w-2xl mx-auto">
                <Card className="border-2">
                  <CardContent className="p-8">
                    <div className="space-y-6">

                      {/* Email */}
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>

                        <div>
                          <p className="font-medium">Email</p>
                          <a
                            href="mailto:dsjoshi@usc.edu"
                            className="text-muted-foreground hover:text-primary smooth-transition"
                          >
                            dsjoshi@usc.edu
                          </a>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>

                        <div>
                          <p className="font-medium">Phone</p>
                          <a
                            href="tel:+14259002409"
                            className="text-muted-foreground hover:text-primary smooth-transition"
                          >
                            +1 (425) 900-2409
                          </a>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>

                        <div>
                          <p className="font-medium">Location</p>
                          <p className="text-muted-foreground">
                            Los Angeles, California
                          </p>
                        </div>
                      </div>

                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

        </div>
        );
};

        export default About;
