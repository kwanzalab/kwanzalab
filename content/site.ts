/**
 * Core site configuration. Edit values here — no code changes needed elsewhere.
 * Contact details and delivery are driven by environment variables (see README).
 */

const placeholderEmail = "contact@campuslab.example";

export const site = {
  name: "Campus Lab",
  parent: "KwanzaLabs",
  tagline: "Growing Greener Campuses. Empowering the Next Generation.",
  description:
    "Campus Lab is a youth-led environmental initiative by KwanzaLabs, launched in 2024 in Goma, DR Congo, empowering students to take practical climate action on their campuses.",
  founded: 2024,
  location: "Goma, North Kivu, Democratic Republic of Congo",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  /** Public contact email. Set NEXT_PUBLIC_CONTACT_EMAIL to replace the placeholder. */
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || placeholderEmail,
  emailConfigured: Boolean(process.env.NEXT_PUBLIC_CONTACT_EMAIL),
  /** Optional form endpoint (e.g. Formspree). When set, forms POST JSON here. */
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT || "",
  /** Leave `href` empty until the account exists — the link renders as "coming soon". */
  socials: [
    { label: "Instagram", href: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM ?? "" },
    { label: "LinkedIn", href: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN ?? "" },
    { label: "X", href: process.env.NEXT_PUBLIC_SOCIAL_X ?? "" },
    { label: "Facebook", href: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK ?? "" },
  ],
} as const;

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Our Initiatives", href: "#initiatives" },
  { label: "Our Impact", href: "#impact" },
  { label: "Get Involved", href: "#get-involved" },
  { label: "Contact", href: "#contact" },
] as const;

/**
 * Photography. Drop licensed photos into /public/images and set the path here,
 * e.g. hero: "/images/hero.jpg". While a slot is empty, a brand illustration is shown.
 */
export const photos: Record<
  "hero" | "about" | "expansion" | "greenCampuses" | "treePlanting" | "waste" | "education",
  { src?: string; alt: string; position?: string }
> = {
  hero: {
    src: "/images/hero-tree-planting.jpg",
    alt: "A group of young people in green t-shirts kneeling together to plant a seedling in red soil",
  },
  about: {
    src: "/images/about-classroom.jpg",
    alt: "A facilitator speaking to a classroom of seated students",
    position: "center 30%",
  },
  expansion: {
    src: "/images/kwanzalab-team.jpg",
    alt: "Three young men holding solar lamps they have built, standing in a workshop",
  },
  greenCampuses: {
    src: "/images/green-campuses.jpg",
    alt: "Students in matching navy shirts listening to a speaker holding a microphone",
    position: "70% center",
  },
  treePlanting: {
    src: "/images/tree-planting.jpg",
    alt: "Two young people planting a tree seedling in a field",
  },
  waste: {
    src: "/images/waste-sorting.jpg",
    alt: "Women sorting plastic bottles into piles for recycling",
  },
  education: {
    src: "/images/climate-workshop.jpg",
    alt: "Participants in a workshop gathered around a table with sticky notes on the wall behind them",
    position: "center 40%",
  },
};
