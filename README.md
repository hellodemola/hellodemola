# Hi, I’m ’Demola 👋

**AI product engineer** and co-founder of [Yousure](https://yousure.ng). For a decade I’ve shipped web and mobile apps for iOS and Android across fintech, insurance, healthcare, edtech, real estate and legal, and I add AI where it pays for itself.

Formerly engineering manager at Enyata, where I also mentored developers through the start-up bootcamp.

**[hellodemola.com](https://hellodemola.com)** · **[Book a 30-min call](https://calendly.com/ademola-onasoga/30min)** · [LinkedIn](https://www.linkedin.com/in/hellodemola) · [X](https://x.com/hellodemola) · [YouTube](https://www.youtube.com/@hellodemola3958) · [hi@hellodemola.com](mailto:hi@hellodemola.com)

## What I build

- **AI features and assistants**: answers from your own documents and data, document and email automation, smart search
- **Mobile apps for iOS and Android**: React Native, App Store and Google Play releases
- **Web apps and MVPs**: dashboards, portals, payments, roles and integrations
- **Websites that win business**: lead capture, booking, SEO and share-ready pages
- **Technical leadership**: architecture, reviews, hiring and rescuing stalled projects

## Selected work

| Project | What it is | Role |
| --- | --- | --- |
| [Yousure](https://yousure.ng) | Health insurance marketplace, plus [Yousure Brokers](https://brokers.yousure.ng), a SaaS workspace for insurance brokers | Co-founder · product and engineering |
| [KJB Professional Services](https://kjb.ng) | Tax, audit and advisory firm: 2026 tax calculators, tax-reform guides, booking | Design and full build |
| [Worrington & Co.](https://worrington.com) | Business law firm in Lagos and London | Design and full build |
| [Zeal Open University](https://www.zealopen.university/) | Online university with accredited degrees | Frontend engineering |
| [ABF Accounting](https://abfaccounting.com) | Online accounting for UK small businesses | Frontend engineering |
| [Zhill Systems](https://www.zhillsystems.com/) | Consulting, training and talent platform | Web interface engineering |
| [Covek Properties](https://www.covekproperties.com) | Lagos real estate: search, listings and lead capture | Full web build |

Case studies for each are at [hellodemola.com/work](https://hellodemola.com/work).

## Toolkit

TypeScript · React · Next.js · React Native · Expo · Node.js · Express · NestJS · PostgreSQL · Prisma · Tailwind CSS · LLM APIs · Vercel

---

### About this repo

This repo is my website, [hellodemola.com](https://hellodemola.com): Next.js 16 (App Router), Tailwind CSS v4, Motion and Lenis, deployed on Vercel.

```bash
npm install
npm run dev   # http://localhost:3000
```

- Content lives in `src/data/`: `site.ts` (name, links, booking), `projects.ts` (case studies) and `services.ts`.
- Share images are generated per page from `src/lib/og-card.tsx` and `src/lib/og-pages.ts`.
- Screenshots of projects are in `public/work/` (desktop) and `public/work/mobile/`.
