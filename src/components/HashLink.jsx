import { Link, useLocation } from "react-router-dom";

export function HashLink({ to, children, className, onClick, ...props }) {
  const location = useLocation();

  function handleClick(event) {
    onClick?.(event);
    const [path, hash] = to.split("#");
    const samePage = !path || path === location.pathname;

    if (hash && samePage) {
      event.preventDefault();
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", `#${hash}`);
    } else if (hash) {
      window.setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
    }
  }

  return (
    <Link className={className} to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
