import Section from "./Section";
import projects from "../data/projects";

export default function Work() {
  return (
    <Section
      id="work"
      eyebrow="Work"
      heading="Selected problems"
      lede="Architecture and reasoning only — FlyPro is my employer's product, so no proprietary code or supplier names."
    >
      <div className="work-grid">
        {projects.map((p) => (
          <article className="work-card" key={p.id}>
            <h3>{p.title}</h3>
            <p className="work-blurb">{p.blurb}</p>
            <ul>
              {p.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
            <ul className="tags">
              {p.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
