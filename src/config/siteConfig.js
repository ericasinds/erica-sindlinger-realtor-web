import { brandPhotoData, headshotData, logoData } from "./imageData.js";

export const siteConfig = {
  name: "Erica Sindlinger",
  title: "Realtor",
  brand: "POP Realty",
  brokerage: "Sellstate",
  tagline: "People Over Profit",
  market: "Orlando / Central Florida",
  phone: "407-280-8199",
  email: "ERICA@ELEEREALTY.com",
  baseUrl: "https://erica-sindlinger-realtor-web.onrender.com",
  assets: {
    logo: logoData,
    headshot: headshotData,
    brandPhoto: brandPhotoData,
    logoAlt: "POP Realty People Over Profit powered by Sellstate logo",
    headshotAlt: "Erica Sindlinger, Orlando area Realtor",
    brandPhotoAlt: "Erica Sindlinger in a warm neutral interior setting"
  },
  colors: {
    cream: "#f7f1ec",
    warmWhite: "#fffdf9",
    blush: "#d8b9ad",
    taupe: "#a98f80",
    charcoal: "#171514",
    sage: "#7d8b75"
  },
  navigation: [
    { label: "About", path: "/about" },
    { label: "Buyers", path: "/buyers" },
    { label: "Sellers", path: "/sellers" },
    { label: "Service Areas", path: "/service-areas" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "Contact", path: "/contact" }
  ],
  socialLinks: {
    instagram: "#",
    tiktok: "#"
  },
  ctaLinks: {
    primary: "/contact",
    buyer: "/buyers",
    seller: "/sellers",
    valuation: "/contact"
  },
  seo: {
    defaultTitle: "Erica Sindlinger | Orlando Area Realtor",
    titleTemplate: "%s | Erica Sindlinger Realtor",
    description:
      "Erica Sindlinger is an Orlando and Central Florida Realtor with POP Realty powered by Sellstate, helping buyers and sellers move with clear, personal, relationship-first guidance.",
    image: brandPhotoData,
    twitterCard: "summary_large_image"
  },
  schema: {
    type: "RealEstateAgent",
    priceRange: "$$",
    addressLocality: "Orlando",
    addressRegion: "FL",
    areaServed: ["Orlando", "Central Florida", "Orange County", "Seminole County", "Volusia County", "Osceola County"]
  },
  serviceAreas: [
    { name: "Orlando", description: "Central Florida guidance for city living, established neighborhoods, and move-up decisions." },
    { name: "Winter Park", description: "Thoughtful support for buyers and sellers drawn to charm, design, and location." },
    { name: "Apopka", description: "Local help for families, first-time buyers, and sellers preparing for what is next." },
    { name: "Altamonte Springs", description: "Practical real estate guidance near work, schools, parks, and everyday convenience." },
    { name: "Maitland", description: "Personal support for clients looking for character, access, and long-term fit." },
    { name: "Lake Mary", description: "Clear strategy for buyers and sellers in one of Seminole County's most loved markets." },
    { name: "Sanford", description: "Guidance for historic homes, growing neighborhoods, and lifestyle-focused moves." },
    { name: "Clermont", description: "Support for buyers and sellers exploring west Central Florida space and views." },
    { name: "Windermere", description: "A calm, prepared approach for distinctive homes and higher-consideration moves." },
    { name: "Central Florida", description: "Relationship-first real estate help across Orlando and the surrounding counties." }
  ],
  buyerContent: {
    intro:
      "Buying a home should feel informed, not rushed. Erica helps you understand your options, compare homes clearly, and move forward when the fit is right.",
    steps: [
      { title: "Start with your life", text: "Clarify budget, timeline, must-haves, and the kind of home that supports your next chapter." },
      { title: "Learn the market", text: "Review local inventory, pricing, neighborhood context, and what strong offers look like." },
      { title: "Tour with intention", text: "Look beyond pretty photos and compare layout, condition, location, and long-term fit." },
      { title: "Offer and close", text: "Move through contracts, inspections, negotiations, and closing with steady guidance." }
    ]
  },
  sellerContent: {
    intro:
      "Selling well starts before the listing goes live. Erica helps you prepare, position, and market your home with care.",
    steps: [
      { title: "Prepare", text: "Walk through presentation, repairs, staging, and the small details that shape first impressions." },
      { title: "Price", text: "Use local data and real buyer behavior to choose a strategy that fits your goals." },
      { title: "Market", text: "Launch with clear messaging, strong visuals, and a plan to reach qualified buyers." },
      { title: "Negotiate", text: "Compare offers, protect your priorities, and move toward closing with confidence." }
    ]
  },
  form: {
    action: "",
    fields: ["name", "email", "phone", "timeline", "interest", "area", "message"],
    timelines: ["Now", "1-3 months", "3-6 months", "6+ months", "Just researching"],
    interests: ["Buying", "Selling", "Buying and selling", "Home valuation", "Just exploring"]
  },
  quizQuestions: [
    { name: "interest", label: "What are you thinking about?", options: ["Buying", "Selling", "Buying and selling", "Just exploring"] },
    { name: "timeline", label: "What timeline feels closest?", options: ["Now", "1-3 months", "3-6 months", "6+ months"] },
    { name: "area", label: "Which area are you interested in?", options: ["Orlando", "Winter Park", "Lake Mary", "Windermere", "Central Florida", "Not sure yet"] }
  ],
  testimonials: []
};
