import { vars } from "nativewind";

// Helper to resolve token value (handling both flat and W3C token leaf formats)
function resolveTokenValue(token: any): string {
  if (token && typeof token === "object") {
    if (token.value !== undefined) return token.value;
    if (token.$value !== undefined) return token.$value;
  }
  return String(token);
}

export function parseTheme(tokens: any) {
  const lightVars: Record<string, string> = {};
  const darkVars: Record<string, string> = {};

  // 1. Parse Light Mode Colors
  if (tokens?.colors?.light) {
    Object.entries(tokens.colors.light).forEach(([category, levels]: [string, any]) => {
      if (levels && typeof levels === "object") {
        Object.entries(levels).forEach(([level, token]) => {
          lightVars[`--color-${category}-${level}`] = resolveTokenValue(token);
        });
      }
    });
  }

  // 2. Parse Dark Mode Colors
  if (tokens?.colors?.dark) {
    Object.entries(tokens.colors.dark).forEach(([category, levels]: [string, any]) => {
      if (levels && typeof levels === "object") {
        Object.entries(levels).forEach(([level, token]) => {
          darkVars[`--color-${category}-${level}`] = resolveTokenValue(token);
        });
      }
    });
  }

  // 2b. Auto-generate fallback semantic background tokens if missing
  const semanticBgFallbacks: Record<string, string> = {
    "error": "--color-error-50",
    "warning": "--color-warning-50",
    "success": "--color-success-50",
    "info": "--color-info-50",
    "muted": "--color-background-50",
  };

  Object.entries(semanticBgFallbacks).forEach(([key, fallbackVar]) => {
    const cssVar = `--color-background-${key}`;
    // Light mode fallback
    if (!lightVars[cssVar] && lightVars[fallbackVar]) {
      lightVars[cssVar] = lightVars[fallbackVar];
    }
    // Dark mode fallback: use the dark 900-level equivalent (inverted)
    const darkFallbackVar = fallbackVar.replace("-50", "-900");
    if (!darkVars[cssVar] && darkVars[darkFallbackVar]) {
      darkVars[cssVar] = darkVars[darkFallbackVar];
    }
  });

  // 3. Parse Typography (Fonts & Font Sizes)
  if (tokens?.typography) {
    // Fonts
    if (tokens.typography.fonts) {
      Object.entries(tokens.typography.fonts).forEach(([key, token]) => {
        const val = resolveTokenValue(token);
        lightVars[`--font-${key}`] = val;
        darkVars[`--font-${key}`] = val;
      });
    }
    // Font Sizes
    if (tokens.typography.fontSizes) {
      Object.entries(tokens.typography.fontSizes).forEach(([key, token]) => {
        const val = resolveTokenValue(token);
        lightVars[`--font-size-${key}`] = val;
        darkVars[`--font-size-${key}`] = val;
      });
    }
  }

  // 4. Parse Radii
  if (tokens?.radii) {
    Object.entries(tokens.radii).forEach(([key, token]) => {
      const val = resolveTokenValue(token);
      lightVars[`--radius-${key}`] = val;
      darkVars[`--radius-${key}`] = val;
    });
  }

  return {
    light: vars(lightVars),
    dark: vars(darkVars),
    rawLight: lightVars,
    rawDark: darkVars,
  };
}
