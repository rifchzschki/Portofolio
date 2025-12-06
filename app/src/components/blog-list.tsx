import { useState } from "react"
import { motion } from "motion/react"
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type BlogPost = {
  slug: string
  title: string
  excerpt: string
  publishedAt: string
  readTime: string
  tags: string[]
  featured: boolean
}

const blogPosts: BlogPost[] = [
  {
    slug: "building-secure-authentication-systems",
    title: "Building Secure Authentication Systems in 2024",
    excerpt:
      "A deep dive into modern authentication patterns including JWT, OAuth 2.0, and zero-knowledge proofs. Learn how to protect your users effectively.",
    publishedAt: "2024-10-15",
    readTime: "8 min read",
    tags: ["Security", "Authentication", "Backend"],
    featured: true,
  },
  {
    slug: "react-server-components-explained",
    title: "React Server Components Explained Simply",
    excerpt:
      "Understanding the new React paradigm that's changing how we build web applications. Practical examples and use cases included.",
    publishedAt: "2024-09-28",
    readTime: "6 min read",
    tags: ["React", "Next.js", "Frontend"],
    featured: true,
  },
  {
    slug: "my-internship-journey",
    title: "What I Learned During My Software Engineering Internship",
    excerpt:
      "Reflecting on three months of intense learning, code reviews, and real-world problem solving at a tech company.",
    publishedAt: "2024-09-10",
    readTime: "5 min read",
    tags: ["Career", "Personal", "Learning"],
    featured: false,
  },
  {
    slug: "optimizing-database-queries",
    title: "Optimizing PostgreSQL Queries for Better Performance",
    excerpt:
      "Practical techniques to speed up your database queries including indexing strategies, query analysis, and common pitfalls to avoid.",
    publishedAt: "2024-08-20",
    readTime: "10 min read",
    tags: ["Database", "PostgreSQL", "Performance"],
    featured: false,
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices for Clean Code",
    excerpt:
      "Tips and patterns for writing maintainable TypeScript code. From proper typing to advanced patterns that make your code more robust.",
    publishedAt: "2024-07-15",
    readTime: "7 min read",
    tags: ["TypeScript", "Best Practices", "Clean Code"],
    featured: false,
  },
  {
    slug: "introduction-to-docker",
    title: "Docker for Beginners: A Practical Guide",
    excerpt:
      "Getting started with containerization. Learn how Docker can improve your development workflow and make deployments easier.",
    publishedAt: "2024-06-01",
    readTime: "9 min read",
    tags: ["Docker", "DevOps", "Tutorial"],
    featured: false,
  },
]

const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)))

export function BlogList() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const filteredPosts = selectedTag ? blogPosts.filter((post) => post.tags.includes(selectedTag)) : blogPosts

  return (
    <div className="space-y-8">
      {/* Tag Filter */}
      <div className="flex flex-wrap items-center gap-2">
        <Tag className="h-4 w-4 text-muted-foreground" />
        <Button
          variant={selectedTag === null ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedTag(null)}
          className={selectedTag === null ? "" : "bg-transparent"}
        >
          All
        </Button>
        {allTags.map((tag) => (
          <Button
            key={tag}
            variant={selectedTag === tag ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedTag(tag)}
            className={selectedTag === tag ? "" : "bg-transparent"}
          >
            {tag}
          </Button>
        ))}
      </div>

      {/* Featured Posts */}
      {!selectedTag && (
        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts
            .filter((post) => post.featured)
            .map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <a href={`/blog/${post.slug}`}>
                  <Card className="group h-full overflow-hidden border-border/50 transition-all hover:border-primary/50 hover:shadow-lg">
                    <div className="relative aspect-video overflow-hidden bg-linear-to-br from-primary/20 to-secondary/20">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl font-bold text-primary/20">{post.title[0]}</span>
                      </div>
                      <Badge className="absolute right-3 top-3 bg-accent text-accent-foreground">Featured</Badge>
                    </div>
                    <CardHeader>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <CardTitle className="mt-2 text-xl transition-colors group-hover:text-primary">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
                      <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {new Date(post.publishedAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
        </div>
      )}

      {/* All Posts List */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">{selectedTag ? `Posts tagged "${selectedTag}"` : "All Posts"}</h3>
        <div className="space-y-3">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <a href={`/blog/${post.slug}`}>
                <Card className="group border-border/50 transition-all hover:border-primary/50 hover:bg-muted/50">
                  <CardContent className="flex items-center justify-between gap-4 p-4">
                    <div className="min-w-0 flex-1">
                      <h4 className="font-medium transition-colors group-hover:text-primary line-clamp-1">
                        {post.title}
                      </h4>
                      <p className="mt-1 text-sm text-muted-foreground line-clamp-1">{post.excerpt}</p>
                      <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.publishedAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                        <div className="hidden gap-1.5 sm:flex">
                          {post.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
