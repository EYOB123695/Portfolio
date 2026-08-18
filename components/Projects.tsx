"use client";

import { useEffect, useState } from "react";

interface Project {
  title: string;
  description: string;
  features?: string[];
  tech: string[];
  github?: string;
  external?: string;
}

const projects: Project[] = [
  {
    title: "Nexus Feed",
    description:
      "High-frequency market aggregator and real-time trading engine in Go, achieving sub-millisecond tick ingestion from Binance and Coinbase using a lock-free ring buffer and dynamic Level-2 order book ladders.",
    features: [
      "Engineered sub-millisecond tick ingestion from Binance and Coinbase using a 64K lock-free ring buffer and an O(log N) SkipList order book",
      "Reduced network payload volume by 99.6% by designing a 50ms (20 FPS) batch conflation engine and real-time cross-exchange arbitrage scanner",
      "Developed a responsive Next.js trading terminal featuring dynamic Level-2 order book ladders and live engine telemetry",
      "Benchmarked scalability with 1,000 concurrent clients, successfully delivering 36,000+ deep market snapshots in 60 seconds with a 99.98% success rate",
    ],
    tech: [
      "Go",
      "Next.js",
      "TypeScript",
      "WebSockets",
      "Lock-Free Concurrency",
      "SkipList",
      "Order Book",
    ],
    github: "https://github.com/EYOB123695/Nexus-Feed",
  },
  {
    title: "Arada Store",
    description:
      "A full-featured modern e-commerce web application featuring secure online payment integration, interactive add-to-cart cart state management, real-time product searching, and dynamic category filtering.",
    features: [
      "Payment Gateway Integration for seamless online checkout",
      "Interactive Add to Cart with quantity management",
      "Instant Product Search & real-time filtering",
      "Dynamic Category Filtering by product classifications",
      "Automated CI/CD Pipeline for testing and continuous deployment",
    ],
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "CI/CD",
      "Payment Gateway",
      "State Management",
    ],
    github: "https://github.com/EYOB123695/Arada-Store",
  },
  {
    title: "ComfyUI Script-to-Video Suite",
    description:
      "Custom node suite built for ComfyUI to supercharge AI video generation pipelines with automated negative prompt generation and flexible multi-provider LLM integrations.",
    features: [
      "Automatic Dynamic Negative Prompt generation for consistent video rendering",
      "LLM Provider Node for switching LLMs dynamically via API key insertion",
      "Automated Script Chunking & AI prompt generation directly from input scripts",
    ],
    tech: [
      "Python",
      "ComfyUI",
      "LLM Integration",
      "Custom Nodes",
      "Script Parsing",
      "AI Video",
    ],
    github: "https://github.com/EYOB123695/script-parser-custom-node",
  },
  {
    title: "Predictive Coding vs Backpropagation",
    description:
      "Machine learning research implementation evaluating and comparing the Predictive Coding learning algorithm against standard backpropagation within an autoencoder architecture.",
    features: [
      "Implemented Predictive Coding framework inside autoencoders",
      "Compared convergence speeds & reconstruction error against backprop",
      "Evaluated performance metrics on high-dimensional representations",
    ],
    tech: [
      "Python",
      "PyTorch",
      "Predictive Coding",
      "Autoencoders",
      "Deep Learning",
    ],
    github: "https://github.com/EYOB123695/Predictive-Coding",
  },
  {
    title: "MeTTa Language Server Protocol",
    description:
      "Advanced language server features for the MeTTa AI language, including real-time type checking, multi-variable editing, recursive argument validation, bracket balancing, undefined variable detection, and ambiguous reference analysis.",
    tech: ["Python", "LSP Protocol", "AST Analysis", "AI Frameworks"],
    github: "https://github.com/iCog-Labs-Dev/metta-lsp",
  },
  {
    title: "Roha Backend API",
    description:
      "Scalable, high-performance social networking backend API in Go utilizing Gin Gonic framework and Clean Architecture. Features decoupled follower/following relationships, hierarchical comments, custom JWT middleware, and interactive Swagger API documentation.",
    tech: ["Go", "Gin Gonic", "PostgreSQL", "GORM", "JWT", "Swagger"],
    github: "https://github.com/EYOB123695/roha",
  },
  {
    title: "ScholArxiv Sorting System",
    description:
      "Built and integrated a high-performance sorting feature UI using Flutter for the popular OpenScholarXIV platform, significantly enhancing academic paper discovery and user experience for a 900+ star open-source project.",
    tech: ["Flutter", "Dart", "UI/UX", "Algorithms", "Open Source (900★)"],
    github: "https://github.com/ScholarXIV/OpenScholarXIV",
  },
  {
    title: "Moogter Platform",
    description:
      "Real-time notifications and media distribution system. Features WebSocket-based frontend listeners for 100% notification delivery, concurrent multiple image upload system, and client-side caching that cut donation load times by 40%.",
    tech: ["Flutter", "WebSockets", "Dart", "State Management", "Caching"],
    github: "https://github.com/EYOB123695/Moogter",
  },
];

export default function Projects() {
  const [expandedProjects, setExpandedProjects] = useState<Record<number, boolean>>({});

  const toggleFeatures = (index: number) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const cards = document.querySelectorAll(
      ".project-card-reveal-left, .project-card-reveal-right"
    );
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section id="projects" className="section projects-section">
      <h2 className="numbered-heading">
        <span className="heading-num">03.</span> Featured Projects
      </h2>

      <div className="projects-grid">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          const animationClass = isEven
            ? "project-card-reveal-left"
            : "project-card-reveal-right";
          const isExpanded = Boolean(expandedProjects[index]);

          return (
            <div
              className={`project-card ${animationClass}`}
              key={project.title}
              style={{ transitionDelay: `${(index % 2) * 150}ms` }}
            >
              <div className="project-inner">
                <header>
                  <div className="project-top">
                    <div className="folder">
                      <i className="far fa-folder-open" />
                    </div>
                    <div className="project-links">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub Repository"
                          title="View GitHub Repository"
                        >
                          <i className="fab fa-github" />
                        </a>
                      )}
                      {project.external && (
                        <a
                          href={project.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="External Link"
                          title="Visit Live Site"
                        >
                          <i className="fas fa-external-link-alt" />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="project-title">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--green)] transition-colors"
                      >
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                </header>

                <div className="project-description">
                  <p>{project.description}</p>

                  {project.features && project.features.length > 0 && (
                    <>
                      <button
                        type="button"
                        onClick={() => toggleFeatures(index)}
                        className="see-more-btn"
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? "See Less ▴" : "See Key Features ▾"}</span>
                      </button>

                      {isExpanded && (
                        <div className="project-features-box">
                          <span className="text-xs font-mono text-[var(--green)] block mb-1.5 font-semibold">
                            Key Features:
                          </span>
                          <ul className="text-xs space-y-1.5 text-[var(--slate)] pl-1">
                            {project.features.map((feat, i) => (
                              <li key={`${project.title}-feat-${i}`} className="flex items-start gap-1.5">
                                <span className="text-[var(--green)]">▹</span>
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  )}
                </div>

                <footer>
                  <ul className="project-tech-list">
                    {project.tech.map((t, i) => (
                      <li key={`${project.title}-tech-${i}-${t}`}>{t}</li>
                    ))}
                  </ul>
                </footer>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
