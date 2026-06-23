# gamalearn-ui — Theme & Color System Walkthrough

This document outlines how the design token system, Figma theme integration, and colors are configured and parsed in the codebase. It serves as a guide for UI developers who will use or extend the `gamalearn-ui` library.

---

## 🏗️ Architecture Overview

The project uses **gluestack-ui** components and **Tailwind CSS / NativeWind** for styling. The theme system is structured inside the shared `gamalearn-ui/` workspace so that the native (Expo) showcase app and the component library share the exact same design tokens.

### Key Files and Directories

```
gamalearn-ui/
├── apps/
│   └── expo-app/                 # Showcase/demonstration React Native application
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

The custom colors, fonts, and border-radii sourced from the Figma designs are stored in [theme-tokens.json](file:///Users/yehualashetabebe/Documents/Projects/Personal/Nextjs/gluestack-ui-starter-kits/gamalearn-ui/packages/components/ui/gluestack-ui-provider/theme-tokens.json). 

The JSON schema supports both light and dark mode mappings:
* `colors.light`: Light mode scales (50–950) for `primary`, `secondary`, `tertiary`, `background`, etc.
* `colors.dark`: Dark mode scales mapping.
* `radii`: Figma-defined corner radii (`SM=4px`, `MD=6px`, `LG=8px`, `XL=10px`, `PILL=20px`).
* `typography`: Defines the `fonts` (Inter) and `fontSizes`.

---

## ⚙️ Theme Parser (`theme-parser.ts`)

The [theme-parser.ts](file:///Users/yehualashetabebe/Documents/Projects/Personal/Nextjs/gluestack-ui-starter-kits/gamalearn-ui/packages/components/ui/gluestack-ui-provider/theme-parser.ts) processes the raw design tokens JSON and translates it into standard CSS variables (`--color-...`, `--radius-...`, `--font-...`).

### Parser Key Features:

1. **Flexible Values**: Supports both standard strings and W3C token structures (handling `$value` or `value` object properties).
2. **Auto-Inversion**: Automatically creates CSS variables for both light and dark modes.
3. **Background Fallback Mappings**: If semantic background tokens (`background-error`, `background-info`, etc.) are missing, it derives them dynamically:
   * **Light Mode Fallback**: Derives from the `50` level of the color scale (e.g. `bg-background-error` maps to `error-50`).
   * **Dark Mode Fallback**: Derives from the `900` level of the color scale (e.g. `bg-background-error` maps to `error-900`).

---

## 🖥️ Web Variable Injection (`index.web.tsx`)

On web platforms, [index.web.tsx](file:///Users/yehualashetabebe/Documents/Projects/Personal/Nextjs/gluestack-ui-starter-kits/gamalearn-ui/packages/components/ui/gluestack-ui-provider/index.web.tsx) runs the parser and takes the resulting variable map. It inserts it as a stylesheet directly into the DOM:
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
   Open [theme-tokens.json](file:///Users/yehualashetabebe/Documents/Projects/Personal/Nextjs/gluestack-ui-starter-kits/gamalearn-ui/packages/components/ui/gluestack-ui-provider/theme-tokens.json) and modify the hex values. For example, to change the main primary brand color:
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
   The dev server compiles changes instantly, updating colors across all active components.

---

## 📦 How to Extract the Theme Engine to Another Repository

To use this design token theme system in a separate React / React Native codebase, follow these steps:

### Step 1: Copy the Theme Provider Package
Copy the folder containing the theme provider, tokens, parser, and config:
* **Source Folder**: `gamalearn-ui/packages/components/ui/gluestack-ui-provider/`
* **Destination Folder**: Place it in your target project's components/UI directory (e.g., `components/ui/gluestack-ui-provider/`).

### Step 2: Map Radii and Fonts in Tailwind Configuration
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

### Step 3: Start Designing
All standard components will now automatically read theme values from CSS variables:
* Colors: `bg-primary-500`, `text-typography-900`, `border-border-200`
* Radii: `rounded-md` (resolves to `var(--radius-md)` which defaults to `6px`)
* Fonts: `font-heading` (resolves to `var(--font-heading)` which defaults to `Inter`)
