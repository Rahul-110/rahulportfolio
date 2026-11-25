import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "@phosphor-icons/react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme
    const theme = document.documentElement.getAttribute("data-theme");
    setIsDark(theme === "dark");

    // Optional: observe changes if theme changes externally
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "data-theme") {
          const current = document.documentElement.getAttribute("data-theme");
          setIsDark(current === "dark");
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative flex items-center w-16 h-8 p-1 rounded-full bg-[--color-surface] border border-[--color-border] cursor-pointer transition-colors hover:border-[--color-accent] shadow-inner"
    >
      {/* Icons background tracking */}
      <div className="absolute inset-0 flex items-center justify-between px-2 text-xs text-[--color-text-secondary] pointer-events-none">
        <Sun size={14} weight={!isDark ? "fill" : "regular"} />
        <Moon size={14} weight={isDark ? "fill" : "regular"} />
      </div>

      {/* Sliding Pill Indicator */}
      <motion.div
        className="relative z-10 w-6 h-6 rounded-full bg-[--color-text] text-[--color-background] flex items-center justify-center shadow-md"
        animate={{ x: isDark ? 32 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {isDark ? (
          <Moon size={12} weight="fill" className="text-[--color-background]" />
        ) : (
          <Sun size={12} weight="fill" className="text-[--color-background]" />
        )}
      </motion.div>
    </button>
  );
}
