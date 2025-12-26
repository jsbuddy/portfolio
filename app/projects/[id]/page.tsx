import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { HiCode, HiOutlineExternalLink } from "react-icons/hi";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import projects from "@/lib/projects";

type Params = { id: string };

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};

  const url = `/projects/${id}`;
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: project.title,
      description: project.description,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
    },
  };
}

const ProjectPage = async ({ params }: { params: Promise<Params> }) => {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <div className="container">
      <div className="mt-10 mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter">
          {project.title}
        </h1>
        <p className="mt-1 text-foreground/60">{project.description}</p>
      </div>
      <div className="relative w-full overflow-hidden rounded-2xl aspect-16/10">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          sizes="(min-width: 1024px) 960px, 100vw"
          className="object-cover"
        />
      </div>
      <div className="mt-8 max-w-2xl">
        <p className="text-foreground/80 leading-normal">{project.body}</p>
        {project.tech.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        )}
        <div className="mt-6 flex gap-2">
          <Link href={project.link} target="_blank" rel="noopener noreferrer">
            <Button className="cursor-pointer">
              <HiOutlineExternalLink className="size-4" />
              View project
            </Button>
          </Link>
          {!!project.source && (
            <Link
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="cursor-pointer">
                <HiCode className="size-4" />
                Source
              </Button>
            </Link>
          )}
        </div>
      </div>
      <footer className="mt-12 border-t border-border pt-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-foreground/60 transition-colors hover:text-foreground"
        >
          <ArrowLeftIcon className="size-4" />
          All projects
        </Link>
      </footer>
    </div>
  );
};

export default ProjectPage;
