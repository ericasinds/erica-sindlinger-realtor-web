import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { siteConfig } from "../config/siteConfig.js";

function upsertMeta(selector, createAttrs, valueAttr, value) {
  let node = document.head.querySelector(selector);
  if (!node) {
    node = document.createElement("meta");
    Object.entries(createAttrs).forEach(([key, attrValue]) => node.setAttribute(key, attrValue));
    document.head.appendChild(node);
  }
  node.setAttribute(valueAttr, value);
}

export default function SEO({ title, description, image, type = "website", schema }) {
  const location = useLocation();
  const pageTitle = title ? siteConfig.seo.titleTemplate.replace("%s", title) : siteConfig.seo.defaultTitle;
  const pageDescription = description || siteConfig.seo.description;
  const canonical = `${siteConfig.baseUrl}${location.pathname === "/" ? "" : location.pathname}`;
  const imageUrl = image?.startsWith("http") ? image : `${siteConfig.baseUrl}${image || siteConfig.seo.image}`;

  useEffect(() => {
    document.title = pageTitle;
    upsertMeta('meta[name="description"]', { name: "description" }, "content", pageDescription);
    upsertMeta('meta[property="og:title"]', { property: "og:title" }, "content", pageTitle);
    upsertMeta('meta[property="og:description"]', { property: "og:description" }, "content", pageDescription);
    upsertMeta('meta[property="og:type"]', { property: "og:type" }, "content", type);
    upsertMeta('meta[property="og:url"]', { property: "og:url" }, "content", canonical);
    upsertMeta('meta[property="og:image"]', { property: "og:image" }, "content", imageUrl);
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card" }, "content", siteConfig.seo.twitterCard);
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title" }, "content", pageTitle);
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description" }, "content", pageDescription);
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image" }, "content", imageUrl);

    let canonicalNode = document.head.querySelector('link[rel="canonical"]');
    if (!canonicalNode) {
      canonicalNode = document.createElement("link");
      canonicalNode.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalNode);
    }
    canonicalNode.setAttribute("href", canonical);

    const schemaNodeId = "site-schema";
    document.getElementById(schemaNodeId)?.remove();
    const schemaNode = document.createElement("script");
    schemaNode.id = schemaNodeId;
    schemaNode.type = "application/ld+json";
    schemaNode.textContent = JSON.stringify(
      schema || {
        "@context": "https://schema.org",
        "@type": siteConfig.schema.type,
        name: siteConfig.name,
        brand: siteConfig.brand,
        description: siteConfig.seo.description,
        url: siteConfig.baseUrl,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        image: imageUrl,
        priceRange: siteConfig.schema.priceRange,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.schema.addressLocality,
          addressRegion: siteConfig.schema.addressRegion,
          addressCountry: "US"
        },
        areaServed: siteConfig.schema.areaServed
      }
    );
    document.head.appendChild(schemaNode);
  }, [canonical, imageUrl, pageDescription, pageTitle, schema, type]);

  return null;
}
