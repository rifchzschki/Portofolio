import { motion } from "motion/react"
import { ArrowRight, Download, Code2, Terminal, Shield, Server } from "lucide-react"
import { Button } from "@/components/ui/button"

const floatingIcons = [
  { icon: Code2, delay: 0 },
  { icon: Terminal, delay: 0.2 },
  { icon: Shield, delay: 0.4 },
  { icon: Server, delay: 0.6 },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/10 opacity-30 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 py-20 md:px-6 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-4"
            >
              <span className="inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-sm font-medium text-muted-foreground">
                <span className="mr-2 h-2 w-2 rounded-full bg-secondary animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-balance"
            >
              Hi, I&apos;m{" "}
              <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">Rifki Virzya</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-2 text-xl font-medium text-muted-foreground md:text-2xl"
            >
              Software Engineer / Final Year Student
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 max-w-lg text-muted-foreground leading-relaxed"
            >
              Passionate about building scalable web applications, robust backend systems, and exploring cybersecurity.
              I craft clean code that solves real problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="group">
                <a href="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="group bg-transparent">
                <a href="/cv.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:flex lg:items-center lg:justify-center"
          >
            {/* Avatar/Profile Image */}
            <div className="relative">
              <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-border bg-linear-to-br from-primary/20 to-secondary/20">
                <img
                  src="/professional-headshot-software-engineer-male.jpg"
                  alt="Rifki Virzya - Software Engineer"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Floating Icons */}
              {floatingIcons.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + item.delay, type: "spring" }}
                  className="absolute"
                  style={{
                    top: `${20 + index * 20}%`,
                    left: index % 2 === 0 ? "-10%" : "auto",
                    right: index % 2 === 1 ? "-10%" : "auto",
                  }}
                >
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: item.delay,
                    }}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card shadow-lg"
                  >
                    <item.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
