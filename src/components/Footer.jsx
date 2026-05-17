import { Instagram, Music2 } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "../config/siteConfig.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <img className="footer-logo" src={siteConfig.assets.logo} alt={siteConfig.assets.logoAlt} loading="lazy" />
        <h2>{siteConfig.name}</h2>
        <p>
          {siteConfig.title} with {siteConfig.brand}, powered by {siteConfig.brokerage}.
          Serving Orlando and Central Florida with relationship-first guidance.
        </p>
      </div>
      <div className="footer-links">
        <a href={`tel:${siteConfig.phone.replaceAll("-", "")}`}>{siteConfig.phone}</a>
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        <Link to="/contact">Start Your Home Plan</Link>
      </div>
      <div className="socials" aria-label="Social links">
        <a href={siteConfig.socialLinks.instagram} aria-label="Instagram">
          <Instagram size={20} />
        </a>
        <a href={siteConfig.socialLinks.tiktok} aria-label="TikTok">
          <Music2 size={20} />
        </a>
      </div>
    </footer>
  );
}
