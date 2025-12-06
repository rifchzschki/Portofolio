import groq from "groq";
export const allEduData = groq`*[_type == "education"]{
  "id": _id,
    ...
} | order(endDate desc)` 