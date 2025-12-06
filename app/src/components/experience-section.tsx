import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Briefcase, Users, Calendar, MapPin, ChevronDown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Experience = {
  id: string
  type: "it" | "non-it"
  company: string
  role: string
  location: string
  startDate: string
  endDate: string
  description: string
  achievements: string[]
  technologies?: string[]
  softSkills?: string[]
}

const experienceData: Experience[] = [
  {
    id: "1",
    type: "it",
    company: "TechCorp Indonesia",
    role: "Software Engineering Intern",
    location: "Jakarta, Indonesia",
    startDate: "Jun 2024",
    endDate: "Aug 2024",
    description:
      "Worked on the core product team to develop and maintain web applications used by thousands of users daily.",
    achievements: [
      "Developed RESTful APIs that improved data retrieval speed by 40%",
      "Implemented automated testing reducing bug reports by 25%",
      "Collaborated with senior engineers on microservices architecture",
      "Participated in code reviews and agile ceremonies",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
  },
  {
    id: "2",
    type: "it",
    company: "StartupXYZ",
    role: "Frontend Developer (Part-time)",
    location: "Remote",
    startDate: "Jan 2024",
    endDate: "May 2024",
    description: "Built responsive web interfaces for an early-stage fintech startup.",
    achievements: [
      "Created reusable component library saving 30+ development hours",
      "Optimized web vitals improving LCP by 50%",
      "Integrated third-party payment APIs",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
  },
  {
    id: "3",
    type: "it",
    company: "University IT Department",
    role: "Student Developer",
    location: "Jakarta, Indonesia",
    startDate: "Sep 2022",
    endDate: "Dec 2023",
    description: "Maintained and enhanced internal university systems and portals.",
    achievements: [
      "Redesigned student portal UI improving user satisfaction by 35%",
      "Built attendance tracking system for 5,000+ students",
      "Documented legacy codebase for future maintenance",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "Vue.js"],
  },
  {
    id: "4",
    type: "non-it",
    company: "Youth Leadership Organization",
    role: "Project Coordinator",
    location: "Jakarta, Indonesia",
    startDate: "Mar 2023",
    endDate: "Present",
    description: "Led community initiatives and coordinated volunteer teams for social impact projects.",
    achievements: [
      "Managed team of 15 volunteers across 3 project streams",
      "Organized tech literacy workshops for 200+ underprivileged students",
      "Secured sponsorships worth IDR 50M for community programs",
    ],
    softSkills: ["Leadership", "Project Management", "Public Speaking", "Fundraising"],
  },
  {
    id: "5",
    type: "non-it",
    company: "Campus Debate Club",
    role: "Vice President",
    location: "Jakarta, Indonesia",
    startDate: "Aug 2022",
    endDate: "Jul 2023",
    description: "Organized debate tournaments and training sessions for club members.",
    achievements: [
      "Grew club membership by 60% through recruitment campaigns",
      "Coordinated national-level debate competition with 50+ teams",
      "Mentored junior debaters achieving top 8 in national championships",
    ],
    softSkills: ["Communication", "Team Building", "Event Management", "Mentorship"],
  },
]

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<"it" | "non-it">("it")
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const filteredExperience = experienceData.filter((exp) => exp.type === activeTab)

  return (
    <div className="space-y-8">
      {/* Tab Switcher */}
      <div className="flex justify-center">
        <div className="inline-flex rounded-lg border border-border bg-muted/50 p-1">
          <Button
            variant={activeTab === "it" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("it")}
            className="gap-2"
          >
            <Briefcase className="h-4 w-4" />
            IT Experience
          </Button>
          <Button
            variant={activeTab === "non-it" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("non-it")}
            className="gap-2"
          >
            <Users className="h-4 w-4" />
            Non-IT Experience
          </Button>
        </div>
      </div>

      {/* Experience Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          {filteredExperience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card
                className={cn(
                  "overflow-hidden border-border/50 transition-all",
                  expandedId === exp.id ? "border-primary/50 shadow-lg" : "hover:border-primary/30",
                )}
              >
                <CardHeader
                  className="cursor-pointer"
                  onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        {exp.type === "it" ? (
                          <Briefcase className="h-6 w-6 text-primary" />
                        ) : (
                          <Users className="h-6 w-6 text-primary" />
                        )}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{exp.role}</CardTitle>
                        <p className="font-medium text-primary">{exp.company}</p>
                        <div className="mt-2 flex flex-wrap gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {exp.startDate} - {exp.endDate}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-muted-foreground transition-transform",
                        expandedId === exp.id && "rotate-180",
                      )}
                    />
                  </div>
                </CardHeader>

                <AnimatePresence>
                  {expandedId === exp.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardContent className="border-t border-border pt-4">
                        <p className="text-muted-foreground">{exp.description}</p>

                        <div className="mt-4">
                          <h4 className="text-sm font-semibold">Key Achievements</h4>
                          <ul className="mt-2 space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {exp.technologies && (
                          <div className="mt-4">
                            <h4 className="text-sm font-semibold">Technologies Used</h4>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {exp.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {exp.softSkills && (
                          <div className="mt-4">
                            <h4 className="text-sm font-semibold">Skills Developed</h4>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {exp.softSkills.map((skill) => (
                                <Badge key={skill} variant="outline">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
