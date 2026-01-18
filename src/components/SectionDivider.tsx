import { theme } from "@/config/theme";

interface SectionDividerProps {
  variant?: "wave" | "curve" | "gradient" | "dots";
  flip?: boolean;
  height?: "sm" | "md" | "lg";
}

export default function SectionDivider({ 
  variant = "wave", 
  flip = false,
  height = "md" 
}: SectionDividerProps) {
  const heightClasses = {
    sm: "h-16 sm:h-20",
    md: "h-24 sm:h-32 md:h-40",
    lg: "h-32 sm:h-40 md:h-48",
  };

  if (variant === "wave") {
    return (
      <div className={`relative w-full ${heightClasses[height]} overflow-hidden`}>
        <svg
          className={`absolute top-0 left-0 w-full h-full ${flip ? "rotate-180" : ""}`}
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,60 Q360,20 720,60 T1440,60 L1440,120 L0,120 Z"
            fill={theme.colors.background.main}
            style={{ transition: "fill 0.3s ease" }}
          />
          <path
            d="M0,80 Q360,40 720,80 T1440,80 L1440,120 L0,120 Z"
            fill={theme.colors.background.main}
            opacity="0.8"
            style={{ transition: "fill 0.3s ease" }}
          />
        </svg>
        {/* Decorative gradient overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `linear-gradient(180deg, transparent 0%, ${theme.colors.palette.champagne}20 50%, transparent 100%)`,
          }}
        />
      </div>
    );
  }

  if (variant === "curve") {
    return (
      <div className={`relative w-full ${heightClasses[height]} overflow-hidden`}>
        <svg
          className={`absolute top-0 left-0 w-full h-full ${flip ? "rotate-180" : ""}`}
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,120 Q360,0 720,60 T1440,60 L1440,120 Z"
            fill={theme.colors.background.main}
            style={{ transition: "fill 0.3s ease" }}
          />
        </svg>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(ellipse at center, ${theme.colors.palette.whiskeySour}30 0%, transparent 70%)`,
          }}
        />
      </div>
    );
  }

  if (variant === "gradient") {
    return (
      <div
        className={`relative w-full ${heightClasses[height]}`}
        style={{
          background: `linear-gradient(180deg, transparent 0%, ${theme.colors.palette.champagne}15 30%, ${theme.colors.palette.whiskeySour}10 60%, transparent 100%)`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1 h-16 rounded-full opacity-30" style={{ backgroundColor: theme.colors.palette.whiskeySour }} />
        </div>
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className={`relative w-full ${heightClasses[height]} flex items-center justify-center overflow-hidden`}>
        <div className="flex gap-2 sm:gap-4 z-10">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full opacity-40 animate-pulse animate-float"
              style={{
                backgroundColor: theme.colors.palette.whiskeySour,
                animationDelay: `${i * 0.2}s`,
                animationDuration: "2s",
              }}
            />
          ))}
        </div>
        {/* Floating decorative circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="absolute w-32 h-32 rounded-full opacity-5 animate-float"
            style={{
              backgroundColor: theme.colors.palette.champagne,
              left: "10%",
              animationDuration: "8s",
            }}
          />
          <div
            className="absolute w-24 h-24 rounded-full opacity-5 animate-float-reverse"
            style={{
              backgroundColor: theme.colors.palette.whiskeySour,
              right: "15%",
              animationDuration: "10s",
              animationDelay: "1s",
            }}
          />
        </div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${theme.colors.palette.champagne} 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>
    );
  }

  return null;
}
