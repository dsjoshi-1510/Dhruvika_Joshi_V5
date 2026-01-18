import { useEffect, useState } from "react";
import { Home, User, Briefcase, FileText } from "lucide-react";
import { theme } from "@/config/theme";

const sections = [
  { id: "home", name: "Home", icon: Home },
  { id: "about", name: "About", icon: User },
  { id: "portfolio", name: "Portfolio", icon: Briefcase },
  { id: "resume", name: "Resume", icon: FileText },
];

export default function SectionTracker() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "portfolio", "resume"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      // Calculate scroll progress (0 to 1)
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(Math.max(window.scrollY / documentHeight, 0), 1);
      setScrollProgress(progress);

      // Find active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition + 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3 sm:gap-4">
      {/* Progress Line */}
      <div
        className="w-1 h-32 sm:h-40 rounded-full relative overflow-hidden"
        style={{
          backgroundColor: `${theme.colors.palette.burntCoffee}15`,
        }}
      >
        <div
          className="absolute top-0 left-0 w-full rounded-full transition-all duration-300 ease-out"
          style={{
            height: `${scrollProgress * 100}%`,
            backgroundColor: theme.colors.palette.whiskeySour,
            boxShadow: `0 0 10px ${theme.colors.palette.whiskeySour}40`,
          }}
        />
      </div>

      {/* Section Dots/Icons */}
      <div className="flex flex-col gap-3 sm:gap-4 items-center">
        {sections.map((section, index) => {
          const isActive = activeSection === section.id;
          const Icon = section.icon;
          
          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group relative transition-all duration-300 active:scale-90 touch-manipulation"
              aria-label={`Go to ${section.name} section`}
            >
              {/* Active indicator ring */}
              {isActive && (
                <div
                  className="absolute inset-0 rounded-full animate-ping opacity-30"
                  style={{
                    backgroundColor: theme.colors.palette.whiskeySour,
                    width: "calc(100% + 12px)",
                    height: "calc(100% + 12px)",
                    top: "-6px",
                    left: "-6px",
                  }}
                />
              )}

              {/* Dot/Icon Container */}
              <div
                className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isActive ? "scale-110" : "scale-100"
                }`}
                style={{
                  backgroundColor: isActive
                    ? theme.colors.palette.whiskeySour
                    : theme.colors.background.card,
                  border: `2px solid ${
                    isActive
                      ? theme.colors.palette.whiskeySour
                      : `${theme.colors.palette.burntCoffee}30`
                  }`,
                  boxShadow: isActive
                    ? `0 4px 12px ${theme.colors.palette.whiskeySour}50`
                    : theme.shadows.sm,
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = theme.colors.palette.whiskeySour;
                    e.currentTarget.style.borderColor = theme.colors.palette.whiskeySour;
                    e.currentTarget.style.boxShadow = `0 4px 12px ${theme.colors.palette.whiskeySour}40`;
                    const icon = e.currentTarget.querySelector("svg");
                    if (icon) {
                      icon.style.color = theme.colors.text.white;
                    }
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = theme.colors.background.card;
                    e.currentTarget.style.borderColor = `${theme.colors.palette.burntCoffee}30`;
                    e.currentTarget.style.boxShadow = theme.shadows.sm;
                    const icon = e.currentTarget.querySelector("svg");
                    if (icon) {
                      icon.style.color = theme.colors.text.secondary;
                    }
                  }
                }}
              >
                <Icon
                  className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 ${
                    isActive ? "scale-110" : "scale-100"
                  }`}
                  style={{
                    color: isActive
                      ? theme.colors.text.white
                      : theme.colors.text.secondary,
                  }}
                />
              </div>

              {/* Tooltip on hover */}
              <div
                className={`absolute right-full mr-3 px-2 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-all duration-300 pointer-events-none opacity-0 group-hover:opacity-100 ${
                  isActive ? "scale-100" : "scale-95"
                }`}
                style={{
                  backgroundColor: theme.colors.background.card,
                  color: theme.colors.text.primary,
                  border: `1px solid ${theme.colors.palette.burntCoffee}20`,
                  boxShadow: theme.shadows.md,
                }}
              >
                {section.name}
                <div
                  className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent"
                  style={{
                    borderLeftColor: theme.colors.background.card,
                  }}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Bottom Progress Line */}
      <div
        className="w-1 h-32 sm:h-40 rounded-full relative overflow-hidden"
        style={{
          backgroundColor: `${theme.colors.palette.burntCoffee}15`,
        }}
      >
        <div
          className="absolute bottom-0 left-0 w-full rounded-full transition-all duration-300 ease-out"
          style={{
            height: `${(1 - scrollProgress) * 100}%`,
            backgroundColor: theme.colors.palette.whiskeySour,
            boxShadow: `0 0 10px ${theme.colors.palette.whiskeySour}40`,
          }}
        />
      </div>
    </div>
  );
}
