"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type Project = {
  id: string
  title: string
  description: string
  problem: string
  solution: string
  techStack: string[]
  thumbnail: string
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}

const projectsData: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management",
    problem: "Small businesses struggle with managing online sales and inventory simultaneously.",
    solution: "Built a comprehensive platform with real-time stock updates, payment integration, and admin dashboard.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
    thumbnail: "/modern-ecommerce-dashboard.png",
    githubUrl: "https://github.com/johndoe/ecommerce",
    liveUrl: "https://ecommerce-demo.vercel.app",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management API",
    description: "RESTful API for collaborative task management with real-time sync",
    problem: "Teams need a reliable backend for managing tasks across multiple platforms.",
    solution: "Designed a scalable REST API with WebSocket support for real-time updates and JWT authentication.",
    techStack: ["Node.js", "Express", "MongoDB", "Socket.io", "Redis"],
    thumbnail: "/api-documentation-interface.png",
    githubUrl: "https://github.com/johndoe/task-api",
    featured: true,
  },
  {
    id: "3",
    title: "Security Audit Tool",
    description: "Automated security scanning tool for web applications",
    problem: "Developers often miss security vulnerabilities in their applications.",
    solution: "Created a CLI tool that scans codebases for common security issues and provides remediation steps.",
    techStack: ["Python", "Docker", "SQLite", "Click"],
    thumbnail: "/security-terminal-interface.jpg",
    githubUrl: "https://github.com/johndoe/sec-audit",
    featured: false,
  },
  {
    id: "4",
    title: "Portfolio CMS",
    description: "Headless CMS for managing portfolio content",
    problem: "Updating portfolio content requires code changes and redeployment.",
    solution: "Built a custom headless CMS with a user-friendly admin interface for managing projects and blog posts.",
    techStack: ["React", "Sanity", "GraphQL", "Vercel"],
    thumbnail: "/content-management-dashboard.png",
    githubUrl: "https://github.com/johndoe/portfolio-cms",
    liveUrl: "https://cms-demo.vercel.app",
    featured: false,
  },
  {
    id: "5",
    title: "Real-time Chat Application",
    description: "End-to-end encrypted messaging platform",
    problem: "Users want secure communication without compromising on user experience.",
    solution: "Developed a real-time chat app with E2E encryption, file sharing, and group chat features.",
    techStack: ["React", "Node.js", "Socket.io", "PostgreSQL", "WebRTC"],
    thumbnail: "/chat-application-interface.png",
    githubUrl: "https://github.com/johndoe/secure-chat",
    featured: false,
  },
  {
    id: "6",
    title: "DevOps Dashboard",
    description: "Centralized monitoring dashboard for infrastructure",
    problem: "Managing multiple services and their health status is complex.",
    solution: "Created a unified dashboard aggregating metrics from various services with alerting capabilities.",
    techStack: ["Next.js", "Go", "Prometheus", "Grafana", "Docker"],
    thumbnail: "/devops-monitoring-dashboard.png",
    githubUrl: "https://github.com/johndoe/devops-dash",
    featured: false,
  },
]

export function ProjectsGrid() {
  const featuredProjects = projectsData.filter((p) => p.featured)
  const [currentFeatured, setCurrentFeatured] = useState(0)

  const nextFeatured = () => {
    setCurrentFeatured((prev) => (prev + 1) % featuredProjects.length)
  }

  const prevFeatured = () => {
    setCurrentFeatured((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length)
  }

  return (
    <div className="space-y-12">
      {/* Featured Project Carousel */}
      <div className="relative">
        <h3 className="mb-6 text-xl font-semibold">Featured Projects</h3>
        <div className="relative overflow-hidden rounded-xl border border-border bg-card">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFeatured}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 p-6 md:grid-cols-2"
            >
              <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
                <img
                  src={featuredProjects[currentFeatured].thumbnail || "/placeholder.svg"}
                  alt={featuredProjects[currentFeatured].title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="text-2xl font-bold">{featuredProjects[currentFeatured].title}</h4>
                <p className="mt-2 text-muted-foreground">{featuredProjects[currentFeatured].description}</p>
                <div className="mt-4">
                  <p className="text-sm">
                    <span className="font-medium text-primary">Problem:</span>{" "}
                    {featuredProjects[currentFeatured].problem}
                  </p>
                  <p className="mt-2 text-sm">
                    <span className="font-medium text-primary">Solution:</span>{" "}
                    {featuredProjects[currentFeatured].solution}
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {featuredProjects[currentFeatured].techStack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  {featuredProjects[currentFeatured].githubUrl && (
                    <Button asChild variant="outline" size="sm">
                      <a href={featuredProjects[currentFeatured].githubUrl!} target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {featuredProjects[currentFeatured].liveUrl && (
                    <Button asChild size="sm">
                      <a href={featuredProjects[currentFeatured].liveUrl!} target="_blank">
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
            <Button variant="outline" size="icon" onClick={prevFeatured} className="h-8 w-8 bg-transparent">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextFeatured} className="h-8 w-8 bg-transparent">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {featuredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentFeatured(index)}
                className={`h-2 w-2 rounded-full transition-colors ${index === currentFeatured ? "bg-primary" : "bg-muted-foreground/30"}`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* All Projects Grid */}
      <div>
        <h3 className="mb-6 text-xl font-semibold">All Projects</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="group h-full overflow-hidden border-border/50 transition-all hover:border-primary/50 hover:shadow-lg">
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img
                    src={project.thumbnail || "/placeholder.svg"}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {project.featured && (
                    <Badge className="absolute right-2 top-2 bg-accent text-accent-foreground">Featured</Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.techStack.length - 4}
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  {project.githubUrl && (
                    <Button asChild variant="ghost" size="sm" className="flex-1">
                      <a href={project.githubUrl} target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button asChild variant="ghost" size="sm" className="flex-1">
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
  )
}
