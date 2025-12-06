import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { allEduData } from "@/lib/sanity/queries/education";
import { client } from "@/lib/sanity/sanity";
import type { Education } from "@/types/education";
import { BookOpen, Calendar, GraduationCap, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function EducationTimeline() {
  const [educationData, setEducationData] = useState<Education[] | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: Education[] = await client.fetch(allEduData);
        setEducationData(data);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [setEducationData]);

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 hidden h-full w-px bg-border md:left-1/2 md:block md:-translate-x-1/2" />

      <div className="space-y-8">
        {educationData && educationData.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative md:w-1/2 ${
              index % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
            }`}
          >
            {/* Timeline Dot */}
            <div
              className={`absolute top-8 hidden h-4 w-4 rounded-full border-4 border-background bg-primary md:block ${
                index % 2 === 0
                  ? "right-0 translate-x-1/2 md:-right-2"
                  : "left-0 -translate-x-1/2 md:-left-2"
              }`}
            />

            <Card className="border-border/50 bg-card transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">
                        {edu.institution}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {edu.degree} in {edu.field}
                      </p>
                    </div>
                  </div>
                  {edu.gpa && (
                    <Badge variant="secondary" className="shrink-0">
                      GPA: {edu.gpa}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {edu.startDate} - {edu.endDate}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {edu.location}
                  </span>
                </div>

                {edu.thesis && (
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-semibold">
                      <BookOpen className="h-4 w-4 text-primary" />
                      Thesis
                    </h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {edu.thesis}
                    </p>
                  </div>
                )}

                <div>
                  <h4 className="text-sm font-semibold">Key Coursework</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <Badge key={course} variant="outline" className="text-xs">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>

                {edu.achievements && edu.achievements.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold">Achievements</h4>
                    <ul className="mt-2 space-y-1">
                      {edu.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
