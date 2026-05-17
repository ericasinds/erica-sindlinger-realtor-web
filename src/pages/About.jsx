import PageHero from "../components/PageHero.jsx";

export default function About() {
  return (
    <>
      <PageHero eyebrow="About Erica" title="A Realtor with a relationship-first heart.">
        Erica Sindlinger brings a personal, design-minded approach to real estate
        across the Orlando area.
      </PageHero>
      <section className="content-section">
        <p>
          Erica grew up around the business through her dad, who bought, sold, and
          flipped homes. That early exposure gave her an appreciation for what a home
          can become, and her love of interior design deepened that sense of
          possibility.
        </p>
        <p>
          Today, Erica approaches real estate from a relationship-driven place. She
          loves getting to know her clients, understanding what matters to them, and
          helping them transition into the next chapter of life with care and clarity.
        </p>
      </section>
    </>
  );
}
