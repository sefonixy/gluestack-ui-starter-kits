"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

type ThemeContextType = {
  mode: "light" | "dark";
  setMode: (mode: "light" | "dark") => void;
  toggleMode: () => void;
  customTheme: any | undefined;
  setCustomTheme: (theme: any | undefined) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  mode: "light",
  setMode: () => {},
  toggleMode: () => {},
  customTheme: undefined,
  setCustomTheme: () => {},
});

export function useThemeContext() {
  return useContext(ThemeContext);
}

export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [customTheme, setCustomTheme] = useState<any | undefined>(undefined);

  const toggleMode = useCallback(() => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  return (
    <ThemeContext.Provider
      value={{ mode, setMode, toggleMode, customTheme, setCustomTheme }}
    >
      <GluestackUIProvider mode={mode} customTheme={customTheme}>
        {children}
      </GluestackUIProvider>
    </ThemeContext.Provider>
  );
}
