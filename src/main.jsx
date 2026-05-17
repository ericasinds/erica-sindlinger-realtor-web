import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import About from "./pages/About.jsx";
import Buyers from "./pages/Buyers.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import Sellers from "./pages/Sellers.jsx";
import ServiceAreas from "./pages/ServiceAreas.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import { themeCss } from "./styles/themeParts.js";

const style = document.createElement("style");
style.textContent = themeCss;
document.head.appendChild(style);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="buyers" element={<Buyers />} />
          <Route path="sellers" element={<Sellers />} />
          <Route path="service-areas" element={<ServiceAreas />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
