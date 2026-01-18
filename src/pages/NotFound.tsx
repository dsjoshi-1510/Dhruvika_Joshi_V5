import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { theme } from "@/config/theme";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn("404: Attempted access to non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div 
      className="flex min-h-screen items-center justify-center px-4"
      style={{ backgroundColor: theme.colors.background.main }}
    >
      <div className="text-center max-w-md">
        <h1 className="mb-4 text-5xl font-bold" style={{ color: theme.colors.text.primary }}>
          404
        </h1>
        <p className="mb-6 text-lg" style={{ color: theme.colors.text.secondary }}>
          Sorry, the page you're looking for doesn't exist.
        </p>

        <Button 
          asChild 
          size="lg"
          className="transition-all duration-300 hover:scale-105"
          style={{
            backgroundColor: theme.colors.primary.darkest,
            color: theme.colors.text.white,
            boxShadow: theme.shadows.xl,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = theme.shadows["2xl"];
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = theme.shadows.xl;
          }}
        >
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
