import groq from "groq";

export const allProjectsData = groq`*[_type == "project"]{
  "id": _id,
    ...
} | order(priority asc)`