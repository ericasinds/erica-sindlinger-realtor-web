import { ArrowRight } from "lucide-react";
import { HashLink } from "./HashLink.jsx";
import { Link } from "react-router-dom";

export function CTAButton({ to, href, children, variant = "primary", icon = true, type = "button" }) {
  const content = (
    <>
      {children}
      {icon && <ArrowRight size={18} aria-hidden="true" />}
    </>
  );

  if (href) {
    return (
      <a className={`button ${variant}`} href={href}>
        {content}
      </a>
    );
  }

  if (to) {
    if (to.startsWith("#") || to.includes("#")) {
      return (
        <HashLink className={`button ${variant}`} to={to}>
          {content}
        </HashLink>
      );
    }
    return (
      <Link className={`button ${variant}`} to={to}>
        {content}
      </Link>
    );
  }

  return (
    <button className={`button ${variant}`} type={type}>
      {content}
    </button>
  );
}
