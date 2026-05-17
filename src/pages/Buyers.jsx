import { CheckCircle2, Home, KeyRound, Map, Search } from "lucide-react";
import { CTAButton } from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import LeadForm from "../components/LeadForm.jsx";
import PageHero from "../components/PageHero.jsx";
import SEO from "../components/SEO.jsx";
import SectionWrapper from "../components/SectionWrapper.jsx";
import { siteConfig } from "../config/siteConfig.js";

export default function Buyers() {
  return (
    <>
      <SEO
        title="Buyers"
        description="Buyer guidance for Greater Orlando and Central Florida homes with Erica Sindlinger, Realtor with Pop Realty powered by Sellstate."
      />
      <PageHero eyebrow="For buyers" title="Find a home that fits your life, not just your search filters.">
        {siteConfig.buyerContent.intro}
      </PageHero>

      <SectionWrapper eyebrow="Buyer process" title="A clear path from search to closing.">
        <div className="grid four">
          {siteConfig.buyerContent.steps.map((step, index) => (
            <Card key={step.title} icon={[Search, Map, Home, KeyRound][index]} title={step.title}>
              <p>{step.text}</p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="soft-section" eyebrow="Who Erica helps" title="Support for buyers who want clarity before confidence.">
        <div className="grid three">
          {[
            "First-time buyers who want education",
            "Buyers unsure where to start",
            "Relocation buyers learning Central Florida",
            "Families comparing neighborhoods",
            "Buyers worried about financing or inspections",
            "Buyers who want patience, not pressure"
          ].map((item) => (
            <Card key={item} icon={CheckCircle2} title={item}>
              <p>Erica keeps the process grounded in your budget, timeline, comfort level, and real priorities.</p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <LeadForm
          title="Start Your Buyer Plan"
          intro="Tell Erica where you are in the buying process and what kind of home or area you are considering."
          defaultInterest="Buying"
        />
        <div className="button-row">
          <CTAButton to="/service-areas" variant="secondary">Explore Service Areas</CTAButton>
        </div>
      </SectionWrapper>
    </>
  );
}
