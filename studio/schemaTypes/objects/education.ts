export default {
  name: 'education',
  title: 'Education',
  type: 'object',
  fields: [
    { name: 'schoolName', title: 'School Name', type: 'string' },
    { name: 'major', title: 'Major', type: 'string' },
    { name: 'yearFrom', title: 'Year From', type: 'date' },
    { name: 'yearTo', title: 'Year To', type: 'date' },
    { name: 'gpa', title: 'GPA', type: 'string' },
    { name: 'desc', title: 'Description', type: 'text' }
  ]
}
