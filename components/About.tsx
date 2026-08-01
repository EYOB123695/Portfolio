import Image from "next/image";

const skills = [
  "Python (Advanced)",
  "TypeScript / JavaScript",
  "Flutter & Dart",
  "Go (Gin Gonic, GORM)",
  "ReactJS & Tailwind CSS",
  "PyTorch & TensorFlow",
  "PostgreSQL & Docker",
  "REST & WebSockets",
];

export default function About() {
  return (
    <section id="about" className="section about-section">
      <h2 className="numbered-heading">
        <span className="heading-num">01.</span> About Me
      </h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            I am a Software Engineering graduate from{" "}
            <strong>
              Addis Ababa Science and Technology University (AASTU)
            </strong>{" "}
            and an alumnus of <strong>Africa to Silicon Valley (A2SV)</strong>{" "}
            and <strong>GDSC</strong>.
          </p>
          <p>
            My journey in software engineering spans <strong>full-stack</strong>,{" "}
            <strong>mobile</strong>, and <strong>AI development</strong>—ranging from
            building high-performance Flutter applications using Clean Architecture to
            designing agentic LLM pipelines and LSP-based developer tools. I focus on
            creating scalable, clean, and efficient systems that solve real-world
            challenges.
          </p>
          <p>
            I&apos;ve solved <strong>800+ algorithmic problems</strong> across
            LeetCode &amp; Codeforces, achieving a 95% consistency rate.
          </p>
          <p>
            Here are a few technologies I&apos;ve been working with recently:
          </p>
          <ul className="skills-list">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="about-avatar" style={{ display: "flex", justifyContent: "center" }}>
          <div className="avatar-wrapper">
            <div className="avatar-img-card">
              <div className="avatar-img-container">
                <Image
                  src="/eyob.jpg"
                  alt="Eyob Tesfaye Mulugeta"
                  width={240}
                  height={240}
                  className="avatar-photo"
                  priority
                />
                <div className="avatar-img-overlay" />
              </div>
              <div className="avatar-meta">
                <span className="avatar-name">Eyob Tesfaye Mulugeta</span>
                <span className="avatar-title">Full-Stack Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
