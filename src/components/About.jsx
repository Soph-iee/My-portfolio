import Section from "./Section";
import profile from "../data/profile";

export default function About() {
  return (
    <Section
      id="about"
      className="about-section"
      eyebrow="About"
      heading="About me"
    >
      <div className="about-grid">
        <div>
          <p className="about-body">{profile.about}</p>
        </div>
      </div>
    </Section>
  );
}
