import Image from "next/image";
import img_one from "../public/demola_1.jpg";
import demola_listen from "../public/demola_listen.jpg";
import img_three from "../public/demola_5.jpg";
import img_four from "../public/demola_4.jpg";
import crowd_two from "../public/crowd.jpg";
import crowd_three from "../public/crowd_2.jpg";
import { promises as fs } from "fs";

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

export default async function Home() {
  const file = await fs.readFile(
    process.cwd() + "/src/lang/en/home.json",
    "utf8",
  );
  const data = JSON.parse(file);
  const { home } = data;
  const products = [
    {
      index: 1,
      company: "Zeal",
      project: "Zeal Open University",
      sector: "Education | Tech",
      partner: null,
      url: " https://zealopen.university/",
    },
    {
      index: 2,
      company: "Abf Accounting services",
      project: "Abf Accounting services",
      sector: "FinTech",
      partner: null,
      url: "https://abfaccounting.com",
    },

    {
      index: 4,
      company: "Zhill System",
      project: "Zhill Systems",
      sector: "EduTech",
      partner: null,
      url: "https://www.zhillsystems.com/",
    },
    {
      index: 5,
      company: "Yousure",
      project: "Yousure",
      sector: "InsureTech",
      partner: null,
      url: "https://yousure.vercel.app/",
    },
    {
      index: 6,
      company: "Coverk Property",
      project: "Covek Properties",
      sector: "Real Estate",
      partner: null,
      url: "https://www.covekproperties.com",
    },
  ];

  return (
    <div>
      <h1 className="text-[2.618rem] font-[500]">
        {home.introduction_name} 🙌
      </h1>
      <div className="my-4" />
      <p className="text-[1.618rem] leading-[2.618rem] my-6">
        {home.intro_role}{" "}
        <a target="_blank" href={home.company_url} className="underline">
          {home.company}
        </a>
        {home.intro_role_2}
      </p>
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

      <div className="my-6 hidden">
        <h2 className="font-[700] text-[1.5em]">{home.service}</h2>
        <p className=" text-lg text-[0.8rem] tracking-tighter">
          {home.serviceSubtitle}
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1">
          {home.services.map(
            (each: { title: string; jobs: string[] }, index: number) => {
              return (
                <div className="my-4" key={index}>
                  <h1 className=" font-semibold">{each.title}</h1>
                  <ul className=" list-disc list-inside capitalize">
                    {each.jobs.map((list, nList) => (
                      <li className="text-sm" key={nList}>
                        {list}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            },
          )}
        </div>
      </div>
      <h2 className="font-[700] text-[1.5em]">Curated works</h2>
      <p className="md:text-[1rem] text-[0.8rem] my-6">{home.career}</p>
      <div className="md:grid my-2 grid-cols-2 gap-3">
        {products.map((each) => (
          <a
            key={each?.index}
            href={each.url}
            target="_blank"
            className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50  dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 my-0 w-full"
          >
            <div className="flex flex-col">
              <p className="font-[700] text-neutral-900 dark:text-neutral-100">
                {each.project}
              </p>
              <p className="text-[12px]">{each.sector}</p>
              {/* <ViewCounter allViews={allViews} slug={slug} trackView={false} /> */}
            </div>
            <div className="text-neutral-700 dark:text-neutral-300">
              <ArrowIcon />
            </div>
          </a>
        ))}
      </div>

      <div className="my-2">
        <h2 className="font-[700] text-[1.5em] my-2">I am social</h2>
        <p className="text-[1rem] my-6">{home.contribution}</p>
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
