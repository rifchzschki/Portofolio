import { motion } from "motion/react"
import { SectionWrapper } from "@/components/section-wrapper"

type SkillCategory = {
  title: string
  skills: { name: string; icon: string }[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "TypeScript", icon: "TS" },
      { name: "JavaScript", icon: "JS" },
      { name: "Python", icon: "PY" },
      { name: "Go", icon: "GO" },
      { name: "Java", icon: "JV" },
      { name: "SQL", icon: "SQL" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: "⚛" },
      { name: "Next.js", icon: "N" },
      { name: "Node.js", icon: "◆" },
      { name: "Express", icon: "Ex" },
      { name: "Tailwind CSS", icon: "TW" },
      { name: "Django", icon: "Dj" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: "PG" },
      { name: "MySQL", icon: "My" },
      { name: "MongoDB", icon: "MG" },
      { name: "Redis", icon: "RD" },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", icon: "⎇" },
      { name: "Docker", icon: "🐳" },
      { name: "Linux", icon: "🐧" },
      { name: "CI/CD", icon: "⟲" },
      { name: "Vercel", icon: "▲" },
    ],
  },
]

export function SkillsSection() {
  return (
    <SectionWrapper id="skills">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Skills & Technologies</h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">My Technical Toolkit</h3>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * categoryIndex }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h4 className="text-lg font-semibold">{category.title}</h4>
              <div className="mt-4 flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.05 * skillIndex }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium transition-colors hover:border-primary/50 hover:bg-primary/5"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded bg-muted text-xs font-bold">
                      {skill.icon}
                    </span>
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
