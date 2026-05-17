import { brandPhotoData, headshotData, logoData } from "./imageData.js";

export const siteConfig = {
  name: "Erica Sindlinger",
  title: "Realtor",
  brand: "POP Realty",
  brokerage: "Pop Realty powered by Sellstate",
  brandTagline: "People Over Profit",
  tagline: "People Over Profit",
  market: "Greater Orlando / Central Florida",
  yearsInRealEstateStart: 2022,
  localSince: "lifelong Central Florida local",
  phone: "407-280-8199",
  email: "ERICA@ELEEREALTY.com",
  baseUrl: "https://erica-sindlinger-realtor-web.onrender.com",
  assets: {
    logo: logoData,
    headshot: headshotData,
    brandPhoto: brandPhotoData,
    logoAlt: "POP Realty People Over Profit powered by Sellstate logo",
    headshotAlt: "Erica Sindlinger, Central Florida Realtor",
    brandPhotoAlt: "Erica Sindlinger in a warm neutral interior setting"
  },
  brandColors: {
    cream: "#f7f1ec",
    warmWhite: "#fffdf9",
    taupe: "#a98f80",
    blush: "#d8b9ad",
    mauve: "#9f7f83",
    softGold: "#c2a66f",
    charcoal: "#171514",
    emerald: "#1f4739",
    navy: "#23354d"
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
  googleReviewsUrl: "",
  ctaLinks: {
    primary: "/#home-plan",
    consultation: "/contact",
    buyerQuiz: "/#home-plan",
    sellerQuiz: "/#home-plan",
    buyer: "/buyers",
    seller: "/sellers",
    valuation: "/contact"
  },
  seo: {
    defaultTitle: "Erica Sindlinger | Central Florida Realtor",
    titleTemplate: "%s | Erica Sindlinger Realtor",
    description:
      "Erica Sindlinger is a lifelong Central Florida local and Realtor with Pop Realty powered by Sellstate, helping buyers and sellers make informed, no-pressure decisions since 2022.",
    image: brandPhotoData,
    twitterCard: "summary_large_image"
  },
  schema: {
    type: "RealEstateAgent",
    priceRange: "$$",
    addressLocality: "Orlando",
    addressRegion: "FL",
    areaServed: [
      "Greater Orlando",
      "Central Florida",
      "Orange County",
      "Seminole County",
      "Lake County",
      "Osceola County",
      "Volusia County",
      "Polk County",
      "Marion County",
      "Hernando County"
    ]
  },
  primaryServiceAreas: ["Greater Orlando", "Orange County", "Seminole County"],
  extendedServiceAreas: ["Lake County", "Osceola County", "Volusia County", "Polk County", "Marion County", "Hernando County"],
  serviceAreaIntro:
    "Erica primarily serves Greater Orlando, Orange County, and Seminole County, with support across nearby Central Florida markets when it is the right fit for the client.",
  serviceAreas: [
    { name: "Greater Orlando", description: "Patient, local guidance for buyers and sellers navigating the heart of Central Florida." },
    { name: "Orange County", description: "Lifelong local insight for Orlando, Winter Park, Apopka, Maitland, Windermere, and nearby communities." },
    { name: "Seminole County", description: "Support across Lake Mary, Sanford, Altamonte Springs, and surrounding neighborhoods." },
    { name: "Lake County", description: "Thoughtful help for clients exploring space, value, and lifestyle west of Orlando." },
    { name: "Osceola County", description: "Clear guidance for buyers and sellers considering growth markets south of Orlando." },
    { name: "Volusia County", description: "Local-adjacent support for moves that extend toward the coast and surrounding communities." },
    { name: "Polk County", description: "Resource-driven representation for nearby markets when the search or sale expands." },
    { name: "Marion County", description: "Flexible guidance for clients whose goals reach into north Central Florida." },
    { name: "Hernando County", description: "Support through Erica's network and market knowledge when this area is the right match." },
    { name: "Central Florida", description: "People-first real estate help across the broader region, always grounded in honest guidance." }
  ],
  personalStory: {
    short:
      "Erica has lived in Central Florida her whole life. She grew up around home projects and flips through her dad, which gave her a lasting soft spot for homes and the stories they hold.",
    long: [
      "Erica grew up around homes because her dad bought and flipped houses while she was growing up. That early exposure shaped the way she sees potential, comfort, and the practical decisions that make a house work for real life.",
      "Homeownership was not something she saw modeled often in her immediate family or early life. That is part of why she cares so deeply about helping people understand the process, ask questions, and believe that owning a home can be possible for them.",
      "Her deeper why is helping people accomplish goals, especially clients who did not grow up seeing homeownership as something accessible. She wants people to feel informed, represented, and comfortable instead of rushed or pressured."
    ]
  },
  differentiators: [
    { title: "Patient, no-pressure guidance", text: "Erica does not want clients making fear-based or pressure-based decisions." },
    { title: "Clear education through every step", text: "She explains financing, contracts, inspections, negotiations, and next steps in plain language." },
    { title: "Strong contract negotiation", text: "Erica advocates hard for her clients and keeps their goals protected during the details." },
    { title: "Lifelong Central Florida knowledge", text: "Her local roots help clients understand areas, timing, lifestyle fit, and market context." },
    { title: "Resource-driven support network", text: "She uses her network and knowledge to help clients feel represented and supported." },
    { title: "Personalized strategy", text: "Every client has different needs, so Erica adapts her guidance instead of forcing one process." }
  ],
  whoIHelp: [
    { title: "First-time buyers", text: "Guidance for buyers who want the process explained clearly from the beginning." },
    { title: "Overwhelmed buyers", text: "Support for people who feel unsure where to start or nervous about making the wrong move." },
    { title: "Strategic sellers", text: "Honest pricing, preparation, and negotiation support for sellers who want a thoughtful plan." },
    { title: "Relocating clients", text: "Local context for buyers and sellers moving into, out of, or around Central Florida." },
    { title: "Education-first clients", text: "A good fit for people who value patience, advocacy, and clear information over pressure." }
  ],
  buyerContent: {
    intro:
      "Buying a home can feel confusing when no one slows down to explain the process. Erica helps buyers understand financing, neighborhoods, inspections, offers, negotiations, and next steps so they can move forward without fear or pressure.",
    steps: [
      { title: "Start with clarity", text: "Talk through budget, financing, timeline, questions, and what feels realistic before jumping into homes." },
      { title: "Learn the areas", text: "Compare neighborhoods, commute, lifestyle fit, and local market context across Central Florida." },
      { title: "Tour with confidence", text: "Look at layout, condition, inspection concerns, resale factors, and what each home would actually feel like to live in." },
      { title: "Offer and negotiate", text: "Understand the contract, terms, contingencies, inspections, repairs, appraisal, and closing steps." }
    ]
  },
  sellerContent: {
    intro:
      "Selling well starts with honest information. Erica helps sellers prepare the home, price with strategy, market thoughtfully, negotiate the full picture, and protect the goals behind the move.",
    steps: [
      { title: "Prepare honestly", text: "Walk through condition, presentation, repairs, and the details that shape buyer confidence." },
      { title: "Price with strategy", text: "Use local data and current buyer behavior to choose a pricing plan that supports your goals." },
      { title: "Market clearly", text: "Position the home with strong visuals, accurate messaging, and a plan to reach the right buyers." },
      { title: "Negotiate carefully", text: "Review price, terms, timing, contingencies, and risk so you can make an informed decision." }
    ]
  },
  form: {
    action: "",
    fields: ["name", "email", "phone", "timeline", "interest", "area", "message"],
    timelines: ["Now", "1-3 months", "3-6 months", "6+ months", "Just researching"],
    interests: ["Buying", "Selling", "Buying and selling", "Home valuation", "Just exploring"]
  },
  quizQuestions: [
    { name: "interest", label: "What are you hoping to do?", options: ["Buying", "Selling", "Both", "Just exploring"] },
    { name: "area", label: "What area are you interested in?", options: ["Greater Orlando", "Orange County", "Seminole County", "Lake County", "Osceola County", "Not sure yet"] },
    { name: "timeline", label: "What is your timeline?", options: ["Now", "1-3 months", "3-6 months", "6+ months", "Just researching"] },
    { name: "priceRange", label: "What price range or current home value range feels closest?", options: ["Under $300k", "$300k-$450k", "$450k-$650k", "$650k+", "Not sure yet"] },
    { name: "priority", label: "What feels most important right now?", options: ["Understanding the process", "Finding the right area", "Knowing what I can afford", "Pricing my home honestly", "Having someone advocate for me"] }
  ],
  quizContactFields: [
    { name: "name", label: "Name", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Phone", type: "tel", required: false }
  ],
  buyerQuizQuestions: [
    { name: "area", label: "What area are you hoping to buy in?", options: ["Greater Orlando", "Orange County", "Seminole County", "Lake County", "Osceola County", "Not sure yet"] },
    { name: "timeline", label: "When would you like to buy?", options: ["Now", "1-3 months", "3-6 months", "6+ months", "Just researching"] },
    { name: "priceRange", label: "What price range feels closest?", options: ["Under $300k", "$300k-$450k", "$450k-$650k", "$650k+", "Not sure yet"] },
    { name: "priority", label: "What would help most right now?", options: ["Understanding financing", "Finding the right area", "Learning the process", "Touring homes", "Talking through options"] }
  ],
  sellerQuizQuestions: [
    { name: "area", label: "Where is the home located?", options: ["Orange County", "Seminole County", "Lake County", "Osceola County", "Volusia County", "Other Central Florida area"] },
    { name: "timeline", label: "When are you thinking about selling?", options: ["Now", "1-3 months", "3-6 months", "6+ months", "Just researching"] },
    { name: "homeValue", label: "What value range feels closest?", options: ["Under $300k", "$300k-$450k", "$450k-$650k", "$650k+", "Not sure yet"] },
    { name: "priority", label: "What matters most right now?", options: ["Honest pricing", "Prep advice", "Marketing plan", "Timing the move", "Talking through options"] }
  ],
  testimonials: [],
  footerDisclaimer:
    "Erica Sindlinger is a Realtor with Pop Realty powered by Sellstate. Information on this website is for general guidance only and is not a guarantee of results, pricing, availability, or financing terms. Equal Housing Opportunity."
};
