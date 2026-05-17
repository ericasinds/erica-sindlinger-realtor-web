import { ArrowRight, HeartHandshake, Home as HomeIcon, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import LeadQuiz from "../components/LeadQuiz.jsx";
import { siteConfig } from "../siteConfig.js";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Orlando area real estate</p>
          <h1>Real estate guidance for your next chapter in Central Florida.</h1>
          <p>
            Erica Sindlinger is a relationship-driven Realtor with POP Realty,
            helping buyers and sellers move with clarity, care, and a design-informed
            eye for what makes a home feel right.
          </p>
          <div className="button-row">
            <Link className="button primary" to="/contact">
              Start Your Home Plan <ArrowRight size={18} />
            </Link>
            <Link className="button secondary" to="/about">
              Meet Erica
            </Link>
          </div>
        </div>
        <div className="hero-card" aria-label="Portrait placeholder">
          <div className="portrait-placeholder">
            <span>Headshot</span>
            <small>Placeholder for Erica</small>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Who I serve</p>
          <h2>For buyers, sellers, and people figuring out what comes next.</h2>
        </div>
        <div className="card-grid three">
          <article className="info-card">
            <HomeIcon />
            <h3>Buyers</h3>
            <p>
              From first tours to final signatures, Erica helps you understand the
              market, compare options, and choose a home that fits your real life.
            </p>
          </article>
          <article className="info-card">
            <Sparkles />
            <h3>Sellers</h3>
            <p>
              Thoughtful preparation, clear pricing conversations, and an eye for
              presentation help your home meet the market with confidence.
            </p>
          </article>
          <article className="info-card">
            <HeartHandshake />
            <h3>Next chapters</h3>
            <p>
              Real estate is personal. Erica keeps the process grounded in your
              goals, timeline, and the life you are moving toward.
            </p>
          </article>
        </div>
      </section>

      <section className="story-band">
        <div>
          <p className="eyebrow">Erica's story</p>
          <h2>Raised around real estate. Drawn to homes. Built for relationships.</h2>
        </div>
        <p>
          Erica grew up watching her dad buy, sell, and flip homes. That early
          exposure, paired with her love of interior design, shaped the way she sees
          real estate: not as a transaction, but as a way to help people move into a
          new season of life with more confidence and less overwhelm.
        </p>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Why work with me</p>
          <h2>Warm guidance with a practical plan.</h2>
        </div>
        <div className="reason-list">
          <p>Relationship-first service that starts with listening.</p>
          <p>A design-informed eye for homes, presentation, and possibility.</p>
          <p>Local guidance across Orlando and the surrounding counties.</p>
          <p>Clear communication so you always know what is happening and why.</p>
        </div>
      </section>

      <section className="area-band">
        <MapPin />
        <div>
          <p className="eyebrow">Service areas</p>
          <h2>Serving Orlando and nearby Central Florida communities.</h2>
          <p>{siteConfig.serviceAreas.join(" • ")}</p>
        </div>
      </section>

      <section className="section">
        <LeadQuiz />
      </section>
    </>
  );
}
