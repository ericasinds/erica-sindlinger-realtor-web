import { BadgeDollarSign, Camera, Handshake, Sparkles } from "lucide-react";
import Card from "../components/Card.jsx";
import LeadForm from "../components/LeadForm.jsx";
import PageHero from "../components/PageHero.jsx";
import SEO from "../components/SEO.jsx";
import SectionWrapper from "../components/SectionWrapper.jsx";
import { siteConfig } from "../config/siteConfig.js";

export default function Sellers() {
  return (
    <>
      <SEO
        title="Sellers"
        description="Seller strategy, preparation, pricing, marketing, and negotiation support for Orlando and Central Florida homeowners."
      />
      <PageHero eyebrow="For sellers" title="Prepare, price, and present your home with care.">
        {siteConfig.sellerContent.intro}
      </PageHero>

      <SectionWrapper eyebrow="Seller process" title="A thoughtful plan for the market and your move.">
        <div className="grid four">
          {siteConfig.sellerContent.steps.map((step, index) => (
            <Card key={step.title} icon={[Sparkles, BadgeDollarSign, Camera, Handshake][index]} title={step.title}>
              <p>{step.text}</p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="soft-section" eyebrow="Seller strategy" title="Presentation and pricing work together.">
        <div className="story-split">
          <div className="story-image">
            <img src={siteConfig.assets.brandPhoto} alt={siteConfig.assets.brandPhotoAlt} loading="lazy" />
          </div>
          <div className="feature-list">
            <div className="feature-item"><h3>Prep with intention</h3><p>Small improvements, editing, and staging choices can shape the way buyers feel in the home.</p></div>
            <div className="feature-item"><h3>Price with context</h3><p>Erica helps you understand comparable homes, buyer demand, timing, and strategy.</p></div>
            <div className="feature-item"><h3>Negotiate the full picture</h3><p>Price matters, but so do terms, timing, contingencies, and certainty.</p></div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <LeadForm
          title="Request a Seller Consultation"
          intro="Share a few details about your home, timeline, and goals. Erica can help you think through what selling could look like."
          defaultInterest="Selling"
        />
      </SectionWrapper>
    </>
  );
}
