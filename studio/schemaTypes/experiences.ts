import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'type',
      title: 'Experience Type',
      type: 'string',
      options: {
        list: [
          { title: 'IT', value: 'it' },
          { title: 'Non IT', value: 'non-it' }
        ],
        layout: 'radio'
      }
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string'
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date (MM YYYY)',
      type: 'string'
    }),
    defineField({
      name: 'endDate',
      title: 'End Date (MM YYYY)',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    }),
    defineField({
      name: 'achievements',
      title: 'Achievements',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'technologies',
      title: 'Technology Stack',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'softSkills',
      title: 'Soft Skills',
      type: 'array',
      of: [{ type: 'string' }],
    })
  ],
  preview: {
    select: {
      title: 'role',
      subtitle: 'company'
    }
  }
});
