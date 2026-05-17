import { ArrowRight } from "lucide-react";
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
