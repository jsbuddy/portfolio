import type { Metadata } from "next";
import projects from "@/lib/projects";
import ProjectsGrid from "@/components/projects-grid";

export const metadata: Metadata = {
  title: "Projects",
  description: `Products Jude Francis has built and led: business intelligence, fintech, real estate, and developer tools.`,
  alternates: { canonical: "/projects" },
};

const ProjectsPage = () => {
  return (
    <div className="container">
      <div className="mt-10 mb-6 sm:mb-10">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter">
          Projects
        </h1>
        <p className="mt-1 text-foreground/60">
          Products I&apos;ve built and led, from data platforms to developer
          tools
        </p>
      </div>
      <ProjectsGrid projects={projects} />
    </div>
  );
};

export default ProjectsPage;
