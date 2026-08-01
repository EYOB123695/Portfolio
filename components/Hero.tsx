"use client";

import { useState, useEffect } from "react";
import { heroConfig } from "@/lib/portfolio-data";

export default function Hero() {
  const [typedName, setTypedName] = useState("");
  const [adjectiveIndex, setAdjectiveIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Sync typing animation with preloader
  useEffect(() => {
    const startDelay = setTimeout(() => {
      let currentIndex = 0;
      const typeInterval = setInterval(() => {
        if (currentIndex < heroConfig.fullName.length) {
          setTypedName(heroConfig.fullName.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
        }
      }, 65);

      return () => clearInterval(typeInterval);
    }, 4200);

    return () => clearTimeout(startDelay);
  }, []);

  // Scalable dynamic adjective rotation focusing on "intelligent" & core competencies
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setAdjectiveIndex(
          (prev) => (prev + 1) % heroConfig.dynamicAdjectives.length
        );
        setIsFading(false);
      }, 300);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  const currentAdjective = heroConfig.dynamicAdjectives[adjectiveIndex];

  return (
    <section id="hero" className="section hero-section">
      <div className="hero-content" style={{ width: "100%" }}>
        {/* Eyebrow + Animated Name */}
        <h1
          className="hero-overline"
          style={{
            color: "var(--green)",
            fontSize: "clamp(14px, 2vw, 18px)",
            fontWeight: 400,
            fontFamily: "var(--font-mono)",
            marginBottom: "15px",
            lineHeight: 1.4,
          }}
        >
          {heroConfig.greeting}{" "}
          <span style={{ color: "var(--green)", fontWeight: 600 }}>
            {typedName}
          </span>
        </h1>

        {/* Scalable & Fully Responsive Main Headline */}
        <h2
          className="hero-title"
          style={{
            fontSize: "clamp(22px, 4.2vw, 44px)",
            color: "var(--lightest-slate)",
            lineHeight: 1.25,
            fontWeight: 700,
            marginTop: "10px",
            whiteSpace: "normal",
            wordBreak: "break-word",
            maxWidth: "950px",
          }}
        >
          {heroConfig.headlinePrefix}
          <span
            tabIndex={0}
            aria-label={`Attribute: ${currentAdjective}`}
            style={{
              display: "inline-block",
              background:
                "linear-gradient(135deg, #64ffda 0%, #00e676 50%, #64ffda 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              transition: "opacity 0.3s ease, transform 0.3s ease",
              opacity: isFading ? 0 : 1,
              transform: isFading ? "translateY(4px)" : "translateY(0)",
              fontWeight: 800,
              paddingRight: "0.25em",
            }}
          >
            {currentAdjective}
          </span>
          {heroConfig.headlineSuffix}
        </h2>

        {/* Overview Bio */}
        <p
          className="hero-description"
          style={{
            fontSize: "clamp(16px, 2vw, 19px)",
            maxWidth: "680px",
            lineHeight: 1.7,
            marginTop: "25px",
            color: "var(--slate)",
          }}
        >
          I&apos;m a software engineer based in {heroConfig.bio.location},
          specializing in high-performance{" "}
          <strong style={{ color: "var(--lightest-slate)", fontWeight: 500 }}>
            mobile app development
          </strong>{" "}
          (Flutter &amp; Bloc),{" "}
          <strong style={{ color: "var(--lightest-slate)", fontWeight: 500 }}>
            fullstack application development
          </strong>
          , scalable{" "}
          <strong style={{ color: "var(--lightest-slate)", fontWeight: 500 }}>
            backend microservices
          </strong>{" "}
          (Go, Gin &amp; Django), and{" "}
          <strong style={{ color: "var(--lightest-slate)", fontWeight: 500 }}>
            AI-driven systems
          </strong>{" "}
          (Language Server Protocols &amp; LLM multi-agent pipelines).
        </p>

        {/* Action CTAs */}
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary btn-large">
            Explore My Work
          </a>
          <a href="#contact" className="btn btn-secondary btn-large">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
