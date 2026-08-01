export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <h2 className="numbered-heading center-heading">
        <span className="heading-num">04.</span> What&apos;s Next?
      </h2>
      <h3 className="contact-title">Get In Touch</h3>
      <p className="contact-text">
        Whether you have a question, a potential project collaboration, an
        engineering role opportunity, or just want to say hi — my inbox is
        always open!
      </p>
      <div className="contact-actions" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
        <a
          href="mailto:eyobtesfaye2002@gmail.com"
          className="btn btn-primary btn-large"
        >
          Say Hello 👋
        </a>

        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", justifyContent: "center", marginTop: "10px" }}>
          <a
            href="https://github.com/EYOB123695"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ fontSize: "var(--fz-xs)", padding: "0.6rem 1.2rem" }}
          >
            <i className="fab fa-github" style={{ marginRight: "6px" }} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/eyob-tesfaye-480b30205/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ fontSize: "var(--fz-xs)", padding: "0.6rem 1.2rem" }}
          >
            <i className="fab fa-linkedin-in" style={{ marginRight: "6px" }} /> LinkedIn
          </a>
          <a
            href="https://leetcode.com/u/EYOB_TESFAYE/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ fontSize: "var(--fz-xs)", padding: "0.6rem 1.2rem" }}
          >
            <i className="fas fa-code" style={{ marginRight: "6px" }} /> LeetCode
          </a>
        </div>
      </div>
      <div className="contact-details" style={{ marginTop: "30px" }}>
        <p>
          <a
            href="mailto:eyobtesfaye2002@gmail.com"
            className="hover:text-[var(--green)] transition-colors"
          >
            <i className="fas fa-envelope" /> eyobtesfaye2002@gmail.com
          </a>
        </p>
        <p>
          <i className="fas fa-phone-alt" /> +251 953 850 592
        </p>
      </div>
    </section>
  );
}
