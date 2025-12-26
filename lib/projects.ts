export type Project = {
  id: string;
  title: string;
  description: string;
  body: string;
  tech: string[];
  image: string;
  link: string;
  source: string | null;
};

const projects: Project[] = [
  {
    id: "immortalbi",
    title: "Immortal BI",
    description: `Self-serve business intelligence that turns raw data into stories, dashboards, and agents.`,
    body: `Immortal BI lets teams connect their data and interact with it through stories (slide-like data presentations), dashboards, or agents, without living in spreadsheets or writing SQL. I lead the team and build alongside them, from the data-modeling layer to the builders that turn raw numbers into decisions teams can act on.`,
    tech: ["Next.js", "TypeScript", "Python", "PostgreSQL", "Tailwind CSS"],
    image: "/images/immortal-bi.png",
    link: "https://usebi.co",
    source: null,
  },
  {
    id: "statisense",
    title: "StatiSense",
    description: `AI-driven data insights for businesses across African markets.`,
    body: `StatiSense turns complex, fragmented data into clear insights for businesses across identity verification, capital markets, and more. I work across our B2C, B2B, and B2G products, from the data pipelines at the bottom to the dashboards customers rely on.`,
    tech: ["Next.js", "TypeScript", "Python", "FastAPI", "PostgreSQL"],
    image: "/images/statisense.png",
    link: "https://statisense.co",
    source: null,
  },
  {
    id: "pull-pal",
    title: "Pull Pal",
    description: `A tiny CLI that blocks outdated Git pushes before they hit the remote.`,
    body: `pull-pal is a CLI-based Git safety tool that stops you from pushing stale code. It hooks into Git's pre-push step, checks whether your branch is behind the remote, runs your project's tests, and blocks the push before anything outdated ships. We built it to be language-agnostic and zero-config: install once and it just works across JavaScript, Go, Python, or any Git project.`,
    tech: ["TypeScript", "Node.js", "Git", "CLI"],
    image: "/images/pull-pal.png",
    link: "https://pull-pal.vercel.app",
    source: "https://github.com/nikeproduct/pull-pal",
  },
  {
    id: "crossheirs",
    title: "Crossheirs",
    description: `Website and digital presence for a multidisciplinary consultancy serving African enterprises.`,
    body: `Crossheirs is a multidisciplinary consultancy partnering with founders, executives, and public-sector leaders across Africa on strategy, operations, real estate, and the digital systems that hold them together. I designed and built their website and digital presence.`,
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/crossheirs.png",
    link: "https://crossheirs.com.ng",
    source: null,
  },
  {
    id: "cribstock",
    title: "Cribstock",
    description: `Fractional real estate investing that lets young Africans co-own property and earn rental income.`,
    body: `Cribstock makes property ownership accessible by letting people co-own real estate and earn rental income. As a founding engineer, I lead the frontend, building the portfolio dashboard, real-time rental income tracking, and the flows that make investing feel simple and trustworthy.`,
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/cribstock.png",
    link: "https://cribstock.com",
    source: null,
  },
  {
    id: "opinions",
    title: "Opinions",
    description: `A community platform for sharing takes and debating them properly.`,
    body: `Opinions is a community platform for sharing takes and having genuine, structured debate around them. I built the interface and the posting and discussion flows, with moderation tooling to keep conversations constructive.`,
    tech: ["React", "TypeScript", "Tailwind CSS"],
    image: "/images/opinions.png",
    link: "https://opinions.statisense.co",
    source: null,
  },
  {
    id: "sonora",
    title: "Sonora Credit",
    description: `The site and application flows for a lender offering simple loans to businesses and individuals.`,
    body: `Sonora Credit provides simple and unique loans for all categories of people, including businesses and individuals. I built the site and the flows that make applying for a loan straightforward.`,
    tech: ["Next.js", "Tailwind CSS", "Material UI"],
    image: "/images/sonora.png",
    link: "https://sonoracredit.com",
    source: null,
  },
];

export default projects;
