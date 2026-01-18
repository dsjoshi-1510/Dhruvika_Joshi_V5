# Theme Configuration Guide

## 🎨 One-Place Theme Customization

All appearance settings for the website are centralized in **`src/config/theme.ts`**. This is the **ONE PLACE** where you can customize colors, spacing, shadows, and other design elements.

## Quick Start

1. **Open** `src/config/theme.ts`
2. **Modify** any values you want to change
3. **Save** - changes will automatically apply across the entire site!

## What You Can Customize

### Colors
- **Primary Colors**: Main brand colors (darkest to lightest)
- **Background Colors**: Page and card backgrounds
- **Text Colors**: All text colors throughout the site
- **Accent Colors**: Highlights and special elements
- **Gradients**: Pre-defined gradient combinations

### Visual Effects
- **Shadows**: Depth and elevation (sm, md, lg, xl, 2xl)
- **Border Radius**: Roundness of corners
- **Blur Effects**: Background blur amounts
- **Transitions**: Animation speeds and easing

### Component Styles
- **Cards**: Background, borders, shadows, padding
- **Buttons**: Colors, shadows, hover effects
- **Navigation**: Background, blur, borders
- **Hero Section**: Gradient colors and blur effects

## Example: Changing the Color Scheme

Want to change from warm neutrals to cool blues? Just update the colors in `theme.ts`:

```typescript
colors: {
  primary: {
    darkest: "#1a365d",    // Deep blue
    dark: "#2c5282",       // Medium blue
    medium: "#3182ce",     // Blue
    light: "#63b3ed",      // Light blue
    lightest: "#90cdf4",   // Sky blue
  },
  // ... update other colors too
}
```

## Example: Adjusting Shadows

Want more dramatic depth? Increase shadow values:

```typescript
shadows: {
  lg: "0 20px 30px -5px rgba(74, 63, 55, 0.3)",  // More intense
  xl: "0 30px 40px -5px rgba(74, 63, 55, 0.4)",  // Even more dramatic
}
```

## Example: Changing Button Styles

Want different button colors? Update the button component styles:

```typescript
components: {
  button: {
    primary: {
      background: "#your-color",
      text: "#your-text-color",
      // ...
    }
  }
}
```

## Tips

- **Start Small**: Change one thing at a time to see the effect
- **Use Color Tools**: Use online color pickers to find hex values
- **Test Responsively**: Check how changes look on mobile and desktop
- **Keep Contrast**: Ensure text remains readable on backgrounds

## Need Help?

- All color values use hex format: `#RRGGBB`
- Shadow values use CSS box-shadow syntax
- Opacity values are 0-1 (0 = transparent, 1 = opaque)

Happy customizing! 🎨
