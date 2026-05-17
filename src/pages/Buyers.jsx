import PageHero from "../components/PageHero.jsx";
import LeadQuiz from "../components/LeadQuiz.jsx";

export default function Buyers() {
  return (
    <>
      <PageHero eyebrow="For buyers" title="Find a home that fits your life, not just your search filters.">
        Buying can feel big. Erica helps you slow the process down, understand your
        options, and make confident decisions.
      </PageHero>
      <section className="card-grid three section">
        {["Clarify your goals", "Tour with intention", "Write with confidence"].map((title) => (
          <article className="info-card" key={title}>
            <h3>{title}</h3>
            <p>
              Thoughtful guidance keeps your search focused, your questions answered,
              and your decisions connected to what matters most.
            </p>
          </article>
        ))}
      </section>
      <section className="section">
        <LeadQuiz />
      </section>
    </>
  );
}
