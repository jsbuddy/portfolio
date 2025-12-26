import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: `From frontend developer to CTO: Jude Francis on building software for fintech, real estate, and data analytics across emerging markets.`,
  alternates: { canonical: "/about" },
};

const AboutPage = () => {
  return (
    <div className="container">
      <h1 className="text-3xl sm:text-4xl font-semibold mt-10 mb-6 sm:mb-10 tracking-tighter">
        About Jude
      </h1>
      <p className="text-base">
        Hi, I&apos;m Jude, a software engineer based in Lagos, Nigeria.
        I&apos;ve been building software for about eight years now, and these
        days I&apos;m CTO at StatiSense, where we help businesses make sense
        of messy, complicated data.
      </p>
      <Image
        src="/images/me.jpg"
        alt="About Jude"
        width={1600}
        height={1200}
        priority
        className="block w-full my-10 rounded-2xl aspect-4/3 object-[50%_20%] object-cover filter brightness-95 contrast-125"
      />
      <div className="space-y-6">
        <p className="text-base">
          I started out in 2018 as a frontend developer at a buy-now-pay-later
          startup, building the interfaces for split payments across Africa.
          That was where I learned how much I enjoy shipping things people
          actually use. Since then I&apos;ve worked on insurance claims
          portals, joined a fractional real estate platform as a founding
          engineer, and moved into the data products I lead today. At some point the job changed from
          writing components to setting technical direction and growing the
          teams doing the building.
        </p>
        <p className="text-base">
          Most of my experience is in JavaScript and TypeScript, but over the
          years I&apos;ve gotten comfortable across the stack: React and
          Next.js on the frontend, Python and Node on the backend, Kotlin and
          Compose Multiplatform on mobile, and lately AI agents built with
          LangChain and LangGraph. I don&apos;t have strong feelings about
          tools.
          I&apos;d rather understand the problem properly and pick whatever
          fits. That&apos;s honestly my favorite part of the work: figuring out
          what someone is struggling with and building something that solves
          it.
        </p>
        <p className="text-base">
          Most of what I&apos;ve built has been for emerging markets, where
          good software can really change how people earn, save, and own
          things. Cribstock is a good example. We wanted to make it possible
          for young Nigerians to own property through fractional investing
          instead of waiting years to afford a whole place. Whatever I&apos;m
          doing, whether that&apos;s architecture, mentoring, or a product
          call, I want to build things that are useful and worth
          people&apos;s time.
        </p>
        <p className="text-base">
          Outside of work I&apos;m usually tinkering with a side project,
          trying out something new in AI, or listening to too much music while
          I do it. If any of this sounds interesting, I&apos;d love to hear
          from you.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
