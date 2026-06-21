# Checkpoint V2.0 — Theme & Color System Walkthrough

This document outlines how the design token system, Figma theme integration, and colors are configured and parsed in the codebase. It serves as a guide for UI developers who will take over the repository.

---

## 🏗️ Architecture Overview

The project uses **gluestack-ui** components and **Tailwind CSS / NativeWind** for styling. The theme system is structured inside the shared `universal/` workspace so that both web (Next.js) and native (Expo) apps can share the same design tokens.

### Key Files and Directories

```
universal/
├── apps/
│   └── next/
│       └── app/
│           └── theme-playground/
│               ├── page.tsx               # 16-section interactive component gallery
│               └── checkpoint-icons.tsx   # 9 custom SVG icons (Scenario, hint, calc, etc.)
│
└── packages/
    └── components/
        └── ui/
            └── gluestack-ui-provider/
                ├── theme-tokens.json      # Raw Figma design tokens (colors, radii, fonts)
                ├── theme-parser.ts        # Parser resolving tokens to CSS variables
                ├── config.ts              # Merges parsed custom tokens with default styles
                └── index.web.tsx          # Web provider injecting CSS variables to DOM
```

---

## 🎨 Design Tokens (`theme-tokens.json`)

The custom colors, fonts, and border-radii sourced from the Figma designs are stored in [theme-tokens.json](file:///Users/yehualashetabebe/Documents/Projects/Personal/Nextjs/gluestack-ui-starter-kits/universal/packages/components/ui/gluestack-ui-provider/theme-tokens.json). 

The JSON schema supports both light and dark mode mappings:
* `colors.light`: Light mode scales (50–950) for `primary`, `secondary`, `tertiary`, `background`, etc.
* `colors.dark`: Dark mode scales mapping.
* `radii`: Figma-defined corner radii (`SM=4px`, `MD=6px`, `LG=8px`, `XL=10px`, `PILL=20px`).
* `typography`: Defines the `fonts` (Inter) and `fontSizes`.

---

## ⚙️ Theme Parser (`theme-parser.ts`)

The [theme-parser.ts](file:///Users/yehualashetabebe/Documents/Projects/Personal/Nextjs/gluestack-ui-starter-kits/universal/packages/components/ui/gluestack-ui-provider/theme-parser.ts) processes the raw design tokens JSON and translates it into standard CSS variables (`--color-...`, `--radius-...`, `--font-...`).

### Parser Key Features:

1. **Flexible Values**: Supports both standard strings and W3C token structures (handling `$value` or `value` object properties).
2. **Auto-Inversion**: Automatically creates CSS variables for both light and dark modes.
3. **Background Fallback Mappings**: If semantic background tokens (`background-error`, `background-info`, etc.) are missing, it derives them dynamically:
   * **Light Mode Fallback**: Derives from the `50` level of the color scale (e.g. `bg-background-error` maps to `error-50`).
   * **Dark Mode Fallback**: Derives from the `900` level of the color scale (e.g. `bg-background-error` maps to `error-900`).

---

## 🖥️ Web Variable Injection (`index.web.tsx`)

On web, [index.web.tsx](file:///Users/yehualashetabebe/Documents/Projects/Personal/Nextjs/gluestack-ui-starter-kits/universal/packages/components/ui/gluestack-ui-provider/index.web.tsx) runs the parser and takes the resulting variable map. It inserts it as a stylesheet directly into the DOM:
```css
:root {
  --color-primary-500: #...;
  --radius-md: 6px;
  --font-heading: Inter;
}
```
This forces all Tailwind CSS styles using native theme mappings (like `bg-primary-500`, `rounded-md`) to instantly load the Figma token colors.

---

## 🔄 How to Change Theme Colors or Radii

To update the system with new colors or design requirements:

1. **Update `theme-tokens.json`**:
   Open [theme-tokens.json](file:///Users/yehualashetabebe/Documents/Projects/Personal/Nextjs/gluestack-ui-starter-kits/universal/packages/components/ui/gluestack-ui-provider/theme-tokens.json) and modify the hex values. For example, to change the main primary brand color:
   ```json
   "colors": {
     "light": {
       "primary": {
         "500": "#your-new-hex"
       }
     }
   }
   ```
2. **Adjust Border Radii**:
   Modify the values under `"radii"` inside `theme-tokens.json`.
3. **Save and Reload**:
   The dev server compiles changes instantly, and the theme playground will update in real-time.

---

## 🔍 Theme Playground

The [Theme Playground](file:///Users/yehualashetabebe/Documents/Projects/Personal/Nextjs/gluestack-ui-starter-kits/universal/apps/next/app/theme-playground/page.tsx) allows developers to visually verify the theme:
* **Interactive Mode Toggles**: Buttons in the top header toggle light/dark modes and switch dynamically between the **Figma Theme** and the **Default Starter Kit Theme**.
* **Zero External Colors**: The playground uses strict token classes (e.g. `text-typography-900`, `bg-background-50`, `border-border-200`) to guarantee that every element respects the active theme state.
* **Scroll-Safe Layout**: Uses a nested `ScrollView` wrapper to ensure clean vertical scrolling starting from the top header on both desktop and mobile viewports.

---

## 📦 How to Extract the Theme Engine to Another Repository

To use this design token theme system in a separate React / React Native / Next.js codebase, follow these steps:

### Step 1: Copy the Theme Provider Package
Copy the folder containing the theme provider, tokens, parser, and config:
* **Source Folder**: `universal/packages/components/ui/gluestack-ui-provider/`
* **Destination Folder**: Place it in your target project's components/UI directory (e.g., `components/ui/gluestack-ui-provider/`).

### Step 2: Copy the Theme Context
Copy the context provider that manages switching modes and custom tokens:
* **Source File**: `universal/apps/next/app/ThemeContext.tsx`
* **Destination File**: Place it in your app's layout or state directory.

### Step 3: Register Context & Provider
Wrap your root layout with `ThemeContextProvider` so that settings propagate:
```tsx
import { ThemeContextProvider } from "./ThemeContext";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeContextProvider>
          {children}
        </ThemeContextProvider>
      </body>
    </html>
  );
}
```

### Step 4: Map Radii and Fonts in Tailwind Configuration
To ensure Tailwind maps the parsed theme tokens correctly, add CSS variables bindings to your new project's `tailwind.config.js`:
```js
module.exports = {
  theme: {
    extend: {
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': 'var(--radius-3xl)',
        'full': 'var(--radius-full)',
      },
      fontFamily: {
        sans: ['var(--font-body)', 'Inter', 'sans-serif'],
        heading: ['var(--font-heading)', 'Inter', 'sans-serif'],
      }
    }
  }
}
```

### Step 5: Start Designing
All standard components will now automatically read theme values from CSS variables:
* Colors: `bg-primary-500`, `text-typography-900`, `border-border-200`
* Radii: `rounded-md` (will resolve to `var(--radius-md)` which defaults to `6px`)
* Fonts: `font-heading` (will resolve to `var(--font-heading)` which defaults to `Inter`)

