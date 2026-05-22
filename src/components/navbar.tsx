"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/site";
import { Icon } from "./icons";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-[backdrop-filter,background-color,box-shadow] duration-300"
      style={{
        background: scrolled
          ? "color-mix(in srgb, var(--bg) 88%, transparent)"
          : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(18px)" : "none",
        boxShadow: scrolled ? "0 1px 0 var(--border-color)" : "none",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-[color-mix(in_srgb,var(--text)_6%,transparent)]"
              style={{ color: "var(--text)" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/pricing" className="btn-primary hidden md:inline-flex">
            <Icon.Sparkles size={18} />
            ابدأ مجاناً
          </Link>
          <button
            type="button"
            aria-label="القائمة"
            className="theme-toggle md:hidden"
            onClick={() => setOpen((v) => !v)}
            style={{
              width: 38, height: 38, borderRadius: 999,
              border: "1px solid var(--border-color)", background: "var(--card-bg)",
              color: "var(--text)", display: "inline-flex", alignItems: "center", justifyContent: "center",
            }}
          >
            {open ? <Icon.Cross size={18} /> : <Icon.Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden" style={{ borderTop: "1px solid var(--border-color)", background: "var(--card-bg)" }}>
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-3">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium"
                style={{ color: "var(--text)" }}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/pricing" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full">
              <Icon.Sparkles size={18} />
              ابدأ مجاناً
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
