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
        description="Explore Central Florida communities served by Erica Sindlinger, including Orlando, Winter Park, Lake Mary, Sanford, Windermere, Clermont, and nearby areas."
      />
      <PageHero eyebrow="Local service areas" title="Focused on Orlando and Central Florida communities.">
        Erica serves buyers and sellers across the Orlando area, with a primary focus on Central Florida communities where lifestyle, timing, and local fit matter.
      </PageHero>

      <SectionWrapper eyebrow="Communities" title="Editable area cards for future local SEO pages.">
        <div className="grid three">
          {siteConfig.serviceAreas.map((area) => (
            <ServiceAreaCard key={area.name} area={area} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="soft-section">
        <LeadForm title="Ask About an Area" intro="Curious about a specific Central Florida community? Share what you are considering." />
      </SectionWrapper>
    </>
  );
}
