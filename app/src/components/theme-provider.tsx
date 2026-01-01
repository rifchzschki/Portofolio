import { useSnowfallStore } from "@/stores/snowfall-store";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const initSnow = useSnowfallStore((s) => s.initFromTheme);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;

    const system = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    const initial = saved ?? system;

    setThemeState(initial);
    initSnow(initial);
    console.log("rerender", initial);
    document.documentElement.setAttribute("data-theme", initial);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if (!saved) {
        const systemTheme = media.matches ? "dark" : "light";
        setThemeState(systemTheme);
        console.log("tema sistem", systemTheme);
        document.documentElement.setAttribute("data-theme", systemTheme);
      }
    };

    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, [theme]);

  function setTheme(next: Theme) {
    setThemeState(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
