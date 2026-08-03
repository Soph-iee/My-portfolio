import Section from "./Section";
import profile from "../data/profile";
import { GitHubIcon, LinkedInIcon } from "./Icons";

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" heading="Get in touch">
      <p className="contact-lede">
        I'd love to hear from you. Whether you have a question or want to work together,{" "}
        <strong>shoot me a message</strong>.
      </p>

      <a className="contact-email" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>

      <div className="contact-actions">
        <a className="btn btn-solid" href={`mailto:${profile.email}`}>
          Say hello.
        </a>
        <a className="btn" href={profile.cv} download>
          Download CV
        </a>
      </div>

      <div className="contact-links">
        <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
          <span>LinkedIn</span>
        </a>
        <a href={profile.links.github} target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
          <span>GitHub</span>
        </a>
      </div>
    </Section>
  );
}
