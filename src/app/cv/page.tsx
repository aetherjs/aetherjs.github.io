"use client";
import { Experience } from "@/components/Experience";

interface Expirience {
  heading: string;
  subheading?: string;
  dates: string;
  description: string;
  links?: {
    name: string;
    url: string;
  }[];
}

type Experiences = Expirience[];

const workData: Experiences = [
  {
    heading: "Zühlke Group",
    dates: "2022 - Present",
    description:
      "Joining a global innovation service provider company as a web engineer with practical knowledge of the blockchain industry. Engaging in internal projects building company web services, but mainly in client projects, working on all project lifecycle stages - from discovery and requirements engineering down to practical implementation. Main stack includes but not limited to: JavaScript, TypeScript, React.js, serverless services AWS and Azure. Unit, integration and end-to-end testing of frontend React.js applications. Additionally trained in Python web development ecosystem and Django in particular. Achieved AWS Cloud Practitioner certification. As part of upskilling and commitment in internal web topic group also researching modern web technologies and frameworks, such as SvelteKit.",
  },
  {
    heading: "Soulbonds.xyz",
    dates: "October 2021 - August 2022",
    description:
      "Building up from scratch an Ethereum-based project of soulbound token, pioneering in digital identity, reputation and gamified achievements system in the web3, solving unique challenges to achieve complete and true decentralisation of metadata storage for dynamic NFTs, shifting the transaction cost burden from users to the DApp. Handling development of decentralised web app (built with Next.js, Express.js and Ethers.js) along with the smart contract logic and security (Solidity, Hardhat, Foundry) in a small team of two, writing articles for the dev blog linked below.",
    links: [
      {
        name: "soulbonds.xyz dev blog",
        url: "https://mirror.xyz/soulbonds.eth",
      },
      {
        name: "etherscan",
        url: "https://etherscan.io/address/0x37c60c642934d82c36f8d94f893c2acee90a6e5e",
      },
    ],
  },
  {
    heading: "Jetbrains Research",
    dates: "Summer 2020",
    description:
      "A research project in the R&D unit of the dev tools colossus. Under the supervision developed a code dependency extraction tool...",
    links: [
      {
        name: "paper preprint",
        url: "https://arxiv.org/abs/2104.09473",
      },
    ],
  },
];

const educationData: Expirience = {
  heading: "University College London",
  subheading: "MEng Computer Science",
  dates: "2017 - 2021",
  description:
    "Relevant courses include: Requirements Engineering, Information Retrieval and Data Mining, Financial Markets and Participants, Statistical Natural Language Processing. Part of UCL Ice Club Society - Captain of UCL Yetis C Team and club VP",
};

export default function CV() {
  return (
    <div className='bg-primary-bg dark:bg-dark-primary-bg text-primary-text dark:text-dark-primary-text min-h-screen md:pt-28'>
      <div className='max-w-4xl mx-auto px-12 py-8'>
        <h1 className='text-2xl md:text-6xl font-bold font-heading mb-8 lg:text-center'>
          Work
        </h1>
        {workData.map((episode, index) => (
          <Experience
            key={episode.heading}
            {...episode}
            isLast={index === workData.length - 1}
          />
        ))}
        <h1 className='text-2xl md:text-6xl font-bold font-heading mt-12 mb-8 lg:text-center'>
          Education
        </h1>
        <Experience
          key={educationData.heading}
          {...educationData}
          isLast={true}
        />
      </div>
    </div>
  );
}
