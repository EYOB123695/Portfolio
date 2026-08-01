import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const socialLinks = [
  {
    href: "https://github.com/EYOB123695",
    icon: "fab fa-github",
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/eyob-tesfaye-480b30205/",
    icon: "fab fa-linkedin-in",
    label: "LinkedIn",
  },
  {
    href: "https://leetcode.com/u/EYOB_TESFAYE/",
    icon: "fas fa-code",
    label: "LeetCode",
  },
  {
    href: "mailto:eyobtesfaye2002@gmail.com",
    icon: "fas fa-envelope",
    label: "Email",
  },
];

export default function Sidebars() {
  return (
    <>
      {/* Left Sidebar — Social Icons */}
      <aside className="sidebar-social" aria-label="Social Links">
        <ul className="social-list">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <Tooltip>
                <TooltipTrigger>
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    <i className={link.icon} />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>{link.label}</p>
                </TooltipContent>
              </Tooltip>
            </li>
          ))}
        </ul>
        <div className="sidebar-line" />
      </aside>

      {/* Right Sidebar — Email */}
      <aside className="sidebar-email" aria-label="Email Link">
        <div className="email-wrapper">
          <a href="mailto:eyobtesfaye2002@gmail.com">
            eyobtesfaye2002@gmail.com
          </a>
        </div>
        <div className="sidebar-line" />
      </aside>
    </>
  );
}
