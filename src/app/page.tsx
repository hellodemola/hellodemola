'use client';

import Image from 'next/image';
import { useState } from 'react';
import img_one from '../public/demola_1.jpg';
import demola_listen from '../public/demola_listen.jpg';
import img_three from '../public/demola_5.jpg';
import img_four from '../public/demola_4.jpg';
import crowd_two from '../public/crowd.jpg';
import crowd_three from '../public/crowd_2.jpg';

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

const products = [
  {
    index: 1,
    company: 'Zeal',
    project: 'Zeal Open University',
    sector: 'EdTech',
    url: 'https://zealopen.university/',
    description:
      'A learning platform designed to make professional health education more accessible. Built the frontend with a focus on content clarity, accessibility standards, and smooth navigation across a curriculum-heavy information architecture — working closely with product and design to deliver an experience intuitive for non-technical learners.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    index: 2,
    company: 'ABF',
    project: 'ABF Accounting Services',
    sector: 'FinTech',
    url: 'https://abfaccounting.com',
    description:
      'An online accounting platform serving sole traders, limited companies, freelancers, and contractors across the UK. Built the marketing and service site with a focus on clear pricing presentation, responsive layouts, and seamless user flows for lead capture and plan selection — designed to feel trustworthy to financially cautious UK business owners.',
    tags: ['React', 'Next.js', 'TypeScript'],
  },
  {
    index: 3,
    company: 'Brand-Co',
    project: 'Brand-Co',
    sector: 'Retail',
    url: 'https://www.brand-co.com/',
    description:
      'A premium African retail group distributing global brands like Adidas, Skechers, and Reebok across 18+ locations in Nigeria and Ghana. Translated a bold visual identity into a performant, responsive Next.js interface that serves both consumers and prospective global brand partners.',
    tags: ['Next.js', 'TypeScript', 'Animation'],
  },
  {
    index: 4,
    company: '91 Pay',
    project: '91 Pay',
    sector: 'FinTech · Payments',
    url: 'https://91-payments.com/',
    description:
      'A payment platform built for fast, reliable digital transactions. Led the frontend engineering of the product interface, integrating with payment APIs and building a trust-focused UI that handles sensitive financial flows — with strong emphasis on performance, error handling, and cross-device compatibility.',
    tags: ['React', 'TypeScript', 'API Integration'],
  },
  {
    index: 5,
    company: 'Zhill',
    project: 'Zhill Systems',
    sector: 'EduTech',
    url: 'https://www.zhillsystems.com/',
    description:
      'An education technology platform built to streamline school administration and student management. Developed the web interface with a focus on usability for institution administrators, building scalable UI components that handle complex data flows across multiple user roles.',
    tags: ['React', 'TypeScript', 'Node.js'],
  },
  {
    index: 6,
    company: 'Covek',
    project: 'Covek Properties',
    sector: 'Real Estate',
    url: 'https://www.covekproperties.com',
    description:
      'A Lagos-based real estate firm offering property sales, rentals, facility management, and new developments in Lekki and Victoria Island. Built the full web product including property search, listing pages, and a lead generation flow — delivered as a responsive Next.js application tailored to both high-net-worth buyers and real estate agents.',
    tags: ['Next.js', 'Tailwind', 'TypeScript'],
  },
];

type Product = (typeof products)[0];

function ProjectCard({ each }: { each: Product }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`
        group relative border border-neutral-200 dark:border-neutral-700
        bg-neutral-50 dark:bg-neutral-800
        rounded-lg overflow-hidden
        transition-all duration-300 ease-in-out
        ${
          expanded
            ? 'shadow-md'
            : 'hover:shadow-sm hover:border-neutral-300 dark:hover:border-neutral-600'
        }
      `}
    >
      {/* Clickable header row */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-start justify-between px-4 py-4 text-left cursor-pointer"
        aria-expanded={expanded}
      >
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500 select-none">
              {String(each.index).padStart(2, '0')}
            </span>
            <p className="font-[700] text-neutral-900 dark:text-neutral-100 text-[0.95rem]">
              {each.project}
            </p>
          </div>
          <p className="text-[11px] text-neutral-500 dark:text-neutral-400 ml-7">
            {each.sector}
          </p>
        </div>

        {/* Plus / minus toggle */}
        <span
          className={`
            text-neutral-400 dark:text-neutral-500 mt-1 shrink-0 ml-4
            transition-transform duration-200
            ${expanded ? 'rotate-45' : 'rotate-0'}
          `}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 1v12M1 7h12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      {/* Expandable body */}
      <div
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${expanded ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="px-4 pb-5 ml-7">
          <p className="text-[0.85rem] leading-relaxed text-neutral-600 dark:text-neutral-300 mb-4">
            {each.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {each.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-600"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* External link */}
          <a
            href={each.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[0.8rem] font-[600] text-neutral-900 dark:text-neutral-100 hover:opacity-60 transition-opacity"
            onClick={(e) => e.stopPropagation()}
          >
            Visit project <ArrowIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const introRole =
    'I do frontend engineering and I love building products. I previously worked as Engineering Manager at Enyata. I am currently a Software Engineer at';
  const companyUrl = 'https://greyinvent.com/';
  const company = 'GreyInvent';
  const introRole2 = ', where I help create software products.';
  const career =
    'Over the past decade, I have helped build interesting products across vast industries — from FinTech and remittance systems to Healthcare, E-commerce, and EdTech. Click any project to learn more:';
  const contribution =
    'I have mentored developers and continue to contribute to the dev community online via my YouTube Channel, articles and through the Enyata start-up bootcamp. Connect with me on:';

  return (
    <div>
      <h1 className="text-[2.618rem] font-[500]">
        Hello, I am &apos;Demo la! 🙌
      </h1>
      <div className="my-4" />
      <p className="text-[1.618rem] leading-[2.618rem] my-6">
        {introRole}{' '}
        <a target="_blank" href={companyUrl} className="underline">
          {company}
        </a>
        {introRole2}
      </p>

      {/* Photo grid — unchanged */}
      <div className="columns-2 sm:columns-3 gap-4 my-8">
        <div className="relative h-40 mb-4">
          <Image
            alt="Me setting with some collegues celebrating birthday"
            src={crowd_two}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4 sm:mb-0">
          <Image
            alt="Selfie portrait of myself"
            src={img_one}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-[-16px] sm:object-center"
          />
        </div>
        <div className="relative h-80 mb-4 sm:mb-0">
          <Image
            alt="Me, Richard, Janet, anita, Temitope and Abigail, on Abigails sent forth party"
            src={img_four}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-[-16px] sm:object-center"
          />
        </div>
        <div className="relative h-40 mt-4">
          <Image
            alt="Celebrating with Collegues on another birthday"
            src={crowd_three}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40 mb-4">
          <Image
            alt="A self protrait of me working"
            src={demola_listen}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4 sm:mb-0">
          <Image
            alt="Me and Eliana"
            src={img_three}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-[-16px] sm:object-center"
          />
        </div>
      </div>

      {/* Curated works */}
      <h2 className="font-[700] text-[1.5em]">Curated works</h2>
      <p className="md:text-[1rem] text-[0.8rem] my-6">{career}</p>

      <div className="flex flex-col gap-3 my-2">
        {products.map((each) => (
          <ProjectCard key={each.index} each={each} />
        ))}
      </div>

      {/* Social */}
      <div className="my-8">
        <h2 className="font-[700] text-[1.5em] my-2">I am social</h2>
        <p className="text-[1rem] my-6">{contribution}</p>
        <div className="my-3 flex gap-6">
          <a
            className="flex items-center gap-2 hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/hellodemola"
          >
            <span className="h-7 ml-2">Twitter</span>
            <ArrowIcon />
          </a>
          <a
            className="flex items-center gap-2 hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://linkedIn.com/in/hellodemola"
          >
            <span className="h-7 ml-2">LinkedIn</span>
            <ArrowIcon />
          </a>
          <a
            className="flex items-center gap-2 hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.youtube.com/@hellodemola3958"
          >
            <span className="h-7 ml-2">YouTube</span>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
