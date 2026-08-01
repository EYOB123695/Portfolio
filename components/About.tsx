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
            Hello! My name is Eyob Tesfaye Mulugeta, a Software Engineering
            graduate from{" "}
            <strong>
              Addis Ababa Science and Technology University (AASTU)
            </strong>
            , <strong>Africa To Silicon Valley (A2SV)</strong>, and{" "}
            <strong>GDSC Alumni</strong>.
          </p>
          <p>
            My passion lies at the intersection of algorithmic efficiency,
            mobile app development, fullstack application development, and
            artificial intelligence. I&apos;ve solved{" "}
            <strong>800+ algorithmic problems</strong>{" "}across LeetCode &amp;
            Codeforces, achieving a 95% consistency rate.
          </p>
          <p>
            Over the years, I&apos;ve had the privilege of architecting
            products for creative media companies, building Language Server
            Protocols for AI frameworks at IcogLabs, and constructing
            production-ready APIs in Go.
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
