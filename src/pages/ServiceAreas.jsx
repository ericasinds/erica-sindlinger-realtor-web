import PageHero from "../components/PageHero.jsx";
import { siteConfig } from "../siteConfig.js";

export default function ServiceAreas() {
  return (
    <>
      <PageHero eyebrow="Local service areas" title="Focused on Orlando and Central Florida communities.">
        Erica serves buyers and sellers across the Orlando area, with a primary focus
        on Orange, Seminole, Volusia, and Osceola counties.
      </PageHero>
      <section className="card-grid three section">
        {siteConfig.serviceAreas.map((area) => (
          <article className="info-card" key={area}>
            <h3>{area}</h3>
            <p>
              Local guidance for real estate decisions, neighborhood fit, timing, and
              the next step in your move.
            </p>
          </article>
        ))}
      </section>
    </>
  );
}
