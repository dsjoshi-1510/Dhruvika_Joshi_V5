/**
 * ============================================
 * 🎨 CENTRALIZED THEME CONFIGURATION 🎨
 * ============================================
 * 
 * ⭐ THIS IS THE ONE PLACE TO CUSTOMIZE THE ENTIRE SITE ⭐
 * 
 * Want to change colors? Update the `colors` section below.
 * Want to adjust shadows? Modify the `shadows` section.
 * Want different spacing? Edit the `spacing` section.
 * 
 * All components automatically use these values - no need to hunt
 * through multiple files! Just change values here and save.
 * 
 * See THEME_GUIDE.md for detailed instructions and examples.
 * ============================================
 */

export const theme = {
  // ============================================
  // COLOR PALETTE
  // ============================================
  colors: {
    // Strict color palette - consistent, minimal, sophisticated
    palette: {
      champagne: "#EACEAA",      // Light warm - backgrounds, cards
      honeyGarlic: "#85431E",   // Medium-dark - buttons, primary actions
      whiskeySour: "#D39858",    // Medium warm - accents, highlights
      burntCoffee: "#34150F",    // Dark - text primary, borders
      balsamico: "#150C0C",      // Almost black - text emphasis, strong elements
    },
    
    // Primary brand colors (using palette)
    primary: {
      darkest: "#150C0C",        // Balsamico
      dark: "#34150F",           // Burnt Coffee
      medium: "#85431E",         // Honey Garlic
      light: "#D39858",          // Whiskey Sour
      lightest: "#EACEAA",       // Champagne
    },
    
    // Background colors (using palette)
    background: {
      main: "#EACEAA",           // Champagne - main background
      card: "#FFFFFF",           // Pure white - cards
      muted: "#F5F0EB",          // Very light champagne tint
      overlay: "rgba(234, 206, 170, 0.95)", // Champagne overlay
    },
    
    // Text colors (using palette)
    text: {
      primary: "#34150F",        // Burnt Coffee - main text
      secondary: "#85431E",      // Honey Garlic - secondary text
      muted: "#D39858",          // Whiskey Sour - muted text
      light: "#EACEAA",          // Champagne - light text
      white: "#FFFFFF",          // White - on dark backgrounds
      dark: "#150C0C",           // Balsamico - emphasis
    },
    
    // Accent colors (using palette - consistent)
    accent: {
      primary: "#D39858",        // Whiskey Sour - all accents
      secondary: "#85431E",      // Honey Garlic - secondary accents
      highlight: "#EACEAA",     // Champagne - highlights
    },
    
    // Gradient definitions (using palette)
    gradients: {
      hero: {
        from: "#EACEAA",         // Champagne
        via: "#D39858",         // Whiskey Sour
        to: "#85431E",          // Honey Garlic
        stops: ["0%", "50%", "100%"],
        colors: ["#EACEAA", "#D39858", "#85431E"],
      },
      card: {
        from: "#FFFFFF",
        to: "#F5F0EB",
      },
      text: {
        from: "#34150F",
        to: "#85431E",
      },
    },
  },

  // ============================================
  // SPACING & LAYOUT
  // ============================================
  spacing: {
    section: {
      padding: {
        mobile: "4rem 1.5rem",
        desktop: "6rem 2rem",
      },
      gap: "3rem",
    },
    card: {
      padding: "1.5rem",
      gap: "1rem",
    },
    button: {
      padding: {
        sm: "0.5rem 1rem",
        md: "0.75rem 1.5rem",
        lg: "1rem 2rem",
      },
    },
  },

  // ============================================
  // TYPOGRAPHY
  // ============================================
  typography: {
    fontFamily: {
      sans: ["Inter", "system-ui", "sans-serif"],
      display: ["Inter", "system-ui", "sans-serif"],
    },
    sizes: {
      hero: {
        mobile: "3rem",
        desktop: "4.5rem",
      },
      h1: {
        mobile: "2.5rem",
        desktop: "3.5rem",
      },
      h2: {
        mobile: "2rem",
        desktop: "2.5rem",
      },
      h3: {
        mobile: "1.5rem",
        desktop: "2rem",
      },
      body: {
        base: "1rem",
        large: "1.125rem",
        small: "0.875rem",
      },
    },
    weights: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      black: 900,
    },
  },

  // ============================================
  // SHADOWS & DEPTH
  // ============================================
  shadows: {
    sm: "0 1px 2px 0 rgba(74, 63, 55, 0.05)",
    md: "0 4px 6px -1px rgba(74, 63, 55, 0.1), 0 2px 4px -1px rgba(74, 63, 55, 0.06)",
    lg: "0 10px 15px -3px rgba(74, 63, 55, 0.1), 0 4px 6px -2px rgba(74, 63, 55, 0.05)",
    xl: "0 20px 25px -5px rgba(74, 63, 55, 0.1), 0 10px 10px -5px rgba(74, 63, 55, 0.04)",
    "2xl": "0 25px 50px -12px rgba(74, 63, 55, 0.25)",
    inner: "inset 0 2px 4px 0 rgba(74, 63, 55, 0.06)",
    glow: "0 0 20px rgba(212, 196, 176, 0.3)",
    "glow-lg": "0 0 40px rgba(212, 196, 176, 0.4)",
  },

  // ============================================
  // BORDER RADIUS
  // ============================================
  borderRadius: {
    none: "0",
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    "2xl": "1.25rem",
    "3xl": "1.5rem",
    full: "9999px",
  },

  // ============================================
  // EFFECTS & ANIMATIONS
  // ============================================
  effects: {
    blur: {
      sm: "4px",
      md: "8px",
      lg: "12px",
      xl: "16px",
      "2xl": "24px",
      "3xl": "40px",
    },
    backdropBlur: {
      sm: "4px",
      md: "8px",
      lg: "12px",
      xl: "16px",
      "2xl": "24px",
    },
    transitions: {
      fast: "150ms cubic-bezier(0.4, 0, 0.2, 1)",
      normal: "300ms cubic-bezier(0.4, 0, 0.2, 1)",
      slow: "500ms cubic-bezier(0.4, 0, 0.2, 1)",
    },
    hover: {
      scale: 1.05,
      shadow: "xl",
    },
  },

  // ============================================
  // TEXTURE PACKS
  // ============================================
  textures: {
    // Choose which texture pack to use: "fine-grain", "coarse-grain", "paper", "canvas", "fabric", "organic", "mesh"
    active: "fine-grain", // Change this to switch texture packs
    
    // Fine Grain - subtle, modern
    "fine-grain": {
      baseFrequency: "0.9",
      numOctaves: 4,
      opacity: 0.35,
      size: "200px",
      animationSpeed: 20,
    },
    
    // Coarse Grain - more visible, vintage feel
    "coarse-grain": {
      baseFrequency: "0.6",
      numOctaves: 3,
      opacity: 0.45,
      size: "150px",
      animationSpeed: 25,
    },
    
    // Paper Texture - soft, organic
    "paper": {
      baseFrequency: "1.2",
      numOctaves: 5,
      opacity: 0.3,
      size: "300px",
      animationSpeed: 30,
    },
    
    // Canvas Texture - artistic, textured
    "canvas": {
      baseFrequency: "0.5",
      numOctaves: 6,
      opacity: 0.4,
      size: "250px",
      animationSpeed: 22,
    },
    
    // Fabric Texture - woven, soft
    "fabric": {
      baseFrequency: "0.8",
      numOctaves: 4,
      opacity: 0.35,
      size: "180px",
      animationSpeed: 18,
    },
    
    // Organic Grain - natural, flowing
    "organic": {
      baseFrequency: "0.7",
      numOctaves: 5,
      opacity: 0.4,
      size: "220px",
      animationSpeed: 28,
    },
    
    // Mesh Texture - geometric, modern
    "mesh": {
      baseFrequency: "1.5",
      numOctaves: 3,
      opacity: 0.25,
      size: "100px",
      animationSpeed: 15,
    },
  },

  // ============================================
  // COMPONENT-SPECIFIC STYLES
  // ============================================
  components: {
    card: {
      background: "#FFFFFF",
      border: "1px solid rgba(52, 21, 15, 0.1)", // Burnt Coffee
      borderRadius: "1.25rem",
      shadow: "lg",
      hoverShadow: "2xl",
      padding: "1.5rem",
    },
    button: {
      primary: {
        background: "#85431E",        // Honey Garlic - ALL buttons
        text: "#FFFFFF",
        hoverBackground: "#D39858",   // Whiskey Sour on hover
        shadow: "xl",
        hoverShadow: "2xl",
      },
      secondary: {
        background: "#EACEAA",       // Champagne - secondary buttons
        text: "#34150F",              // Burnt Coffee text
        hoverBackground: "#D39858",   // Whiskey Sour on hover
      },
    },
    navigation: {
      background: "rgba(234, 206, 170, 0.95)", // Champagne
      backdropBlur: "md",
      border: "rgba(52, 21, 15, 0.1)", // Burnt Coffee
      shadow: "sm",
    },
    hero: {
      backgroundGradient: "linear-gradient(135deg, #EACEAA 0%, #D39858 50%, #85431E 100%)",
      overlayOpacity: 0.3,
      blur: "80px",
    },
  },
} as const;

// Helper function to get CSS variable values
export const getThemeValue = (path: string): string => {
  const keys = path.split(".");
  let value: any = theme;
  
  for (const key of keys) {
    value = value[key];
    if (value === undefined) return "";
  }
  
  return typeof value === "string" ? value : "";
};

// Export individual sections for easy access
export const colors = theme.colors;
export const spacing = theme.spacing;
export const typography = theme.typography;
export const shadows = theme.shadows;
export const borderRadius = theme.borderRadius;
export const effects = theme.effects;
export const components = theme.components;
