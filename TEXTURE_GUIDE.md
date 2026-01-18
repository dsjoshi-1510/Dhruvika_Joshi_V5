# Texture Pack Guide

## 🎨 Available Texture Packs

The site now supports multiple texture packs that you can easily switch between. All textures are animated and use your color palette.

### How to Switch Textures

Open `src/config/theme.ts` and change the `textures.active` value:

```typescript
textures: {
  active: "fine-grain", // Change this to any texture pack below
  // ...
}
```

### Available Texture Packs

1. **fine-grain** (Default)
   - Subtle, modern grain
   - Best for: Clean, professional look
   - Opacity: 0.35
   - Speed: 20s

2. **coarse-grain**
   - More visible, vintage feel
   - Best for: Retro, bold aesthetic
   - Opacity: 0.45
   - Speed: 25s

3. **paper**
   - Soft, organic paper texture
   - Best for: Elegant, refined look
   - Opacity: 0.3
   - Speed: 30s

4. **canvas**
   - Artistic, textured canvas feel
   - Best for: Creative, artistic sites
   - Opacity: 0.4
   - Speed: 22s

5. **fabric**
   - Woven, soft fabric texture
   - Best for: Warm, cozy aesthetic
   - Opacity: 0.35
   - Speed: 18s

6. **organic**
   - Natural, flowing grain
   - Best for: Natural, organic feel
   - Opacity: 0.4
   - Speed: 28s

7. **mesh**
   - Geometric, modern mesh
   - Best for: Tech, modern aesthetic
   - Opacity: 0.25
   - Speed: 15s

### Using Textures in Components

To apply textures to specific elements, use these classes:

- `.grainy-texture` - Full texture (default fine-grain)
- `.grainy-subtle` - Lighter texture
- `.grainy-strong` - Stronger texture
- `.texture-coarse-grain` - Coarse grain pack
- `.texture-paper` - Paper texture pack
- `.texture-canvas` - Canvas texture pack
- `.texture-fabric` - Fabric texture pack
- `.texture-organic` - Organic texture pack
- `.texture-mesh` - Mesh texture pack

### Example Usage

```tsx
// Apply fine grain (default)
<div className="grainy-texture">

// Apply paper texture
<div className="grainy-texture texture-paper">

// Apply subtle canvas texture
<div className="grainy-subtle texture-canvas">
```

### Customizing Textures

You can customize texture properties in `src/config/theme.ts`:

- `baseFrequency` - Controls grain size (lower = larger grain)
- `numOctaves` - Controls detail level (higher = more detail)
- `opacity` - Overall visibility
- `size` - Background size
- `animationSpeed` - Animation duration in seconds

All textures automatically use your color palette (Champagne, Whiskey Sour, Honey Garlic) for seamless integration.
