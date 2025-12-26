"use client";

import { Project } from "@/lib/projects";
import { AnimatePresence, motion } from "motion/react";
import { HiCode, HiOutlineExternalLink, HiX } from "react-icons/hi";
import { Button } from "./ui/button";
import { useEffect, useRef } from "react";
import { useFocusTrap } from "@/lib/use-focus-trap";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const ProjectDetailsDialog = ({
  isOpen,
  onClose,
  project,
}: {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      dialogRef.current?.focus();
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  useFocusTrap(dialogRef, isOpen);

  return (
    <AnimatePresence mode="wait">
      {isOpen && project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 w-full h-full bg-gray-200/90 dark:bg-background/90 z-50 backdrop-blur-sm flex items-center overflow-y-auto p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <div
            ref={dialogRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`project-title-${project.id}`}
            className="relative z-10 grid grid-cols-1 md:grid-cols-[2fr_1fr] items-start justify-center w-full max-w-6xl mx-auto my-auto py-6 md:py-10 gap-6 outline-none"
          >
            <motion.div
              layoutId={`project-image-${project.id}`}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{
                duration: 0.6,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="relative w-full overflow-hidden rounded-2xl aspect-16/10"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 768px) 66vw, 100vw"
                className="object-cover"
              />
            </motion.div>
            <Card className="flex flex-col w-full rounded-2xl p-0 ring-0 shadow">
              <CardContent className="px-6 py-6 sm:px-10 sm:py-8">
                <div className="flex items-center justify-between gap-2">
                  <h2
                    id={`project-title-${project.id}`}
                    className="text-lg font-semibold leading-tight"
                  >
                    {project.title}
                  </h2>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    className="cursor-pointer"
                    onClick={onClose}
                  >
                    <HiX size="20" />
                  </Button>
                </div>
                <p className="text-foreground/80 mt-4 leading-snug">
                  {project.body}
                </p>
                {project.tech.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
                <div className="flex gap-2 mt-6">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
              </CardContent>
            </Card>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailsDialog;
