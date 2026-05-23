"use client";

import { useEffect, useState } from "react";
import { Icon } from "./icons";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Light is the default; only honor 'dark' if the user explicitly chose it.
    const stored = (typeof window !== "undefined" && (localStorage.getItem("theme") as Theme | null)) || null;
    const initial: Theme = stored === "dark" ? "dark" : "light";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن"}
      className="theme-toggle"
      suppressHydrationWarning
    >
      <span className="icon-swap" data-theme={mounted ? theme : "light"}>
        <span className="icon-sun"><Icon.Sun size={18} /></span>
        <span className="icon-moon"><Icon.Moon size={18} /></span>
      </span>
      <style jsx>{`
        .theme-toggle {
          width: 38px;
          height: 38px;
          border-radius: 999px;
          border: 1px solid var(--border-color);
          background: var(--card-bg);
          color: var(--text);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform var(--dur-micro) var(--ease-spring), border-color var(--dur-micro) var(--ease-spring), background-color var(--dur-micro) var(--ease-spring);
          will-change: transform;
        }
        .theme-toggle:hover {
          transform: translate3d(0, -1px, 0);
          border-color: color-mix(in srgb, var(--orange) 40%, var(--border-color));
        }
        .icon-swap {
          position: relative;
          width: 20px;
          height: 20px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .icon-sun, .icon-moon {
          position: absolute;
          inset: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s var(--ease-spring), opacity 0.3s var(--ease-spring);
          will-change: transform, opacity;
        }
        .icon-swap[data-theme="light"] .icon-sun { opacity: 1; transform: rotate(0deg) scale(1); }
        .icon-swap[data-theme="light"] .icon-moon { opacity: 0; transform: rotate(-90deg) scale(0.7); }
        .icon-swap[data-theme="dark"] .icon-sun { opacity: 0; transform: rotate(90deg) scale(0.7); }
        .icon-swap[data-theme="dark"] .icon-moon { opacity: 1; transform: rotate(0deg) scale(1); }
      `}</style>
    </button>
  );
}
