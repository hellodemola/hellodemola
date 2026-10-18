// Case studies. Facts come from the live sites and the code; there are no
// invented metrics. Order here is the order on the site.

export type Project = {
  slug: string;
  name: string;
  industry: string;
  location: string;
  summary: string;
  url: string;
  urlLabel: string;
  image: string;
  /** Brand logo under public/logos, shown in the "Shipped for" strip. */
  logo: string;
  /** Phone-width capture under public/work/mobile, shown in an iPhone frame. */
  mobile?: string;
  /** More desktop captures, shown in MacBook frames on the case study. */
  gallery?: { src: string; caption: string }[];
  role: string;
  stack: string[];
  brief: string[];
  built: { title: string; body: string }[];
  outcome: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "yousure",
    name: "Yousure",
    industry: "InsurTech",
    location: "Nigeria",
    summary:
      "The health insurance platform I co-founded: businesses and families compare HMO plans side by side at their true cost, and insurance brokers run their whole book in a SaaS workspace.",
    url: "https://yousure.ng",
    urlLabel: "yousure.ng",
    image: "/work/yousure.jpg",
    logo: "/logos/yousure.svg",
    mobile: "/work/mobile/yousure.jpg",
    gallery: [{ src: "/work/brokers.jpg", caption: "Yousure Brokers, the SaaS workspace for insurance brokers at brokers.yousure.ng" }],
    role: "Co-founder · Product and engineering",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Prisma", "TanStack Query", "Resend", "Vercel"],
    brief: [
      "Buying health cover in Nigeria is opaque. HMO plans differ by hospital network, benefits and pricing tier, quotes arrive as PDFs, and HR leads and founders can’t compare like for like. Brokers, who sell most of it, run their clients on spreadsheets, email threads and WhatsApp groups.",
      "I co-founded Yousure to fix both sides, and I own product and engineering end to end: the marketplace, the admin and operations tools, the API and database, and a SaaS product for brokers.",
    ],
    built: [
      { title: "Plan comparison for businesses", body: "Enter headcount and budget and see every matching HMO plan in one table, with the true annual cost per employee. Then shortlist, compare, request a quote, get sign-off from the CEO or CFO, and enrol the team." },
      { title: "Plans for individuals and families", body: "A three-step flow for individuals, couples and families: personalise, review coverage and savings, compare, verify and buy." },
      { title: "Hospitals, insurers and search", body: "A searchable hospital network, a page for every HMO, head-to-head comparison pages and a blog. Plan data is rendered in the HTML and the sitemap for search engines, and every page has its own share card." },
      { title: "Admin and operations", body: "An admin portal for plans, benefits, categories, insurers and hospitals; bulk plan imports from Excel with row-by-row review; a deals CRM with customers, payments and printable invoices; and a full audit log." },
      { title: "The API underneath", body: "An Express and TypeScript API on PostgreSQL with Prisma: authentication and roles, audit trails, scheduled jobs, referral and share links, and activity insights showing which plans get viewed, compared, shared and quoted. Customer email replies thread back into the right deal automatically." },
      { title: "Yousure Brokers, a SaaS product", body: "A multi-tenant workspace at brokers.yousure.ng. Brokers import their book, turn insurers’ quotes into branded proposals clients open from a link, then handle placement slips, debit notes, renewals with 90/60/30-day reminders, claims, commission reconciliation and reports, with roles and strict separation between firms." },
    ],
    outcome: [
      "Two live products on one platform and API: a marketplace for buyers at yousure.ng, and a subscription workspace for brokers at brokers.yousure.ng.",
    ],
  },
  {
    slug: "kjb",
    name: "KJB Professional Services",
    industry: "Tax and advisory",
    location: "Lagos & Abuja",
    summary:
      "The new kjb.ng for an award-winning tax, audit and advisory firm: tax-reform guides, 2026 tax calculators, and booking with the Managing Partner.",
    url: "https://kjb.ng",
    urlLabel: "kjb.ng",
    image: "/work/kjb.jpg",
    logo: "/logos/kjb.svg",
    mobile: "/work/mobile/kjb.jpg",
    role: "Design and full build",
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Calendly", "Vercel"],
    brief: [
      "KJB is a Nigerian tax, audit and advisory firm, named West Africa’s Most Innovative Professional Services Firm of 2025. When four new tax laws took effect on 1 January 2026, every client had the same questions.",
      "The firm needed a site that answers those questions with authority and turns readers into consultations with its Managing Partner.",
    ],
    built: [
      { title: "2026 tax calculators", body: "PAYE, VAT and company tax calculators under the Nigeria Tax Act 2025, so visitors can run their own numbers before they call." },
      { title: "An insights library", body: "Ten plain-English guides to the reform: the new PAYE bands, rent relief, the development levy, minimum tax, VAT, e-invoicing, and penalties." },
      { title: "Services and credibility", body: "A page for each of the firm’s six services, a gallery of 21 awards, and a Managing Partner profile with a photo reel." },
      { title: "Booking built in", body: "Every “Book a consultation” button opens the Managing Partner’s scheduler, so a reader can go from a guide to a meeting in two clicks." },
      { title: "Share cards", body: "Each page and guide has its own social image with its headline and photo, so links shared on WhatsApp and LinkedIn explain themselves." },
    ],
    outcome: [
      "A fast, authoritative site that answers what clients are asking about the new tax laws, then gets them booked in.",
    ],
  },
  {
    slug: "worrington",
    name: "Worrington & Co.",
    industry: "Legal",
    location: "Lagos & London",
    summary:
      "A website for a business law firm in Lagos and London that presents its capital markets work clearly and turns visitors into consultation requests.",
    url: "https://worrington.com",
    urlLabel: "worrington.com",
    image: "/work/worrington.jpg",
    logo: "/logos/worrington.svg",
    mobile: "/work/mobile/worrington.jpg",
    role: "Design and full build",
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Resend", "Vercel"],
    brief: [
      "Worrington advises issuers, investors and businesses on private placements, debt raises, M&A and disputes. Their clients are CFOs and founders who want to know, quickly, whether this firm has done deals like theirs.",
      "The firm needed a site that reads like a serious practice, shows its track record without breaching confidentiality, and makes it easy to ask for a consultation.",
    ],
    built: [
      { title: "A homepage that sells the firm in one scroll", body: "A rotating hero covering the firm’s four strengths (business counsel, Lagos–London reach, capital markets and track record), each with its own call to action." },
      { title: "Practice area and team pages", body: "Five practice areas and the partners’ bios, each on its own page and generated from typed content files, so the firm can update copy without touching layout code." },
      { title: "Track record without names", body: "Landmark mandates such as a ₦7 billion private placement programme and a ₦20 billion film fund, described in enough detail to build trust while keeping clients anonymous." },
      { title: "A contact form with no CAPTCHA", body: "Enquiries arrive by email through Resend. A hidden honeypot field and a timing check stop bots without making real clients solve puzzles." },
      { title: "Ready to share", body: "Custom social share images and metadata, so links shared on LinkedIn and WhatsApp look professional." },
    ],
    outcome: [
      "The firm has a credible, fast site to send prospective clients to, and every “Book a consultation” button leads to one simple enquiry flow.",
    ],
  },
  {
    slug: "zeal-open-university",
    name: "Zeal Open University",
    industry: "EdTech",
    location: "Online",
    summary:
      "The public website for an online university offering accredited degrees with apprenticeships and professional certifications built in.",
    url: "https://www.zealopen.university/",
    urlLabel: "zealopen.university",
    image: "/work/zeal.jpg",
    logo: "/logos/zeal.png",
    role: "Frontend engineering",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion"],
    brief: [
      "Zeal promises an accredited degree “anytime, anywhere”, with hands-on apprenticeships and mentorship. Prospective students arrive with many questions: which schools, what it costs, how admission works, and what learning online is actually like.",
      "The site had to carry a curriculum-heavy structure while staying clear for first-time visitors and accessible on any device.",
    ],
    built: [
      { title: "Navigation for a whole university", body: "About, Faculty, Admission, Tuition, Virtual Lab, LMS, Knowledge Hub and E-Library, organised so a student can get from “curious” to “applying” without getting lost." },
      { title: "School and programme pages", body: "Pages for the School of Computing and Technology and the School of Social Sciences and Management, with their programmes and what students gain." },
      { title: "Admissions and tuition", body: "Clear routes from every page to apply, with tuition laid out plainly." },
      { title: "Learning resources", body: "Entry points to the e-library, knowledge hub and virtual lab, so the site works for current students as well as applicants." },
    ],
    outcome: [
      "One place for applicants to understand the university and apply, built with product and design to keep content clear and accessible.",
    ],
  },
  {
    slug: "abf-accounting",
    name: "ABF Accounting Services",
    industry: "FinTech",
    location: "United Kingdom",
    summary:
      "An online accounting service for UK sole traders, limited companies, freelancers and contractors, with transparent plans and instant quotes.",
    url: "https://abfaccounting.com",
    urlLabel: "abfaccounting.com",
    image: "/work/abf.jpg",
    logo: "/logos/abf.png",
    role: "Frontend engineering",
    stack: ["Next.js", "React", "TypeScript"],
    brief: [
      "ABF sells bookkeeping, tax returns, payroll, VAT and company formation to small UK businesses. Their customers compare accountants on price, so the site has to make plans and prices obvious and make buying easy.",
    ],
    built: [
      { title: "Plans and pricing that sell", body: "Plans for sole traders, limited companies, contractors, freelancers and LLPs, with monthly and one-off prices side by side." },
      { title: "Quote and buy flows", body: "“Instant quote” and “Buy now” paths from the homepage, plus a request-a-call-back route for customers who prefer to talk first." },
      { title: "Who-we-help and service pages", body: "Pages for each customer type and each service, from Self Assessment to R&D tax credits, so visitors find their situation fast." },
      { title: "Business starter and resources", body: "Content for new founders that brings in search traffic and leads to the right plan." },
    ],
    outcome: [
      "A responsive marketing and sales site where pricing is clear and every page leads to a quote, a purchase or a call.",
    ],
  },
  {
    slug: "zhill-systems",
    name: "Zhill Systems",
    industry: "EdTech",
    location: "USA, UK & Nigeria",
    summary:
      "The platform for a consulting, training and talent firm that has trained over 3,000 professionals across 13 countries.",
    url: "https://www.zhillsystems.com/",
    urlLabel: "zhillsystems.com",
    image: "/work/zhill.jpg",
    logo: "/logos/zhill.png",
    role: "Web interface engineering",
    stack: ["React", "TypeScript", "Node.js"],
    brief: [
      "Zhill serves two audiences at once: organisations buying agile and digital transformation, and individuals growing their careers through training and certification.",
      "The site needed to serve both, plus the people running it, across several user roles.",
    ],
    built: [
      { title: "Education and events", body: "Upcoming training, past events, credential verification, and role and certification comparisons." },
      { title: "Talent and careers", body: "Career listings, a job gateway to popular boards, and a career advisor for people changing direction." },
      { title: "Accounts and roles", body: "Sign-in and onboarding, and reusable UI components for complex data across administrator and member roles." },
      { title: "Enterprise tools", body: "An Enterprise Agile Health Check that organisations use to gauge their agile maturity." },
    ],
    outcome: [
      "One product serving enterprise clients and individual learners, with interface components that scale as new programmes are added.",
    ],
  },
  {
    slug: "covek-properties",
    name: "Covek Properties",
    industry: "Real estate",
    location: "Lekki, Lagos",
    summary:
      "A full web product for a Lagos real estate firm: property search, listings, a flagship estate and lead capture for buyers and agents.",
    url: "https://www.covekproperties.com",
    urlLabel: "covekproperties.com",
    image: "/work/covek.jpg",
    logo: "/logos/covek.png",
    role: "Full web build",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    brief: [
      "Covek sells, leases, develops and manages property in Lekki, Ikoyi and Victoria Island. They needed a site that does real work: helps buyers and renters find property and turns interest into conversations with the sales team.",
    ],
    built: [
      { title: "Property search", body: "Filters for buy, rent and new developments; property types from flats to land and off-plan; and areas across Ikoyi, Lekki and Victoria Island." },
      { title: "A flagship project page", body: "A dedicated page and gallery for Kayla’s Court, a smart-home estate in Osapa London, including its initial deposit." },
      { title: "Lead generation", body: "An enquiry form that asks whether you’re an individual or an agent, a registration call to action for homeowners and investors, and a market-updates newsletter." },
      { title: "Always one tap away", body: "WhatsApp and social links fixed to the side of every page, because that’s where Lagos buyers prefer to talk." },
    ],
    outcome: [
      "A responsive app that works for buyers and agents, and sends every enquiry straight to Covek’s team.",
    ],
  },
];

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);
