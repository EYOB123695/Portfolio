"use client";

import { useState, useEffect } from "react";

const FULL_NAME = "Eyob Tesfaye.";

export default function Hero() {
  const [typedName, setTypedName] = useState("");

  useEffect(() => {
    // Start typing after 4.2 seconds to sync perfectly with preloader completion
    const startDelay = setTimeout(() => {
      let currentIndex = 0;
      const typeInterval = setInterval(() => {
        if (currentIndex < FULL_NAME.length) {
          setTypedName(FULL_NAME.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
        }
      }, 65);

      return () => clearInterval(typeInterval);
    }, 4200);

    return () => clearTimeout(startDelay);
  }, []);

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
          Hi, I am{" "}
          <span style={{ color: "var(--green)", fontWeight: 600 }}>
            {typedName}
          </span>
        </h1>

        {/* Main Headline Title forced into ONE single line without three dots */}
        <h2
          className="hero-title"
          style={{
            fontSize: "clamp(15px, 2.7vw, 34px)",
            color: "var(--lightest-slate)",
            lineHeight: 1.2,
            fontWeight: 700,
            marginTop: "10px",
            whiteSpace: "nowrap",
          }}
        >
          I build intelligent mobile apps, robust backends &amp; AI solutions.
        </h2>

        {/* Introduction Overview */}
        <p
          className="hero-description"
          style={{
            fontSize: "clamp(17px, 2.2vw, 20px)",
            maxWidth: "680px",
            lineHeight: 1.7,
            marginTop: "25px",
            color: "var(--slate)",
          }}
        >
          I&apos;m a software engineer based in Addis Ababa, Ethiopia,
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
