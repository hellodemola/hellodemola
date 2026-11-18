// Insights: practical articles on AI for small and growing businesses in
// Nigeria. Written as structured blocks so they render with the site's own
// components. Inline text supports **bold** only.
// Covers are Unsplash (Unsplash License) and Pexels (Pexels License) photos.

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title: string; text: string };

export type ArticleTopic = "AI for SMEs" | "Nigeria’s economy" | "Building with AI";

export type Article = {
  slug: string;
  title: string;
  /** Words in the title set in the serif accent on the share card. */
  accent?: string;
  excerpt: string;
  topic: ArticleTopic;
  publishedAt: string;
  cover: { src: string; alt: string; credit: string };
  body: ArticleBlock[];
};

const unsplash = (id: string) => `https://unsplash.com/photos/${id}`;
const pexels = (id: number) => `https://www.pexels.com/photo/${id}/`;

export const ARTICLES: Article[] = [
  {
    slug: "where-ai-saves-a-small-business-time",
    title: "Where AI saves a small Nigerian business time every week",
    accent: "time",
    excerpt:
      "Forget robots and buzzwords. For most SMEs, AI pays off in five boring places: customer replies, invoices, bookkeeping, documents and follow-ups.",
    topic: "AI for SMEs",
    publishedAt: "2026-10-16",
    cover: { src: "/insights/small-business-owner.jpg", alt: "A small business owner smiling at her work table", credit: pexels(5934215) },
    body: [
      { type: "p", text: "Most business owners I speak to in Lagos and Abuja don’t want “an AI strategy”. They want their evenings back. The good news is that the jobs AI handles well today are exactly the repetitive ones that eat a small team’s week." },
      { type: "h2", text: "1. Answering the same customer questions" },
      { type: "p", text: "Opening hours, prices, delivery areas, how to pay. An assistant trained on your own price list and policies can answer these on WhatsApp or your website instantly, and hand anything unusual to a person. Your staff stop typing the same message forty times a day." },
      { type: "h2", text: "2. Turning messages into invoices and orders" },
      { type: "p", text: "Orders arrive as chat messages, voice notes and screenshots. AI can read them, pull out the items, quantities and address, and draft the invoice or order for someone to approve with one tap." },
      { type: "h2", text: "3. Sorting the books" },
      { type: "p", text: "Bank statements and receipts can be categorised automatically: rent, stock, fuel, salaries. Your accountant gets clean records instead of a shoebox, and you see where the money went this month without waiting for quarter end." },
      { type: "h2", text: "4. First drafts of documents" },
      { type: "p", text: "Proposals, job descriptions, policies, replies to difficult emails. AI writes a solid first draft in seconds; you edit for tone and facts. The rule is simple: **AI drafts, a person decides.**" },
      { type: "h2", text: "5. Following up so money doesn’t slip" },
      { type: "p", text: "Unpaid invoices, quotes that went quiet, customers due to reorder. A small automation can spot them and draft polite reminders, so follow-up happens even in a busy week." },
      { type: "callout", title: "Start with one", text: "Pick the job that annoys your team most, automate only that, and measure the hours saved for a month. If it works, do the next one." },
    ],
  },
  {
    slug: "ai-on-whatsapp-for-customer-service",
    title: "AI on WhatsApp: answering customers at 2am without hiring",
    accent: "2am",
    excerpt:
      "Your customers already message you on WhatsApp. Here is how to add an AI assistant that answers well, knows its limits, and hands over to a person at the right moment.",
    topic: "AI for SMEs",
    publishedAt: "2026-10-12",
    cover: { src: "/insights/phone-tech.jpg", alt: "A person using a smartphone", credit: unsplash("photo-1634313946117-25462979f178") },
    body: [
      { type: "p", text: "For many Nigerian businesses, WhatsApp is the shop front, the sales team and the complaints desk. The problem is that customers message at all hours and expect a reply in minutes. An AI assistant can cover the gaps, if you set it up carefully." },
      { type: "h2", text: "What a good assistant does" },
      { type: "ul", items: [
        "Answers from **your** information only: price list, menu, policies, delivery areas.",
        "Collects the details a person needs: name, order, location, preferred time.",
        "Says “I’ll pass this to the team” when it isn’t sure, instead of guessing.",
        "Writes in the customer’s style, including Pidgin where that is how they write.",
      ] },
      { type: "h2", text: "What it should never do" },
      { type: "ul", items: [
        "Promise refunds, discounts or delivery dates you haven’t approved.",
        "Take card details or passwords in chat.",
        "Pretend to be a person. Customers forgive a helpful assistant; they don’t forgive being misled.",
      ] },
      { type: "h2", text: "The handover is the product" },
      { type: "p", text: "The moment that matters most is when the assistant passes a conversation to your staff. They should see the whole chat and a one-line summary of what the customer wants, so nobody has to ask the customer to repeat themselves." },
      { type: "h2", text: "Measuring it" },
      { type: "p", text: "Track three numbers for a month: how many chats were fully answered by the assistant, how long customers waited for a person, and how many orders came in outside working hours. Those tell you, in naira, whether it is worth keeping." },
      { type: "callout", title: "Use the official route", text: "Build on the WhatsApp Business Platform rather than unofficial tools that automate a personal number. Unofficial tools risk getting your number banned, and that number is your business." },
    ],
  },
  {
    slug: "ai-bookkeeping-and-the-2026-tax-rules",
    title: "AI bookkeeping and Nigeria’s 2026 tax rules: getting records ready",
    accent: "records ready",
    excerpt:
      "The tax reforms that took effect in January 2026 reward businesses with clean, timely records. AI can do much of the sorting; your accountant still signs off.",
    topic: "Nigeria’s economy",
    publishedAt: "2026-10-08",
    cover: { src: "/insights/desk-payments.jpg", alt: "A professional reviewing payments at a desk", credit: unsplash("photo-1573164574308-edcb95e8b261") },
    body: [
      { type: "p", text: "Nigeria’s new tax laws took effect on 1 January 2026, and the direction is clear: more digital records, more e-invoicing, and less room for estimates. For a small business, the hard part isn’t the rules themselves. It’s having tidy records when your accountant asks for them." },
      { type: "h2", text: "Where AI helps" },
      { type: "ul", items: [
        "**Categorising transactions** from bank statements and POS exports as they happen, not in a rush at year end.",
        "**Reading receipts and invoices** from photos and PDFs, and matching them to payments.",
        "**Flagging gaps**: a payment with no invoice, an invoice with no payment, a supplier missing a tax ID.",
        "**Preparing summaries** your accountant can review quickly, which usually means a smaller bill.",
      ] },
      { type: "h2", text: "Where it doesn’t replace a professional" },
      { type: "p", text: "Which reliefs apply to you, how to treat a particular transaction, and what to file are judgement calls. AI can explain the rules in plain language, but it can be wrong with confidence. Use it to prepare, and let a qualified accountant or tax adviser decide." },
      { type: "h2", text: "A simple setup" },
      { type: "ol", items: [
        "Use one business bank account for business money. Mixing personal and business spending defeats any tool.",
        "Export statements monthly and let the tool categorise them; correct its mistakes so it learns your business.",
        "Photograph every receipt the day you get it.",
        "Review a one-page summary with your accountant each quarter.",
      ] },
      { type: "callout", title: "Check the details", text: "This article is general guidance, not tax advice. Rules, thresholds and e-invoicing timelines can change; confirm what applies to your business with a qualified adviser." },
    ],
  },
  {
    slug: "a-30-day-ai-pilot-for-smes",
    title: "A 30-day AI pilot for SMEs: small bet, clear answer",
    accent: "clear answer",
    excerpt:
      "Don’t start with a big AI project. Start with one process, one month and one number. Here is the plan I use with clients.",
    topic: "AI for SMEs",
    publishedAt: "2026-10-04",
    cover: { src: "/insights/team-discussion.jpg", alt: "A team discussing plans around a table", credit: unsplash("photo-1594098882270-66ce9399b040") },
    body: [
      { type: "p", text: "The fastest way to waste money on AI is to start big. The fastest way to learn whether it helps is a short, focused pilot with a number you can check. This is the plan I walk clients through." },
      { type: "h2", text: "Week 1: choose and measure" },
      { type: "p", text: "Pick one process that is repetitive, frequent and annoying: replying to enquiries, drafting quotes, sorting receipts. Then measure how it works today. How many per week? How long does each take? How often does it go wrong?" },
      { type: "h2", text: "Week 2: build the smallest version" },
      { type: "p", text: "Set up the simplest tool that could work, often an existing product configured for your business rather than custom software. Give it your real information: prices, policies, past examples." },
      { type: "h2", text: "Week 3: run it alongside people" },
      { type: "p", text: "Let staff use it with a person checking every output. Note where it is right, where it is wrong, and where it is “right but not how we’d say it”. Fix the instructions as you go." },
      { type: "h2", text: "Week 4: decide with numbers" },
      { type: "ul", items: [
        "Hours saved per week, multiplied by what those hours cost you.",
        "Errors compared with before.",
        "What staff and customers said.",
        "Monthly running cost, including the dollar-priced tools converted at today’s rate.",
      ] },
      { type: "callout", title: "Three possible answers", text: "Keep it and expand, keep it as it is, or stop it. All three are good outcomes, because you spent a month, not a year, finding out." },
    ],
  },
  {
    slug: "what-ai-costs-in-naira",
    title: "What AI really costs a Nigerian business, and how to keep it low",
    accent: "keep it low",
    excerpt:
      "Most AI tools are priced in dollars and billed by usage. Here is how to think about the cost in naira, and the habits that stop a useful tool becoming an expensive one.",
    topic: "Nigeria’s economy",
    publishedAt: "2026-09-30",
    cover: { src: "/insights/phone-desk.jpg", alt: "A professional reviewing figures at her desk", credit: unsplash("photo-1758876202167-f81c995c3fdc") },
    body: [
      { type: "p", text: "AI is cheaper than most people expect for the right jobs, and more expensive than they expect for the wrong ones. For Nigerian businesses there is an extra wrinkle: most tools bill in dollars, so the naira cost moves with the exchange rate." },
      { type: "h2", text: "The three kinds of cost" },
      { type: "ul", items: [
        "**Subscriptions**: a fixed monthly fee per user for tools like writing assistants.",
        "**Usage**: pay-per-use pricing for AI models built into your own systems, charged by the amount of text processed.",
        "**People**: the time to set it up, check its work and keep its instructions current. Often the biggest of the three.",
      ] },
      { type: "h2", text: "Keeping usage costs down" },
      { type: "ul", items: [
        "Use smaller, cheaper models for simple jobs like sorting and tagging, and save the most capable models for hard ones.",
        "Send only the information a task needs, not whole documents every time.",
        "Cache answers to common questions instead of generating them again.",
        "Set a monthly spending cap and an alert before you reach it.",
      ] },
      { type: "h2", text: "Planning for the exchange rate" },
      { type: "p", text: "Budget in naira with a buffer, review spend monthly, and prefer tools that let you pre-pay or cap usage. If a tool only makes sense at today’s exchange rate, it is too fragile to build your operations on." },
      { type: "callout", title: "The real comparison", text: "Don’t compare an AI tool’s cost with zero. Compare it with the staff hours it frees and the sales it stops you missing." },
    ],
  },
  {
    slug: "ai-and-the-nigeria-data-protection-act",
    title: "Using AI with customer data under the Nigeria Data Protection Act",
    accent: "customer data",
    excerpt:
      "Feeding customer information into AI tools is where well-meaning businesses get into trouble. A practical checklist for staying on the right side of the NDPA.",
    topic: "Nigeria’s economy",
    publishedAt: "2026-09-25",
    cover: { src: "/insights/workspace.jpg", alt: "A tidy office workspace", credit: unsplash("photo-1573164573938-c9a3db2e84ff") },
    body: [
      { type: "p", text: "The Nigeria Data Protection Act 2023 set out how businesses must collect, use and protect personal data, and created the Nigeria Data Protection Commission to enforce it. AI doesn’t change the rules, but it makes it very easy to break them by accident, for example by pasting a customer list into a chatbot." },
      { type: "h2", text: "A practical checklist" },
      { type: "ol", items: [
        "**Know what you hold**: list the personal data you collect and why.",
        "**Use business accounts** for AI tools, with settings that stop your data being used to train public models.",
        "**Share the minimum**: remove names, phone numbers and account details when a task doesn’t need them.",
        "**Check where data goes**: know which provider processes it and in which country.",
        "**Tell customers**: update your privacy notice to say you use automated tools and for what.",
        "**Keep a person in charge** of decisions that significantly affect someone, such as credit or hiring.",
      ] },
      { type: "h2", text: "Why it is worth the effort" },
      { type: "p", text: "Trust is a sales asset. Customers who believe you handle their data carefully share more of it, and better data makes your AI tools more useful. Treat privacy as part of the product, not paperwork." },
      { type: "callout", title: "Not legal advice", text: "This is a practical overview. For your specific obligations, including registration and audits, speak to a data protection professional or lawyer." },
    ],
  },
  {
    slug: "ai-for-nigerian-agribusiness-and-food-supply",
    title: "AI for agribusiness and food supply in Nigeria",
    accent: "food supply",
    excerpt:
      "From farm gate to market stall, food businesses run on guesswork about prices, demand and logistics. Practical ways AI can reduce waste and protect margins.",
    topic: "Nigeria’s economy",
    publishedAt: "2026-09-20",
    cover: { src: "/insights/lagos-lagoon.jpg", alt: "Boats on a lagoon in Lagos", credit: unsplash("photo-1744907895363-d351aa6019ef") },
    body: [
      { type: "p", text: "Food moves through many hands in Nigeria: farmers, aggregators, wholesalers, transporters, retailers. Each step loses value to spoilage, price swings and empty trucks. Most of these businesses are small, and most of their decisions are made from memory and phone calls. That is where AI can help." },
      { type: "h2", text: "Forecasting demand" },
      { type: "p", text: "Even simple sales history, combined with the calendar (festive seasons, school terms, Ramadan), can predict what customers will buy next week better than gut feel. Buying closer to real demand means less spoilage and less cash tied up in stock." },
      { type: "h2", text: "Pricing with better information" },
      { type: "p", text: "Collecting prices from suppliers and markets into one place, and summarising the trend each morning, helps buyers know when to buy and sellers know when to hold." },
      { type: "h2", text: "Smarter logistics" },
      { type: "ul", items: [
        "Grouping deliveries by area to cut fuel and time.",
        "Matching half-empty trucks with loads going the same way.",
        "Spotting routes and days where delays are common.",
      ] },
      { type: "h2", text: "Built for the field" },
      { type: "p", text: "Tools for this sector must work on basic Android phones, on patchy data, and in the languages people actually speak. A WhatsApp or SMS interface often beats a beautiful app nobody downloads." },
      { type: "callout", title: "Start with records", text: "AI can only learn from what is written down. The first step for most food businesses is simply recording sales, purchases and prices every day, even in a spreadsheet." },
    ],
  },
  {
    slug: "informal-businesses-and-ai",
    title: "Why Nigeria’s informal businesses are AI’s biggest opportunity",
    accent: "biggest opportunity",
    excerpt:
      "Market traders, artisans and small shops are the backbone of Nigeria’s economy, and the least served by software. AI that works through voice and chat could change that.",
    topic: "Nigeria’s economy",
    publishedAt: "2026-09-15",
    cover: { src: "/insights/shop-owner.jpg", alt: "A smiling shop owner standing at the entrance of his store", credit: pexels(8475183) },
    body: [
      { type: "p", text: "A large share of Nigerian businesses are informal: traders, tailors, mechanics, food sellers, small shops. They create much of the country’s employment, yet most software isn’t built for them. It assumes a laptop, a desk and fluent English." },
      { type: "h2", text: "What has changed" },
      { type: "p", text: "AI can now understand voice notes, read photos of handwritten records, and reply in Pidgin, Yoruba, Hausa or Igbo with growing accuracy. That means a trader can keep records by talking to their phone, the same way they already talk to customers." },
      { type: "h2", text: "What it could unlock" },
      { type: "ul", items: [
        "**Records without paperwork**: “I sold three bags of rice to Mama Bisi on credit” becomes a ledger entry.",
        "**Access to credit**: consistent records help lenders see a business’s real performance.",
        "**Better buying**: knowing what sells, and when, without a spreadsheet.",
        "**Formalisation on their terms**: registration and tax become easier when the records already exist.",
      ] },
      { type: "h2", text: "What builders must get right" },
      { type: "ul", items: [
        "Work on low-end phones and expensive data.",
        "Respect privacy and earn trust slowly.",
        "Make it useful on day one, before asking for anything in return.",
      ] },
      { type: "callout", title: "The lesson from fintech", text: "Mobile payments spread in Nigeria by fitting into how people already traded. AI tools for small businesses will spread the same way, or not at all." },
    ],
  },
  {
    slug: "hiring-vs-automating-for-startups",
    title: "Hiring vs automating: how AI changes a startup’s first hires",
    accent: "first hires",
    excerpt:
      "AI won’t replace your first team, but it changes who you hire first and what they spend their time on. A founder’s guide for Nigerian startups.",
    topic: "AI for SMEs",
    publishedAt: "2026-09-10",
    cover: { src: "/insights/entrepreneurs.jpg", alt: "Entrepreneurs working together", credit: unsplash("photo-1655720357872-ce227e4164ba") },
    body: [
      { type: "p", text: "As a co-founder, I think about this constantly. Every naira matters, and AI tools can now do parts of jobs that used to need a full-time hire. But automating too early can cost you the customer insight that only people pick up." },
      { type: "h2", text: "Automate the repeatable, hire for judgement" },
      { type: "p", text: "First drafts, data entry, first-line support answers and meeting notes are good candidates for AI. Selling, handling an unhappy customer, and deciding what to build next are not. Hire people for judgement and let tools carry the repetition." },
      { type: "h2", text: "How the first roles change" },
      { type: "ul", items: [
        "**Customer support**: one person with a good AI assistant can cover the volume that used to need several, and spends their time on the hard cases.",
        "**Operations**: an ops hire who can set up and maintain automations is worth more than one who does every task by hand.",
        "**Engineering**: AI coding tools make small teams faster, but you still need a senior engineer who knows what good looks like.",
        "**Content and marketing**: AI drafts; a person with taste and market knowledge decides what goes out.",
      ] },
      { type: "h2", text: "Don’t automate away your learning" },
      { type: "p", text: "In the early days, founders should do support and sales themselves, even if a tool could do it. Every conversation teaches you something about your market. Automate once you understand the job well enough to know when the tool gets it wrong." },
      { type: "callout", title: "A simple test", text: "If you can write down exactly how a task should be done, it can probably be automated. If you can’t, hire someone, and learn from them." },
    ],
  },
  {
    slug: "building-ai-products-for-nigerian-realities",
    title: "Building AI products for Nigerian realities: data, power and naira",
    accent: "Nigerian realities",
    excerpt:
      "A product that works perfectly in a demo can fail on a Lagos bus with patchy data. Lessons from building for Nigerian users, and what changes when AI is involved.",
    topic: "Building with AI",
    publishedAt: "2026-09-05",
    cover: { src: "/insights/lagos-aerial.jpg", alt: "Aerial view of Lagos and the Lekki–Ikoyi link bridge", credit: unsplash("photo-1765475467677-579353b25ce0") },
    body: [
      { type: "p", text: "I have built products for Nigerian businesses for a decade, and the constraints never change much: expensive data, unreliable power, a wide range of phones, and costs that move with the exchange rate. AI products have to respect all of them." },
      { type: "h2", text: "Design for the network you have" },
      { type: "ul", items: [
        "Keep responses short and stream them, so users see progress on slow connections.",
        "Save drafts and form progress on the device, so a dropped connection loses nothing.",
        "Let people queue requests offline and send them when the signal returns.",
      ] },
      { type: "h2", text: "Meet users where they are" },
      { type: "p", text: "For many customers the best interface is WhatsApp, a voice note or a simple web page, not a new app. When an app is right, build it for iOS and Android from one codebase and keep it small to download." },
      { type: "h2", text: "Control the cost per user" },
      { type: "p", text: "AI usage is billed per request, usually in dollars. Know your cost per active user, use smaller models where they are good enough, and design features so heavy use can’t quietly bankrupt the business." },
      { type: "h2", text: "Earn trust" },
      { type: "ul", items: [
        "Be clear when a customer is talking to an AI.",
        "Show sources for important answers, and make it easy to reach a person.",
        "Handle personal data in line with the Nigeria Data Protection Act.",
      ] },
      { type: "callout", title: "The opportunity", text: "Products that handle these realities well don’t just work in Nigeria. They work across Africa and in every market where people have more phones than laptops." },
    ],
  },
];

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);

export const sortedArticles = () => [...ARTICLES].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export function readMinutes(article: Article) {
  const words = article.body
    .map((b) => ("text" in b ? b.text : "items" in b ? b.items.join(" ") : ""))
    .join(" ")
    .split(/\s+/).length;
  return Math.max(2, Math.round(words / 220));
}

export function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}
