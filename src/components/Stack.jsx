import Section from "./Section";
import stack, { learning } from "../data/stack";

export default function Stack() {
  return (
    <Section id="expertise" eyebrow="Expertise" heading="What I work with">
      <dl className="stack">
        {stack.map((s) => (
          <div className="stack-group" key={s.group}>
            <dt>{s.group}</dt>
            <dd>
              <ul className="tags">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
        <div className="stack-group" key="learning">
          <dt>Learning</dt>
          <dd>
            <ul className="tags tags-muted">
              {learning.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>
    </Section>
  );
}
