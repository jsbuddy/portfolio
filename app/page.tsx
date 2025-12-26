import Experiences from "@/components/experiences";
import FeaturedStack from "@/components/featured-stack";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Writing from "@/components/writing";

const siteUrl = "https://judecod.es";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jude Francis",
  url: siteUrl,
  image: `${siteUrl}/images/me.jpg`,
  jobTitle: "Software Engineer",
  description: `Software engineer building AI agents, SaaS platforms, and full-stack web apps with TypeScript, Python, React, and Next.js.`,
  worksFor: { "@type": "Organization", name: "StatiSense" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  sameAs: [
    "https://github.com/jsbuddy",
    "https://www.linkedin.com/in/judecodes/",
    "https://twitter.com/judecodes",
    "https://www.instagram.com/judecodes",
    "https://codepen.io/judecodes",
  ],
};

export default function Page() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Hero />
      <div className="space-y-16 sm:space-y-20">
        <Projects />
        <Writing />
        <FeaturedStack />
        <Experiences />
      </div>
    </div>
  );
}
