import { useState } from "react";
import profile from "../data/profile";

const links = [
  { href: "#intro", label: "Intro" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#works", label: "Works" },
  { href: "#contact", label: "Say hello" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#intro" className="logo" onClick={() => setOpen(false)}>
          {profile.logo}
        </a>

        <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Site">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn-solid nav-cv" href={profile.cv} download>
            Download CV
          </a>
        </nav>

        <button
          className={`nav-toggle ${open ? "open" : ""}`}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
