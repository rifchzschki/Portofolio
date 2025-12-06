import { motion } from "motion/react"
import { Code, Coffee, Lightbulb, Trophy } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { Card, CardContent } from "@/components/ui/card"

const quickFacts = [
  {
    icon: Code,
    label: "Years Coding",
    value: "4+",
    description: "Continuous learning",
  },
  {
    icon: Trophy,
    label: "Projects Completed",
    value: "15+",
    description: "Personal & Academic",
  },
  {
    icon: Lightbulb,
    label: "Technologies",
    value: "20+",
    description: "Languages & Frameworks",
  },
  {
    icon: Coffee,
    label: "Coffee Consumed",
    value: "∞",
    description: "And counting...",
  },
]

export function AboutSection() {
  return (
    <SectionWrapper id="about" className="bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">About Me</h2>
            <h3 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl text-balance">
              Building the future, one line of code at a time
            </h3>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {
                  "I'm a soon-to-graduate Computer Science student with a deep passion for software engineering. My journey started with curiosity about how things work on the web, and it evolved into a comprehensive understanding of full-stack development."
                }
              </p>
              <p>
                {
                  "My primary focus areas include web development with modern frameworks, backend architecture design, and application security. I believe in writing clean, maintainable code that not only works but is a pleasure to work with."
                }
              </p>
              <p>
                {
                  "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or diving deep into cybersecurity research."
                }
              </p>
            </div>
          </motion.div>

          {/* Quick Facts Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {quickFacts.map((fact, index) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm transition-colors hover:border-primary/50">
                  <CardContent className="p-6">
                    <fact.icon className="h-8 w-8 text-primary" />
                    <p className="mt-4 text-3xl font-bold">{fact.value}</p>
                    <p className="text-sm font-medium">{fact.label}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{fact.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
