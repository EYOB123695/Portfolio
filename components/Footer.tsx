import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="site-footer">
      <Separator
        className="mx-auto mb-6 max-w-xs"
        style={{ backgroundColor: "var(--lightest-navy)" }}
      />
      <div>
        <p>
          Designed &amp; Built by <strong>Eyob Tesfaye Mulugeta</strong>
        </p>
        <div className="footer-stats">
          <a
            href="https://leetcode.com/u/EYOB_TESFAYE/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--green)] transition-colors"
          >
            <i className="far fa-star" /> 800+ LeetCode Solved
          </a>
          <a
            href="https://github.com/EYOB123695"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--green)] transition-colors"
          >
            <i className="fab fa-github" /> GitHub (@EYOB123695)
          </a>
          <a
            href="https://www.linkedin.com/in/eyob-tesfaye-480b30205/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--green)] transition-colors"
          >
            <i className="fab fa-linkedin-in" /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
