// Everything personal on the site lives here: name, role, links, booking.

export const SITE = {
  url: "https://hellodemola.com",
  name: "Ademola Onasoga",
  nickname: "’Demola",
  handle: "hellodemola",
  role: "AI Product Engineer",
  tagline: "I build AI-powered products businesses can run on.",
  description:
    "Ademola Onasoga is an AI product engineer who builds web and mobile apps for iOS and Android, with a decade of shipping across fintech, insurance, healthcare, edtech, real estate and legal. Book a call to build yours.",
  current: { title: "Software Engineer" },
  previous: { title: "Engineering Manager", company: "Enyata" },
};

// 30-minute call on Ademola's Calendly. Every "Book a call" button opens it.
export const CALENDLY_URL = "https://calendly.com/ademola-onasoga/30min";

// Leave empty to hide the email link; booking and LinkedIn still work.
export const EMAIL = "hi@hellodemola.com";

export const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hellodemola" },
  { label: "X", href: "https://x.com/hellodemola" },
  { label: "YouTube", href: "https://www.youtube.com/@hellodemola3958" },
  { label: "GitHub", href: "https://github.com/hellodemola" },
] as const;

export const NAV = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
