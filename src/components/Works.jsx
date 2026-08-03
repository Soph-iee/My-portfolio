import Section from "./Section";
import projects from "../data/projects";
import earlierWork from "../data/earlierWork";
import { ArrowUpRight } from "./Icons";

const groups = [
  { kind: "personal", label: "Personal", note: null },
  {
    kind: "work",
    label: "FlyPro",
    note: "Employer product — approach and architecture only, no proprietary code.",
  },
];

export default function Works() {
  return (
    <Section id="works" eyebrow="Works" heading="Recent works">
      {groups.map((g) => {
        const items = projects.filter((p) => p.kind === g.kind);
        if (items.length === 0) return null;

        return (
          <div className="project-group" key={g.kind}>
            <div className="project-group-head">
              <h3>{g.label}</h3>
              {g.note && <p>{g.note}</p>}
            </div>

            <div className="work-grid">
              {items.map((p) => (
                <article className="work-card" key={p.id}>
                  {p.status && <span className="work-status">{p.status}</span>}
                  <h4>{p.title}</h4>
                  <p className="work-blurb">{p.blurb}</p>
                  <ul className="work-points">
                    {p.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                  {p.links.length > 0 && (
                    <div className="work-links">
                      {p.links.map((l) => (
                        <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer">
                          {l.label}
                          <ArrowUpRight />
                        </a>
                      ))}
                    </div>
                  )}
                  <ul className="tags">
                    {p.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        );
      })}

      <div className="project-group">
        <div className="project-group-head">
          <h3>Earlier frontend</h3>
          <p>Self-taught web projects from before I moved to mobile.</p>
        </div>
        <ul className="earlier-list">
          {earlierWork.map((p) => (
            <li key={p.name}>
              <a href={p.url} target="_blank" rel="noopener noreferrer">
                {p.name}
                <ArrowUpRight />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
