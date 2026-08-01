"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const navItems = [
  { num: "01", label: "About", href: "#about" },
  { num: "02", label: "Experience", href: "#experience" },
  { num: "03", label: "Work", href: "#projects" },
  { num: "04", label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
          <Link href="#hero" aria-label="Home">
            <div className="logo-box">
              <span>ET</span>
            </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="nav-menu" id="nav-menu-desktop">
          <ol className="nav-links">
            {navItems.map((item) => (
              <li key={item.num}>
                <Link href={item.href}>
                  <span className="nav-num">{item.num}.</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ol>
          <div className="nav-resume-btn" style={{ marginLeft: "15px" }}>
            <a
              href="mailto:eyobtesfaye2002@gmail.com"
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get In Touch
            </a>
          </div>
        </nav>

        {/* Mobile Nav (Sheet) */}
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger className="hamburger" aria-label="Toggle menu">
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="border-l border-[var(--lightest-navy)] bg-[var(--light-navy)] p-0"
            style={{
              backgroundColor: "var(--light-navy)",
              width: "min(75vw, 400px)",
            }}
          >
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <nav className="flex h-full flex-col items-center justify-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.num}
                  href={item.href}
                  onClick={() => setSheetOpen(false)}
                  className="text-center"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--fz-lg)",
                    color: "var(--lightest-slate)",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      color: "var(--green)",
                      fontSize: "var(--fz-sm)",
                      marginBottom: "5px",
                    }}
                  >
                    {item.num}.
                  </span>
                  {item.label}
                </Link>
              ))}
              <a
                href="mailto:eyobtesfaye2002@gmail.com"
                className="btn btn-outline"
                style={{ marginTop: "20px" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get In Touch
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
