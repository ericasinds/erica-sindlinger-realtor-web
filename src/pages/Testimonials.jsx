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
        description="Client stories and reviews for Erica Sindlinger, Central Florida Realtor with Pop Realty powered by Sellstate."
      />
      <PageHero eyebrow="Client stories" title="Real reviews will be added here.">
        Erica does not use placeholder reviews. This page is ready for real client testimonials once they are added.
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
            <p>No fake reviews are displayed. When Erica adds real testimonials in the site config, they will appear here automatically.</p>
            <p>Until then, the best way to get a feel for Erica's approach is to schedule a no-pressure consultation.</p>
          </div>
        )}
      </SectionWrapper>

      <SectionWrapper className="soft-section">
        <LeadForm title="Ready to talk through your move?" intro="Even before reviews are added, you can start with a simple conversation." />
      </SectionWrapper>
    </>
  );
}
