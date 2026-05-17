import { Outlet } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import { HashLink } from "./components/HashLink.jsx";
import { siteConfig } from "./config/siteConfig.js";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <div className="sticky-actions" aria-label="Quick actions">
        <HashLink to="/#home-plan">Start Quiz</HashLink>
        <a href={`tel:${siteConfig.phone.replaceAll("-", "")}`}>Call Erica</a>
      </div>
      <Footer />
    </>
  );
}
