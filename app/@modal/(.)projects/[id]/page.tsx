import { notFound } from "next/navigation";
import ProjectModal from "@/components/project-modal";
import projects from "@/lib/projects";

type Params = { id: string };

const InterceptedProjectPage = async ({
  params,
}: {
  params: Promise<Params>;
}) => {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  return <ProjectModal project={project} />;
};

export default InterceptedProjectPage;
