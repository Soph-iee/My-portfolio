import profile from "../data/profile";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="intro" className="hero">
      <p className="eyebrow">Hello World</p>
      <h1>
        I am {profile.name.split(" ")[0]}.<br />
        <span>A {profile.role}</span>
      </h1>
      <p className="hero-sub">{profile.headline}</p>

      <div className="hero-links">
        <a className="icon-link" href={`mailto:${profile.email}`}>
          <MailIcon />
          <span>Email</span>
        </a>
        <a className="icon-link" href={profile.links.github} target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
          <span>GitHub</span>
        </a>
        <a className="icon-link" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  );
}
