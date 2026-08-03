import useReveal from "../hooks/useReveal";

export default function Section({ id, eyebrow, heading, lede, children, className = "" }) {
  const ref = useReveal();

  return (
    <section id={id} ref={ref} className={`section reveal ${className}`}>
      <div className="section-head">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        {heading && <h2>{heading}</h2>}
        {lede && <p className="lede">{lede}</p>}
      </div>
      {children}
    </section>
  );
}
