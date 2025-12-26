import Link from "next/link";
import { BiSolidChevronRight } from "react-icons/bi";
import projects from "@/lib/projects";
import SectionTitle from "./section-title";
import ProjectsGrid from "./projects-grid";
import { Button } from "./ui/button";

const ProjectsSection = () => {
  return (
    <div className="container">
      <SectionTitle title="Projects" />
      <ProjectsGrid projects={projects.slice(0, 4)} />
      <Link href="/projects">
        <Button variant="secondary" className="mt-8 px-4 cursor-pointer">
          View all
          <BiSolidChevronRight />
        </Button>
      </Link>
    </div>
  );
};

export default ProjectsSection;
