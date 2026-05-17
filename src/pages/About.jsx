import { Heart, Home, Palette, Users } from "lucide-react";
import { CTAButton } from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import LeadForm from "../components/LeadForm.jsx";
import PageHero from "../components/PageHero.jsx";
import SEO from "../components/SEO.jsx";
import SectionWrapper from "../components/SectionWrapper.jsx";
import { siteConfig } from "../config/siteConfig.js";

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Learn about Erica Sindlinger, an Orlando area Realtor with POP Realty powered by Sellstate, and her relationship-first approach to real estate."
      />
      <PageHero eyebrow="About Erica" title="A Realtor with a relationship-first heart.">
        Erica brings a personal, design-minded approach to helping clients buy and sell across Orlando and Central Florida.
      </PageHero>

      <SectionWrapper>
        <div className="story-split">
          <div>
            <p className="eyebrow">Personal story</p>
            <h2>Real estate has always felt close to home.</h2>
            <p>
              Erica grew up around the business through her dad, who bought, sold, and flipped homes.
              That early exposure gave her an appreciation for what a home can become, while her love
              of interior design helped her see how spaces support the lives people are building.
            </p>
            <p>
              Today, she approaches real estate from a relationship-driven place. She loves getting to
              know her clients, understanding what matters to them, and helping them transition into the
              next chapter of life with care and clarity.
            </p>
          </div>
          <div className="story-image">
            <img src={siteConfig.assets.brandPhoto} alt={siteConfig.assets.brandPhotoAlt} loading="lazy" />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="soft-section" eyebrow="Values" title="People over profit is more than a tagline.">
        <div className="grid four">
          <Card icon={Users} title="Relationships first"><p>Clients are people, not transactions. The process starts by listening.</p></Card>
          <Card icon={Home} title="Home-aware guidance"><p>Erica helps clients think about function, feeling, condition, and fit.</p></Card>
          <Card icon={Palette} title="Design perspective"><p>A design-informed eye supports buyers seeing potential and sellers preparing well.</p></Card>
          <Card icon={Heart} title="Calm communication"><p>Clear next steps make big decisions feel more manageable.</p></Card>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <LeadForm title="Talk With Erica" intro="Have a question about buying, selling, or the Central Florida market? Start here." />
      </SectionWrapper>
    </>
  );
}
