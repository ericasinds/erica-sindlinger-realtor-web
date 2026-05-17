import LeadForm from "../components/LeadForm.jsx";
import PageHero from "../components/PageHero.jsx";
import SEO from "../components/SEO.jsx";
import SectionWrapper from "../components/SectionWrapper.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";
import { siteConfig } from "../config/siteConfig.js";

export default function Testimonials() {
  const hasTestimonials = siteConfig.testimonials.length > 0;

  return (
    <>
      <SEO
        title="Testimonials"
        description="Client stories and reviews for Erica Sindlinger, Orlando area Realtor with POP Realty powered by Sellstate."
      />
      <PageHero eyebrow="Client stories" title="Real reviews will be added here.">
        This page is ready for Erica's testimonials once real client reviews are available.
      </PageHero>

      <SectionWrapper>
        {hasTestimonials ? (
          <div className="grid three">
            {siteConfig.testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        ) : (
          <div className="card empty-state">
            <h2>Testimonials coming soon.</h2>
            <p>No placeholder reviews are displayed. When Erica adds real reviews in the site config, they will appear here automatically.</p>
          </div>
        )}
      </SectionWrapper>

      <SectionWrapper className="soft-section">
        <LeadForm title="Ready to talk through your move?" intro="Even before reviews are added, you can start with a simple conversation." />
      </SectionWrapper>
    </>
  );
}
