export default {
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {
      name: 'institution',
      title: 'Institution',
      type: 'string',
    },
    {
      name: 'degree',
      title: 'Degree',
      type: 'string',
    },
    {
      name: 'field',
      title: 'Field of Study',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'startDate',
      title: 'Start Date (Year)',
      type: 'string',
    },
    {
      name: 'endDate',
      title: 'End Date (Year)',
      type: 'string',
    },
    {
      name: 'coursework',
      title: 'Relevant Coursework',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'achievements',
      title: 'Achievements',
      type: 'array',
      of: [{ type: 'string' }],
    }
  ],
}
