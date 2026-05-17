import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { siteConfig } from "../config/siteConfig.js";
import { CTAButton } from "./Button.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Link className="brand" to="/" onClick={() => setOpen(false)} aria-label={`${siteConfig.name} home`}>
        <img className="brand-logo" src={siteConfig.assets.logo} alt={siteConfig.assets.logoAlt} />
        <span className="brand-text">
          <span>{siteConfig.name}</span>
          <small>{siteConfig.brandTagline}</small>
        </span>
      </Link>
      <button
        className="icon-button"
        onClick={() => setOpen((value) => !value)}
        aria-label="Toggle navigation"
        aria-expanded={open}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={open ? "nav open" : "nav"} aria-label="Main navigation">
        {siteConfig.navigation.map((item) => (
          <NavLink key={item.path} to={item.path} onClick={() => setOpen(false)}>
            {item.label}
          </NavLink>
        ))}
        <span className="nav-cta" onClick={() => setOpen(false)}>
          <CTAButton to="/contact" variant="primary">Start Here</CTAButton>
        </span>
      </nav>
    </header>
  );
}
