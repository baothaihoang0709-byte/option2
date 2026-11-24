export default function SectionHeading({ eyebrow, title, body, align="left" }) {
  return <div className={`section-heading align-${align}`}><span className="eyebrow-pill">{eyebrow}</span><h2>{title}</h2>{body && <p>{body}</p>}</div>;
}
