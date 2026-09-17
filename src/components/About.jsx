import Section from "./Section";
import profile from "../data/profile";

export default function About() {
  return (
    <Section id="about" eyebrow="About" heading="About me">
      <div className="about-grid">
        <div className="photo">
          {profile.photo ? (
            <img src={profile.photo} alt={profile.name} />
          ) : (
            <span aria-hidden="true">{profile.initials}</span>
          )}
        </div>

        <div>
          <p className="about-body">{profile.about}</p>
        </div>
      </div>
    </Section>
  );
}
