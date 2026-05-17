import { Instagram, Music2 } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "../siteConfig.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <h2>{siteConfig.name}</h2>
        <p>
          {siteConfig.title} with {siteConfig.brokerage}. Serving Central Florida
          with relationship-first real estate guidance.
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
