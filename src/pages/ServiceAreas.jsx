import LeadForm from "../components/LeadForm.jsx";
import PageHero from "../components/PageHero.jsx";
import SEO from "../components/SEO.jsx";
import SectionWrapper from "../components/SectionWrapper.jsx";
import ServiceAreaCard from "../components/ServiceAreaCard.jsx";
import { siteConfig } from "../config/siteConfig.js";

export default function ServiceAreas() {
  return (
    <>
      <SEO
        title="Service Areas"
        description="Explore Greater Orlando and Central Florida service areas for Erica Sindlinger, including Orange, Seminole, Lake, Osceola, Volusia, Polk, Marion, and Hernando counties."
      />
      <PageHero eyebrow="Local service areas" title="Greater Orlando guidance with lifelong Central Florida context.">
        {siteConfig.serviceAreaIntro}
      </PageHero>

      <SectionWrapper eyebrow="Communities" title="Primary and nearby service areas.">
        <div className="grid three">
          {siteConfig.serviceAreas.map((area) => (
            <ServiceAreaCard key={area.name} area={area} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="soft-section">
        <LeadForm title="Ask About an Area" intro="Curious about a Central Florida community? Share what you are considering and Erica can help you think through local fit, timing, and next steps." />
      </SectionWrapper>
    </>
  );
}
