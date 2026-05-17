import { Instagram, Mail, Music2, Phone } from "lucide-react";
import Card from "../components/Card.jsx";
import LeadForm from "../components/LeadForm.jsx";
import PageHero from "../components/PageHero.jsx";
import SEO from "../components/SEO.jsx";
import SectionWrapper from "../components/SectionWrapper.jsx";
import { siteConfig } from "../config/siteConfig.js";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="Contact Erica Sindlinger for buyer, seller, and Central Florida real estate questions."
      />
      <PageHero eyebrow="Contact Erica" title="Let's talk through your next move.">
        Whether you are ready now or just starting to explore, you can begin with a grounded, no-pressure conversation.
      </PageHero>

      <SectionWrapper>
        <div className="contact-layout">
          <Card title="Reach out directly">
            <p>{siteConfig.brand} powered by {siteConfig.brokerage}</p>
            <p>Serving {siteConfig.market}</p>
            <div className="contact-links">
              <a href={`tel:${siteConfig.phone.replaceAll("-", "")}`}><Phone size={18} /> {siteConfig.phone}</a>
              <a href={`mailto:${siteConfig.email}`}><Mail size={18} /> {siteConfig.email}</a>
              <a href={siteConfig.socialLinks.instagram}><Instagram size={18} /> Instagram</a>
              <a href={siteConfig.socialLinks.tiktok}><Music2 size={18} /> TikTok</a>
            </div>
          </Card>
          <LeadForm title="Send Erica a message" intro="Tell Erica a little about what you are considering and the best way to reach you." />
        </div>
      </SectionWrapper>
    </>
  );
}
