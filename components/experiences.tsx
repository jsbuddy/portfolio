import { BriefcaseIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { Card, CardContent } from "./ui/card";
import SectionTitle from "./section-title";
import { cn } from "@/lib/utils";

const experiences = [
  {
    role: "Chief Technology Officer",
    company: "StatiSense",
    location: "Lagos, Nigeria",
    period: "Sep 2023 - Present",
    type: "Full-time",
    description: `I set the technical direction for our products and lead the work on Immortal BI, our self-serve business intelligence platform. Most of my time goes to architecture, hiring, and deciding where AI actually helps our clients make decisions, and where it would just be decoration.`,
  },
  {
    role: "Head of Engineering",
    company: "StatiSense",
    location: "Lagos, Nigeria",
    period: "Jan 2023 - Aug 2023",
    type: "Full-time",
    description: `Ran engineering through the full product cycle, from idea to launch. I kept product, design, and engineering pulling in the same direction, mentored the team, and shipped alongside them.`,
  },
  {
    role: "Lead Frontend Developer",
    company: "Clan",
    location: "Lagos, Nigeria",
    period: "Jan 2022 - Dec 2022",
    type: "Full-time",
    description: `Led the frontend team at a buy-now-pay-later company making split payments work across Africa. I owned the architecture of the customer and merchant apps and kept them fast as the product and team grew.`,
  },
  {
    role: "Founding Engineer",
    company: "Cribstock",
    location: "Lagos, Nigeria",
    period: "May 2021 - Present",
    type: "Part-time",
    description: `Founding engineer on a platform that lets young Nigerians co-own property through fractional investing. I own the frontend: the portfolio dashboard, real-time rental income tracking, and the investing flows.`,
  },
  {
    role: "Frontend Developer",
    company: "Clan",
    location: "Lagos, Nigeria",
    period: "Sep 2018 - Dec 2021",
    type: "Full-time",
    description: `My first role, building the interfaces that made split payments simple for customers and merchants. I shipped features with cross-functional teams, tuned page loads, and learned to bake accessibility in from the start.`,
  },
];

const Experiences = () => {
  return (
    <div className="container">
      <SectionTitle title="Experience" />
      <div className="grid grid-cols-1 gap-2">
        {experiences.map((exp, index) => (
          <Card
            key={index}
            className={cn(
              "not-dark:bg-gray-50 p-0",
              index % 2 === 1 && "bg-transparent! ring-0",
            )}
          >
            <CardContent className="px-6 py-6 sm:px-6">
              <div className="flex gap-3 sm:gap-4">
                <div className="hidden sm:flex size-9 shrink-0 items-center justify-center rounded-full bg-accent sm:size-10">
                  <BriefcaseIcon className="size-5 sm:size-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-semibold leading-snug">
                    {exp.role}{" "}
                    <span className="font-normal text-foreground/60">
                      at {exp.company}
                    </span>
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-foreground/55 sm:text-sm">
                    <span className="italic">{exp.period}</span>
                    <span aria-hidden className="text-foreground/30">
                      ·
                    </span>
                    <span>{exp.type}</span>
                    <span className="inline-flex items-center gap-1">
                      <span aria-hidden className="text-foreground/30">
                        ·
                      </span>
                      <MapPinIcon className="size-3.5 shrink-0" />
                      {exp.location}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-snug sm:text-base">
                    {exp.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
