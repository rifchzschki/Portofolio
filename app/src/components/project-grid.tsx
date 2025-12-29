import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { allProjectsData } from "@/lib/sanity/queries/projects";
import { client } from "@/lib/sanity/sanity";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ExpandableBadgeGroup } from "./ExpandableBadgeGroup";
import { ExpandableText } from "./ExpandableText";
import { RowLimitedBadgeGroup } from "./RowLimitedBadgeGroup";
import { ProjectDetail } from "./project-detail-card";
import ImageSlider from "./slider-image";

export type MediaSanityType = {
  _type: string;
  asset: { _ref: string; _type: string };
};

export type Project = {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  thumbnail: MediaSanityType;
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  images?: MediaSanityType[];
  demoVideo?: MediaSanityType;
};

const projectsData: Project[] = await client.fetch(allProjectsData);

export function ProjectsGrid() {
  const featuredProjects = projectsData.filter((p) => p.featured);
  const [openDetail, setOpenDetail] = useState<Project | null>(null);
  const [currentFeatured, setCurrentFeatured] = useState(0);

  const nextFeatured = () => {
    setCurrentFeatured((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevFeatured = () => {
    setCurrentFeatured(
      (prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length
    );
  };

  return (
    <div className="space-y-12">
      {openDetail != null && (
        <ProjectDetail
          onClose={() => setOpenDetail(null)}
          project={openDetail}
        />
      )}
      {/* Featured Project Carousel */}
      <div className="relative">
        <h3 className="mb-6 text-xl font-semibold">Featured Projects</h3>
        <div className="relative overflow-hidden rounded-xl border border-border pb-3 bg-card">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFeatured}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 p-6 md:grid-cols-2 items-center"
            >
              <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
                <ImageSlider
                  images={[
                    featuredProjects[currentFeatured].thumbnail,
                    ...(featuredProjects[currentFeatured].images ?? []),
                  ]}
                />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="text-2xl font-bold">
                  {featuredProjects[currentFeatured].title}
                </h4>
                <ExpandableText
                  className="mt-2 text-muted-foreground"
                  text={featuredProjects[currentFeatured].description}
                  lines={2}
                />
                <div className="mt-4">
                  <p className="text-sm">
                    <span className="font-medium text-primary">Problem:</span>{" "}
                    <ExpandableText
                      text={featuredProjects[currentFeatured].problem}
                      lines={2}
                    />
                  </p>
                  <p className="mt-2 text-sm">
                    <span className="font-medium text-primary">Solution:</span>{" "}
                    <ExpandableText
                      text={featuredProjects[currentFeatured].solution}
                      lines={2}
                    />
                  </p>
                </div>
                <ExpandableBadgeGroup
                  items={featuredProjects[currentFeatured].techStack}
                  maxRows={2}
                  className="mt-4"
                  badgeVariant="secondary"
                />
                <div className="mt-6 flex gap-3">
                  {featuredProjects[currentFeatured].githubUrl && (
                    <Button asChild variant="outline" size="sm">
                      <a
                        href={featuredProjects[currentFeatured].githubUrl!}
                        target="_blank"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {featuredProjects[currentFeatured].liveUrl && (
                    <Button asChild size="sm">
                      <a
                        href={featuredProjects[currentFeatured].liveUrl!}
                        target="_blank"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevFeatured}
              className="h-8 w-8 bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextFeatured}
              className="h-8 w-8 bg-transparent"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {featuredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentFeatured(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentFeatured
                    ? "bg-primary"
                    : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* All Projects Grid */}
      <div>
        <h3 className="mb-6 text-xl font-semibold">All Projects</h3>
        <div className="sm:flex md:grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`${
                index !== projectsData.length - 1 ? "pb-6" : "pb-0"
              } md:pb-0`}
            >
              <Card
                className="group flex w-full h-full overflow-hidden border-border/50 transition-all hover:border-primary/50 hover:shadow-lg"
                onClick={() => setOpenDetail(project)}
              >
                <div className="relative w-full mx-auto aspect-video overflow-hidden bg-muted">
                  <ImageSlider
                    images={[project.thumbnail, ...(project.images ?? [])]}
                  />
                  {project.featured && (
                    <Badge className="z-10 absolute right-2 top-2 bg-accent text-accent-foreground">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                </CardHeader>
                <CardContent className="grow">
                  <RowLimitedBadgeGroup
                    items={project.techStack}
                    maxRows={2}
                    className="mt-2"
                  />
                </CardContent>
                <CardFooter className="gap-2 flex-none">
                  {project.githubUrl && (
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="flex-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a href={project.githubUrl} target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="flex-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a href={project.liveUrl} target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
