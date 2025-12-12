import groq from "groq";

export const allExperienceData = groq`*[_type == "experience"]{
  "id": _id,
    ...
} | order(_createdAt asc)`