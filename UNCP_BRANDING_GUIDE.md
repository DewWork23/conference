# UNCP Branding Guide for Web Development

This document provides implementation guidelines for applying UNC Pembroke (UNCP) branding to web projects.

## Color Palette

### Primary Colors
```
Gold:        #947843  (Primary brand color)
Honeysuckle: #DDB672  (Secondary/accent gold)
Railway:     #3E5C73  (Primary blue)
Red-Tailed:  #C30A09  (Emergency/alert red)
```

### Usage Guidelines
- **Gold (#947843)**: Use for primary headings, borders, buttons, and key accents
- **Honeysuckle (#DDB672)**: Use for hover states, gradients, and subtle accents
- **Railway (#3E5C73)**: Use for secondary headings, subtext, and alternate buttons
- **Red-Tailed (#C30A09)**: Reserve for emergency information and crisis services only

### Color Combinations
- Gold with Railway Blue: Professional, authoritative
- Gold with white backgrounds: Clean, modern
- Honeysuckle hover effects: Subtle, elegant transitions

## Typography

### Font Family
**Poppins** (via Google Fonts)

```typescript
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});
```

### Font Weight Hierarchy
- **900 (Black)**: Main page headings (h1)
- **700 (Bold)**: Section headings (h2), button text, navigation
- **600 (SemiBold)**: Subheadings (h3), emphasized text
- **400 (Regular)**: Body text, general content
- **300 (Light)**: Supporting text, captions

### Typography Examples

#### Main Heading
```jsx
<h1 className="text-5xl md:text-6xl font-black text-[#947843] mb-4 leading-tight tracking-tight">
  Page Title
</h1>
```

#### Section Heading
```jsx
<h2 className="text-2xl font-bold text-[#3E5C73] mb-6 tracking-wide">
  Section Title
</h2>
```

#### Body Text
```jsx
<p className="text-lg font-normal text-gray-800 leading-relaxed">
  Body content goes here.
</p>
```

## Design Patterns

### Buttons

#### Primary Button (Gold)
```jsx
<button className="bg-[#947843] text-white rounded-md shadow-lg px-6 py-3 text-base font-semibold hover:bg-[#3E5C73] transition-colors duration-300 tracking-wide border-2 border-[#947843]">
  Button Text
</button>
```

#### Secondary Button (Railway Blue)
```jsx
<button className="bg-[#3E5C73] text-white rounded-md shadow-lg px-6 py-3 text-base font-semibold hover:bg-[#947843] transition-colors duration-300 tracking-wide border-2 border-[#947843]">
  Button Text
</button>
```

#### Navigation Buttons
```jsx
<Link
  href="/page"
  className="px-4 py-2.5 rounded-lg font-bold transition-all shadow-sm border-2 border-[#947843] bg-white text-gray-700 hover:bg-blue-50 hover:border-[#DDB672] hover:shadow-md"
>
  Nav Item
</Link>
```

### Cards with Left Border Accent
```jsx
<div className="p-6 bg-gray-50 rounded-md shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-[#947843] hover:border-[#3E5C73]">
  <h3 className="font-bold text-lg text-[#3E5C73] tracking-wide">Card Title</h3>
  <p className="text-sm font-normal text-gray-700">Card content</p>
</div>
```

### Headers with Gold Border Accent
```jsx
<header className="bg-white border-b-4 border-[#947843] py-12">
  <div className="max-w-7xl mx-auto px-6">
    {/* Header content */}
  </div>
</header>
```

## Layout Guidelines

### Background Colors
- **Primary background**: White (`bg-white`)
- **Secondary background**: Light gray (`bg-gray-50`)
- **Card backgrounds**: Light gray (`bg-gray-50`) or white (`bg-white`)

### Spacing
- Use consistent padding: `px-6 py-8` for main content areas
- Card padding: `p-6`
- Button padding: `px-6 py-3`
- Section margins: `mb-8` to `mb-10`

### Shadows
- Cards: `shadow-md` default, `shadow-xl` on hover
- Buttons: `shadow-lg`
- Headers: `shadow-sm`

## Component Patterns

### Emergency/Crisis Banner
```jsx
<div className="bg-[#C30A09] text-white px-6 py-4 rounded-lg inline-block">
  <p className="text-lg font-semibold mb-3">⚠️ In case of emergency</p>
  {/* Emergency buttons */}
</div>
```

### Notice Banner
```jsx
<div className="bg-[#3E5C73] text-white py-3 text-center text-sm font-semibold shadow-md">
  Notice content
</div>
```

### Category Grid
```jsx
<div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
  {/* Grid items with border-l-4 border-[#947843] */}
</div>
```

## Accessibility

### Color Contrast
- Ensure gold text (#947843) on white backgrounds meets WCAG AA standards
- Use Railway Blue (#3E5C73) for better contrast on light backgrounds
- White text on Gold/Railway/Red-Tailed backgrounds provides excellent contrast

### Focus States
```jsx
className="focus:ring-2 focus:ring-[#947843] focus:ring-offset-2 focus:outline-none"
```

## Tailwind CSS Configuration

If using Tailwind, add UNCP colors to your config:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'uncp-gold': '#947843',
        'uncp-honeysuckle': '#DDB672',
        'uncp-railway': '#3E5C73',
        'uncp-red': '#C30A09',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
}
```

Then use as: `bg-uncp-gold`, `text-uncp-railway`, etc.

## Best Practices

1. **Consistency**: Use gold borders consistently across buttons and cards
2. **Hierarchy**: Maintain clear visual hierarchy with font weights
3. **Contrast**: Pair gold with Railway Blue for balance
4. **Spacing**: Use generous padding and margins for breathing room
5. **Transitions**: Add smooth transitions (300ms) for interactive elements
6. **Typography**: Use `tracking-wide` on headings, `tracking-tight` on large text
7. **Shadows**: Layer shadows (sm → md → lg → xl) to create depth

## Example Prompt for AI Assistants

```
Please apply UNCP branding to this project using these guidelines:

Colors:
- Gold #947843 (primary buttons, headings, borders)
- Honeysuckle #DDB672 (hover states, accents)
- Railway #3E5C73 (secondary headings, alternate buttons)
- Red-Tailed #C30A09 (emergency/crisis only)

Typography:
- Use Poppins font from Google Fonts
- Font weights: 900 (Black) for h1, 700 (Bold) for h2/buttons, 600 (SemiBold) for h3, 400 (Regular) for body, 300 (Light) for captions
- Add tracking-wide to headings, tracking-tight to large display text

Design patterns:
- All buttons should have 2px gold (#947843) borders
- Cards should have left border accent (border-l-4) in gold
- Headers should have bottom gold border (border-b-4)
- Use white or light gray backgrounds
- Smooth 300ms transitions on interactive elements
- Shadow hierarchy: sm (headers) → md (cards) → lg (buttons) → xl (hover)

Reference the Robeson County Community Resources branding test page at robeson.help/branding-test for visual examples.
```

## Reference Implementation

See the live example at: **https://robeson.help/branding-test**

Source code: `/robeson-app/app/branding-test/page.tsx` and `/robeson-app/components/Navigation.tsx`

---

**Last Updated**: 2025-11-03
**Based on**: UNCP Style Guide 2025
