import Section from "./Section";
import principles, { aiNote } from "../data/principles";

export default function HowIWork() {
  return (
    <Section id="how-i-work" eyebrow="How I work" heading="Habits">
      <ul className="principles">
        {principles.map((p) => (
          <li key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </li>
        ))}
      </ul>

      <aside className="ai-note">
        <h3>{aiNote.title}</h3>
        <p>{aiNote.body}</p>
      </aside>
    </Section>
  );
}
