import LeadQuiz from "../components/LeadQuiz.jsx";
import PageHero from "../components/PageHero.jsx";
import { siteConfig } from "../siteConfig.js";

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact Erica" title="Let's talk through your next move.">
        Whether you are ready now or just beginning to explore, you can start with a
        simple conversation.
      </PageHero>
      <section className="contact-layout section">
        <div className="contact-card">
          <h2>Reach out directly</h2>
          <a href={`tel:${siteConfig.phone.replaceAll("-", "")}`}>{siteConfig.phone}</a>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <p>{siteConfig.brokerage}</p>
        </div>
        <LeadQuiz />
      </section>
    </>
  );
}
