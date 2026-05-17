import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { siteConfig } from "../siteConfig.js";

const links = [
  ["About", "/about"],
  ["Buyers", "/buyers"],
  ["Sellers", "/sellers"],
  ["Service Areas", "/service-areas"],
  ["Testimonials", "/testimonials"],
  ["Contact", "/contact"]
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Link className="brand" to="/" onClick={() => setOpen(false)}>
        <span>{siteConfig.name}</span>
        <small>{siteConfig.title}</small>
      </Link>
      <button
        className="icon-button nav-toggle"
        onClick={() => setOpen((value) => !value)}
        aria-label="Toggle navigation"
        aria-expanded={open}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={open ? "nav open" : "nav"}>
        {links.map(([label, to]) => (
          <NavLink key={to} to={to} onClick={() => setOpen(false)}>
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
