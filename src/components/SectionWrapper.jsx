export default function SectionWrapper({ eyebrow, title, intro, children, className = "", centered = false }) {
  return (
    <section className={`section ${className}`}>
      <div className="section-inner reveal">
        {(eyebrow || title || intro) && (
          <div className={`section-heading ${centered ? "center" : ""}`}>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2>{title}</h2>}
            {intro && <p>{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
