# Custom Texture Guide

## 🎨 How to Add Your Own Texture Images

This guide will show you how to download and integrate custom texture images into your portfolio site.

---

## 📥 Step 1: Download Texture Images

### Free Texture Resources:

1. **Unsplash** (https://unsplash.com/s/photos/texture)
   - Search: "paper texture", "fabric texture", "grain texture"
   - Free, high-quality images
   - Download as JPG or PNG

2. **Pexels** (https://www.pexels.com/search/texture/)
   - Free stock photos
   - Good variety of textures

3. **Pixabay** (https://pixabay.com/images/search/texture/)
   - Free textures
   - No attribution required

4. **Texture.com** (https://www.textures.com/)
   - Free account available (limited downloads)
   - Professional textures

5. **Freepik** (https://www.freepik.com/search?format=search&query=texture)
   - Free with attribution
   - Great selection

### Recommended Texture Types:
- **Paper textures** (old paper, parchment, notebook)
- **Fabric textures** (canvas, linen, burlap)
- **Grain textures** (film grain, noise, static)
- **Surface textures** (concrete, wood, stone)
- **Abstract textures** (watercolor, paint, brush strokes)

### Image Requirements:
- **Format**: JPG or PNG
- **Size**: 500x500px to 2000x2000px (square works best)
- **File size**: Under 500KB (optimize if needed)
- **Style**: Seamless/tileable textures work best

---

## 📁 Step 2: Add Texture Files to Your Project

1. **Create a textures folder** (if it doesn't exist):
   ```
   public/textures/
   ```

2. **Copy your texture images** into this folder:
   ```
   public/textures/my-paper-texture.jpg
   public/textures/my-fabric-texture.png
   public/textures/my-grain-texture.jpg
   ```

3. **Name them clearly**:
   - Use lowercase
   - Use hyphens instead of spaces
   - Example: `vintage-paper.jpg`, `linen-fabric.png`

---

## 🔧 Step 3: Add Texture to CSS

Open `src/index.css` and add your custom texture class:

### Option A: Single Image Texture (Simple)

```css
/* Add this in the @layer utilities section, after the existing textures */

/* Custom Texture - My Paper Texture */
.texture-my-paper::before {
  content: '';
  position: absolute;
  inset: -50%;
  background-image: url('/textures/my-paper-texture.jpg');
  background-size: 400px 400px; /* Adjust size as needed */
  opacity: 0.4; /* Adjust opacity: 0.1 (subtle) to 0.8 (strong) */
  pointer-events: none;
  mix-blend-mode: overlay; /* Try: overlay, multiply, soft-light, screen */
  z-index: 1;
  animation: grainMove 20s linear infinite;
}

.texture-my-paper::after {
  content: '';
  position: absolute;
  inset: -50%;
  background-image: url('/textures/my-paper-texture.jpg');
  background-size: 200px 200px; /* Different size for layered effect */
  opacity: 0.2;
  pointer-events: none;
  mix-blend-mode: multiply;
  z-index: 1;
  animation: grainMove 15s linear infinite reverse;
}
```

### Option B: Layered Texture with Gradients (Advanced)

```css
/* Custom Texture - My Fabric Texture */
.texture-my-fabric::before {
  content: '';
  position: absolute;
  inset: -50%;
  background: 
    /* Color gradients matching your palette */
    radial-gradient(circle at 20% 30%, rgba(234, 206, 170, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(211, 152, 88, 0.12) 0%, transparent 50%),
    /* Your texture image */
    url('/textures/my-fabric-texture.jpg');
  background-size: 300px 300px, 400px 400px, 250px 250px;
  opacity: 0.5; /* Make it more visible */
  pointer-events: none;
  mix-blend-mode: overlay;
  z-index: 1;
  animation: grainMove 25s linear infinite;
}

.texture-my-fabric::after {
  content: '';
  position: absolute;
  inset: -50%;
  background-image: url('/textures/my-fabric-texture.jpg');
  background-size: 120px 120px;
  opacity: 0.3;
  pointer-events: none;
  mix-blend-mode: multiply;
  z-index: 1;
  animation: grainMove 18s linear infinite reverse;
}
```

---

## 🎛️ Step 4: Adjust Texture Properties

### Opacity (Visibility)
```css
opacity: 0.1; /* Very subtle */
opacity: 0.3; /* Subtle */
opacity: 0.5; /* Medium (recommended) */
opacity: 0.7; /* Strong */
opacity: 0.9; /* Very strong */
```

### Background Size (Texture Scale)
```css
background-size: 100px 100px;  /* Large, visible texture */
background-size: 200px 200px;  /* Medium texture */
background-size: 400px 400px;  /* Small, fine texture */
background-size: 800px 800px;  /* Very fine texture */
```

### Blend Modes (How texture interacts with background)
```css
mix-blend-mode: overlay;    /* Recommended - balanced */
mix-blend-mode: multiply;   /* Darker, vintage feel */
mix-blend-mode: screen;     /* Lighter, softer */
mix-blend-mode: soft-light; /* Subtle, elegant */
mix-blend-mode: hard-light; /* Strong, dramatic */
mix-blend-mode: color-burn;  /* Dark, intense */
```

### Animation Speed
```css
animation: grainMove 10s linear infinite;  /* Fast */
animation: grainMove 20s linear infinite;  /* Medium */
animation: grainMove 30s linear infinite;  /* Slow */
animation: grainMove 40s linear infinite;   /* Very slow */
```

---

## 📝 Step 5: Use Your Custom Texture

### In React Components:

```tsx
// Apply to a page
<div className="min-h-screen grainy-texture texture-my-paper">
  {/* Your content */}
</div>

// Apply to a card
<Card className="grainy-texture texture-my-fabric">
  {/* Card content */}
</Card>
```

### Available Classes:
- `.grainy-texture` - Base class (required)
- `.texture-my-paper` - Your custom texture
- `.texture-my-fabric` - Another custom texture
- `.grainy-subtle` - Lighter version (optional)

---

## 🎨 Step 6: Register in Theme Config (Optional)

If you want to track your textures in `src/config/theme.ts`:

```typescript
textures: {
  active: "my-paper", // Your custom texture
  
  // Add your custom texture config
  "my-paper": {
    image: "/textures/my-paper-texture.jpg",
    opacity: 0.5,
    size: "400px",
    blendMode: "overlay",
    animationSpeed: 20,
  },
  
  "my-fabric": {
    image: "/textures/my-fabric-texture.jpg",
    opacity: 0.4,
    size: "250px",
    blendMode: "multiply",
    animationSpeed: 25,
  },
}
```

---

## 🔍 Troubleshooting

### Texture Not Showing?
1. **Check file path**: Make sure path starts with `/textures/` (not `./textures/`)
2. **Check file name**: Case-sensitive, use lowercase
3. **Increase opacity**: Try `opacity: 0.8` to see if it's just too subtle
4. **Check z-index**: Make sure texture has `z-index: 1` and content has higher z-index
5. **Check browser console**: Look for 404 errors

### Texture Too Strong?
- Lower opacity: `opacity: 0.2`
- Use softer blend mode: `mix-blend-mode: soft-light`
- Increase background size: `background-size: 800px 800px`

### Texture Too Subtle?
- Increase opacity: `opacity: 0.7`
- Use stronger blend mode: `mix-blend-mode: multiply`
- Decrease background size: `background-size: 100px 100px`

### Texture Not Tiling Properly?
- Use seamless/tileable textures
- Adjust background-size to match texture pattern
- Try `background-repeat: repeat` if needed

---

## 💡 Pro Tips

1. **Test Different Blend Modes**: Each texture looks different with different blend modes
2. **Layer Multiple Textures**: Use both `::before` and `::after` for depth
3. **Match Your Color Palette**: Add color gradients that match your theme
4. **Optimize Images**: Compress textures to keep site fast
5. **Use Seamless Textures**: They tile better and look more professional

---

## 📚 Example: Complete Custom Texture

Here's a complete example adding a vintage paper texture:

**1. Download**: `vintage-paper.jpg` → Save to `public/textures/`

**2. Add to CSS** (`src/index.css`):
```css
.texture-vintage-paper::before {
  content: '';
  position: absolute;
  inset: -50%;
  background: 
    radial-gradient(circle at 20% 30%, rgba(234, 206, 170, 0.1) 0%, transparent 50%),
    url('/textures/vintage-paper.jpg');
  background-size: 300px 300px, 400px 400px;
  opacity: 0.6;
  pointer-events: none;
  mix-blend-mode: multiply;
  z-index: 1;
  animation: grainMove 30s linear infinite;
}

.texture-vintage-paper::after {
  content: '';
  position: absolute;
  inset: -50%;
  background-image: url('/textures/vintage-paper.jpg');
  background-size: 150px 150px;
  opacity: 0.3;
  pointer-events: none;
  mix-blend-mode: overlay;
  z-index: 1;
  animation: grainMove 20s linear infinite reverse;
}
```

**3. Use in component**:
```tsx
<div className="min-h-screen grainy-texture texture-vintage-paper">
  {/* Your content */}
</div>
```

---

## 🎯 Quick Reference

| Property | Common Values | Effect |
|----------|--------------|--------|
| `opacity` | 0.1 - 0.9 | Controls visibility |
| `background-size` | 100px - 800px | Controls texture scale |
| `mix-blend-mode` | overlay, multiply, screen | Controls how texture blends |
| `animation` | 10s - 40s | Controls movement speed |

---

Happy texturing! 🎨
