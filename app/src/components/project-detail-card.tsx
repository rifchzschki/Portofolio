import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, X } from "lucide-react";
import type { Project } from "./project-grid";
import ImageSlider from "./slider-image";
import { Button } from "./ui/button";
import { Card, CardHeader } from "./ui/card";

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export const ProjectDetail = ({ project, onClose }: ProjectDetailProps) => {
  return (
    <div className="fixed inset-0 w-full h-full z-20 flex items-center justify-center pointer-events-none">
      <Card className="pointer-events-auto p-5 h-5/6 w-4/5 overflow-auto flex flex-col gap-6">
        <CardHeader className="w-full flex justify-end p-0">
          <X className="cursor-pointer" onClick={onClose} />
        </CardHeader>

        <div className="w-full max-w-xl mx-auto shrink-0 aspect-video bg-muted rounded-lg overflow-hidden">
          <ImageSlider
            images={[project.thumbnail, ...(project.images ?? [])]}
          />
        </div>

        <div className="flex flex-col">
          <h4 className="text-2xl font-bold">{project.title}</h4>
          <p className="mt-2 text-muted-foreground">{project.description}</p>

          <div className="mt-4">
            <p className="text-sm">
              <span className="font-medium text-primary">Problem:</span>{" "}
              {project.problem}
            </p>
            <p className="mt-2 text-sm">
              <span className="font-medium text-primary">Solution:</span>{" "}
              {project.solution}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="mt-6 flex gap-3">
            {project.githubUrl && (
              <Button asChild variant="outline" size="sm">
                <a href={project.githubUrl} target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
            )}

            {project.liveUrl && (
              <Button asChild size="sm">
                <a href={project.liveUrl} target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};
