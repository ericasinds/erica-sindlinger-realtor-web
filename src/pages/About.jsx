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
        description="Learn about Erica Sindlinger, a lifelong Central Florida local and Realtor with Pop Realty powered by Sellstate."
      />
      <PageHero eyebrow="About Erica" title="A lifelong Central Florida local with a people-first approach.">
        Erica helps clients feel informed, comfortable, and represented through the buying or selling process.
      </PageHero>

      <SectionWrapper>
        <div className="story-split">
          <div>
            <p className="eyebrow">Personal story</p>
            <h2>Real estate has always felt personal to Erica.</h2>
            {siteConfig.personalStory.long.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="story-image">
            <img src={siteConfig.assets.brandPhoto} alt={siteConfig.assets.brandPhotoAlt} loading="lazy" />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="soft-section" eyebrow="Values" title="People Over Profit is more than a tagline.">
        <div className="grid four">
          <Card icon={Users} title="Relationship first"><p>Clients are people, not transactions. The process starts by listening.</p></Card>
          <Card icon={Home} title="Education matters"><p>Erica explains the process clearly so clients are not making fear-based decisions.</p></Card>
          <Card icon={Palette} title="Home-aware guidance"><p>Her soft spot for homes and design helps buyers and sellers see both feeling and function.</p></Card>
          <Card icon={Heart} title="Protective advocacy"><p>She negotiates strongly and works to make sure clients feel supported and represented.</p></Card>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <LeadForm title="Talk With Erica" intro="Have a question about buying, selling, or the Central Florida market? Start here." />
      </SectionWrapper>
    </>
  );
}
