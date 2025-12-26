"use client";

import { useRouter } from "next/navigation";
import { Project } from "@/lib/projects";
import ProjectDetailsDialog from "./project-details-dialog";

const ProjectModal = ({ project }: { project: Project }) => {
  const router = useRouter();

  return (
    <ProjectDetailsDialog
      isOpen
      onClose={() => router.back()}
      project={project}
    />
  );
};

export default ProjectModal;
