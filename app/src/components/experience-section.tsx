import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Briefcase, Users, Calendar, MapPin, ChevronDown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { client } from "@/lib/sanity/sanity"
import { allExperienceData } from "@/lib/sanity/queries/experience"

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

const experienceData: Experience[] = await client.fetch(allExperienceData);

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
