import { HeartHandshake, Home as HomeIcon, KeyRound, MapPin, Search, Sparkles, TrendingUp } from "lucide-react";
import { CTAButton } from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import LeadQuiz from "../components/LeadQuiz.jsx";
import SEO from "../components/SEO.jsx";
import SectionWrapper from "../components/SectionWrapper.jsx";
import ServiceAreaCard from "../components/ServiceAreaCard.jsx";
import StatCard from "../components/StatCard.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";
import { siteConfig } from "../config/siteConfig.js";

export default function Home() {
  const hasTestimonials = siteConfig.testimonials.length > 0;

  return (
    <>
      <SEO title="Orlando Area Realtor" />
      <section className="hero">
        <div className="hero-copy reveal">
          <p className="eyebrow">{siteConfig.market} real estate</p>
          <h1>Real estate guidance for the chapter you are stepping into next.</h1>
          <p>
            {siteConfig.name} helps buyers and sellers across Central Florida make
            confident moves with a personal, relationship-first approach backed by
            {` ${siteConfig.brand}`} and powered by {siteConfig.brokerage}.
          </p>
          <div className="button-row">
            <CTAButton to="/contact">Start Your Home Plan</CTAButton>
            <CTAButton to="/about" variant="secondary">Meet Erica</CTAButton>
          </div>
        </div>
        <div className="hero-media reveal">
          <img src={siteConfig.assets.headshot} alt={siteConfig.assets.headshotAlt} />
          <div className="hero-logo">
            <img src={siteConfig.assets.logo} alt={siteConfig.assets.logoAlt} />
          </div>
        </div>
      </section>

      <SectionWrapper
        eyebrow="Who I help"
        title="For buyers, sellers, and people planning their next move."
        intro="The process may look different for every client, but the goal is the same: clear advice, steady communication, and decisions that feel aligned with real life."
      >
        <div className="grid three">
          <Card icon={HomeIcon} title="Buyers">
            <p>From first-time buyers to seasoned movers, Erica helps you compare options and move with clarity.</p>
          </Card>
          <Card icon={Sparkles} title="Sellers">
            <p>Prepare, price, and present your home with a plan that respects both the market and your next chapter.</p>
          </Card>
          <Card icon={HeartHandshake} title="Life transitions">
            <p>Real estate is rarely just about property. It is about timing, family, goals, and what comes next.</p>
          </Card>
        </div>
      </SectionWrapper>

      <SectionWrapper className="soft-section">
        <div className="story-split">
          <div className="story-image">
            <img src={siteConfig.assets.brandPhoto} alt={siteConfig.assets.brandPhotoAlt} loading="lazy" />
          </div>
          <div>
            <p className="eyebrow">Erica's story</p>
            <h2>Raised around real estate. Drawn to homes. Built for relationships.</h2>
            <p>
              Erica grew up watching her dad buy, sell, and flip homes. That early exposure,
              paired with her love of interior design, shaped the way she sees real estate:
              as a chance to help people move into a new season with more confidence and less overwhelm.
            </p>
            <CTAButton to="/about" variant="secondary">Read More</CTAButton>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="Why work with me" title="Warm guidance with a practical plan.">
        <div className="grid four">
          <StatCard value="1:1" label="Relationship-first guidance from first conversation to closing." />
          <StatCard value="Local" label="Orlando and Central Florida market context you can actually use." />
          <StatCard value="Design" label="A design-informed eye for presentation, flow, and possibility." />
          <StatCard value="Clear" label="Straightforward next steps, communication, and support." />
        </div>
      </SectionWrapper>

      <SectionWrapper className="soft-section" eyebrow="Buyer pathway" title="A calmer way to buy.">
        <div className="grid four">
          {siteConfig.buyerContent.steps.map((step, index) => (
            <Card key={step.title} icon={[Search, MapPin, HomeIcon, KeyRound][index]} title={step.title}>
              <p>{step.text}</p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="Seller pathway" title="A clear plan before your home hits the market.">
        <div className="grid four">
          {siteConfig.sellerContent.steps.map((step, index) => (
            <Card key={step.title} icon={[Sparkles, TrendingUp, MapPin, HeartHandshake][index]} title={step.title}>
              <p>{step.text}</p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        className="soft-section"
        eyebrow="Service areas"
        title="Serving Orlando and Central Florida communities."
        intro="The first version includes editable service area cards so this can grow into stronger local SEO pages over time."
      >
        <div className="grid three">
          {siteConfig.serviceAreas.slice(0, 6).map((area) => (
            <ServiceAreaCard key={area.name} area={area} />
          ))}
        </div>
        <div className="button-row">
          <CTAButton to="/service-areas" variant="secondary">View All Areas</CTAButton>
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="Client proof" title="Real client stories will live here." centered>
        {hasTestimonials ? (
          <div className="grid three">
            {siteConfig.testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        ) : (
          <div className="card empty-state">
            <h3>Testimonials coming soon</h3>
            <p>Once Erica adds real reviews, this section will automatically display them from the site config.</p>
          </div>
        )}
      </SectionWrapper>

      <SectionWrapper className="soft-section">
        <LeadQuiz />
      </SectionWrapper>

      <SectionWrapper centered eyebrow="Ready when you are" title="Start with a conversation, not pressure.">
        <p>Whether you are buying, selling, or simply exploring what is possible, Erica can help you sort through the next step.</p>
        <div className="button-row">
          <CTAButton to="/contact">Contact Erica</CTAButton>
          <CTAButton href={`tel:${siteConfig.phone.replaceAll("-", "")}`} variant="secondary">Call {siteConfig.phone}</CTAButton>
        </div>
      </SectionWrapper>
    </>
  );
}
