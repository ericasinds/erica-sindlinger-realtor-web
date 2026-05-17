import { Outlet } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
