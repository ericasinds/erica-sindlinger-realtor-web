import PageHero from "../components/PageHero.jsx";
import LeadQuiz from "../components/LeadQuiz.jsx";

export default function Sellers() {
  return (
    <>
      <PageHero eyebrow="For sellers" title="Prepare, price, and present your home with care.">
        Selling is more than putting a home online. Erica helps you make a clear plan
        for the market and the move ahead.
      </PageHero>
      <section className="content-section">
        <p>
          With a design-informed eye and a relationship-first process, Erica helps
          sellers think through presentation, timing, pricing, and the small details
          that shape a buyer's first impression.
        </p>
      </section>
      <section className="section">
        <LeadQuiz />
      </section>
    </>
  );
}
