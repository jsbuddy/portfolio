"use client";

import { Project } from "@/lib/projects";
import { Card } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const ProjectsGrid = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="items-center justify-center grid grid-cols-1 sm:grid-cols-2 gap-6">
      {projects.map((project) => (
        <Link
          key={project.id}
          href={`/projects/${project.id}`}
          scroll={false}
          aria-label={`View details for ${project.title}`}
          className="block w-full group rounded-2xl focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          <Card className="relative w-full p-0 cursor-pointer">
            <motion.div
              layoutId={`project-image-${project.id}`}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.3 }}
              className="relative z-1 w-full overflow-hidden rounded-2xl aspect-16/10"
            >
              <Image
                src={project.image}
                alt={project.title}
                title={project.title}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-orange-800 text-white z-3 w-10/12 max-w-sm rounded-2xl px-6 py-4 opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-base font-semibold leading-tight">
                {project.title}
              </h2>
              <p className="leading-[1.1] mt-0.5">{project.description}</p>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default ProjectsGrid;
