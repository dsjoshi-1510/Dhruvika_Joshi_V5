import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { theme } from "@/config/theme";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Portfolio", id: "portfolio" },
  { name: "Resume", id: "resume" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Scroll spy - detect which section is in view
      const sections = navLinks.map(link => document.getElementById(link.id)).filter(Boolean) as HTMLElement[];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // Initial check
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? theme.components.navigation.background : "transparent",
        backdropFilter: scrolled ? `blur(${theme.effects.backdropBlur.md})` : "none",
        borderBottom: scrolled ? `1px solid ${theme.components.navigation.border}` : "none",
        boxShadow: scrolled ? theme.shadows.sm : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-lg sm:text-xl md:text-2xl font-bold transition-colors active:opacity-70 touch-manipulation text-left"
            style={{ color: theme.colors.text.primary }}
          >
            Dhruvika <span style={{ color: theme.colors.text.muted }}>Joshi</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="transition-colors duration-300 relative text-sm lg:text-base"
                style={{
                  color: activeSection === link.id
                    ? theme.colors.text.primary
                    : theme.colors.text.muted,
                  fontWeight: activeSection === link.id ? 600 : 400,
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== link.id) {
                    e.currentTarget.style.color = theme.colors.text.primary;
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== link.id) {
                    e.currentTarget.style.color = theme.colors.text.muted;
                  }
                }}
              >
                {link.name}
                {activeSection === link.id && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ backgroundColor: theme.colors.palette.whiskeySour }}
                  />
                )}
              </button>
            ))}

            <Button 
              size="sm" 
              asChild
              className="transition-all duration-300 active:scale-95 touch-manipulation min-h-[36px]"
              style={{
                backgroundColor: theme.components.button.primary.background,
                color: theme.colors.text.white,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.components.button.primary.hoverBackground;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = theme.components.button.primary.background;
              }}
            >
              <a href="mailto:dsjoshi@usc.edu">Contact</a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden p-2 transition-colors active:opacity-70 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle navigation"
            style={{ color: theme.colors.text.primary }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div 
            className="md:hidden py-4 border-t"
            style={{
              backgroundColor: theme.components.navigation.background,
              backdropFilter: `blur(${theme.effects.backdropBlur.md})`,
              borderTopColor: theme.components.navigation.border,
            }}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="py-3 px-2 transition-colors active:opacity-70 touch-manipulation text-base min-h-[44px] flex items-center text-left"
                  style={{
                    color: activeSection === link.id
                      ? theme.colors.text.primary
                      : theme.colors.text.muted,
                    fontWeight: activeSection === link.id ? 600 : 400,
                    backgroundColor: activeSection === link.id
                      ? `${theme.colors.palette.champagne}20`
                      : 'transparent',
                  }}
                >
                  {link.name}
                </button>
              ))}

              <Button 
                size="sm" 
                asChild 
                className="mt-2 transition-all duration-300 active:scale-95 touch-manipulation w-full min-h-[44px]"
                style={{
                  backgroundColor: theme.components.button.primary.background,
                  color: theme.colors.text.white,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme.components.button.primary.hoverBackground;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = theme.components.button.primary.background;
                }}
              >
                <a href="mailto:dsjoshi@usc.edu" className="flex items-center justify-center">Contact</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
