import PageHero from "../components/PageHero.jsx";
import { siteConfig } from "../siteConfig.js";

export default function Testimonials() {
  const hasTestimonials = siteConfig.testimonials.length > 0;

  return (
    <>
      <PageHero eyebrow="Client stories" title="Proof, reviews, and real experiences.">
        Reviews will live here once Erica is ready to add them.
      </PageHero>
      <section className="section">
        {hasTestimonials ? (
          <div className="card-grid three">
            {siteConfig.testimonials.map((review) => (
              <article className="quote-card" key={review.name}>
                <p>"{review.quote}"</p>
                <strong>{review.name}</strong>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h2>Testimonials coming soon.</h2>
            <p>
              Add review text in <strong>siteConfig.js</strong> whenever you are ready.
            </p>
          </div>
        )}
      </section>
    </>
  );
}
