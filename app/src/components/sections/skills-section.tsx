import { SectionWrapper } from "@/components/section-wrapper";
import { motion } from "motion/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type Skill = {
  name: string
  icon?: React.ReactNode | string
  description?: string
  primary?: boolean
}

type SkillCategory = {
  title: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "TypeScript", icon: "TS" },
      { name: "JavaScript", icon: "JS" },
      { name: "Go", icon: "GO" },
      { name: "Java", icon: "JV" },
      { name: "Python", icon: "PY" },
      { name: "C / C++", icon: "C++" },
      { name: "Solidity", icon: "SOL" },
    ],
  },
  {
    title: "Frontend Engineering",
    skills: [
      { name: "React", icon: "⚛" },
      { name: "Next.js", icon: "NX" },
      { name: "Vue", icon: "VU" },
      { name: "Tailwind CSS", icon: "TW" },
      { name: "shadcn/ui", icon: "UI" },
      { name: "MUI", icon: "MU" },
      { name: "React Router", icon: "RR" },
      { name: "Zustand", icon: "ZU" },
    ],
  },
  {
    title: "Backend Engineering",
    skills: [
      { name: "Node.js", icon: "ND" },
      { name: "NestJS", icon: "NJ" },
      { name: "Express", icon: "EX" },
      { name: "Fastify", icon: "FT" },
      { name: "Hono", icon: "HO" },
      { name: "Spring Boot", icon: "SB" },
      { name: "Gin (Go)", icon: "GN" },
      { name: "Laravel", icon: "LV" },
      { name: "FastAPI", icon: "FA" },
    ],
  },
  {
    title: "Distributed Systems & APIs",
    skills: [
      { name: "RESTful API Design", icon: "API" },
      { name: "API Gateway", icon: "GW" },
      { name: "Kafka", icon: "KF" },
      { name: "JWT & OAuth", icon: "AUTH" },
      { name: "Swagger / OpenAPI", icon: "DOC" },
      { name: "Consul", icon: "CS" },
    ],
  },
  {
    title: "Databases & Storage",
    skills: [
      { name: "PostgreSQL", icon: "PG" },
      { name: "MySQL", icon: "MY" },
      { name: "MariaDB", icon: "MDB" },
      { name: "SQLite", icon: "SQL" },
      { name: "Prisma ORM", icon: "PR" },
      { name: "Supabase", icon: "SB" },
      { name: "Cloudinary", icon: "CLD" },
      { name: "IPFS", icon: "IPFS" },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "Docker", icon: "🐳" },
      { name: "Podman", icon: "PD" },
      { name: "GitLab CI/CD", icon: "CI" },
      { name: "Kubernetes", icon: "K8S" },
      { name: "Minikube", icon: "MK" },
      { name: "Azure", icon: "AZ" },
      { name: "Vercel", icon: "▲" },
      { name: "Railway", icon: "RW" },
    ],
  },
  {
    title: "Blockchain & Web3",
    skills: [
      { name: "Ethereum", icon: "ETH" },
      { name: "Solidity", icon: "SOL" },
      { name: "Hardhat", icon: "HH" },
      { name: "ethers.js", icon: "ET" },
      { name: "MetaMask", icon: "MM" },
      { name: "Alchemy", icon: "AL" },
    ],
  },
  {
    title: "Machine Learning & Computer Vision",
    skills: [
      { name: "OpenCV", icon: "CV" },
      { name: "YOLOv8", icon: "YOLO" },
      { name: "PaddleOCR", icon: "OCR" },
      { name: "scikit-learn", icon: "SK" },
    ],
  },
  {
    title: "Testing & Performance",
    skills: [
      { name: "JUnit", icon: "JT" },
      { name: "Postman", icon: "PM" },
      { name: "JMeter", icon: "JM" },
    ],
  },
];

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
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
            Skills & Technologies
          </h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            My Technical Toolkit
          </h3>
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
  );
}
