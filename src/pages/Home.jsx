import {
  BookOpen,
  Compass,
  Handshake,
  HeartHandshake,
  Home as HomeIcon,
  KeyRound,
  MapPin,
  ShieldCheck,
  Sparkles,
  TrendingUp
} from "lucide-react";
import { CTAButton } from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import LeadQuiz from "../components/LeadQuiz.jsx";
import SEO from "../components/SEO.jsx";
import SectionWrapper from "../components/SectionWrapper.jsx";
import ServiceAreaCard from "../components/ServiceAreaCard.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";
import { siteConfig } from "../config/siteConfig.js";

export default function Home() {
  const hasTestimonials = siteConfig.testimonials.length > 0;

  return (
    <>
      <SEO title="Central Florida Realtor" />
      <section className="hero">
        <div className="hero-copy reveal">
          <p className="eyebrow">{siteConfig.market} real estate</p>
          <h1>Central Florida real estate guidance that puts people first.</h1>
          <p>
            {siteConfig.name} helps buyers and sellers make informed decisions without
            pressure. As a {siteConfig.localSince} and Realtor with {siteConfig.brokerage},
            she brings patient education, honest guidance, and strong advocacy to every move.
          </p>
          <div className="button-row">
            <CTAButton to={siteConfig.ctaLinks.primary}>Start Your Home Plan</CTAButton>
            <CTAButton href={`tel:${siteConfig.phone.replaceAll("-", "")}`} variant="secondary">Call {siteConfig.phone}</CTAButton>
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
        title="For people who want to feel informed, not pushed."
        intro="Erica adapts to each client's needs and keeps the process grounded in education, comfort, and practical next steps."
      >
        <div className="grid three">
          {siteConfig.whoIHelp.map((item, index) => (
            <Card key={item.title} icon={[HomeIcon, Compass, TrendingUp, MapPin, BookOpen][index]} title={item.title}>
              <p>{item.text}</p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="soft-section">
        <div className="story-split">
          <div className="story-image">
            <img src={siteConfig.assets.brandPhoto} alt={siteConfig.assets.brandPhotoAlt} loading="lazy" />
          </div>
          <div>
            <p className="eyebrow">Erica's story</p>
            <h2>Lifelong local roots, a soft spot for homes, and a heart for what is possible.</h2>
            <p>{siteConfig.personalStory.short}</p>
            <p>
              Licensed since {siteConfig.yearsInRealEstateStart}, Erica is passionate about helping
              people understand the process and accomplish goals that may not have always felt accessible.
            </p>
            <CTAButton to="/about" variant="secondary">Read More</CTAButton>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="Why work with Erica" title="Calm guidance, clear education, and protective advocacy.">
        <div className="grid three">
          {siteConfig.differentiators.map((item, index) => (
            <Card key={item.title} icon={[HeartHandshake, BookOpen, ShieldCheck, MapPin, Handshake, Sparkles][index]} title={item.title}>
              <p>{item.text}</p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="soft-section" eyebrow="Buyer pathway" title="A calmer way to buy with less confusion.">
        <p className="section-note">{siteConfig.buyerContent.intro}</p>
        <div className="grid four">
          {siteConfig.buyerContent.steps.map((step, index) => (
            <Card key={step.title} icon={[BookOpen, MapPin, HomeIcon, KeyRound][index]} title={step.title}>
              <p>{step.text}</p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="Seller pathway" title="Honest pricing, thoughtful prep, and strong negotiation.">
        <p className="section-note">{siteConfig.sellerContent.intro}</p>
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
        title="Greater Orlando and Central Florida, with local context."
        intro={siteConfig.serviceAreaIntro}
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

      <SectionWrapper eyebrow="Reviews and proof" title="Real client stories will live here." centered>
        {hasTestimonials ? (
          <div className="grid three">
            {siteConfig.testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        ) : (
          <div className="card empty-state">
            <h3>Testimonials coming soon</h3>
            <p>Erica does not display placeholder reviews. Until real testimonials are added, the best next step is a simple conversation.</p>
            <div className="button-row center-row">
              <CTAButton to="/contact" variant="secondary">Schedule a Consultation</CTAButton>
            </div>
          </div>
        )}
      </SectionWrapper>

      <SectionWrapper className="soft-section funnel-section" id="home-plan">
        <LeadQuiz />
      </SectionWrapper>

      <SectionWrapper centered eyebrow="Ready when you are" title="Start with a conversation, not pressure.">
        <p>Whether you are buying, selling, both, or simply exploring what is possible, Erica can help you sort through the next step with honesty and patience.</p>
        <div className="button-row">
          <CTAButton to="/contact">Contact Erica</CTAButton>
          <CTAButton href={`tel:${siteConfig.phone.replaceAll("-", "")}`} variant="secondary">Call {siteConfig.phone}</CTAButton>
        </div>
      </SectionWrapper>
    </>
  );
}
