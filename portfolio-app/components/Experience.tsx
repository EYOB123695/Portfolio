"use client";

import { useState } from "react";

interface Job {
  company: string;
  title: string;
  range: string;
  bullets: string[];
}

const jobs: Job[] = [
  {
    company: "A2SV",
    title: "Software Engineer",
    range: "Dec 2025 – May 2026 | Addis Ababa, Ethiopia",
    bullets: [
      "Collaborated with a cross-functional team of three to architect and deploy a mobile application for educators using Agile methodologies.",
      "Improved application performance by reducing widget rebuilds by <strong>40%</strong> through implementing a Bloc-based state management architecture.",
      "Designed 25+ pixel-perfect screens in Figma and developed the production-ready MVP of the mobile platform.",
      "Achieved 95% consistency in solving complex algorithmic problems on LeetCode and Codeforces within the A2SV academy (backed by Google).",
    ],
  },
  {
    company: "Bete Semay",
    title: "Mobile Application Developer",
    range: "Mar 2025 – Dec 2025 | Addis Ababa, Ethiopia",
    bullets: [
      "Enhanced application functionality by implementing 10+ core features, directly boosting user engagement and active session retention.",
      "Reduced inter-module dependencies by <strong>40%</strong> through strict enforcement of Clean Architecture principles and Dependency Injection.",
      "Streamlined app state and modular code separation to ensure long-term scalability and maintainability.",
    ],
  },
  {
    company: "Eskalate",
    title: "Software Engineer (Internship)",
    range: "Jun 2024 – Aug 2024 | Addis Ababa, Ethiopia",
    bullets: [
      "Led a team of 5 mobile developers to build a mobile starter project leveraging Flutter and Dart.",
      "Engineered robust Clean Architecture solutions, significantly elevating code quality, testing speed, and maintainability.",
      "Architected data consumption layer for optimal integration across 8 REST API endpoints.",
      "Reduced bug reports by <strong>15%</strong> through continuous code refactoring, static analysis, and automated widget tests.",
    ],
  },
  {
    company: "IcogLabs",
    title: "Artificial Intelligence Engineer (Intern)",
    range: "Sep 2025 – Dec 2025 | Addis Ababa, Ethiopia",
    bullets: [
      "Implemented the type checker feature and resolved multiple-variable editing issues in the Language Server Protocol (LSP) for MeTTa.",
      "Designed and executed a multi-agent AI system capable of autonomous web research and long-form blog generation.",
      "Contributed to a long-form AI video generation project, tackling character identity consistency and controllability across frames.",
    ],
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="section experience-section">
      <h2 className="numbered-heading">
        <span className="heading-num">02.</span> Where I&apos;ve Worked
      </h2>

      <div className="tab-container">
        {/* Tab Buttons */}
        <div className="tab-list" role="tablist" aria-label="Job experiences">
          {jobs.map((job, index) => (
            <button
              key={job.company}
              className={`tab-btn ${activeTab === index ? "active" : ""}`}
              role="tab"
              aria-selected={activeTab === index}
              onClick={() => setActiveTab(index)}
            >
              {job.company}
            </button>
          ))}
        </div>

        {/* Tab Panels */}
        <div className="tab-panels">
          <div
            className="tab-panel"
            role="tabpanel"
            key={activeTab}
          >
            <h3 className="job-title">
              {jobs[activeTab].title}{" "}
              <span className="company">@ {jobs[activeTab].company}</span>
            </h3>
            <p className="job-range">{jobs[activeTab].range}</p>
            <ul className="fancy-list">
              {jobs[activeTab].bullets.map((bullet, i) => (
                <li
                  key={i}
                  dangerouslySetInnerHTML={{ __html: bullet }}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
