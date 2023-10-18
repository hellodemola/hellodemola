import Image from 'next/image';
import img_one from '../public/demola_1.jpg';
import demola_listen from '../public/demola_listen.jpg';
import img_three from '../public/demola_5.jpg';
import img_four from '../public/demola_4.jpg';
import crowd_two from '../public/crowd.jpg';
import crowd_three from '../public/crowd_2.jpg';
import { promises as fs } from 'fs';

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
   const file = await fs.readFile(process.cwd() + '/src/lang/en/home.json', 'utf8');
  const data = JSON.parse(file);
  const { home } = data;
  const products = [
    { index: 1, company: "LetSheGo", project: "Transaction dashboard", sector: "Bank", partner: "Enyata", url: '#' },
    { index: 2, company: "Kappa", project: "Global Remittance solution", sector: "FinTech", partner: "Enyata", url: 'https://www.kappapay.com/' },
    { index: 3, company: "AmelSusan", project: "Wholesaler website", sector: "Ecommerce", partner: null, url: "https://www.amelsusanproducts.com/" },
      { index: 4, company: "Zhill System", project: "Training App", sector: "EduTech", partner: null, url:"https://www.zhillsystems.com/" }
  ]

  return (
      <div>
      <h1 className="text-[2.618rem]">{home.introduction_name} 🙌</h1>
      <div className='my-4' />
      <p className="text-[1.618rem] leading-[2.618rem] my-6">
        {home.intro_role}
        {' '}
        <a target='_blank' href={home.company_url} className="underline">{home.company}</a>
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
      <p className="text-[1rem] my-6">{home.career}</p>
      {products.map((each) => (
        <a
          key={each?.index}
          href={each.url}
          target='_blank'
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50  dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 my-4 w-full"
    >
      <div className="flex flex-col">
        <p className="font-bold text-neutral-900 dark:text-neutral-100">
         {each.project}
            </p>
            <p>{each.sector}</p>
        {/* <ViewCounter allViews={allViews} slug={slug} trackView={false} /> */}
      </div>
          <div className="text-neutral-700 dark:text-neutral-300">

        {/* <ArrowIcon /> */}
      </div>
    </a>
        ))}
      <p className="text-[1rem] my-6">{home.contribution}</p>
      <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/hellodemola"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">follow me</p>
          </a>
      </div>
  )
}
