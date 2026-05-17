export default function PageHero({ eyebrow, title, children }) {
  return (
    <section className="page-hero">
      <div className="page-hero-inner reveal">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{children}</p>
      </div>
    </section>
  );
}
