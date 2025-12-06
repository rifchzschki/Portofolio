import { motion } from "motion/react"
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AUTHOR_NAME, GMAIL_URL, LOCATION, SOCIAL_LINKS } from "@/var"

const iconMap: Record<string, any> = {
  Email: Mail,
  LinkedIn: Linkedin,
  Github: Github,
};

export const socialLinks = SOCIAL_LINKS.map((link) => ({
  label: link.name,
  href: link.href,
  icon: iconMap[link.name] ?? Mail,
}));

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{"Let's Work Together"}</h2>
            <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
              {
                "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."
              }
            </p>
            <Button asChild className="mt-6 group" size="lg">
              <a href={GMAIL_URL}>
                Get in Touch
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Connect</h3>
              <div className="mt-4 flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-muted hover:border-primary"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 space-y-1 text-sm text-muted-foreground">
              <p>{AUTHOR_NAME   }</p>
              <p>{LOCATION}</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <p>&copy; {new Date().getFullYear()} {AUTHOR_NAME}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/blog" className="hover:text-foreground transition-colors">
              Blog
            </a>
            <a href="/projects" className="hover:text-foreground transition-colors">
              Projects
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
