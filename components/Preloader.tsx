"use client";

import { useState, useEffect } from "react";

const STATUS_MESSAGES = [
  "INITIALIZING SYSTEM ARCHITECTURE...",
  "LOADING MOBILE & BACKEND MODULES...",
  "COMPILING ALGORITHMIC PIPELINES...",
  "WELCOME TO EYOB'S PORTFOLIO",
];

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // 4-second progress counter (4000ms / 100 steps = 40ms interval)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 38);

    // Status message switcher every 1 second
    const statusInterval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % STATUS_MESSAGES.length);
    }, 1000);

    // Fade out trigger at 4 seconds (4000ms)
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 4000);

    // Hide completely from DOM at 4.6 seconds
    const hideTimer = setTimeout(() => {
      setHidden(true);
    }, 4600);

    return () => {
      clearInterval(interval);
      clearInterval(statusInterval);
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`preloader-overlay ${fadeOut ? "fade-out" : ""}`}
      aria-label="Loading animation"
    >
      <div className="preloader-content">
        {/* Hexagon ET Logo SVG animation */}
        <div className="preloader-logo-wrapper">
          <svg
            width="100"
            height="115"
            viewBox="0 0 100 115"
            className="preloader-hex-svg"
          >
            <polygon
              points="50 3, 97 30, 97 85, 50 112, 3 85, 3 30"
              fill="none"
              stroke="#64ffda"
              strokeWidth="4"
              className="hex-path"
            />
            <text
              x="50"
              y="68"
              fill="#64ffda"
              fontSize="34"
              fontFamily="var(--font-mono)"
              fontWeight="bold"
              textAnchor="middle"
            >
              ET
            </text>
          </svg>
        </div>

        {/* Dynamic Status Text */}
        <div className="preloader-status-text">
          <span>{STATUS_MESSAGES[statusIndex]}</span>
        </div>

        {/* Progress Bar Container */}
        <div className="preloader-bar-outer">
          <div
            className="preloader-bar-inner"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Counter */}
        <div className="preloader-counter">{progress}%</div>
      </div>
    </div>
  );
}
