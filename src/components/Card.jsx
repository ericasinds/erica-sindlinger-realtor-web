export default function Card({ icon: Icon, title, children, className = "" }) {
  return (
    <article className={`card ${className}`}>
      {Icon && <Icon className="card-icon" size={28} aria-hidden="true" />}
      <h3>{title}</h3>
      {children}
    </article>
  );
}
