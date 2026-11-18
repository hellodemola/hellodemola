import type { Project } from "./projects";

// Work in progress, shown on /lab. As with the case studies, facts come from the
// code and the live previews, with no invented metrics. `outcome` says what's
// still open, so update it as each project moves. Order here is the order on the site.

export type LabProject = Omit<Project, "logo"> & {
  /** Where it stands today, in a few words. */
  status: string;
};

export const LAB_PROJECTS: LabProject[] = [
  {
    slug: "tiwa",
    name: "Tiwa",
    industry: "EdTech marketplace",
    location: "Nigeria and the diaspora",
    status: "In test mode",
    summary:
      "A two-sided marketplace where diaspora parents book vetted Nigerian teachers for live one-to-one lessons, pay in their own currency, and teachers are paid in naira.",
    url: "https://tiwa-omega.vercel.app",
    urlLabel: "tiwa-omega.vercel.app",
    image: "/work/lab/tiwa.jpg",
    mobile: "/work/lab/mobile/tiwa.jpg",
    role: "Design and full build",
    stack: ["Next.js 16", "React 19", "TypeScript", "Firebase Auth", "Firestore", "Vercel Blob", "Resend", "Vitest"],
    brief: [
      "Families abroad want their children to keep Nigerian languages, culture and school subjects close. Teachers at home can teach them, but time zones, currencies and trust all get in the way.",
      "The platform has to handle all of that in one place: a parent in London pays in pounds and sees London time, a teacher in Lagos is paid in naira and sees Lagos time, and the vetting has to hold up because the learners are children. “Tiwa”, Yoruba for “ours”, is a working name.",
    ],
    built: [
      { title: "One repo, four products", body: "A public site, a family app for booking and checkout, a teacher app, and an admin console for platform staff." },
      { title: "Paying across currencies", body: "Parents pay in GBP, USD, CAD or EUR. All money is stored as whole pence and kobo, and every movement runs in a database transaction with its own ledger entry." },
      { title: "Booking across time zones", body: "Times are stored in UTC and shown in each person’s zone. Bookings lock 15-minute blocks, so a teacher can’t be booked twice for the same slot." },
      { title: "Teacher vetting", body: "Applicants upload documents to a private store. Admins read them only through a logged route, and teachers can upload only to their own folder." },
      { title: "No data access from the browser", body: "The database rules deny all browser access. Every read and write goes through server code that checks the caller’s role, so nobody can edit a booking or wallet from their browser." },
      { title: "Tested rules", body: "Money, cancellation and time-zone rules live in one place as pure functions with tests, alongside separate tests for the booking and money flows." },
    ],
    outcome: [
      "The product runs end to end in test mode: card payments are simulated and no real money moves, which the site says at the top of every page.",
      "Still to come before launch: a real payment provider, bank payouts beyond the manual weekly batch, the legal documents, and the final name and brand.",
    ],
  },
  {
    slug: "zeal-open-university-redesign",
    name: "Zeal Open University, redesigned",
    industry: "EdTech",
    location: "Online",
    status: "Awaiting NUC licence",
    summary:
      "A fresh redesign of the Zeal Open University site in the university’s brand colours: six online degrees across two faculties, admission routes, student support, and a share card for every page.",
    url: "https://zeal-university-redesign.vercel.app",
    urlLabel: "zeal-university-redesign.vercel.app",
    image: "/work/lab/zeal.jpg",
    mobile: "/work/lab/mobile/zeal.jpg",
    role: "Design and frontend build",
    stack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS v4", "GSAP", "Lenis", "Vercel"],
    brief: [
      "I’d already built the university’s first public site. Ahead of its planned January 2027 admissions, Zeal wanted the site to feel like its brand: bolder colour, more movement, and the same clear routes from curious to applying.",
      "The licence from the National Universities Commission is still in progress, so the site has to be ambitious without promising anything the university can’t say yet.",
    ],
    built: [
      { title: "Brand colour throughout", body: "Zeal’s blues carry whole sections instead of sitting on white, with a banner on every page saying NUC licensing is in progress and when admissions are planned." },
      { title: "Six degrees, two faculties", body: "Computer Science, Data Science, Cyber Security and Software Engineering in the Faculty of Computing; Accounting and Business Administration in Social Sciences and Management." },
      { title: "Admission routes", body: "100 Level, Direct Entry and transfer of credit into 200 Level, each with its own path, with international admission marked as coming soon." },
      { title: "Student support, explained", body: "The Onboarding Buddy, the Success Buddy and access to faculty within three hours, set out so applicants can see how they’ll be looked after online." },
      { title: "Scroll effects and share cards", body: "Smooth scrolling and scroll-driven motion through the pages, and a social image for every page in Zeal’s colours." },
    ],
    outcome: [
      "The redesign is built and running on a preview address. It goes live on the university’s domain when the client signs it off, with licensing copy updated as the NUC process moves.",
    ],
  },
  {
    slug: "capitano-nigeria",
    name: "Capitano Nigeria",
    industry: "Agro-commodity export",
    location: "Lagos",
    status: "On a preview address",
    summary:
      "A site for a Lagos exporter of hibiscus, sesame, ginger, cashew, tiger nuts and more: nine commodities with published specifications, the farm-to-port process, and a quote request for overseas buyers.",
    url: "https://capitano-nigeria.vercel.app",
    urlLabel: "capitano-nigeria.vercel.app",
    image: "/work/lab/capitano.jpg",
    mobile: "/work/lab/mobile/capitano.jpg",
    role: "Design and full build",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    brief: [
      "Capitano sources commodities from Nigerian farms, cleans and processes them in its own plant, and ships them from Lagos to buyers in Europe, Asia and the Americas. Those buyers decide on specifications and paperwork long before they decide on price.",
      "The site needed to read like a serious exporter: exact grades for every product, proof the company is registered, and a quick way to ask for a price.",
    ],
    built: [
      { title: "Nine commodities, each with a spec", body: "A page for every product, from 99% purity sesame and split ginger under 8% moisture to Ogbomosho cashew and Ayin hardwood charcoal, with the grade buyers can hold the company to." },
      { title: "From farm to container", body: "Six steps from sourcing to shipping, with the plant’s real capacities: a 140 MT a day cleaning line, a colour sorter and a 200 MT a day ginger line." },
      { title: "Registration and memberships", body: "The company’s RC number and its memberships of NEPC, the Nigerian Shippers’ Council, LCCI and the charcoal exporters’ association, up front where buyers look for them." },
      { title: "Terms and documents", body: "Payment terms, loading port, container sizes, packaging and the full set of shipping documents, so a buyer knows what to expect before writing in." },
      { title: "Request a quote", body: "A quote request that asks for the commodity, volume and destination port, the three things the team needs to reply with a price and schedule." },
    ],
    outcome: [
      "The site is built and running on a preview address, not yet on the company’s own domain.",
    ],
  },
  {
    slug: "imaginations-school-pta",
    name: "Imaginations School PTA",
    industry: "School community",
    location: "Ilupeju, Lagos",
    status: "Waiting on the executive’s details",
    summary:
      "A home for the Parent-Teacher Association of Imaginations School: how the PTA works, what it does, its executives and events, and a quick way for parents to confirm payments and attendance.",
    url: "https://imaginations-pta.vercel.app",
    urlLabel: "imaginations-pta.vercel.app",
    image: "/work/lab/pta.jpg",
    mobile: "/work/lab/mobile/pta.jpg",
    role: "Design and full build",
    stack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS v4", "GSAP", "Lenis", "Vercel"],
    brief: [
      "A school PTA runs on WhatsApp groups and printed notices. Meeting dates get lost, new parents don’t know how anything works, and the treasurer spends evenings matching bank alerts to children.",
      "The site needed to be warm enough for parents and simple enough for a volunteer executive to keep up to date.",
    ],
    built: [
      { title: "The next meeting, counting down", body: "The home page leads with the next event and a live countdown, then what the PTA is and what it does." },
      { title: "Events with RSVP", body: "A page for every meeting and celebration with its date, time and venue, and an attendance button on the ones that need numbers." },
      { title: "Confirm a payment without a backend", body: "Parents fill in the child, class, purpose, amount and bank reference, and the site writes it into a WhatsApp message to the PTA, with email as a fallback. Nothing is stored on the site." },
      { title: "Easy for the executive to edit", body: "Every word, event and executive lives in one content file, with the details still to confirm marked clearly." },
      { title: "Share cards on every page", body: "Each page and event has its own social image, so a link dropped in the parents’ group explains itself." },
    ],
    outcome: [
      "The site is built. Before launch it needs the executive to confirm names, dates, the PTA’s WhatsApp number and the domain.",
    ],
  },
  {
    slug: "onasoga-family",
    name: "The Onasoga Family",
    industry: "Family heritage",
    location: "Ilishan-Remo, Ogun State",
    status: "Waiting on the family’s stories",
    summary:
      "A family website for the house of HRM Oba Jonathan Onasoga, Olofin of Ilishan-Remo: his story, the town, a family tree, stories read aloud, Yoruba words and a quiz for the grandchildren.",
    url: "https://onasoga-family.vercel.app",
    urlLabel: "onasoga-family.vercel.app",
    image: "/work/lab/onasoga.jpg",
    mobile: "/work/lab/mobile/onasoga.jpg",
    role: "Design and full build",
    stack: ["React 19", "TypeScript", "Vite", "Tailwind CSS v4", "Vercel"],
    brief: [
      "Family history lives in the memories of the elders. The grandchildren, many of them abroad, know the name but not the stories, the town or the language.",
      "The site needed to be something the elders are proud of and the children actually open, and it had to be easy for the family to fill in over time.",
    ],
    built: [
      { title: "Ten chapters", body: "The Oba, Ilishan, a timeline, the family tree, stories, royal symbols, Learn Yoruba, a quiz, dates and a gallery, each its own page with a link to the next." },
      { title: "A family tree that draws itself", body: "Add a child under anyone in the content file and the tree redraws, however many branches the family grows." },
      { title: "Stories read aloud", body: "Evening stories for the little ones, with a button that reads each one aloud in the browser." },
      { title: "For the grandchildren", body: "First Yoruba words, the meaning of the crown, the whisk and the beads, and a quiz on the family and the town." },
      { title: "Gaps that show", body: "Everything the site says lives in one file. Details still to come are in square brackets and show faded, so the family can see at a glance what to ask the elders. Birthdays show month and day only, never ages." },
    ],
    outcome: [
      "The site is up with the Oba’s portrait and the town’s history. Next come the family’s own stories, names and photographs.",
    ],
  },
  {
    slug: "unilag-business-education-2012",
    name: "UNILAG Business Education Alumni",
    industry: "Alumni community",
    location: "Lagos",
    status: "Collecting names and photos",
    summary:
      "A home for the University of Lagos Business Education set of 2008–2012: a roll call, the exco, shared memories, and a simple way for classmates to find each other again.",
    url: "https://unilag-buzed-2012.vercel.app",
    urlLabel: "unilag-buzed-2012.vercel.app",
    image: "/work/lab/unilag.jpg",
    mobile: "/work/lab/mobile/unilag.jpg",
    role: "Design and full build",
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS v4", "GSAP", "Lenis", "Vercel"],
    brief: [
      "A university set scatters across cities and careers after graduation. Group chats keep some people in touch, but there’s nowhere that holds who was in the set, who leads it, and the photos everybody still has somewhere.",
      "With no photos to start from, the site had to carry itself on type and motion, and stay honest about what’s still missing instead of filling the gaps with made-up names.",
    ],
    built: [
      { title: "A hero that counts the years", body: "Scrolling rolls a huge year from 2008 over to 2012, digit by digit, and then a gold circle opens onto “Four years. One set.”" },
      { title: "Four years, sideways", body: "On desktop, 100 to 400 Level travel past horizontally as you scroll down, with outlined numerals moving at their own speed." },
      { title: "Roll call and exco", body: "A searchable roll call and a page for the set’s executives, both driven from one small config file so names can go up without touching the layout." },
      { title: "Joining without a backend", body: "The form writes a classmate’s details into a WhatsApp message they post to the group themselves. The site stores nothing." },
      { title: "Motion throughout", body: "A preloader, page-change curtains, a tilted ribbon that leans with scroll speed, magnetic buttons and a footer revealed as the page lifts away, all switched off for people who prefer reduced motion." },
    ],
    outcome: [
      "The site is up, with empty states standing in for what the set hasn’t sent yet. Next come the real names, the exco and the photos.",
    ],
  },
  {
    slug: "amel-susan",
    name: "Amel Susan",
    industry: "Food manufacturing",
    location: "Ejigbo, Lagos",
    status: "On a preview address",
    summary:
      "A brand site for Amel Susan, the baking and breakfast range from Amel International Services: the full product line, dealers by state, and a route for new distributors.",
    url: "https://amel-susan-coral.vercel.app",
    urlLabel: "amel-susan-coral.vercel.app",
    image: "/work/lab/amel.jpg",
    mobile: "/work/lab/mobile/amel.jpg",
    role: "Design and full build",
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS v4", "GSAP", "Lenis", "Vercel"],
    brief: [
      "Amel Susan sells custards, cocoa, creamer, icing sugar and other staples to households and bakeries. A food brand like that has two audiences: people who want to find the products, and traders who want to stock them.",
      "The site needed to make everyday packaged goods look appetising and give both audiences an obvious next step.",
    ],
    built: [
      { title: "Two product lines", body: "Breakfast and baking each have their own character, with a page for every product covering what it is and how people use it." },
      { title: "Find a dealer", body: "Pick your state and get the route to the nearest breakfast or baking dealer through the sales team." },
      { title: "Become a distributor", body: "A clear pitch for traders and an application that goes straight to the sales inbox." },
      { title: "Product enquiries", body: "Each product page has an enquiry already addressed and filled in, so a trader can ask about that exact item in one tap." },
      { title: "Packshots that hold up", body: "Product photos sit on coloured panels that suit each pack, with scroll-driven motion through the home page." },
    ],
    outcome: [
      "The site is built and running on a preview address, not yet on the brand’s own domain.",
    ],
  },
];

export const getLabProject = (slug: string) => LAB_PROJECTS.find((p) => p.slug === slug);
