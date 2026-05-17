export default function TestimonialCard({ testimonial }) {
  return (
    <article className="card testimonial-card">
      <blockquote>"{testimonial.quote}"</blockquote>
      <strong>{testimonial.name}</strong>
      {testimonial.context && <p>{testimonial.context}</p>}
    </article>
  );
}
