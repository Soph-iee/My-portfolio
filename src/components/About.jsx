import Section from "./Section";
import profile from "../data/profile";
import metrics from "../data/metrics";

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
          <ul className="metrics">
            {metrics.map((m) => (
              <li key={m.label}>
                <span className="metric-value">{m.value}</span>
                <span className="metric-label">{m.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
