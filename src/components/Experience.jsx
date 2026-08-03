import Section from "./Section";
import experience from "../data/experience";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" heading="Where I've worked">
      {experience.map((job) => (
        <article className="job" key={job.company}>
          <div className="job-head">
            <h3>
              {job.role} · <span>{job.company}</span>
            </h3>
            <p className="job-period">{job.period}</p>
          </div>
          <ul>
            {job.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </article>
      ))}
    </Section>
  );
}
