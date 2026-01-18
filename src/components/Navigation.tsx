import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Resume", path: "/resume" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl md:text-2xl font-bold text-[#4A3F37]"
          >
            Dhruvika <span className="text-muted-foreground">Joshi</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors ${
                  location.pathname === link.path
                    ? "text-[#4A3F37] font-medium"
                    : "text-muted-foreground hover:text-[#4A3F37]"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Button size="sm" asChild>
              <a href="mailto:dsjoshi@usc.edu">Contact</a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden p-2"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="md:hidden py-4 border-t bg-white/95 backdrop-blur-md">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-2 ${
                    location.pathname === link.path
                      ? "text-[#4A3F37] font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <Button size="sm" asChild className="mt-2">
                <a href="mailto:dsjoshi@usc.edu">Contact</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
